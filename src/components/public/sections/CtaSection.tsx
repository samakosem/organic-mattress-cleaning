import Link from "next/link";
import { ArrowRight, Phone, Leaf } from "lucide-react";
import { PhoneLink } from "@/components/public/layout/PhoneLink";

interface CtaSectionProps {
  heading: string;
  body?: string;
}

export function CtaSection({ heading, body }: CtaSectionProps) {
  return (
    <section
      className="relative py-16 sm:py-24 text-white overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1f7a3f 0%, #14532d 100%)" }}
      aria-labelledby="cta-heading"
    >
      {/* Decorative leaf accent shapes */}
      <div aria-hidden className="absolute -top-10 -right-10 w-56 h-56 rounded-full opacity-[0.12] bg-leaf blur-2xl pointer-events-none" />
      <div aria-hidden className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-[0.10] bg-water blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 mb-6">
          <Leaf className="w-6 h-6 text-leaf" aria-hidden />
        </div>
        <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
          {heading}
        </h2>
        {body && <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">{body}</p>}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-mint text-cta font-bold text-sm transition-colors min-h-[52px] shadow-lg shadow-black/10"
          >
            Get a Free Quote
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
          <PhoneLink
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 hover:border-white/50 text-white/90 hover:text-white font-semibold text-sm transition-colors min-h-[52px]"
            aria-label="Call Organic Mattress Cleaning now"
          >
            <Phone className="w-4 h-4" aria-hidden />
            Call Now
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
