import { Star } from "lucide-react";
import { LeadForm } from "@/components/public/forms/LeadForm";
import { SectionHeading } from "@/components/public/sections/SectionHeading";

interface LeadFormSectionProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  serviceInterest?: string;
  trustLine?: string;
  bg?: "white" | "surface";
}

/** Standalone mid-page lead form section — copy on the left, compact form card on the right. */
export function LeadFormSection({
  eyebrow = "Free Quote",
  heading,
  description = "Tell us about your mattress and we'll provide a clear price with no hidden fees.",
  serviceInterest,
  trustLine,
  bg = "white",
}: LeadFormSectionProps) {
  return (
    <section className={bg === "surface" ? "py-16 sm:py-24 bg-surface border-t border-primary/10" : "py-16 sm:py-24 bg-white"}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading subheading={eyebrow} heading={heading} description={description} layout="stacked" className="mb-6" />
            {trustLine && (
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Star className="w-4 h-4 text-leaf shrink-0" aria-hidden />
                {trustLine}
              </div>
            )}
          </div>
          <div className={bg === "surface" ? "bg-white rounded-3xl p-8 border border-primary/15 shadow-sm" : "bg-surface rounded-3xl p-8 border border-primary/15 shadow-sm"}>
            <h3 className="text-lg font-bold text-text-primary mb-1.5">Request Your Free Quote</h3>
            <p className="text-text-secondary text-sm mb-6">We&apos;ll follow up shortly to confirm details.</p>
            <LeadForm serviceInterest={serviceInterest} />
          </div>
        </div>
      </div>
    </section>
  );
}
