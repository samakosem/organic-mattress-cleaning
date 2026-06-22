import Link from "next/link";
import { ClipboardList, Leaf, Droplet, Thermometer, Sparkles, ArrowRight } from "lucide-react";

interface CityHowItWorksProps {
  cityName: string;
  state?: string;
  localNotes?: string;
}

const STEPS = [
  {
    Icon: ClipboardList,
    title: "Inspection",
    body: "We review the mattress size, fabric, stain condition, odor level, and cleaning goal before recommending the right approach.",
  },
  {
    Icon: Leaf,
    title: "Organic Cleaning",
    body: "We use organic cleaning solutions and a non-toxic process designed for mattresses, upholstery, and indoor home environments.",
  },
  {
    Icon: Droplet,
    title: "Stain & Odor Treatment",
    body: "When needed, we target spots, sweat buildup, urine odor, pet-related concerns, and everyday mattress odors with fabric-aware treatment options.",
  },
  {
    Icon: Thermometer,
    title: "Moisture Control",
    body: "Mattresses need careful moisture control. We choose the cleaning method based on mattress type, thickness, and drying needs.",
  },
  {
    Icon: Sparkles,
    title: "Fresh Mattress Guidance",
    body: "After cleaning, we explain drying, ventilation, sheet replacement timing, and simple ways to keep the mattress fresher longer.",
  },
];

export function CityHowItWorks({ cityName, state = "CA", localNotes }: CityHowItWorksProps) {
  return (
    <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
          Our Process
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-3">
          How Mattress Cleaning Works in {cityName}, {state}
        </h2>
        <p className="text-text-secondary text-base leading-relaxed mb-2 max-w-2xl">
          A simple, careful process for organic mattress cleaning, stain concerns, odor treatment, and indoor
          fabric care.
        </p>
        {localNotes && <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-2xl">{localNotes}</p>}

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 ${localNotes ? "" : "mt-8"}`}>
          {STEPS.map((step, i) => (
            <div key={step.title} className="bg-white rounded-2xl p-5 border border-primary/12">
              <span className="text-xs font-bold text-cta/60 tracking-widest">{String(i + 1).padStart(2, "0")}</span>
              <div className="w-9 h-9 rounded-xl bg-primary-light ring-1 ring-primary/15 flex items-center justify-center my-3">
                <step.Icon className="w-4.5 h-4.5 text-cta" aria-hidden />
              </div>
              <h3 className="text-sm font-bold text-text-primary mb-2">{step.title}</h3>
              <p className="text-xs text-text-secondary leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
          <Link href="/organic-cleaning-products" className="text-cta hover:text-primary-dark font-semibold transition-colors">
            Organic cleaning solutions
          </Link>
          <Link href="/pricing" className="text-cta hover:text-primary-dark font-semibold transition-colors">
            Pricing
          </Link>
          <Link href="/mattress-stain-removal" className="text-cta hover:text-primary-dark font-semibold transition-colors">
            Stain removal
          </Link>
          <Link href="/urine-odor-removal" className="text-cta hover:text-primary-dark font-semibold transition-colors">
            Urine odor removal
          </Link>
        </div>

        <div className="mt-8">
          <Link href="/contact" className="btn btn-primary">
            Get a Free Mattress Cleaning Quote in {cityName}
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
