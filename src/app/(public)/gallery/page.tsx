import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ClipboardList, Droplet, Layers, Waves, Thermometer, Ruler, FlaskConical } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { FaqSection } from "@/components/public/sections/FaqSection";
import { LeadForm } from "@/components/public/forms/LeadForm";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { GalleryCard } from "@/components/public/cards/GalleryCard";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildFaqSchema } from "@/lib/schema/faq";
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from "@/data/gallery";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Mattress Cleaning Before & After Gallery | Organic Mattress Cleaning Los Angeles",
    description:
      "View real mattress cleaning before and after photos, stain treatment examples, organic mattress cleaning results, and service photos from Los Angeles homes. Results vary by mattress condition, stain age, fabric type, odor depth, and cleaning goal.",
    canonical: "/gallery",
  });
}

const RESULT_FACTORS = [
  { Icon: ClipboardList, title: "Stain Age", body: "Fresh stains generally respond better than stains that have had months or years to set into the fabric." },
  { Icon: Droplet, title: "Stain Type", body: "Sweat, body oil, food, wine, and urine all behave differently during treatment." },
  { Icon: Layers, title: "Mattress Fabric", body: "Memory foam, hybrid, latex, and natural-fiber covers each respond differently to cleaning solutions." },
  { Icon: Waves, title: "Odor Depth", body: "Surface-level odor is more straightforward than odor that's settled deep into the padding." },
  { Icon: Thermometer, title: "Moisture Sensitivity", body: "Some materials need a slower, lower-moisture approach to avoid over-saturating the mattress." },
  { Icon: Ruler, title: "Mattress Size & Thickness", body: "Larger and thicker mattresses have more surface area and material to treat." },
  { Icon: FlaskConical, title: "One-Sided vs Two-Sided", body: "Cleaning both sides roughly doubles the surface area being treated." },
  { Icon: ClipboardList, title: "Prior Treatments", body: "Mattresses that have had harsh chemical treatments before can respond differently to our organic process." },
];

const GALLERY_FAQS = [
  {
    q: "Can every mattress stain be removed?",
    a: "Not always. Many stains improve significantly, but older stains, chemical stains, or stains that have reached deep into the mattress may not fully disappear.",
  },
  {
    q: "Do old urine stains come out completely?",
    a: "It depends on how long the stain has set and how deep it's reached. Enzyme-based treatment can help significantly, but very old or deep contamination may only partially improve.",
  },
  {
    q: "Can organic cleaning improve mattress odor?",
    a: "Yes. Our organic, plant-based process is designed to help reduce odor from sweat, pets, and general buildup, though results vary by odor depth and mattress condition.",
  },
  {
    q: "Do you clean both sides of the mattress?",
    a: "Yes, two-sided cleaning is available and typically adds to the base price since it roughly doubles the surface area being treated.",
  },
  {
    q: "Can you clean baby mattresses?",
    a: "Yes. We use extra-gentle, non-toxic formulas for crib and baby mattresses specifically because infants spend extended time in direct contact with the surface.",
  },
  {
    q: "Can you clean memory foam mattresses?",
    a: "Yes. We use a low-moisture approach suited to memory foam's denser material, since foam holds onto moisture longer than other mattress types.",
  },
  {
    q: "How long does a mattress take to dry?",
    a: "Drying time depends on the mattress type, moisture level used, and ventilation in the room. We provide drying guidance specific to your mattress after each visit.",
  },
  {
    q: "Should I send photos before booking?",
    a: "It can help. Sending a photo of the stain or concern lets us give you a more informed starting estimate before we arrive.",
  },
  {
    q: "Do results vary by mattress type?",
    a: "Yes. Memory foam, hybrid, latex, and innerspring mattresses can all respond differently to the same treatment, which is part of why we inspect before recommending a method.",
  },
  {
    q: "Is stain removal included in standard mattress cleaning?",
    a: "No, stain removal is priced separately from routine cleaning. See our pricing guide for typical starting ranges.",
  },
  {
    q: "Can pet odor be treated?",
    a: "Yes. Enzyme-based, organic treatment can help break down the source of pet odor, though results depend on how deep the odor has set in.",
  },
  {
    q: "Can yellow mattress stains be cleaned?",
    a: "Often, yes. Yellowing from sweat and body oils typically responds well to treatment, though very old yellowing may only partially improve.",
  },
];

export default function GalleryPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Gallery", url: "/gallery" },
  ]);
  const faqSchema = buildFaqSchema(GALLERY_FAQS);

  return (
    <>
      {/*
        Real project photos only — no fabricated before/after pairs (we don't
        have separate before-image + after-image files for the same
        mattress). No Review schema, no AggregateRating, no fake ratings.
      */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Gallery", url: "/gallery" }]}
        categoryBadge="Real Project Photos • Organic Mattress Cleaning • Los Angeles"
        heading="Mattress Cleaning Before & After Gallery"
        subheading="See real examples of mattress cleaning, stain treatment, odor treatment, and organic mattress care. Every mattress is different, and final results depend on fabric, stain age, odor depth, mattress condition, and previous cleaning attempts."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        ctaSecondaryLabel="(800) 735-1242"
        ctaSecondaryUrl="tel:+18007351242"
        minHeight="min-h-[60vh]"
        showLeadForm
        leadFormSource="gallery-page"
      />

      <div className="bg-white border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-3.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
          <p className="text-xs sm:text-sm font-semibold text-primary-dark">
            Organic solutions &middot; Family-safe &middot; Pet-safe &middot; Stain &amp; odor treatment options
          </p>
        </div>
      </div>

      {/* Quick Answer Box */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="rounded-2xl bg-primary-light/50 border border-primary/15 p-6 sm:p-8">
            <p className="text-xs font-bold text-cta uppercase tracking-widest mb-3">Quick Answer</p>
            <h2 className="text-lg sm:text-xl font-bold text-text-primary leading-snug mb-3">
              What can mattress cleaning before-and-after photos show?
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Mattress cleaning before-and-after photos can show visible improvement from everyday buildup, sweat
              stains, surface spots, food or drink spills, pet-related concerns, and urine odor treatment. Results
              vary based on mattress fabric, stain age, stain type, odor depth, previous cleaning attempts, and
              whether the mattress needs routine cleaning, stain treatment, sanitizing, or two-sided cleaning.
            </p>
          </div>
        </div>
      </section>

      {/* Project photos grid */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
            Real Project Photos
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-3">
            Mattress Cleaning Project Photos
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-4 max-w-2xl">
            These are real photos from our process, organized by category. We don&apos;t have matched before/after
            image pairs for every job, so these are shown as project photos rather than documented before/after
            comparisons.
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {GALLERY_CATEGORIES.map((cat) => (
              <span key={cat} className="px-3.5 py-1.5 rounded-full bg-white border border-primary/15 text-xs font-semibold text-text-primary">
                {cat}
              </span>
            ))}
          </div>

          {GALLERY_CATEGORIES.map((category) => {
            const items = GALLERY_ITEMS.filter((item) => item.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category} className="mb-12">
                <h3 className="text-lg font-bold text-text-primary mb-5">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {items.map((item) => (
                    <GalleryCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* What results depend on */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-10">
            What Real Mattress Cleaning Results Depend On
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RESULT_FACTORS.map((factor) => (
              <div key={factor.title} className="bg-surface rounded-2xl p-5 border border-primary/12">
                <div className="w-9 h-9 rounded-xl bg-primary-light ring-1 ring-primary/15 flex items-center justify-center mb-3">
                  <factor.Icon className="w-4.5 h-4.5 text-cta" aria-hidden />
                </div>
                <h3 className="text-sm font-bold text-text-primary mb-1.5">{factor.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{factor.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common results customers ask about */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">
            Common Results Customers Ask About
          </h2>
          <div className="space-y-6">
            <p className="text-text-secondary text-sm leading-relaxed">
              <strong className="text-text-primary">Sweat stains and yellowing</strong> typically respond well to
              organic treatment, since these are usually surface-level buildup rather than deeply set stains. See
              our <Link href="/mattress-stain-removal" className="text-cta hover:text-primary-dark font-semibold transition-colors">stain removal service</Link>.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              <strong className="text-text-primary">Urine accidents and pet odor</strong> often need enzyme-based
              treatment to address the uric acid crystals that carry odor, not just surface cleaning. See our{" "}
              <Link href="/urine-odor-removal" className="text-cta hover:text-primary-dark font-semibold transition-colors">urine odor removal service</Link>.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              <strong className="text-text-primary">Food and drink spills</strong> respond best when treated soon
              after the spill. Older, set-in spills are more stubborn. Learn more about{" "}
              <Link href="/mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">mattress cleaning</Link>.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              <strong className="text-text-primary">Dust mite-related buildup</strong> isn&apos;t visible the same
              way a stain is, but extraction cleaning can help reduce it. See{" "}
              <Link href="/dust-mite-mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">dust mite mattress cleaning</Link>.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              <strong className="text-text-primary">Baby mattress cleaning</strong> uses extra-gentle, non-toxic
              formulas. See our{" "}
              <Link href="/baby-mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">baby mattress cleaning service</Link>.
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              <strong className="text-text-primary">Routine organic refresh and sanitizing goals</strong> are
              available even without a specific stain or odor concern. See{" "}
              <Link href="/organic-mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">organic mattress cleaning</Link>{" "}
              and{" "}
              <Link href="/mattress-sanitizing" className="text-cta hover:text-primary-dark font-semibold transition-colors">mattress sanitizing</Link>.
            </p>
          </div>
          <p className="text-sm text-text-secondary mt-8">
            See our{" "}
            <Link href="/pricing" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              pricing guide
            </Link>{" "}
            for typical starting prices, our{" "}
            <Link href="/mattress-stain-guide" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              mattress stain guide
            </Link>{" "}
            for honest expectations by stain type, our{" "}
            <Link href="/after-care" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              after-care guide
            </Link>{" "}
            for what to do once cleaning is done, or{" "}
            <Link href="/contact" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              contact us
            </Link>{" "}
            with questions.
          </p>
        </div>
      </section>

      <CtaSection
        heading="Want to Know What's Possible for Your Mattress?"
        body="Send us a photo of the mattress, stain, or odor concern. We'll help you understand the best cleaning option and give you a clear quote before we start."
      />

      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
                Talk to Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-5">
                Get My Free Quote
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Call now to talk through your mattress, or send a message and we&apos;ll follow up shortly.
              </p>
              <PhoneLink
                className="inline-flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-cta text-white font-bold shadow-md shadow-cta/25 hover:bg-primary-dark transition-colors"
                aria-label="Call Organic Mattress Cleaning now at (800) 735-1242"
              >
                <Phone className="w-4 h-4" aria-hidden />
                Call (800) 735-1242
              </PhoneLink>
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
        items={GALLERY_FAQS}
        eyebrow="Gallery Questions"
        heading="Before & After Gallery: Frequently Asked Questions"
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
