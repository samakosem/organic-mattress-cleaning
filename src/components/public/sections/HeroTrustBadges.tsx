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
    <div
      className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-2.5 w-full lg:w-auto"
      role="list"
      aria-label="Trust badges"
    >
      {BADGES.map((badge) => (
        <div
          key={badge.src}
          role="listitem"
          className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm rounded-xl border border-primary/12 shadow-sm shadow-primary/5 px-3 py-2 lg:justify-start"
        >
          <div className="relative w-8 h-8 shrink-0">
            <Image src={badge.src} alt={badge.alt} fill loading="lazy" sizes="32px" className="object-contain" />
          </div>
          <span className="text-xs font-semibold text-text-primary leading-snug">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
