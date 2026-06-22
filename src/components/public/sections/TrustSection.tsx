import { Leaf, ShieldCheck, Heart, Clock, MapPin } from "lucide-react";

interface TrustSectionProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  variant?: "light" | "dark";
}

const POINTS = [
  { Icon: Leaf, label: "Eco-Friendly", sub: "Plant-based cleaning agents" },
  { Icon: ShieldCheck, label: "Non-Toxic", sub: "No harsh chemical residue" },
  { Icon: Heart, label: "Family & Pet Safe", sub: "Safe for kids and animals" },
  { Icon: Clock, label: "Open 24/7", sub: "Flexible scheduling" },
  { Icon: MapPin, label: "Los Angeles Local", sub: "Serving LA & nearby areas" },
];

export function TrustSection({ eyebrow = "Why Choose Us", heading, subheading, variant = "light" }: TrustSectionProps) {
  const dark = variant === "dark";

  return (
    <section className={dark ? "py-16 sm:py-24 bg-navy text-white" : "py-16 sm:py-24 bg-white"}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mb-12">
          <p className={`inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase mb-3 ${dark ? "text-water" : "text-cta"}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
            {eyebrow}
          </p>
          <h2 className={`text-3xl sm:text-4xl font-bold leading-tight mb-4 ${dark ? "text-white" : "text-text-primary"}`}>
            {heading}
          </h2>
          {subheading && (
            <p className={dark ? "text-white/70 text-base sm:text-lg leading-relaxed" : "text-text-secondary text-base sm:text-lg leading-relaxed"}>
              {subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {POINTS.map((point) => (
            <div
              key={point.label}
              className={
                dark
                  ? "p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-colors duration-200"
                  : "p-5 rounded-2xl bg-surface border border-primary/12 hover:border-cta/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-200"
              }
            >
              <div className={dark ? "w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-3" : "w-9 h-9 rounded-xl bg-primary-light ring-1 ring-primary/15 flex items-center justify-center mb-3"}>
                <point.Icon className={dark ? "w-4.5 h-4.5 text-water" : "w-4.5 h-4.5 text-cta"} aria-hidden />
              </div>
              <div className={dark ? "text-sm font-semibold text-white leading-snug" : "text-sm font-semibold text-text-primary leading-snug"}>
                {point.label}
              </div>
              <div className={dark ? "text-xs text-white/55 mt-1" : "text-xs text-text-secondary mt-1"}>{point.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
