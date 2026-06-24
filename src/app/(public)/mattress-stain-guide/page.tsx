import type { Metadata } from "next";
import Link from "next/link";
import { Phone, XCircle, AlertTriangle } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { FaqSection } from "@/components/public/sections/FaqSection";
import { LeadForm } from "@/components/public/forms/LeadForm";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildFaqSchema } from "@/lib/schema/faq";
import { STAIN_TYPES, STAIN_CARDS } from "@/data/stainGuide";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Mattress Stain Guide | Organic Mattress Cleaning",
    description:
      "Learn what causes mattress stains, which stains are harder to remove, and when organic mattress stain treatment can help in Los Angeles homes.",
    canonical: "/mattress-stain-guide",
  });
}

const WHAT_NOT_TO_DO = [
  "Do not soak the mattress with water.",
  "Do not use bleach on mattress stains.",
  "Do not mix random household chemicals together.",
  "Do not scrub the stain aggressively.",
  "Do not put sheets back before the mattress is fully dry.",
  "Do not ignore lingering urine odor.",
  "Do not assume every stain is removable.",
  "Do not use strong chemical products on delicate materials without understanding the fabric first.",
];

const WHEN_TO_CALL = [
  "Urine odor that hasn't resolved with home cleanup",
  "Baby mattress accidents",
  "Pet accidents, especially repeated ones",
  "Large stains covering a wide area",
  "Older, set-in stains",
  "Multiple stains across the mattress",
  "Delicate mattress materials",
  "Memory foam, pillow-top, or latex mattresses",
  "Odor present alongside visible staining",
];

const STAIN_FAQS = [
  {
    q: "Can every mattress stain be removed?",
    a: "No. Many stains improve significantly with treatment, but older stains, chemical stains, or stains that have reached deep into the mattress may not fully disappear.",
  },
  {
    q: "Are old yellow mattress stains permanent?",
    a: "Often, yes, at least partially. Yellowing comes from oxidized sweat and body oils, and the longer it's set in, the more likely some discoloration will remain after treatment.",
  },
  {
    q: "Can urine stains be removed from a mattress?",
    a: "Enzyme-based treatment can help significantly with urine stains and odor, though deep or long-set contamination may only partially improve.",
  },
  {
    q: "Why does urine odor stay in a mattress?",
    a: "Uric acid crystals settle into the padding and can reactivate with humidity or heat, which is why surface cleaning alone doesn't always resolve the smell.",
  },
  {
    q: "Can organic cleaning remove blood stains?",
    a: "Fresh blood typically responds well to organic treatment. Older, dried blood stains are more stubborn and may only partially lift.",
  },
  {
    q: "Can sweat stains be cleaned?",
    a: "Yes, sweat stains are usually one of the easier stain types to treat, especially when they haven't built up over many years.",
  },
  {
    q: "Is bleach safe for mattress stains?",
    a: "No. Bleach can damage mattress fabric and doesn't address the underlying cause of odor, especially for urine stains.",
  },
  {
    q: "Can I clean a memory foam stain myself?",
    a: "You can try light spot cleaning, but memory foam holds moisture longer than other materials, so over-wetting is a real risk with DIY attempts.",
  },
  {
    q: "Does stain removal cost extra?",
    a: "Yes, stain removal is priced separately from routine mattress cleaning. See our pricing guide for typical starting ranges.",
  },
  {
    q: "Should I send a photo before booking?",
    a: "It can help. A photo of the stain lets us give you a more informed starting estimate before we arrive.",
  },
  {
    q: "How long does stain treatment take to dry?",
    a: "Drying time varies by treatment size and mattress material. We provide specific drying guidance after each visit.",
  },
  {
    q: "Can you clean baby mattress stains?",
    a: "Yes, using extra-gentle, non-toxic formulas suited to a surface infants are in direct contact with.",
  },
  {
    q: "Can pet stains be treated?",
    a: "Yes. Enzyme-based treatment can help address both the visible stain and the odor that often comes with pet accidents.",
  },
  {
    q: "Is professional mattress stain removal worth it?",
    a: "For stains that haven't responded to home cleanup, professional treatment generally offers a better chance of improvement, using equipment and products not typically available at home.",
  },
];

export default function MattressStainGuidePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Mattress Stain Guide", url: "/mattress-stain-guide" },
  ]);
  const faqSchema = buildFaqSchema(STAIN_FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Mattress Stain Guide", url: "/mattress-stain-guide" }]}
        categoryBadge="Stain Removal • Organic Mattress Cleaning • Los Angeles"
        heading="Mattress Stain Guide"
        subheading="A practical guide to urine stains, sweat stains, yellowing, blood, wine, coffee, food spills, pet stains, and older mattress stains, with honest expectations about what professional organic cleaning can and cannot do."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        ctaSecondaryLabel="(800) 735-1242"
        ctaSecondaryUrl="tel:+18007351242"
        minHeight="min-h-[60vh]"
        showLeadForm
        leadFormSource="mattress-stain-guide-page"
      />

      {/* Direct Answer */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="rounded-2xl bg-primary-light/50 border border-primary/15 p-6 sm:p-8">
            <p className="text-xs font-bold text-cta uppercase tracking-widest mb-3">Quick Answer</p>
            <h2 className="text-lg sm:text-xl font-bold text-text-primary leading-snug mb-3">
              What is the best way to handle mattress stains?
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              The best way to handle a mattress stain depends on the stain type, stain age, mattress fabric, odor
              depth, and whether the stain has already been treated with chemicals. Fresh surface stains are
              usually easier to improve than older stains, deep urine contamination, dye transfer, bleach marks,
              or stains that have reached deeper layers. Professional organic mattress cleaning can help treat
              many visible stains and odors, but results vary by mattress condition.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-4 bg-white pb-12 sm:pb-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="rounded-2xl bg-surface border border-primary/12 p-6 sm:p-8">
            <p className="text-xs font-bold text-cta uppercase tracking-widest mb-4">Quick Facts</p>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="font-semibold text-text-primary">Best time to treat stains</dt>
                <dd className="text-text-secondary">As soon as possible</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Harder stains</dt>
                <dd className="text-text-secondary">Old yellowing, urine, blood, dye transfer, bleach marks, unknown chemical stains</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Risk to avoid</dt>
                <dd className="text-text-secondary">Over-wetting the mattress</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Best professional option</dt>
                <dd className="text-text-secondary">Organic stain treatment with fabric-aware moisture control</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Service area</dt>
                <dd className="text-text-secondary">Los Angeles and surrounding LA communities</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Important note</dt>
                <dd className="text-text-secondary">Not every stain can be fully removed</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Common stains cards */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-10">
            Common Mattress Stains We Help With
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STAIN_CARDS.map((card) => (
              <div key={card.name} className="bg-white rounded-2xl p-6 border border-primary/12">
                <h3 className="text-base font-bold text-text-primary mb-3">{card.name}</h3>
                <dl className="space-y-2.5 text-sm">
                  <div>
                    <dt className="font-semibold text-text-secondary/80 text-xs uppercase tracking-wide">Cause</dt>
                    <dd className="text-text-secondary">{card.cause}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-text-secondary/80 text-xs uppercase tracking-wide">Why It&apos;s Difficult</dt>
                    <dd className="text-text-secondary">{card.whyDifficult}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-text-secondary/80 text-xs uppercase tracking-wide">Treatment</dt>
                    <dd className="text-text-secondary">{card.treatmentNote}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-text-secondary/80 text-xs uppercase tracking-wide">Honest Limitation</dt>
                    <dd className="text-text-secondary/80 italic">{card.limitation}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty table */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">
            Mattress Stain Difficulty Table
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-primary/12 bg-surface">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="bg-primary-light/60 text-left">
                  <th className="px-4 py-3.5 font-bold text-text-primary">Stain Type</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Common Cause</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Difficulty Level</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">What Can Affect Results</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Related Service</th>
                </tr>
              </thead>
              <tbody>
                {STAIN_TYPES.map((stain) => (
                  <tr key={stain.name} className="border-t border-primary/10">
                    <td className="px-4 py-3.5 font-semibold text-text-primary whitespace-nowrap">{stain.name}</td>
                    <td className="px-4 py-3.5 text-text-secondary">{stain.cause}</td>
                    <td className="px-4 py-3.5 text-text-secondary whitespace-nowrap">{stain.difficulty}</td>
                    <td className="px-4 py-3.5 text-text-secondary">{stain.whatAffectsResults}</td>
                    <td className="px-4 py-3.5">
                      <Link
                        href={`/${stain.relatedServiceSlug}`}
                        className="text-cta hover:text-primary-dark font-semibold transition-colors whitespace-nowrap"
                      >
                        View service →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-text-secondary mt-6">
            See our{" "}
            <Link href="/organic-mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">organic mattress cleaning</Link>,{" "}
            <Link href="/pricing" className="text-cta hover:text-primary-dark font-semibold transition-colors">pricing guide</Link>, and{" "}
            <Link href="/gallery" className="text-cta hover:text-primary-dark font-semibold transition-colors">before &amp; after gallery</Link> for more detail.
          </p>
        </div>
      </section>

      {/* What not to do */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">
            What Not To Do With Mattress Stains
          </h2>
          <ul className="space-y-3">
            {WHAT_NOT_TO_DO.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fresh vs old */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-6">
            Fresh Stains vs Old Stains
          </h2>
          <div className="space-y-4">
            <p className="text-text-secondary text-base leading-relaxed">
              Fresh stains usually respond better to treatment than stains that have had time to set in. Once a
              stain dries, it can oxidize or bond more permanently with the mattress fibers, which is why timing
              matters as much as the treatment itself.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Yellowing in particular can become permanent the longer it&apos;s left untreated, since it&apos;s a chemical
              change in the fabric rather than surface dirt. Previous DIY cleaning attempts, especially with
              bleach or strong chemicals, can also affect how a mattress responds to professional treatment
              later.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Deep urine odor is its own category: even if the visible stain looks gone, the odor can linger and
              may need a dedicated enzyme treatment beyond a standard cleaning.
            </p>
          </div>
        </div>
      </section>

      {/* Organic treatment */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-5">
            Organic Mattress Stain Treatment
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Our organic cleaning solutions use a plant-based, non-toxic approach with fabric-aware treatment
            methods and no harsh chemical smell left behind. Moisture is controlled carefully based on the
            mattress material and stain type. We explain realistic expectations before any work begins, since
            results depend on the stain and the mattress itself, not a one-size-fits-all process.
          </p>
        </div>
      </section>

      {/* When to call a professional */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">
            When To Call a Professional
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {WHEN_TO_CALL.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <AlertTriangle className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Local LA context */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-4">
            Mattress Stains in Los Angeles Homes
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            From LA apartments, condos, and high-rise buildings to kids&apos; rooms, pet-friendly homes, and guest
            rooms, mattress stains show up everywhere busy households live. Warm Los Angeles weather can help
            with drying time, but airflow still matters for getting the best result. Our mobile mattress cleaning
            service brings organic stain treatment directly to your home.
          </p>
        </div>
      </section>

      <CtaSection
        heading="Need Help With a Mattress Stain?"
        body="Send us a photo of the stain and tell us the mattress size, stain age, and odor concern. We'll help you understand what is realistic and provide a clear quote before service."
      />

      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
                Talk to Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-5">Get a Free Quote</h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Call now to talk through your stain, or send a message and we&apos;ll follow up shortly.
              </p>
              <PhoneLink
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-cta text-white font-bold shadow-md shadow-cta/25 hover:bg-primary-dark transition-colors"
                aria-label="Call Organic Mattress Cleaning now at (800) 735-1242"
              >
                <Phone className="w-4 h-4" aria-hidden />
                Call (800) 735-1242
              </PhoneLink>
              <div className="mt-6">
                <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:text-primary-dark transition-colors">
                  View Pricing →
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
        items={STAIN_FAQS}
        eyebrow="Stain Questions"
        heading="Mattress Stain Guide: Frequently Asked Questions"
        variant="white"
        relatedLinks={[
          { label: "Mattress Stain Removal", href: "/mattress-stain-removal" },
          { label: "Urine Odor Removal", href: "/urine-odor-removal" },
          { label: "Pricing Guide", href: "/pricing" },
        ]}
      />
    </>
  );
}
