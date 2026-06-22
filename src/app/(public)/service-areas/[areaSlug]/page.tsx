import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Truck, Leaf } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { ServicesSection } from "@/components/public/sections/ServicesSection";
import { FaqSection } from "@/components/public/sections/FaqSection";
import { TrustSection } from "@/components/public/sections/TrustSection";
import { CityHowItWorks } from "@/components/public/sections/CityHowItWorks";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { AnswerBlock } from "@/components/public/sections/AnswerBlock";
import { CallNowCta } from "@/components/public/sections/CallNowCta";
import { LiveAvailabilityWidget } from "@/components/public/sections/LiveAvailabilityWidget";
import { LeadForm } from "@/components/public/forms/LeadForm";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildFaqSchema } from "@/lib/schema/faq";
import { buildAreaServiceSchema } from "@/lib/schema/local-business";
import { SITE_URL } from "@/lib/constants/business";
import { SERVICE_AREAS, GENERATED_SERVICE_AREAS, getAreaHref } from "@/data/serviceAreas";
import { SERVICES } from "@/data/services";
import { cityBeforeAfterImages, genericAreaImage, serviceImages } from "@/data/images";

interface AreaPageProps {
  params: Promise<{ areaSlug: string }>;
}

// Primary-market areas (Los Angeles) don't get a page — the homepage owns that intent.
// dynamicParams=false makes any unlisted slug 404 immediately instead of rendering on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return GENERATED_SERVICE_AREAS.map((a) => ({ areaSlug: a.slug }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { areaSlug } = await params;
  const area = GENERATED_SERVICE_AREAS.find((a) => a.slug === areaSlug);
  if (!area) return {};
  return buildMetadata({
    title: area.seoTitle,
    description: area.seoDescription,
    canonical: `/service-areas/${area.slug}`,
  });
}

export default async function ServiceAreaDetailPage({ params }: AreaPageProps) {
  const { areaSlug } = await params;
  const area = GENERATED_SERVICE_AREAS.find((a) => a.slug === areaSlug);
  if (!area) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Service Areas", url: "/service-areas" },
    { name: area.name, url: `/service-areas/${area.slug}` },
  ]);
  const faqSchema = buildFaqSchema(area.faqs);
  const areaServiceSchema = buildAreaServiceSchema(
    area.name,
    area.seoDescription,
    `${SITE_URL}/service-areas/${area.slug}`
  );
  const nearbyLinks = area.nearbyAreas
    .map((slug) => SERVICE_AREAS.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const relatedServices = area.relatedServiceSlugs
    .map((s) => SERVICES.find((svc) => svc.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const secondaryImage = cityBeforeAfterImages[area.slug] ?? genericAreaImage;
  const mainImage = serviceImages[0];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaServiceSchema) }} />

      <HeroSection
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Service Areas", url: "/service-areas" },
          { name: area.name, url: `/service-areas/${area.slug}` },
        ]}
        categoryBadge={area.heroTagline}
        heading={area.heroHeading}
        subheading={area.heroSubheading}
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        minHeight="min-h-[65vh]"
        showInternalTrustBadges
        showLeadForm
        leadFormSource={`city-page-${area.slug}`}
      />

      {/* Mobile service banner */}
      <div className="bg-primary-light border-b border-primary/15">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-3.5 flex items-center justify-center gap-2.5 text-center">
          <Truck className="w-4 h-4 text-primary-dark shrink-0" aria-hidden />
          <p className="text-sm font-semibold text-primary-dark">
            Mobile mattress cleaning available in {area.name}, serving homes, apartments, condos, and families from our Los Angeles service area.
          </p>
        </div>
      </div>

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <LiveAvailabilityWidget />
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" />
                Why {area.name}
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-6">{area.introHeading}</h2>
              <div className="space-y-4 mb-8">
                {area.introParagraphs.map((para, i) => (
                  <p key={i} className="text-text-secondary text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              <ul className="space-y-3.5">
                {area.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-light border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-cta" />
                    </div>
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {mainImage && (
              <div className="relative rounded-3xl overflow-hidden border border-primary/15 shadow-lg shadow-primary/10">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={mainImage.src}
                    alt={`Mobile organic mattress cleaning available for ${area.name} homes`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why eco-friendly here + common issues */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white ring-1 ring-primary/15 mb-5">
                <Leaf className="w-5 h-5 text-primary-dark" aria-hidden />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-primary leading-tight mb-4">
                Why {area.name} Homeowners Choose Eco-Friendly Cleaning
              </h2>
              <p className="text-text-secondary text-base leading-relaxed">{area.whyEcoFriendly}</p>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-text-primary leading-tight mb-4">
                Common Mattress Issues in {area.name}
              </h2>
              <ul className="space-y-3 mb-6">
                {area.commonIssues.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cta shrink-0 mt-2" aria-hidden />
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              {secondaryImage && (
                <figure className="rounded-2xl overflow-hidden border border-primary/15 shadow-sm">
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={secondaryImage.src}
                      alt={secondaryImage.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {secondaryImage.caption && (
                    <figcaption className="p-3 text-xs text-text-secondary/70 bg-surface leading-relaxed">
                      {secondaryImage.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          </div>
        </div>
      </section>

      <CallNowCta
        heading={`Call Now for ${area.name} Mattress Cleaning`}
        body={`Mobile mattress cleaning available in ${area.name}. Call now to check the fastest available appointment.`}
      />

      <TrustSection
        eyebrow={`Serving ${area.name}`}
        heading="Organic, Non-Toxic Mattress Care"
        subheading={`We bring the same eco-friendly process to every home in ${area.name}, safe for families, pets, and allergy-sensitive households.`}
        variant="dark"
      />

      <CityHowItWorks cityName={area.name} />

      {relatedServices.length > 0 && (
        <ServicesSection
          services={relatedServices}
          eyebrow="Recommended Services"
          heading={`Mattress Cleaning Services in ${area.name}`}
          showCta={false}
        />
      )}

      {/* Lead form + scheduling */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" />
                Free Quote
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-5">
                Get a Free Quote for Your {area.name} Home
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-5">
                We&apos;ll review your mattress and provide a clear, upfront price, with no obligation.
              </p>
              <div className="p-5 rounded-2xl bg-surface border border-primary/12 mb-6">
                <h3 className="text-sm font-bold text-text-primary mb-1.5">How Scheduling Works</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{area.schedulingNote}</p>
              </div>

              {nearbyLinks.length > 0 && (
                <div className="pt-5 border-t border-primary/10">
                  <p className="text-xs text-text-secondary/70 mb-2 font-medium uppercase tracking-wide">Also serving nearby</p>
                  <div className="flex flex-wrap gap-2">
                    {nearbyLinks.map((nearby) => (
                      <Link
                        key={nearby.slug}
                        href={getAreaHref(nearby)}
                        className="px-3 py-1 bg-surface border border-primary/15 rounded-full text-xs text-text-secondary hover:border-cta/35 hover:text-primary-dark transition-colors"
                      >
                        {nearby.isPrimaryMarket ? `${nearby.name} (Main Service Area)` : nearby.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-surface rounded-3xl p-8 border border-primary/15 shadow-sm">
              <h3 className="text-lg font-bold text-text-primary mb-1.5">Request Your Free Quote</h3>
              <p className="text-text-secondary text-sm mb-6">We&apos;ll follow up shortly to confirm details.</p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={area.faqs}
        eyebrow="Common Questions"
        heading={`Mattress Cleaning Questions for ${area.name} Residents`}
        variant="surface"
        relatedLinks={relatedServices.slice(0, 3).map((s) => ({ label: s.name, href: s.fullPath }))}
      />

      <AnswerBlock items={area.answerBlock} heading={`Quick Answers: ${area.name}`} />

      <CtaSection heading={`Book Organic Mattress Cleaning in ${area.name}`} body="Get a free quote today, no obligation, no pressure." />

      <div className="py-10 bg-white border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-wrap items-center justify-between gap-4">
          <Link href="/service-areas" className="inline-flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            All Service Areas
          </Link>
          <Link href="/organic-mattress-cleaning" className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:text-primary-dark transition-colors">
            Explore Our Core Services
          </Link>
        </div>
      </div>
    </>
  );
}
