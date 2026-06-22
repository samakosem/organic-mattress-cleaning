import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Heart, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { ServicesSection } from "@/components/public/sections/ServicesSection";
import { TrustSection } from "@/components/public/sections/TrustSection";
import { ProcessStepsSection } from "@/components/public/sections/ProcessStepsSection";
import { FaqSection } from "@/components/public/sections/FaqSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { BeforeAfterSection } from "@/components/public/sections/BeforeAfterSection";
import { AnswerBlock } from "@/components/public/sections/AnswerBlock";
import { LiveAvailabilityWidget } from "@/components/public/sections/LiveAvailabilityWidget";
import { SmartAvailabilityStatus } from "@/components/public/sections/SmartAvailabilityStatus";
import { ServiceCoverageMapCard } from "@/components/public/sections/ServiceCoverageMapCard";
import { ServiceAreaChecker } from "@/components/public/sections/ServiceAreaChecker";
import { LeadForm } from "@/components/public/forms/LeadForm";
import { SectionHeading } from "@/components/public/sections/SectionHeading";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildFaqSchema } from "@/lib/schema/faq";
import { SERVICES } from "@/data/services";
import { GENERAL_FAQS } from "@/data/faqs";
import { getImagesForUse, beforeAfterImages, fleetImages } from "@/data/images";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { BLOG_POSTS } from "@/data/blog";
import { BlogPostCard } from "@/components/public/cards/BlogPostCard";
import { TestimonialCard } from "@/components/public/cards/TestimonialCard";
import { TESTIMONIALS } from "@/data/testimonials";

const HOMEPAGE_TESTIMONIALS = TESTIMONIALS.slice(0, 6);

const HOME_ANSWER_BLOCK = [
  {
    q: "Does Organic Mattress Cleaning serve Los Angeles?",
    a: "Yes. Organic Mattress Cleaning is a mobile service serving Los Angeles and nearby communities including Santa Monica, Beverly Hills, Burbank, Pasadena, and more — open 24/7.",
  },
  {
    q: "What makes organic mattress cleaning different?",
    a: "Organic Mattress Cleaning uses plant-based, non-toxic cleaning agents instead of harsh chemical solvents. The process is designed to help remove stains, odors, dust mites, and allergens while supporting a cleaner, healthier sleep environment for families and pets.",
  },
  {
    q: "Is the cleaning safe for kids and pets?",
    a: "Yes. Our process is designed for family and pet-safe use, with no harsh chemical residue or strong fumes left behind. Mattresses are typically safe to sleep on the same day.",
  },
  {
    q: "Can mattress cleaning help with wine, oil, and sweat stains?",
    a: "Professional mattress cleaning can help lift wine, oil, and sweat stains using plant-based spot-treatment methods. Results vary depending on stain age, fabric type, and how long the stain has set in.",
  },
  {
    q: "How do I book mattress cleaning in Los Angeles?",
    a: "You can request a free quote through our contact form or call (800) 735-1242. Organic Mattress Cleaning is a mobile service available 24/7 across Los Angeles and surrounding communities.",
  },
  {
    q: "What mattress problems can professional cleaning help with?",
    a: "Professional mattress cleaning can help remove visible stains, freshen odors from sweat or pet accidents, and reduce dust mites and allergens — supporting a fresher, more comfortable sleep surface.",
  },
  {
    q: "Do you offer mattress cleaning across all of Los Angeles?",
    a: "Yes. Organic Mattress Cleaning serves Los Angeles and nearby communities including Santa Monica, Beverly Hills, Burbank, Pasadena, and more — see our full service area list for details.",
  },
];

export const revalidate = 3600;

const WHY_ORGANIC = [
  {
    Icon: Leaf,
    title: "Plant-based, non-toxic formulas",
    body: "Every product we use is free of harsh chemicals, so your mattress is safe to sleep on the same night we clean it.",
  },
  {
    Icon: ShieldCheck,
    title: "Safe for kids and pets",
    body: "No chemical residue, no strong fumes. Our process is designed for households with babies, children, and animals.",
  },
  {
    Icon: Heart,
    title: "Built for allergy relief",
    body: "Deep extraction targets dust mites, dander, and allergens that regular vacuuming leaves behind.",
  },
  {
    Icon: Sparkles,
    title: "Visible, lasting results",
    body: "Stains lift, odors disappear, and your mattress looks and feels noticeably fresher after each visit.",
  },
];

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Organic Mattress Cleaning Los Angeles | Non-Toxic Mattress Cleaning",
    description:
      "Eco-friendly, non-toxic mattress cleaning serving Los Angeles. Family-safe and pet-safe deep cleaning, sanitizing, and stain removal. Open 24/7 — get a free quote.",
    canonical: "/",
  });
}

export default function HomePage() {
  const faqSchema = buildFaqSchema(GENERAL_FAQS);
  const inActionImage = getImagesForUse("homepage-in-action")[0];
  const ecoProductsImage = getImagesForUse("homepage-eco-products")[0];
  const processInfographic = getImagesForUse("homepage-process")[0];
  const homeBeforeAfter = beforeAfterImages.filter((img) => img.suggestedUse.includes("homepage-before-after")).slice(0, 4);
  const vanImage = getImagesForUse("homepage-brand-trust")[0] ?? fleetImages[0];

  return (
    <>
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <HeroSection
        categoryBadge="Organic & Non-Toxic"
        heading="Organic Mattress Cleaning in Los Angeles"
        subheading="Eco-friendly, plant-based deep cleaning that's safe for your family and pets. We remove stains, odors, dust mites, and allergens — without harsh chemicals."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        ctaSecondaryLabel="(800) 735-1242"
        ctaSecondaryUrl="tel:+18007351242"
        priority
        showLeadForm
        stats={[
          { value: "100%", label: "Non-Toxic Process" },
          { value: "24/7", label: "Availability" },
          { value: "Family", label: "& Pet Safe" },
        ]}
      />

      {/* Why Organic */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <SectionHeading
            subheading="Why Go Organic"
            heading="A Healthier Way to Clean Your Mattress"
            description="Conventional mattress cleaning often relies on harsh chemical solvents. We use organic, plant-based formulas that clean just as deeply without the toxic residue."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_ORGANIC.map((item) => (
              <div
                key={item.title}
                className="bg-surface rounded-2xl p-6 border border-primary/12 hover:border-cta/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-light ring-1 ring-primary/15 flex items-center justify-center shrink-0">
                  <item.Icon className="w-5 h-5 text-cta" aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2 text-base leading-snug">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-t border-primary/10">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 space-y-4">
          <SmartAvailabilityStatus />
          <LiveAvailabilityWidget />
        </div>
      </section>

      {/* Professional Mattress Cleaning in Action */}
      {inActionImage && (
        <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative rounded-3xl overflow-hidden border border-primary/15 shadow-lg shadow-primary/10 order-2 lg:order-1">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={inActionImage.src}
                    alt={inActionImage.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <SectionHeading
                  subheading="See Our Process"
                  heading="Professional Mattress Cleaning in Action"
                  description="Our technicians use professional-grade extraction equipment paired with organic, plant-based solutions — designed to clean deeply without harsh chemical residue."
                  layout="stacked"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Eco-Friendly Products & Tools */}
      {ecoProductsImage && (
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <SectionHeading
                  subheading="What We Use"
                  heading="Eco-Friendly Products & Tools"
                  description="Plant-based cleaning solutions, non-toxic formulas, and a low-residue approach — chosen for freshness, safety, and a healthier sleep environment."
                  layout="stacked"
                />
              </div>
              <div className="relative rounded-3xl overflow-hidden border border-primary/15 shadow-lg shadow-primary/10">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={ecoProductsImage.src}
                    alt={ecoProductsImage.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <ServicesSection services={SERVICES} />

      <BeforeAfterSection images={homeBeforeAfter} />

      {/* Testimonials preview */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <SectionHeading
            subheading="Customer Testimonials"
            heading="What Local Customers Say"
            description="Feedback shared directly by customers across Los Angeles and nearby communities."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {HOMEPAGE_TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="btn btn-outline">
              Read More Testimonials
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <TrustSection
        eyebrow="Why Choose Organic Mattress Cleaning"
        heading="Premium Mattress Care for Los Angeles Homes"
        subheading="We treat every mattress with the same care we'd want for our own family — safe products, thorough process, and real attention to detail."
        variant="light"
      />

      <ProcessStepsSection
        eyebrow="Our Process"
        heading="How We Clean Your Mattress"
        description="A simple four-step process from booking to a fresher, healthier mattress."
        steps={[
          { n: "01", t: "Book Your Visit", d: "Tell us about your mattress and schedule a time that works for you — including same-day options." },
          { n: "02", t: "Inspection", d: "We inspect the mattress for stains, odors, and problem areas before choosing the right organic treatment." },
          { n: "03", t: "Deep Cleaning", d: "Plant-based solutions lift stains, neutralize odors, and extract dust mites and allergens from deep within the fabric." },
          { n: "04", t: "Dry & Ready", d: "Quick-dry methods mean your mattress is ready to use again the same day, fresh and sanitized." },
        ]}
      />

      {/* What Can Build Up in a Mattress? — infographic */}
      {processInfographic && (
        <section className="py-10 sm:py-14 bg-surface border-t border-primary/10">
          <div className="max-w-3xl mx-auto px-5 sm:px-6">
            <div className="relative rounded-3xl overflow-hidden border border-primary/15 shadow-md shadow-primary/10">
              <Image
                src={processInfographic.src}
                alt={processInfographic.alt}
                width={processInfographic.width}
                height={processInfographic.height}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      )}

      {/* Lead form section */}
      <section className="py-16 sm:py-24 bg-white border-t border-stone-100" aria-labelledby="quote-heading">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeading
                subheading="Free, No Obligation"
                heading="Get a Free Quote for Organic Mattress Cleaning"
                description="Tell us about your mattress and we'll give you a clear, upfront price — no hidden fees, no pressure."
                id="quote-heading"
                layout="stacked"
                className="mb-7 sm:mb-8"
              />
              <ul className="space-y-3 mb-8">
                {[
                  "Free phone or online quote based on mattress size and condition",
                  "Same-day and next-day appointments available",
                  "Non-toxic process safe for kids, pets, and allergy sufferers",
                  "Serving Los Angeles and surrounding communities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-light border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-cta" aria-hidden />
                    </div>
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-primary/15 shadow-sm">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <ServiceCoverageMapCard />

      {/* Mobile Mattress Cleaning Across Los Angeles — branded van */}
      {vanImage && (
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <SectionHeading
                  subheading="Mobile Service"
                  heading="Mobile Mattress Cleaning Across Los Angeles"
                  description="Organic Mattress Cleaning brings eco-friendly mattress cleaning directly to homes, apartments, condos, and family households across Los Angeles. From urgent spill and urine odor requests to routine mattress refreshes, our mobile service is built for convenience, speed, and a cleaner sleep environment."
                  layout="stacked"
                  className="mb-7"
                />
                <div className="flex flex-col sm:flex-row gap-3">
                  <PhoneLink className="btn btn-primary justify-center" aria-label="Call Organic Mattress Cleaning now">
                    <Phone className="w-4 h-4" aria-hidden />
                    Call Now
                  </PhoneLink>
                  <Link href="/contact" className="btn btn-outline justify-center">
                    Get a Free Quote
                  </Link>
                </div>
              </div>
              <figure className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10">
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
            </div>
          </div>
        </section>
      )}

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-5 sm:px-6">
          <ServiceAreaChecker />
        </div>
      </section>

      {/* Blog preview */}
      {BLOG_POSTS.length > 0 && (
        <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <SectionHeading
              subheading="From the Blog"
              heading="Mattress Cleaning Tips & Healthy Home Guides"
              description="Practical guides on mattress care, eco-friendly cleaning, and healthier homes for Los Angeles families."
              className="mb-12"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
              {BLOG_POSTS.slice(0, 3).map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="text-center">
              <Link href="/blog" className="btn btn-outline">
                Browse All Guides
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      )}

      <FaqSection
        items={GENERAL_FAQS}
        eyebrow="Mattress Cleaning Questions"
        heading="Frequently Asked Questions"
        subheading="Answers to the questions Los Angeles homeowners ask most before booking."
        variant="white"
        relatedLinks={[
          { label: "Organic Mattress Cleaning", href: "/organic-mattress-cleaning" },
          { label: "Allergy Mattress Cleaning", href: "/allergy-mattress-cleaning" },
          { label: "Service Areas", href: "/service-areas" },
        ]}
      />

      <AnswerBlock items={HOME_ANSWER_BLOCK} heading="Quick Answers" />

      <CtaSection
        heading="Ready for a Fresher, Healthier Mattress?"
        body="Get a free quote today and experience organic mattress cleaning that's safe for your whole family."
      />
    </>
  );
}
