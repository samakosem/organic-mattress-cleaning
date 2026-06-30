import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  TrendingUp,
  TrendingDown,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { FaqSection } from "@/components/public/sections/FaqSection";
import { AnswerBlock } from "@/components/public/sections/AnswerBlock";
import { LeadForm } from "@/components/public/forms/LeadForm";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { PricingSizeCard } from "@/components/public/pricing/PricingSizeCard";
import { PricingGoalCard } from "@/components/public/pricing/PricingGoalCard";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildFaqSchema } from "@/lib/schema/faq";
import { SERVICES } from "@/data/services";
import {
  PRICING_BY_SIZE,
  PRICING_BY_GOAL,
  PRICE_EXAMPLES,
  PRICE_INCREASE_FACTORS,
  PRICE_DECREASE_FACTORS,
  WHATS_INCLUDED,
} from "@/data/pricing";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Mattress Cleaning Prices Los Angeles | Organic Mattress Cleaning Cost Guide",
    description:
      "See mattress cleaning prices in Los Angeles for organic cleaning, stain removal, odor treatment, sanitizing and dust mite service. Get a free quote.",
    canonical: "/pricing",
  });
}

const PRICE_FAQS = [
  {
    q: "How much does mattress cleaning cost in Los Angeles?",
    a: "Professional mattress cleaning in Los Angeles typically starts around $89 for a twin mattress, $129 for a queen, and $149 for a king. Final pricing depends on mattress size, stain severity, odor level, fabric type, and the specific service requested.",
  },
  {
    q: "Why does mattress cleaning pricing vary?",
    a: "Pricing depends on mattress size, fabric and material, stain type and age, odor depth, whether one or both sides need cleaning, and access factors like stairs, parking, or high-rise buildings.",
  },
  {
    q: "Is urine odor removal included in regular mattress cleaning?",
    a: "No. Urine odor removal is a separate enzyme-based treatment, typically adding $49–$149 depending on how deep the odor has set into the mattress.",
  },
  {
    q: "Does stain removal cost extra?",
    a: "Yes. Stain removal is priced separately from routine cleaning, typically $35–$125 depending on the stain type, age, and severity.",
  },
  {
    q: "Is organic mattress cleaning more expensive?",
    a: "Organic, non-toxic cleaning is our standard process on every visit, not a premium upgrade, so it's included in the starting prices listed on this page rather than priced as an add-on.",
  },
  {
    q: "How much does queen mattress cleaning cost?",
    a: "Queen mattress cleaning typically starts at $129, with a typical range of $129–$189 depending on condition and any additional treatments needed.",
  },
  {
    q: "How much does king mattress cleaning cost?",
    a: "King and California King mattress cleaning typically starts at $149, with a typical range of $149–$229 depending on condition and any additional treatments needed.",
  },
  {
    q: "Do you charge more for both sides of the mattress?",
    a: "Yes. Two-sided cleaning usually adds $40–$100 depending on mattress size and access, since it roughly doubles the surface area being cleaned.",
  },
  {
    q: "Can you give an exact price over the phone?",
    a: "We can give a starting estimate over the phone, but the final quote is confirmed once we understand the mattress size, fabric, stain condition, odor level, and cleaning goals.",
  },
  {
    q: "Are older stains more expensive to treat?",
    a: "Often, yes. Stains that have had more time to set into the fabric typically take more effort to treat, which can affect pricing within the stain removal range.",
  },
  {
    q: "Does baby mattress cleaning cost less?",
    a: "Yes. Crib and baby mattresses are smaller, so cleaning typically starts at $59 with a typical range of $59–$99.",
  },
  {
    q: "Do apartments or high-rises cost more?",
    a: "Access factors like stairs, limited parking, or high-rise building policies can be a factor in scheduling and, in some cases, pricing. Let us know your building details when requesting a quote.",
  },
  {
    q: "Is sanitizing included?",
    a: "Sanitizing is an optional add-on, typically $25–$75 depending on mattress size and condition, rather than something automatically included in routine cleaning.",
  },
  {
    q: "Do you offer multiple mattress discounts?",
    a: "Cleaning multiple mattresses in the same home visit is often more efficient, which can be reflected in the overall quote. Mention how many mattresses you need cleaned when requesting a quote.",
  },
  {
    q: "What is the best way to get an accurate quote?",
    a: "Share your mattress size, any stain or odor concerns, and your service address. We'll walk through the best cleaning option and confirm a clear quote before any work begins.",
  },
];

export default function PricingPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Pricing", url: "/pricing" },
  ]);
  const faqSchema = buildFaqSchema(PRICE_FAQS);

  const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);

  return (
    <>
      {/*
        Visible pricing tables + FAQ schema only. No Offer/Service price schema,
        no AggregateRating, no review schema — the displayed starting prices and
        typical ranges are the single source of truth.
      */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Pricing", url: "/pricing" }]}
        categoryBadge="Transparent Pricing Guide"
        heading="Mattress Cleaning Prices in Los Angeles"
        subheading="A clear guide to organic mattress cleaning costs, typical starting prices, and the factors that affect your final quote."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        ctaSecondaryLabel="(800) 735-1242"
        ctaSecondaryUrl="tel:+18007351242"
        minHeight="min-h-[60vh]"
        showLeadForm
        leadFormSource="pricing-page"
      />

      <div className="bg-white border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-3.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
          <p className="text-xs sm:text-sm font-semibold text-primary-dark">
            Organic cleaning solutions &middot; Family-safe &middot; Pet-safe &middot; No harsh chemical smell
          </p>
        </div>
      </div>

      {/* Quick Answer Box — AI/answer-engine extractable */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="rounded-2xl bg-primary-light/50 border border-primary/15 p-6 sm:p-8">
            <p className="text-xs font-bold text-cta uppercase tracking-widest mb-3">Quick Answer</p>
            <h2 className="text-lg sm:text-xl font-bold text-text-primary leading-snug mb-3">
              How much does mattress cleaning cost in Los Angeles?
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              In Los Angeles, professional organic mattress cleaning typically starts around $89 for a twin
              mattress, $129 for a queen mattress, and $149 for a king mattress. Final pricing can vary based on
              mattress size, stain severity, urine odor, fabric type, sanitizing needs, dust mite treatment, and
              whether one or both sides need cleaning.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts box */}
      <section className="py-4 bg-white pb-12 sm:pb-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="rounded-2xl bg-surface border border-primary/12 p-6 sm:p-8">
            <p className="text-xs font-bold text-cta uppercase tracking-widest mb-4">Quick Facts</p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="font-semibold text-text-primary">Service area</dt>
                <dd className="text-text-secondary">Los Angeles and surrounding LA communities</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Starting price</dt>
                <dd className="text-text-secondary">Twin from $89, Queen from $129, King from $149</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Pricing depends on</dt>
                <dd className="text-text-secondary">Size, stains, odors, fabric, cleaning goal, one-sided/two-sided cleaning</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Quote type</dt>
                <dd className="text-text-secondary">Final quote confirmed before service</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold text-text-primary">Cleaning approach</dt>
                <dd className="text-text-secondary">Organic, non-toxic, plant-based, family-safe, pet-safe</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Pricing table by mattress size */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
            Pricing by Mattress Size
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">
            Starting Prices by Mattress Size
          </h2>
          {/* Desktop/tablet table */}
          <div className="hidden lg:block overflow-x-auto rounded-2xl border border-primary/12 bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-light/60 text-left">
                  <th className="px-4 py-3.5 font-bold text-text-primary">Mattress Size</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Starting Price</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Typical Range</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Best For</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Notes</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_BY_SIZE.map((row) => {
                  const svc = serviceBySlug(row.relatedServiceSlug);
                  return (
                    <tr key={row.item} className="border-t border-primary/10">
                      <td className="px-4 py-3.5 font-semibold text-text-primary">
                        {svc ? <Link href={svc.fullPath} className="hover:text-cta transition-colors">{row.item}</Link> : row.item}
                      </td>
                      <td className="px-4 py-3.5 text-text-secondary whitespace-nowrap">{row.startingPrice}</td>
                      <td className="px-4 py-3.5 text-text-secondary whitespace-nowrap">{row.typicalRange}</td>
                      <td className="px-4 py-3.5 text-text-secondary">{row.bestFor}</td>
                      <td className="px-4 py-3.5 text-text-secondary">{row.notes}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="lg:hidden grid grid-cols-1 gap-4">
            {PRICING_BY_SIZE.map((row) => (
              <PricingSizeCard key={row.item} row={row} service={serviceBySlug(row.relatedServiceSlug)} />
            ))}
          </div>

          <p className="text-xs text-text-secondary/70 mt-4">
            These are starting prices and typical ranges, not guaranteed final prices. Final pricing is confirmed
            after we understand the mattress size, fabric, stain condition, odor level, and cleaning goals.
          </p>
        </div>
      </section>

      {/* Pricing table by cleaning goal */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
            Pricing by Cleaning Goal
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">
            What Different Cleaning Goals Typically Cost
          </h2>
          {/* Desktop/tablet table */}
          <div className="hidden lg:block overflow-x-auto rounded-2xl border border-primary/12 bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-light/60 text-left">
                  <th className="px-4 py-3.5 font-bold text-text-primary">Cleaning Goal</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Typical Price Impact</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Why It Changes</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Related Service</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_BY_GOAL.map((row) => {
                  const svc = serviceBySlug(row.relatedServiceSlug);
                  return (
                    <tr key={row.item} className="border-t border-primary/10">
                      <td className="px-4 py-3.5 font-semibold text-text-primary">{row.item}</td>
                      <td className="px-4 py-3.5 text-text-secondary whitespace-nowrap">{row.priceImpact}</td>
                      <td className="px-4 py-3.5 text-text-secondary">{row.whyItChanges}</td>
                      <td className="px-4 py-3.5">
                        {svc ? (
                          <Link href={svc.fullPath} className="text-cta hover:text-primary-dark font-semibold transition-colors whitespace-nowrap">
                            View service →
                          </Link>
                        ) : (
                          "N/A"
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="lg:hidden grid grid-cols-1 gap-4">
            {PRICING_BY_GOAL.map((row) => (
              <PricingGoalCard key={row.item} row={row} service={serviceBySlug(row.relatedServiceSlug)} />
            ))}
          </div>
        </div>
      </section>

      {/* Why prices vary */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">
            Why Mattress Cleaning Prices Vary
          </h2>
          <div className="space-y-7">
            <div>
              <h3 className="text-base font-bold text-text-primary mb-2">Mattress Size and Thickness</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Larger mattresses and thicker pillow-top or hybrid mattresses simply have more surface area and
                material to treat, which is reflected in the size-based starting prices above.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-text-primary mb-2">Mattress Fabric and Material</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Memory foam, hybrid mattresses, latex mattresses, and wool or cotton covers all respond differently
                to moisture and treatment. Delicate mattress covers and upholstered bed surfaces sometimes need a
                more careful, low-moisture approach.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-text-primary mb-2">Stain Type and Stain Age</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                A fresh spill is generally easier to address than a stain that&apos;s had months or years to set in.
                Older stains, chemical stains, and stains that have reached deep into the mattress padding take
                more time and effort to treat.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-text-primary mb-2">Urine Odor and Enzyme Treatment Needs</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Surface-level urine odor is more straightforward than odor that&apos;s settled into deeper padding
                layers, which often calls for a dedicated enzyme-based treatment rather than routine cleaning.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-text-primary mb-2">One-Sided vs Two-Sided Cleaning</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Cleaning both sides of a mattress roughly doubles the surface area being treated, which is reflected
                in the two-sided cleaning add-on.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-text-primary mb-2">Organic Cleaning Solution Needs</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Our plant-based, non-toxic formulas are the standard on every visit, not a premium upgrade, so this
                doesn&apos;t add cost on top of the listed starting prices.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-text-primary mb-2">Drying Time and Moisture-Sensitive Materials</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Some materials need a slower, lower-moisture approach to avoid over-saturating the mattress, which
                can affect the time and care involved in a visit.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-text-primary mb-2">Access, Parking, Stairs, and High-Rise Buildings</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Los Angeles homes range from single-family houses to walk-up apartments and high-rise condos.
                Stairs, limited parking, and building access policies can be a factor in scheduling and, in some
                cases, pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price examples */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">Price Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRICE_EXAMPLES.map((ex) => (
              <div key={ex.title} className="bg-surface rounded-2xl border border-primary/12 p-6">
                <h3 className="text-sm font-bold text-text-primary mb-2 leading-snug">{ex.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{ex.estimate}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-secondary/70 mt-6">
            These examples use &ldquo;likely&rdquo; and &ldquo;typical&rdquo; language because results and final
            pricing may vary. Some stains may improve significantly but may not disappear completely, especially
            older stains, chemical stains, or stains that have reached deep into the mattress.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-6">What&apos;s Included</h2>
              <ul className="space-y-3">
                {WHATS_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden />
                    <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cta" aria-hidden />
                  What Can Increase the Price
                </h3>
                <ul className="space-y-2.5">
                  {PRICE_INCREASE_FACTORS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cta shrink-0 mt-2" aria-hidden />
                      <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-cta" aria-hidden />
                  What Can Lower the Price
                </h3>
                <ul className="space-y-2.5">
                  {PRICE_DECREASE_FACTORS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cta shrink-0 mt-2" aria-hidden />
                      <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local LA context */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-light ring-1 ring-primary/15 mb-5">
            <MapPin className="w-5 h-5 text-primary-dark" aria-hidden />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-4">
            Mattress Cleaning Pricing for Los Angeles Homes, Apartments, and Condos
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Our mobile service covers Los Angeles homes, apartments, condos, and high-rise buildings, along with
            guest rooms, children&apos;s rooms, and pet-friendly households across the city. In coastal areas,
            indoor humidity and air quality can matter more for drying time and odor control. Busy households with
            kids, pets, or frequent guests often find a routine mattress refresh helpful more often than households
            with lighter use.
          </p>
        </div>
      </section>

      <AnswerBlock
        heading="Quick Answers"
        items={[
          {
            q: "What does mattress cleaning cost in Los Angeles?",
            a: "Starting prices run from $59 for a crib mattress up to $149 for a king mattress, with typical ranges that account for stain severity, odor level, and any add-on treatments.",
          },
          {
            q: "Is the final price always the same as the starting price?",
            a: "No. The starting price is a baseline. Final pricing is confirmed after we understand the mattress size, fabric, stain condition, odor level, and cleaning goals.",
          },
        ]}
      />

      <section className="py-10 bg-surface border-t border-primary/10">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-sm text-text-secondary">
            Want more detail before booking? Read our{" "}
            <Link href="/blog/mattress-cleaning-cost-los-angeles" className="text-cta hover:text-primary-dark font-semibold transition-colors">mattress cleaning cost guide for Los Angeles</Link>,
            {" "}our{" "}
            <Link href="/mattress-stain-guide" className="text-cta hover:text-primary-dark font-semibold transition-colors">mattress stain guide</Link>,{" "}
            <Link href="/mattress-material-cleaning-guide" className="text-cta hover:text-primary-dark font-semibold transition-colors">mattress material cleaning guide</Link>, or{" "}
            <Link href="/professional-vs-diy-mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">professional vs DIY comparison</Link>.
          </p>
        </div>
      </section>

      <CtaSection
        heading="Get a Clear Mattress Cleaning Quote Before We Start"
        body="Send us your mattress size, stain/odor concern, and service address. We'll help you understand the best cleaning option and provide a clear quote before the work begins."
      />

      {/* Form + phone CTA */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
                Free Quote
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-5">
                Need Help Now?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Call now to talk through your mattress size and condition, or send a message and we&apos;ll follow
                up shortly.
              </p>
              <PhoneLink
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-cta text-white font-bold shadow-md shadow-cta/25 hover:bg-primary-dark transition-colors"
                aria-label="Call Organic Mattress Cleaning now at (800) 735-1242"
              >
                <Phone className="w-4 h-4" aria-hidden />
                Call (800) 735-1242
              </PhoneLink>
              <div className="mt-6">
                <Link href="/mattress-cleaning" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:text-primary-dark transition-colors">
                  Explore our mattress cleaning service <ArrowRight className="w-3.5 h-3.5" aria-hidden />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-primary/15 shadow-sm">
              <h3 className="text-lg font-bold text-text-primary mb-1.5">Request Your Free Quote</h3>
              <p className="text-text-secondary text-sm mb-6">We&apos;ll follow up shortly to confirm details.</p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        items={PRICE_FAQS}
        eyebrow="Pricing Questions"
        heading="Mattress Cleaning Pricing: Frequently Asked Questions"
        variant="white"
        relatedLinks={[
          { label: "Organic Mattress Cleaning", href: "/organic-mattress-cleaning" },
          { label: "Mattress Stain Removal", href: "/mattress-stain-removal" },
          { label: "Urine Odor Removal", href: "/urine-odor-removal" },
          { label: "Before & After Gallery", href: "/gallery" },
        ]}
      />
    </>
  );
}
