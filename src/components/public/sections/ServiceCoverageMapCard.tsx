import Link from "next/link";
import { MapPin } from "lucide-react";
import { SERVICE_AREAS, getAreaHref } from "@/data/serviceAreas";

/**
 * Static service-coverage visual — NOT a live technician map. Dots represent
 * known service areas only, no real-time positions.
 */
export function ServiceCoverageMapCard() {
  return (
    <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="rounded-3xl bg-white border border-primary/15 shadow-sm overflow-hidden">
          <div className="p-8 sm:p-10 border-b border-primary/10">
            <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
              Service Coverage
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-3">
              Los Angeles Service Coverage
            </h2>
            <p className="text-text-secondary text-base leading-relaxed max-w-2xl">
              Mobile organic mattress cleaning available across Los Angeles and nearby service areas.
            </p>
          </div>

          <div className="p-8 sm:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {SERVICE_AREAS.map((area) => (
                <Link
                  key={area.slug}
                  href={getAreaHref(area)}
                  className="group inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-primary-light border border-primary/15 hover:border-cta/35 hover:bg-cta/10 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-cta shrink-0" aria-hidden />
                  <span className="text-sm font-medium text-primary-dark group-hover:text-cta transition-colors truncate">
                    {area.isPrimaryMarket ? `${area.name} (Main Service Area)` : area.name}
                  </span>
                </Link>
              ))}
            </div>
            <p className="text-xs text-text-secondary/60 mt-6 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden />
              Service coverage areas shown. Not a live technician location map.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
