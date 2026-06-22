import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedItem {
  href: string;
  typeLabel: string;
  title: string;
  description?: string;
}

interface RelatedLinksSectionProps {
  items: RelatedItem[];
  eyebrow?: string;
  heading: string;
  subheading?: string;
  variant?: "white" | "surface";
}

export function RelatedLinksSection({
  items,
  eyebrow = "Explore Further",
  heading,
  subheading,
  variant = "white",
}: RelatedLinksSectionProps) {
  if (!items || items.length === 0) return null;
  const bg = variant === "surface" ? "bg-surface" : "bg-white";

  return (
    <section className={`py-14 sm:py-20 ${bg} border-t border-stone-100`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="mb-8">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
            {eyebrow}
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary">{heading}</h2>
          {subheading && <p className="text-text-secondary mt-2 max-w-xl">{subheading}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col justify-between bg-white rounded-2xl border border-primary/12 hover:border-cta/35 hover:shadow-lg hover:shadow-primary/[0.08] hover:-translate-y-0.5 transition-all duration-200 p-6"
            >
              <div>
                <div className="text-xs font-bold text-cta tracking-wide uppercase mb-2">{item.typeLabel}</div>
                <h3 className="text-base font-bold text-text-primary leading-snug group-hover:text-primary-dark transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-text-secondary text-sm mt-2 leading-relaxed line-clamp-2">{item.description}</p>
                )}
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cta group-hover:text-primary-dark transition-colors">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
