import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface InlineQuoteCtaProps {
  heading: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/** Compact inline CTA strip — for use between content sections without a full CtaSection block. */
export function InlineQuoteCta({
  heading,
  body,
  ctaLabel = "Get a Free Quote",
  ctaHref = "/contact",
}: InlineQuoteCtaProps) {
  return (
    <div className="py-10 sm:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="rounded-2xl bg-primary-light border border-primary/15 px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-text-primary leading-snug">{heading}</h3>
            {body && <p className="text-sm text-text-secondary mt-1 leading-relaxed">{body}</p>}
          </div>
          <Link
            href={ctaHref}
            className="btn btn-primary shrink-0 w-full sm:w-auto justify-center"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
