import Image from "next/image";

interface TrustBadge {
  src: string;
  alt: string;
  label: string;
}

const BADGES: TrustBadge[] = [
  { src: "/images/badge/eco-safe-badge.webp", alt: "Eco Safe trust badge", label: "Eco Safe" },
  { src: "/images/badge/organic-products-badge.webp", alt: "Organic Products trust badge", label: "Organic Products" },
  { src: "/images/badge/non-toxic-badge.webp", alt: "Non-Toxic trust badge", label: "Non-Toxic" },
  { src: "/images/badge/family-pet-safe-badge.webp", alt: "Family and Pet Safe trust badge", label: "Family & Pet Safe" },
];

export function HeroTrustBadges() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-xl" role="list" aria-label="Trust badges">
      {BADGES.map((badge) => (
        <div
          key={badge.src}
          role="listitem"
          className="flex items-center gap-3 bg-white rounded-2xl border border-primary/15 shadow-sm shadow-primary/10 px-4 py-3.5"
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0">
            <Image src={badge.src} alt={badge.alt} fill loading="lazy" sizes="48px" className="object-contain" />
          </div>
          <span className="text-sm font-bold text-text-primary leading-snug">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
