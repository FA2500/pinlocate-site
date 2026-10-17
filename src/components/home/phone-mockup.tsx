/* eslint-disable @next/next/no-img-element */
import { ArrowLeft, BatteryFull, EllipsisVertical, MapPin, Map as MapIcon, Navigation, Share2, Signal, Wifi } from "lucide-react";
import { siteConfig } from "@/siteConfig";
import type { Content } from "@/content/types";
import { GateIllustration } from "./gate-illustration";

/**
 * The app's Place screen drawn in HTML and CSS, with the share card it sends floating beside it.
 * Set siteConfig.heroScreenshot to show a real screenshot in the frame instead.
 */
export function PhoneMockup({ c }: { c: Content["mockup"] }) {
  return (
    <figure className="relative mx-auto w-full max-w-[23rem] pb-32 lg:mr-0">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-6 top-10 bottom-10 -z-10 rounded-full bg-[var(--glow)] blur-3xl" />
      <figcaption className="sr-only">{c.label}</figcaption>
      <div
        aria-hidden="true"
        className="hero-float ml-auto w-[16.5rem] overflow-hidden rounded-[2.6rem] border-[9px] border-zinc-900 bg-background shadow-2xl ring-1 ring-black/5 sm:w-[17.5rem] dark:border-zinc-700"
      >
        {siteConfig.heroScreenshot ? (
          <img src={siteConfig.heroScreenshot} alt="" className="block w-full" />
        ) : (
          <div className="flex flex-col pb-5 text-foreground">
            <div className="flex items-center justify-between px-5 pt-2.5 pb-1 text-[0.6875rem] font-semibold">
              <span>{c.time}</span>
              <span className="flex items-center gap-1">
                <Signal className="size-3" />
                <Wifi className="size-3" />
                <BatteryFull className="size-3.5" />
              </span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2">
              <ArrowLeft className="size-5" />
              <span className="flex-1 truncate text-base font-semibold">{c.title}</span>
              <Share2 className="size-[1.1rem]" />
              <EllipsisVertical className="size-[1.1rem]" />
            </div>
            <div className="relative mx-3 overflow-hidden rounded-2xl">
              <GateIllustration className="block aspect-[4/3] w-full" />
              <span className="absolute right-2 bottom-2 rounded-full bg-black/65 px-2 py-0.5 text-[0.625rem] font-semibold text-white">
                {c.photoCount}
              </span>
            </div>
            <div className="mx-3 mt-3 flex flex-col gap-2 rounded-2xl bg-brand-soft p-3.5">
              <span className="text-[0.6875rem] font-semibold text-brand">{c.landmarkHeading}</span>
              <span className="text-sm font-medium">{c.landmark}</span>
              <div className="mt-1 grid grid-cols-2 gap-2">
                <span className="flex items-center justify-center gap-1 rounded-full bg-brand px-1 py-2 text-[0.6875rem] font-semibold whitespace-nowrap text-brand-foreground">
                  <Navigation className="size-3.5" />
                  {c.waze}
                </span>
                <span className="flex items-center justify-center gap-1 rounded-full bg-brand px-1 py-2 text-[0.6875rem] font-semibold whitespace-nowrap text-brand-foreground">
                  <MapIcon className="size-3.5" />
                  {c.maps}
                </span>
              </div>
            </div>
            <span className="mx-4 mt-3 text-[0.6875rem] font-semibold text-brand">{c.pinHeading}</span>
            <div className="mx-3 mt-1.5 flex items-center gap-2.5 rounded-2xl bg-surface-2 px-3 py-2.5 text-xs font-medium">
              <MapPin className="size-4 text-muted" />
              {c.coords}
            </div>
            <span className="mx-3 mt-3 flex items-center justify-center gap-1.5 rounded-full border border-border py-2 text-xs font-semibold">
              <Share2 className="size-3.5" />
              {c.share}
            </span>
          </div>
        )}
      </div>
      {/* The share card as it arrives in a chat. */}
      <div
        aria-hidden="true"
        className="hero-float-late absolute bottom-2 left-0 w-[13.25rem] rounded-2xl rounded-bl-md bg-[#dcf5d6] p-1.5 text-zinc-900 shadow-xl ring-1 ring-black/5 sm:w-[14.5rem] dark:bg-[#1d3a33] dark:text-zinc-50"
      >
        <GateIllustration className="block aspect-[2/1] w-full rounded-xl" />
        <div className="flex flex-col gap-0.5 px-2 pt-2 pb-1 text-[0.6875rem] leading-snug">
          <span className="font-semibold">{c.chat[0]}</span>
          <span>{c.chat[1]}</span>
          {c.chat.slice(2).map((line) => (
            <span key={line} className="truncate text-[#0b5cad] dark:text-[#8cc8ff]">
              {line}
            </span>
          ))}
        </div>
      </div>
    </figure>
  );
}
