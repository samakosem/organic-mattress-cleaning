import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { FaqItem } from "@/types/content";
import { SectionHeading } from "@/components/public/sections/SectionHeading";

interface FaqSectionProps {
  items: FaqItem[];
  eyebrow?: string;
  heading: string;
  subheading?: string;
  contactPrompt?: string | null;
  variant?: "surface" | "white";
  relatedLinks?: { label: string; href: string }[];
}

export function FaqSection({
  items,
  eyebrow = "Common Questions",
  heading,
  subheading,
  contactPrompt = "Still have questions about the process?",
  variant = "surface",
  relatedLinks,
}: FaqSectionProps) {
  const bg = variant === "white" ? "bg-white" : "bg-surface";

  return (
    <section className={`py-16 sm:py-24 ${bg}`} aria-labelledby="faq-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeading subheading={eyebrow} heading={heading} description={subheading} id="faq-heading" className="mb-12" />

        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((faq) => (
            <details key={faq.q} className="group bg-white border border-primary/12 hover:border-primary/20 rounded-2xl overflow-hidden transition-colors">
              <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none font-semibold text-text-primary hover:bg-primary-light/40 transition-colors select-none">
                <span className="text-sm leading-snug pr-4">{faq.q}</span>
                <ChevronDown className="w-4 h-4 text-cta shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-6 pt-1 text-text-secondary text-sm leading-relaxed border-t border-primary/10">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {relatedLinks && relatedLinks.length > 0 && (
          <div className="max-w-3xl mx-auto mt-8 flex flex-wrap gap-3 justify-center">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary-light text-primary-dark text-xs font-semibold hover:bg-cta/10 hover:text-cta transition-colors"
              >
                {link.label} <ArrowRight className="w-3 h-3" aria-hidden />
              </Link>
            ))}
          </div>
        )}

        {contactPrompt && (
          <div className="max-w-3xl mx-auto mt-10 text-center">
            <p className="text-text-secondary text-sm mb-4">{contactPrompt}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary/25 hover:border-cta text-text-primary hover:text-cta font-semibold text-sm transition-colors"
            >
              Talk to our team
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
