import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { SERVICE_AREAS, getAreaHref } from "@/data/serviceAreas";
import { SERVICES } from "@/data/services";
import { getImagesForUse, fleetImages } from "@/data/images";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Service Areas | Organic Mattress Cleaning Los Angeles",
    description:
      "Organic Mattress Cleaning provides eco-friendly mattress cleaning across Los Angeles and surrounding communities including Santa Monica, Beverly Hills, Burbank, and more.",
    canonical: "/service-areas",
  });
}

export default function ServiceAreasPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
  ]);
  const areaMapImage = getImagesForUse("service-areas-hub")[0];
  const vanImage = getImagesForUse("service-area-coverage")[0] ?? fleetImages[0];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Service Areas", url: "/service-areas" }]}
        categoryBadge="Los Angeles & Surrounding Areas"
        heading="Organic Mattress Cleaning Service Areas"
        subheading="We bring eco-friendly, non-toxic mattress cleaning directly to your home across Los Angeles and the surrounding communities."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        minHeight="min-h-[60vh]"
      />

      {areaMapImage && (
        <section className="py-12 sm:py-16 bg-white border-b border-primary/10">
          <div className="max-w-2xl mx-auto px-5 sm:px-6">
            <div className="relative rounded-3xl overflow-hidden border border-primary/15 shadow-md shadow-primary/10">
              <Image
                src={areaMapImage.src}
                alt={areaMapImage.alt}
                width={areaMapImage.width}
                height={areaMapImage.height}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 672px"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={getAreaHref(area)}
                className="group bg-surface rounded-2xl border border-primary/12 p-6 hover:border-cta/35 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-light ring-1 ring-primary/15 flex items-center justify-center shrink-0 mb-4">
                  <MapPin className="w-5 h-5 text-cta" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-1.5 group-hover:text-primary-dark transition-colors">
                  {area.isPrimaryMarket ? `${area.name} — Main Service Area` : area.name}
                </h3>
                <p className="text-xs text-text-secondary/70 uppercase tracking-wide font-medium mb-3">{area.region}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{area.heroTagline}</p>
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta group-hover:text-primary-dark">
                  {area.isPrimaryMarket ? "Visit homepage" : "View area"} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile service across coverage area — branded van */}
      {vanImage && (
        <section className="py-16 sm:py-24 bg-white border-t border-primary/10">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <figure className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10 order-2 lg:order-1">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={vanImage.src}
                    alt={vanImage.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                {vanImage.caption && (
                  <figcaption className="px-4 py-3 text-xs text-text-secondary bg-surface border-t border-primary/10">
                    {vanImage.caption}
                  </figcaption>
                )}
              </figure>
              <div className="order-1 lg:order-2">
                <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
                  Mobile Service
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-4">
                  Mobile Service Across Our Los Angeles Coverage Area
                </h2>
                <p className="text-text-secondary text-base leading-relaxed">
                  Serving Los Angeles, Santa Monica, Malibu, Beverly Hills, West Hollywood, Hollywood, Burbank,
                  Glendale, Pasadena, Encino, Sherman Oaks, Studio City, Van Nuys, North Hollywood, Woodland Hills,
                  Culver City, Marina del Rey, Venice, and Brentwood.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Core services cross-link */}
      <section className="py-14 sm:py-20 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6">Explore Our Core Services</h2>
          <div className="flex flex-wrap gap-3">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={service.fullPath}
                className="px-4 py-2.5 rounded-full bg-white border border-primary/15 text-sm font-semibold text-text-primary hover:border-cta/35 hover:text-cta transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        heading="Don't See Your Neighborhood?"
        body="We may still be able to help. Contact us to confirm availability in your area."
      />
    </>
  );
}
