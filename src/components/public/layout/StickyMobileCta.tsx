"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { PhoneLink } from "./PhoneLink";
import { useMobileMenu } from "./MobileMenuContext";
import { BUSINESS_PHONE } from "@/lib/constants/business";

export function StickyMobileCta() {
  const { isOpen } = useMobileMenu();

  if (isOpen) return null;

  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-primary/15 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-center gap-1.5 py-1 bg-primary-light">
        <span className="relative flex h-1.5 w-1.5" aria-hidden>
          <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cta" />
        </span>
        <span className="text-[11px] font-bold text-primary-dark uppercase tracking-wide">Fast Response · Free Quote</span>
      </div>
      <div className="flex">
        <PhoneLink
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold text-text-primary border-r border-stone-100"
          aria-label={`Call Organic Mattress Cleaning now at ${BUSINESS_PHONE}`}
        >
          <Phone className="w-4 h-4" aria-hidden />
          Call Now
        </PhoneLink>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-cta"
        >
          Get Quote
          <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
