import { Phone } from "lucide-react";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { BUSINESS_PHONE } from "@/lib/constants/business";

interface CallNowCtaProps {
  heading?: string;
  body?: string;
  variant?: "light" | "dark";
}

/** Standalone phone-call CTA strip — drop between content sections to surface the phone number without a form. */
export function CallNowCta({
  heading = `Need Mattress Cleaning Today? Call ${BUSINESS_PHONE}`,
  body = "Speak directly with Organic Mattress Cleaning — open 24/7 across Los Angeles.",
  variant = "light",
}: CallNowCtaProps) {
  const dark = variant === "dark";

  return (
    <div className={dark ? "py-10 sm:py-12 bg-navy" : "py-10 sm:py-12 bg-surface border-t border-primary/10"}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div
          className={
            dark
              ? "rounded-2xl bg-white/5 border border-white/10 px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
              : "rounded-2xl bg-white border border-primary/15 px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          }
        >
          <div className="flex items-start gap-3.5">
            <div className={dark ? "w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0" : "w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0"}>
              <Phone className={dark ? "w-4.5 h-4.5 text-leaf" : "w-4.5 h-4.5 text-cta"} aria-hidden />
            </div>
            <div>
              <h3 className={dark ? "text-base sm:text-lg font-bold text-white leading-snug" : "text-base sm:text-lg font-bold text-text-primary leading-snug"}>
                {heading}
              </h3>
              {body && (
                <p className={dark ? "text-sm text-white/65 mt-1 leading-relaxed" : "text-sm text-text-secondary mt-1 leading-relaxed"}>
                  {body}
                </p>
              )}
            </div>
          </div>
          <PhoneLink
            className="btn btn-primary shrink-0 w-full sm:w-auto justify-center"
            aria-label="Call Organic Mattress Cleaning now"
          >
            <Phone className="w-4 h-4" aria-hidden />
            Call Now
          </PhoneLink>
        </div>
      </div>
    </div>
  );
}
