// Reads a shared place from the link's fragment (#v=1&lat=…&lng=…&n=…),
// which browsers never send to the server. Same checks as the app
// (lib/features/pinning/pinlocate_link.dart). The name is shown as text only.

export type SharedPlace = { lat: number; lng: number; name: string };

const NUMBER = /^-?\d{1,3}(\.\d{1,10})?$/;
const CONTROL = /[\u0000-\u001F\u007F-\u009F]/g;

export function parsePlaceHash(hash: string): SharedPlace | null {
  const fields: Record<string, string> = {};
  const parts = hash.replace(/^#/, "").split("&");
  for (const part of parts) {
    const eq = part.indexOf("=");
    if (eq < 1) continue;
    const key = part.slice(0, eq);
    try {
      fields[key] = decodeURIComponent(part.slice(eq + 1));
    } catch {
      return null; // a broken %-escape
    }
  }
  if (fields.v !== "1" || !NUMBER.test(fields.lat || "") || !NUMBER.test(fields.lng || "")) return null;
  const lat = Number(fields.lat);
  const lng = Number(fields.lng);
  if (Math.abs(lat) > 90 || Math.abs(lng) > 180) return null;
  const name = (fields.n || "").replace(CONTROL, "").trim();
  if (Array.from(name).length > 80) return null;
  return { lat, lng, name };
}

/** 5 decimals, trailing zeros trimmed: 3.10000 → 3.1. */
export function formatCoord(v: number): string {
  return v.toFixed(5).replace(/0+$/, "").replace(/\.$/, "");
}

export function navigationLinks(place: SharedPlace) {
  const ll = `${place.lat.toFixed(6)},${place.lng.toFixed(6)}`;
  return {
    waze: `https://waze.com/ul?ll=${ll}&navigate=yes`,
    maps: `https://www.google.com/maps/dir/?api=1&destination=${ll}`,
  };
}
