import Link from "next/link";
import type { SizePricingItem } from "@/data/pricing";
import type { ServicePage } from "@/types/content";

interface PricingSizeCardProps {
  row: SizePricingItem;
  service?: ServicePage;
}

export function PricingSizeCard({ row, service }: PricingSizeCardProps) {
  return (
    <div className="rounded-2xl border border-primary/12 bg-white p-5">
      <h3 className="text-base font-bold text-text-primary mb-3">
        {service ? (
          <Link href={service.fullPath} className="hover:text-cta transition-colors">{row.item}</Link>
        ) : (
          row.item
        )}
      </h3>
      <dl className="space-y-2.5 text-sm">
        <div className="flex justify-between gap-3">
          <dt className="font-semibold text-text-secondary/80 shrink-0">Starting Price</dt>
          <dd className="text-text-primary font-semibold text-right">{row.startingPrice}</dd>
        </div>
        <div className="flex justify-between gap-3">
          <dt className="font-semibold text-text-secondary/80 shrink-0">Typical Range</dt>
          <dd className="text-text-primary font-semibold text-right">{row.typicalRange}</dd>
        </div>
        <div className="pt-2 border-t border-primary/10">
          <dt className="font-semibold text-text-secondary/80 mb-1">Best For</dt>
          <dd className="text-text-secondary leading-relaxed">{row.bestFor}</dd>
        </div>
        <div>
          <dt className="font-semibold text-text-secondary/80 mb-1">Notes</dt>
          <dd className="text-text-secondary leading-relaxed">{row.notes}</dd>
        </div>
      </dl>
    </div>
  );
}
