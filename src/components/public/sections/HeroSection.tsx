import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { PublicButton } from "@/components/ui/PublicButton";
import { CompactHeroLeadForm } from "@/components/public/forms/CompactHeroLeadForm";
import { HeroTrustBadges } from "@/components/public/sections/HeroTrustBadges";

interface StatItem {
  value: string;
  label: string;
}

interface HeroSectionProps {
  heading: string;
  subheading?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryUrl?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryUrl?: string;
  breadcrumbs?: { name: string; url: string }[];
  categoryBadge?: string;
  stats?: StatItem[];
  minHeight?: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Only the homepage hero should set this — it's the largest contentful paint on the site. */
  priority?: boolean;
  /** Homepage-only: floating glass lead form on desktop, compact card below CTAs on mobile. */
  showLeadForm?: boolean;
  /** Homepage-only: real trust badge images near the form. */
  showTrustBadges?: boolean;
}

const DEFAULT_HERO_IMAGE = "/images/hero/mattress-cleaning-hero.webp";

export function HeroSection({
  heading,
  subheading,
  ctaPrimaryLabel = "Get a Free Quote",
  ctaPrimaryUrl = "/contact",
  ctaSecondaryLabel,
  ctaSecondaryUrl,
  breadcrumbs,
  categoryBadge,
  stats,
  minHeight = "min-h-[78vh]",
  imageSrc = DEFAULT_HERO_IMAGE,
  imageAlt = "Organic, non-toxic mattress cleaning in a fresh, healthy Los Angeles bedroom",
  priority = false,
  showLeadForm = false,
  showTrustBadges = false,
}: HeroSectionProps) {
  return (
    <section className={`relative ${minHeight} text-text-primary overflow-hidden flex flex-col justify-between`}>
      {/* Full-bleed hero image background */}
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Soft eco-mint / white overlay for text readability — heavier on the left where text sits */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, rgba(250,252,247,0.97) 0%, rgba(250,252,247,0.88) 28%, rgba(243,250,244,0.55) 50%, rgba(243,250,244,0.25) 70%, rgba(243,250,244,0.1) 100%)",
        }}
      />
      {/* Bottom fade so the stats bar always reads clean over the photo */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(250,252,247,0.85) 100%)" }}
      />
      {/* Thin green accent line at the very top */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-1"
        style={{ background: "linear-gradient(90deg, var(--color-leaf-green), var(--color-cta-green))" }}
      />

      <div className="relative flex-1 flex items-center px-5 sm:px-8 lg:px-12 pt-28 pb-10">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-8 items-center">
          <div className="max-w-2xl">
            {breadcrumbs && breadcrumbs.length > 0 && (
              <nav className="mb-8" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-xs text-text-secondary/70 flex-wrap">
                  {breadcrumbs.map((item, idx) => {
                    const isLast = idx === breadcrumbs.length - 1;
                    return (
                      <li key={item.name + idx} className="flex items-center gap-2">
                        {idx > 0 && <span aria-hidden className="text-text-secondary/30">›</span>}
                        {isLast ? (
                          <span className="text-text-secondary">{item.name}</span>
                        ) : (
                          <Link href={item.url} className="hover:text-primary-dark transition-colors">
                            {item.name}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            )}

            {categoryBadge && (
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-primary/20 text-primary-dark text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" />
                {categoryBadge}
              </div>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-5 sm:mb-6 text-text-primary">
              {heading}
            </h1>

            {subheading && (
              <p className="text-sm sm:text-base lg:text-lg text-text-secondary max-w-2xl mb-8 sm:mb-10 leading-relaxed">
                {subheading}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-2.5">
              <PublicButton
                href={ctaPrimaryUrl}
                variant="primary"
                size="lg"
                fullWidthMobile
                icon={<ArrowRight className="w-4 h-4" aria-hidden />}
              >
                {ctaPrimaryLabel}
              </PublicButton>
              {ctaSecondaryLabel && ctaSecondaryUrl && (
                <PublicButton
                  href={ctaSecondaryUrl}
                  variant="outline"
                  size="lg"
                  fullWidthMobile
                  icon={<Phone className="w-4 h-4" aria-hidden />}
                  iconPosition="left"
                >
                  {ctaSecondaryLabel}
                </PublicButton>
              )}
            </div>

            {/* Mobile/tablet: compact lead form sits below the CTAs, full width, not overlapping the image */}
            {showLeadForm && (
              <div className="lg:hidden mt-8">
                <CompactHeroLeadForm className="w-full" />
              </div>
            )}

            {/* Mobile/tablet: trust badges in a compact 2x2 grid below the form */}
            {showTrustBadges && (
              <div className="lg:hidden mt-5">
                <HeroTrustBadges />
              </div>
            )}
          </div>

          {/* Desktop: floating glass lead form in its own column, clear of the mattress/tool area of the image */}
          {showLeadForm && (
            <div className="hidden lg:flex lg:flex-col lg:items-end gap-4 w-full">
              <CompactHeroLeadForm />
              {showTrustBadges && <HeroTrustBadges />}
            </div>
          )}
        </div>
      </div>

      {stats && stats.length > 0 && (
        <div className="relative px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14 lg:pb-16">
          <div className="max-w-7xl mx-auto flex justify-end">
            <div
              className="inline-flex items-stretch divide-x divide-primary/10 rounded-xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(16px) saturate(1.4)",
                WebkitBackdropFilter: "blur(16px) saturate(1.4)",
                border: "1px solid rgba(46,139,87,0.15)",
              }}
            >
              {stats.map((stat, idx) => (
                <div key={stat.label + idx} className="flex flex-col justify-center px-6 sm:px-8 py-4 sm:py-5">
                  <span className="text-xl sm:text-2xl font-bold text-primary-dark leading-tight">{stat.value}</span>
                  <span className="text-xs sm:text-sm text-text-secondary mt-0.5 whitespace-nowrap">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
