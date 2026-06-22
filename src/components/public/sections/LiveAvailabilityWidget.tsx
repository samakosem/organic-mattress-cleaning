import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { BUSINESS_PHONE } from "@/lib/constants/business";

interface LiveAvailabilityWidgetProps {
  className?: string;
}

/**
 * Honest urgency widget — "open 24/7, call to check availability" framing.
 * No fake GPS, no fake technician counts, no fake scarcity countdowns.
 */
export function LiveAvailabilityWidget({ className }: LiveAvailabilityWidgetProps) {
  return (
    <div className={`rounded-3xl bg-surface border border-primary/15 shadow-sm p-6 sm:p-8 ${className ?? ""}`}>
      <div className="flex items-center gap-2.5 mb-4">
        <span className="relative flex h-2.5 w-2.5" aria-hidden>
          <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cta" />
        </span>
        <span className="text-xs font-bold text-cta uppercase tracking-widest">24/7 Dispatch Open Now</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-text-primary leading-tight mb-3">
        Urgent Mattress Accident?
      </h3>
      <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-6">
        Wine spill, urine odor, oil stain, sweat marks, or pet accident? Organic Mattress Cleaning is open 24/7.
        Call now to check the fastest available appointment.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <PhoneLink
          className="btn btn-primary flex-1 justify-center"
          aria-label={`Call Organic Mattress Cleaning now at ${BUSINESS_PHONE}`}
        >
          <Phone className="w-4 h-4" aria-hidden />
          Call Now
        </PhoneLink>
        <Link href="/contact" className="btn btn-outline flex-1 justify-center">
          Get a Free Quote
          <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
