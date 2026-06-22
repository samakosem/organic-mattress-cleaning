import Link from "next/link";
import type { GoalPricingItem } from "@/data/pricing";
import type { ServicePage } from "@/types/content";

interface PricingGoalCardProps {
  row: GoalPricingItem;
  service?: ServicePage;
}

export function PricingGoalCard({ row, service }: PricingGoalCardProps) {
  return (
    <div className="rounded-2xl border border-primary/12 bg-white p-5">
      <h3 className="text-base font-bold text-text-primary mb-3">{row.item}</h3>
      <dl className="space-y-2.5 text-sm">
        <div className="flex justify-between gap-3">
          <dt className="font-semibold text-text-secondary/80 shrink-0">Typical Price Impact</dt>
          <dd className="text-text-primary font-semibold text-right">{row.priceImpact}</dd>
        </div>
        <div className="pt-2 border-t border-primary/10">
          <dt className="font-semibold text-text-secondary/80 mb-1">Why It Changes</dt>
          <dd className="text-text-secondary leading-relaxed">{row.whyItChanges}</dd>
        </div>
        {service && (
          <div className="pt-2 border-t border-primary/10">
            <dt className="font-semibold text-text-secondary/80 mb-1">Related Service</dt>
            <dd>
              <Link href={service.fullPath} className="text-cta hover:text-primary-dark font-semibold transition-colors">
                {service.name} →
              </Link>
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
