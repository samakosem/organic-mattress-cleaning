import Image from "next/image";

interface TrustBadge {
  src: string;
  alt: string;
  label: string;
}

const BADGES: TrustBadge[] = [
  { src: "/images/badge/eco-safe-badge.webp", alt: "", label: "Eco Safe" },
  { src: "/images/badge/organic-products-badge.webp", alt: "", label: "Organic Products" },
  { src: "/images/badge/non-toxic-badge.webp", alt: "", label: "Non-Toxic" },
  { src: "/images/badge/family-pet-safe-badge.webp", alt: "", label: "Family & Pet Safe" },
];

interface InternalHeroTrustBadgesProps {
  /** Optional short supporting line rendered above the badges. */
  supportingLine?: string;
}

/**
 * Compact trust-badge row for service and service-area hero sections.
 * Desktop: single row of 4. Mobile/tablet: 2x2 grid. Smaller than the
 * homepage variant (HeroTrustBadges) so it doesn't compete with the H1.
 */
export function InternalHeroTrustBadges({ supportingLine }: InternalHeroTrustBadgesProps) {
  return (
    <div className="max-w-3xl">
      {supportingLine && (
        <p className="text-xs font-semibold text-text-secondary/70 mb-3">{supportingLine}</p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3" role="list" aria-label="Trust badges">
        {BADGES.map((badge) => (
          <div
            key={badge.src}
            role="listitem"
            className="flex items-center gap-2.5 bg-white rounded-xl border border-primary/15 shadow-sm shadow-primary/10 px-3 py-2.5"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0">
              <Image src={badge.src} alt={badge.alt} fill loading="lazy" sizes="44px" className="object-contain" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-text-primary leading-snug">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
