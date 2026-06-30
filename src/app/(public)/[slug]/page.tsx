import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ClipboardList, Wrench, PartyPopper, Users, Leaf } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { ServicesSection } from "@/components/public/sections/ServicesSection";
import { ProcessStepsSection } from "@/components/public/sections/ProcessStepsSection";
import { FaqSection } from "@/components/public/sections/FaqSection";
import { TrustSection } from "@/components/public/sections/TrustSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { RelatedLinksSection } from "@/components/public/sections/RelatedLinksSection";
import { AnswerBlock } from "@/components/public/sections/AnswerBlock";
import { BeforeAfterSection } from "@/components/public/sections/BeforeAfterSection";
import { InlineQuoteCta } from "@/components/public/sections/InlineQuoteCta";
import { CallNowCta } from "@/components/public/sections/CallNowCta";
import { LiveAvailabilityWidget } from "@/components/public/sections/LiveAvailabilityWidget";
import { SectionHeading } from "@/components/public/sections/SectionHeading";
import { LeadForm } from "@/components/public/forms/LeadForm";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildFaqSchema } from "@/lib/schema/faq";
import { buildServiceSchema } from "@/lib/schema/local-business";
import { SITE_URL } from "@/lib/constants/business";
import { SERVICES } from "@/data/services";
import { SERVICE_AREAS } from "@/data/serviceAreas";
import { getImagesForUse, beforeAfterImages } from "@/data/images";

const STAIN_RELATED_SLUGS = ["mattress-stain-removal", "urine-odor-removal", "dust-mite-mattress-cleaning"];
const AVAILABILITY_WIDGET_SLUGS = ["mattress-stain-removal", "urine-odor-removal", "mattress-cleaning", "organic-mattress-cleaning"];

const SERVICE_GUIDE_LINKS: Record<string, { label: string; href: string }[]> = {
  "mattress-stain-removal": [{ label: "Mattress Stain Guide", href: "/mattress-stain-guide" }],
  "urine-odor-removal": [
    { label: "Mattress Stain Guide", href: "/mattress-stain-guide" },
    { label: "After-Care Guide", href: "/after-care" },
  ],
  "mattress-cleaning": [
    { label: "Mattress Material Cleaning Guide", href: "/mattress-material-cleaning-guide" },
    { label: "Professional vs DIY Mattress Cleaning", href: "/professional-vs-diy-mattress-cleaning" },
  ],
  "organic-mattress-cleaning": [
    { label: "Our Organic Cleaning Products", href: "/organic-cleaning-products" },
    { label: "Professional vs DIY Mattress Cleaning", href: "/professional-vs-diy-mattress-cleaning" },
  ],
  "baby-mattress-cleaning": [
    { label: "Mattress Material Cleaning Guide", href: "/mattress-material-cleaning-guide" },
    { label: "After-Care Guide", href: "/after-care" },
  ],
  "dust-mite-mattress-cleaning": [
    { label: "After-Care Guide", href: "/after-care" },
    { label: "Mattress Material Cleaning Guide", href: "/mattress-material-cleaning-guide" },
  ],
  "allergy-mattress-cleaning": [
    { label: "After-Care Guide", href: "/after-care" },
    { label: "Mattress Material Cleaning Guide", href: "/mattress-material-cleaning-guide" },
  ],
};

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    canonical: service.fullPath,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: service.name, url: service.fullPath },
  ]);
  const faqSchema = buildFaqSchema(service.faqs);
  const serviceSchema = buildServiceSchema(service.name, service.seoDescription, `${SITE_URL}${service.fullPath}`);

  const relatedServices = service.relatedServiceSlugs
    .map((s) => SERVICES.find((svc) => svc.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const featuredAreas = SERVICE_AREAS.filter((a) => !a.isPrimaryMarket).slice(0, 6);
  const relatedAreaItems = featuredAreas.map((area) => ({
    href: `/service-areas/${area.slug}`,
    typeLabel: "Service Area",
    title: `${service.name} in ${area.name}`,
    description: area.heroTagline,
  }));

  const topImage = getImagesForUse(slug)[0];
  const midImages = getImagesForUse(slug).filter((img) => img.src !== topImage?.src);
  const midImage = midImages[0];
  const serviceBeforeAfter = STAIN_RELATED_SLUGS.includes(slug)
    ? beforeAfterImages.filter((img) => img.suggestedUse.includes(slug))
    : [];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: service.name, url: service.fullPath }]}
        categoryBadge="Mattress Service · Los Angeles"
        heading={service.heroHeading}
        subheading={service.heroSubheading}
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        ctaSecondaryLabel="(800) 735-1242"
        ctaSecondaryUrl="tel:+18007351242"
        minHeight="min-h-[70vh]"
        showInternalTrustBadges
        showLeadForm
        leadFormSource={`service-page-${service.slug}`}
        leadFormServiceSlug={service.slug}
      />

      {/* What it is + benefits */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          {topImage && (
            <div className="relative rounded-3xl overflow-hidden border border-primary/15 shadow-lg shadow-primary/10 mb-12">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={topImage.src}
                  alt={topImage.alt}
                  fill
                  loading="lazy"
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-5">
                {service.introHeading}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-4">{service.whatItIs}</p>
              <div className="space-y-4">
                {service.introParagraphs.map((para, i) => (
                  <p key={i} className="text-text-secondary text-lg leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <ul className="space-y-3.5 lg:pt-2">
              {service.benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-light border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-cta" />
                  </div>
                  <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <InlineQuoteCta
        heading={`Ready to Schedule ${service.name}?`}
        body="Get a free, no-obligation quote in minutes."
        ctaLabel="Request a Quote"
      />

      {/* Who needs it + common problems */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <SectionHeading
                subheading="Who Needs This"
                heading={`Who ${service.name} Helps Most`}
                layout="stacked"
                className="mb-7"
              />
              <ul className="space-y-3">
                {service.whoNeedsIt.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden />
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                subheading="Common Problems"
                heading="What This Service Helps With"
                layout="stacked"
                className="mb-7"
              />
              <ul className="space-y-3">
                {service.commonProblems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cta shrink-0 mt-2" aria-hidden />
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why eco-friendly matters */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className={midImage ? "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center" : "max-w-3xl mx-auto text-center"}>
            <div className={midImage ? "" : "text-center"}>
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-light ring-1 ring-primary/15 mb-6 ${midImage ? "" : "mx-auto"}`}>
                <Leaf className="w-6 h-6 text-primary-dark" aria-hidden />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-4">
                Why Eco-Friendly Matters for {service.name}
              </h2>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">{service.ecoImportance}</p>
            </div>
            {midImage && (
              <div className="relative rounded-3xl overflow-hidden border border-primary/15 shadow-lg shadow-primary/10">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={midImage.src}
                    alt={midImage.alt}
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

      <ProcessStepsSection
        eyebrow="Our Process"
        heading={`How We Provide ${service.name}`}
        steps={service.processSteps}
      />

      {/* Before / During / After expectations */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <SectionHeading subheading="What to Expect" heading="Before, During, and After Service" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { Icon: ClipboardList, label: "Before", body: service.expectations.before },
              { Icon: Wrench, label: "During", body: service.expectations.during },
              { Icon: PartyPopper, label: "After", body: service.expectations.after },
            ].map((step) => (
              <div key={step.label} className="bg-white rounded-2xl p-6 border border-primary/12">
                <div className="w-10 h-10 rounded-xl bg-primary-light ring-1 ring-primary/15 flex items-center justify-center mb-4">
                  <step.Icon className="w-5 h-5 text-cta" aria-hidden />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">{step.label}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Household benefits */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <SectionHeading
            subheading="Family, Kids & Pets"
            heading="Benefits for Every Household"
            description="Designed with allergy-sensitive homes, young children, and pets in mind."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.householdBenefits.map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 rounded-2xl bg-primary-light/60 border border-primary/10">
                <CheckCircle2 className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-text-primary leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {serviceBeforeAfter.length > 0 && (
        <BeforeAfterSection
          images={serviceBeforeAfter}
          eyebrow="Examples"
          heading={`${service.name}: Before-and-After Style Examples`}
          description="A look at common situations our organic process is designed to help with."
        />
      )}

      {AVAILABILITY_WIDGET_SLUGS.includes(slug) ? (
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <LiveAvailabilityWidget />
          </div>
        </section>
      ) : (
        <CallNowCta
          heading={`Need ${service.name} Today? Call (800) 735-1242`}
          body="Speak with Organic Mattress Cleaning, open 24/7 across Los Angeles."
        />
      )}

      <TrustSection
        eyebrow="Why Choose Us"
        heading="Organic, Family-Safe Mattress Care"
        subheading="Every visit uses plant-based, non-toxic products that are safe for kids, pets, and allergy-sensitive households."
        variant="dark"
      />

      {/* When to schedule + Lead form */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" />
                Free Quote
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-5">
                Get a Free Quote for {service.name}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-5">
                Tell us about your mattress and we&apos;ll provide a clear price with no hidden fees. See our{" "}
                <Link href="/pricing" className="text-cta hover:text-primary-dark font-semibold transition-colors">
                  mattress cleaning price guide
                </Link>{" "}
                for typical starting prices.
              </p>
              <div className="p-5 rounded-2xl bg-surface border border-primary/12 mb-4">
                <h3 className="text-sm font-bold text-text-primary mb-1.5">When to Schedule</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{service.whenToSchedule}</p>
              </div>
              <Link href="/organic-cleaning-products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:text-primary-dark transition-colors">
                Learn about our organic cleaning products →
              </Link>
              {SERVICE_GUIDE_LINKS[service.slug] && (
                <div className="mt-3 flex flex-col gap-2">
                  {SERVICE_GUIDE_LINKS[service.slug].map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:text-primary-dark transition-colors"
                    >
                      {guide.label} →
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="bg-surface rounded-3xl p-8 border border-primary/15 shadow-sm">
              <h3 className="text-lg font-bold text-text-primary mb-1.5">Request Your Free Quote</h3>
              <p className="text-text-secondary text-sm mb-6">We&apos;ll follow up shortly to confirm details.</p>
              <LeadForm serviceInterest={service.slug} />
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={service.faqs}
        eyebrow="Common Questions"
        heading={`${service.name}: Frequently Asked Questions`}
        variant="surface"
        relatedLinks={relatedServices.map((s) => ({ label: s.name, href: s.fullPath }))}
      />

      <AnswerBlock items={service.answerBlock} heading="Quick Answers" />

      {relatedServices.length > 0 && (
        <ServicesSection services={relatedServices} eyebrow="Related Services" heading="Other Ways We Can Help" showCta={false} />
      )}

      <RelatedLinksSection
        items={relatedAreaItems}
        eyebrow="Service Areas"
        heading="Where We Provide This Service"
        subheading="Mobile mattress cleaning available throughout the Los Angeles area."
        variant="surface"
      />

      <CtaSection heading={`Ready to Book ${service.name}?`} body="Get a free quote today, no obligation, no pressure." />
    </>
  );
}
