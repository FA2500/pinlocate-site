import { describe, expect, it } from "vitest";
import { formatCoord, navigationLinks, parsePlaceHash } from "./pinlocate-link";

describe("parsePlaceHash", () => {
  it("reads a valid link", () => {
    expect(parsePlaceHash("#v=1&lat=3.14380&lng=101.68482&n=Rumah%20Tok%20Wan")).toEqual({
      lat: 3.14380,
      lng: 101.68482,
      name: "Rumah Tok Wan",
    });
  });

  it("reads a link without a name, and without the #", () => {
    expect(parsePlaceHash("v=1&lat=-6.2&lng=106.8")).toEqual({ lat: -6.2, lng: 106.8, name: "" });
  });

  it("reads Malay names", () => {
    const n = encodeURIComponent("Kedai runcit Mak Jah, sebelah surau");
    expect(parsePlaceHash(`#v=1&lat=3.1&lng=101.6&n=${n}`)?.name).toBe("Kedai runcit Mak Jah, sebelah surau");
  });

  it("reads emoji and counts them as one character each", () => {
    const name = "🏠".repeat(80);
    expect(parsePlaceHash(`#v=1&lat=3.1&lng=101.6&n=${encodeURIComponent(name)}`)?.name).toBe(name);
    expect(parsePlaceHash(`#v=1&lat=3.1&lng=101.6&n=${encodeURIComponent(name + "🏠")}`)).toBeNull();
  });

  it("rejects broken %-escapes", () => {
    expect(parsePlaceHash("#v=1&lat=3.1&lng=101.6&n=%E0%A4%A")).toBeNull();
    expect(parsePlaceHash("#v=1&lat=3.1&lng=101.6&n=100%")).toBeNull();
  });

  it("rejects coordinates out of range or badly written", () => {
    expect(parsePlaceHash("#v=1&lat=90.1&lng=101.6")).toBeNull();
    expect(parsePlaceHash("#v=1&lat=3.1&lng=-180.5")).toBeNull();
    expect(parsePlaceHash("#v=1&lat=1e2&lng=101.6")).toBeNull();
    expect(parsePlaceHash("#v=1&lat=3.12345678901&lng=101.6")).toBeNull();
    expect(parsePlaceHash("#v=1&lat=&lng=101.6")).toBeNull();
    expect(parsePlaceHash("#v=1&lng=101.6")).toBeNull();
    expect(parsePlaceHash("#v=1&lat=90&lng=-180")).toEqual({ lat: 90, lng: -180, name: "" });
  });

  it("rejects other versions", () => {
    expect(parsePlaceHash("#v=2&lat=3.1&lng=101.6")).toBeNull();
    expect(parsePlaceHash("#lat=3.1&lng=101.6")).toBeNull();
  });

  it("rejects names over 80 characters", () => {
    expect(parsePlaceHash(`#v=1&lat=3.1&lng=101.6&n=${"a".repeat(80)}`)?.name).toHaveLength(80);
    expect(parsePlaceHash(`#v=1&lat=3.1&lng=101.6&n=${"a".repeat(81)}`)).toBeNull();
  });

  it("strips control characters and trims, and keeps markup as plain text", () => {
    expect(parsePlaceHash("#v=1&lat=3.1&lng=101.6&n=%20A%0AB%07%C2%85%20")?.name).toBe("AB");
    const html = '<img src=x onerror="alert(1)">';
    expect(parsePlaceHash(`#v=1&lat=3.1&lng=101.6&n=${encodeURIComponent(html)}`)?.name).toBe(html);
  });
});

describe("formatCoord and navigationLinks", () => {
  it("trims trailing zeros", () => {
    expect(formatCoord(3.1)).toBe("3.1");
    expect(formatCoord(101.68482)).toBe("101.68482");
    expect(formatCoord(-6)).toBe("-6");
  });

  it("builds Waze and Google Maps links with 6 decimals", () => {
    expect(navigationLinks({ lat: 3.14380, lng: 101.68482, name: "" })).toEqual({
      waze: "https://waze.com/ul?ll=3.143800,101.684820&navigate=yes",
      maps: "https://www.google.com/maps/dir/?api=1&destination=3.143800,101.684820",
    });
  });
});
