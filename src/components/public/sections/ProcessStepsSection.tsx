import { SectionHeading } from "@/components/public/sections/SectionHeading";

interface ProcessStep {
  n: string;
  t: string;
  d: string;
}

interface ProcessStepsSectionProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  steps: ProcessStep[];
}

export function ProcessStepsSection({ eyebrow = "Our Process", heading, description, steps }: ProcessStepsSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="process-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeading id="process-heading" subheading={eyebrow} heading={heading} description={description} className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, idx) => (
            <div key={step.n} className="relative">
              <div className="relative p-6 pt-7 rounded-2xl border border-primary/12 bg-surface hover:border-cta/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 h-full">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold text-white mb-4"
                  style={{ background: "linear-gradient(135deg, var(--color-leaf-green), var(--color-cta-green))" }}
                >
                  {step.n}
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">{step.t}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.d}</p>
              </div>
              {idx < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden lg:block absolute top-1/2 -right-3 w-5 h-px bg-primary/20"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
