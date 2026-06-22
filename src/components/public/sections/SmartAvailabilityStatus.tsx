"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { PhoneLink } from "@/components/public/layout/PhoneLink";

interface StatusCopy {
  label: string;
  body: string;
}

function getStatusCopy(date: Date): StatusCopy {
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = date.getHours();
  const isWeekend = day === 0 || day === 6;
  const isNight = hour >= 21 || hour < 7;

  if (isNight) {
    return {
      label: "Overnight Dispatch Open",
      body: "Call now to check the earliest available appointment.",
    };
  }
  if (isWeekend) {
    return {
      label: "Weekend Requests Available",
      body: "Call now for current scheduling options.",
    };
  }
  return {
    label: "High Same-Day Request Window",
    body: "Call now to check fast appointment availability.",
  };
}

/**
 * Time-based availability guidance — not live GPS or technician tracking.
 * Copy reflects typical demand windows, not a real-time dispatch feed.
 */
export function SmartAvailabilityStatus() {
  const [copy] = useState<StatusCopy>(() => getStatusCopy(new Date()));

  return (
    <div className="rounded-2xl bg-white border border-primary/15 shadow-sm p-5 flex items-center gap-4">
      <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden>
        <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cta" />
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-text-primary leading-snug">{copy.label}</p>
        <p className="text-xs text-text-secondary leading-relaxed">{copy.body}</p>
      </div>
      <PhoneLink
        className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-primary-light text-cta text-xs font-bold hover:bg-cta/10 transition-colors"
        aria-label="Call Organic Mattress Cleaning now"
      >
        <Phone className="w-3.5 h-3.5" aria-hidden />
        Call Now
      </PhoneLink>
    </div>
  );
}
