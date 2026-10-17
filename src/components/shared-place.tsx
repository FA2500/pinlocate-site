"use client";

import { useSyncExternalStore } from "react";
import { MapPin, Navigation } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { formatCoord, navigationLinks, parsePlaceHash } from "@/lib/pinlocate-link";

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

type Text = { eyebrow: string; fallback: string; waze: string; maps: string; error: string };

/**
 * The place from the link's fragment, read in the browser only (the fragment never reaches the server).
 * React renders the name as text, never as HTML.
 */
export function SharedPlace({ text }: { text: Text }) {
  // null before hydration: neither the buttons nor the error show yet.
  const hash = useSyncExternalStore<string | null>(subscribe, () => window.location.hash, () => null);
  const place = hash === null ? undefined : parsePlaceHash(hash);
  const links = place ? navigationLinks(place) : null;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-bold tracking-wider text-brand uppercase">{text.eyebrow}</p>
        <h1 id="name" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {place?.name || text.fallback}
        </h1>
        <p id="coords" className="flex min-h-6 items-center gap-2 text-muted">
          {place && (
            <>
              <MapPin aria-hidden="true" className="size-4" />
              {formatCoord(place.lat)}, {formatCoord(place.lng)}
            </>
          )}
        </p>
      </div>
      <div id="actions" className="flex flex-wrap gap-3" hidden={!links}>
        {links && (
          <>
            <a id="waze" href={links.waze} className={buttonVariants({ size: "lg" })}>
              <Navigation aria-hidden="true" />
              {text.waze}
            </a>
            <a id="maps" href={links.maps} className={buttonVariants({ size: "lg" })}>
              <MapPin aria-hidden="true" />
              {text.maps}
            </a>
          </>
        )}
      </div>
      <p
        id="error"
        role="alert"
        hidden={place !== null}
        className="rounded-2xl border border-border bg-surface-2 p-4 text-foreground"
      >
        {text.error}
      </p>
    </div>
  );
}
