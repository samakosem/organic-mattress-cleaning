import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Heart,
  Baby,
  Sofa,
  PawPrint,
  Wind,
  BedDouble,
  Building2,
  Layers,
  ClipboardList,
  BookOpen,
  Phone,
} from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { FaqSection } from "@/components/public/sections/FaqSection";
import { AnswerBlock } from "@/components/public/sections/AnswerBlock";
import { LeadForm } from "@/components/public/forms/LeadForm";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildFaqSchema } from "@/lib/schema/faq";
import { getImagesForUse } from "@/data/images";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Organic Mattress Cleaning Products | Non-Toxic Mattress Cleaning Los Angeles",
    description:
      "Learn about our organic, plant-based mattress cleaning products and non-toxic process for mattresses, upholstery and family homes in Los Angeles.",
    canonical: "/organic-cleaning-products",
  });
}

const DESIGNED_FOR = [
  {
    Icon: BedDouble,
    title: "Mattresses",
    body: "Our plant-based approach works on everyday mattress fabric, including memory foam, hybrid, and innerspring alike, without harsh chemical odor left behind.",
  },
  {
    Icon: Baby,
    title: "Baby Mattresses",
    body: "Crib and toddler mattresses get a gentle, non-toxic treatment, since infants spend extended time in direct contact with the surface.",
  },
  {
    Icon: Sofa,
    title: "Upholstery",
    body: "The same organic cleaning solutions used on mattresses extend naturally to upholstered surfaces and indoor fabric that see everyday use.",
  },
  {
    Icon: PawPrint,
    title: "Pet-Friendly Homes",
    body: "Pet-safe formulas mean pets can return to furniture and bedrooms without lingering chemical residue once the area has dried.",
  },
  {
    Icon: Wind,
    title: "Allergy-Sensitive Households",
    body: "Fragrance-free, non-toxic cleaning avoids introducing a new irritant while helping reduce dust and debris buildup in the home.",
  },
  {
    Icon: ShieldCheck,
    title: "Bedrooms and Guest Rooms",
    body: "Primary bedrooms and occasionally used guest rooms both get the same family-safe standard, whether in daily or light use.",
  },
  {
    Icon: Building2,
    title: "Apartments and Condos",
    body: "Mobile service works the same in multi-unit buildings as it does in single-family homes, with no harsh smell to manage in shared-air spaces.",
  },
  {
    Icon: Layers,
    title: "Indoor Fabric Surfaces",
    body: "Beyond mattresses, the same gentle, plant-based approach is suited to other indoor fabric surfaces that benefit from a non-toxic standard.",
  },
];

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Mattress Inspection",
    body: "We check fabric type, visible stains, odor, moisture sensitivity, and overall mattress condition before deciding on an approach.",
  },
  {
    n: "02",
    title: "Organic Pre-Treatment When Needed",
    body: "Visible stains or odor-prone areas get a targeted, plant-based spot treatment before the broader cleaning begins.",
  },
  {
    n: "03",
    title: "Fabric-Safe Cleaning",
    body: "The cleaning method is selected based on the mattress material and condition. What works for memory foam isn't always right for a delicate natural-fiber cover.",
  },
  {
    n: "04",
    title: "Odor & Sanitizing Options",
    body: "Optional treatment is available for general odor, urine accidents, or sanitizing goals. We don't promise a medical outcome, just a cleaner, fresher result.",
  },
  {
    n: "05",
    title: "Moisture Control",
    body: "Mattresses need careful, low-moisture care to avoid over-saturating the padding, with drying guidance specific to the materials involved.",
  },
  {
    n: "06",
    title: "Final Care Guidance",
    body: "Before we leave, we walk through simple guidance for keeping the mattress fresher between cleanings.",
  },
];

const MATTRESS_TYPES = [
  { title: "Memory Foam", body: "Responds well to low-moisture, plant-based treatment that avoids over-saturating the foam." },
  { title: "Hybrid Mattresses", body: "Combine foam and coil layers, so the cleaning approach accounts for both materials." },
  { title: "Pillow-Top Mattresses", body: "Extra cushioning layers need a careful approach so moisture doesn't get trapped near the surface." },
  { title: "Latex Mattresses", body: "Natural latex responds differently to cleaning solutions than synthetic foam, so it's evaluated individually." },
  { title: "Innerspring Mattresses", body: "Traditional coil construction is generally compatible with our standard organic cleaning approach." },
  { title: "Crib & Baby Mattresses", body: "Smaller surface, gentle formulas, and extra care given how directly infants contact the surface." },
  { title: "Guest Room Mattresses", body: "Often lightly used but long overdue for attention, making them a good candidate for a routine organic refresh." },
  { title: "Pet-Affected Mattresses", body: "May need enzyme-based odor treatment alongside the standard organic cleaning process." },
];

const ORGANIC_HELPS_WITH = [
  { label: "Routine mattress refresh", href: "/organic-mattress-cleaning" },
  { label: "Sweat and body oil buildup", href: "/mattress-cleaning" },
  { label: "Food and drink spills", href: "/mattress-stain-removal" },
  { label: "Urine odor concerns", href: "/urine-odor-removal" },
  { label: "Pet odor", href: "/urine-odor-removal" },
  { label: "Dust mite-related buildup", href: "/dust-mite-mattress-cleaning" },
  { label: "Baby mattress cleaning", href: "/baby-mattress-cleaning" },
  { label: "Allergy-focused cleaning", href: "/allergy-mattress-cleaning" },
  { label: "Mattress sanitizing", href: "/mattress-sanitizing" },
];

const PRODUCTS_FAQS = [
  {
    q: "What makes your mattress cleaning organic?",
    a: "We use organic cleaning solutions built on a plant-based approach instead of bleach, ammonia, or synthetic fragrance. The formulas are designed to clean mattress fabric without leaving behind harsh chemical residue.",
  },
  {
    q: "Are your mattress cleaning products non-toxic?",
    a: "Yes. Our standard process relies on non-toxic, plant-based formulas on every visit, not as a premium add-on.",
  },
  {
    q: "Is organic mattress cleaning safe for kids?",
    a: "Our organic, non-toxic approach is designed to be a better fit for families who prefer to avoid harsh chemical exposure in bedrooms and nurseries.",
  },
  {
    q: "Is organic mattress cleaning safe for pets?",
    a: "Yes, our formulas are pet-safe by design, with no harsh chemical residue left behind once the mattress has dried.",
  },
  {
    q: "Does organic mattress cleaning leave a chemical smell?",
    a: "No. Avoiding harsh chemical odor is one of the main reasons we use plant-based formulas instead of bleach or ammonia-based products.",
  },
  {
    q: "Can organic cleaning remove mattress stains?",
    a: "Our process can help lift many common stains. Results vary depending on the stain type, age, and how deep it's set into the fabric. Older or chemical stains may not fully disappear.",
  },
  {
    q: "Can organic cleaning remove urine odor from a mattress?",
    a: "Enzyme-based, organic treatment can help break down the uric acid crystals that carry urine odor. Deep or long-set contamination may need a dedicated urine odor removal visit.",
  },
  {
    q: "Is organic mattress cleaning good for baby mattresses?",
    a: "Yes. Our baby mattress cleaning uses extra-gentle, non-toxic formulas specifically because infants spend extended time in direct contact with the mattress.",
  },
  {
    q: "Is organic mattress cleaning better than traditional cleaning?",
    a: "For most everyday mattress buildup, plant-based formulas paired with professional extraction equipment can be just as effective as traditional chemical methods, without the chemical residue trade-off.",
  },
  {
    q: "Do organic products work on memory foam mattresses?",
    a: "Yes. We use a low-moisture approach suited to memory foam's denser material, since foam holds onto moisture longer than other mattress types.",
  },
  {
    q: "Will my mattress be wet after cleaning?",
    a: "Our low-moisture process is designed to minimize how damp the mattress feels afterward, and we provide drying guidance so it's ready for use as soon as reasonably possible.",
  },
  {
    q: "Do you use harsh chemicals?",
    a: "No. We avoid bleach, ammonia, and synthetic fragrance in favor of organic, plant-based cleaning solutions.",
  },
  {
    q: "Is organic mattress cleaning more expensive?",
    a: "Organic, non-toxic cleaning is our standard process on every visit, not a separate upgrade, so it's reflected in our regular starting prices rather than priced as an add-on. See our pricing guide for typical ranges.",
  },
  {
    q: "Do you offer organic upholstery cleaning too?",
    a: "Our organic cleaning approach is designed for mattresses and extends naturally to upholstered surfaces and other indoor fabric. Ask when requesting a quote.",
  },
  {
    q: "How do I know which cleaning method my mattress needs?",
    a: "We inspect the mattress fabric, stains, and odor before choosing a method, and walk you through the plan and a clear quote before any work begins.",
  },
];

export default function OrganicCleaningProductsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Our Organic Cleaning Products", url: "/organic-cleaning-products" },
  ]);
  const faqSchema = buildFaqSchema(PRODUCTS_FAQS);
  const heroImage = getImagesForUse("organic-cleaning-products")[0];
  const processImage = getImagesForUse("organic-cleaning-products-inline")[0];

  return (
    <>
      {/*
        Educational trust page. No AggregateRating, no Review schema, no
        unsupported certification or medical claims — only BreadcrumbList and
        FAQPage schema, matching the visible content on this page.
      */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Our Organic Cleaning Products", url: "/organic-cleaning-products" }]}
        categoryBadge="Organic • Non-Toxic • Plant-Based"
        heading="Our Organic Mattress Cleaning Products"
        subheading="We use organic cleaning solutions and a non-toxic cleaning approach designed for mattresses, upholstery, children's rooms, pet-friendly homes, and indoor family environments."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        ctaSecondaryLabel="(800) 735-1242"
        ctaSecondaryUrl="tel:+18007351242"
        minHeight="min-h-[60vh]"
        showLeadForm
        leadFormSource="organic-products-page"
      />

      <div className="bg-white border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-3.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center">
          <p className="text-xs sm:text-sm font-semibold text-primary-dark">
            Organic cleaning solutions &middot; Family-safe &middot; Pet-safe &middot; No harsh chemical smell
          </p>
        </div>
      </div>

      {/* Quick Answer Box */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="rounded-2xl bg-primary-light/50 border border-primary/15 p-6 sm:p-8">
            <p className="text-xs font-bold text-cta uppercase tracking-widest mb-3">Quick Answer</p>
            <h2 className="text-lg sm:text-xl font-bold text-text-primary leading-snug mb-3">
              What makes our mattress cleaning organic?
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Our mattress cleaning service uses organic cleaning solutions and a plant-based, non-toxic approach
              designed for mattresses, upholstery, baby mattresses, and indoor home environments. The goal is to
              clean and refresh mattresses without harsh chemical odors, sticky residue, or unnecessary exposure to
              aggressive cleaning products. Our process is family-safe, pet-safe, and tailored to the mattress
              fabric, stain condition, odor level, and cleaning goal.
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
                <dt className="font-semibold text-text-primary">Service</dt>
                <dd className="text-text-secondary">Organic mattress cleaning products and non-toxic cleaning process</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Service area</dt>
                <dd className="text-text-secondary">Los Angeles and surrounding LA communities</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Cleaning approach</dt>
                <dd className="text-text-secondary">Organic cleaning solutions, plant-based, non-toxic</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Best for</dt>
                <dd className="text-text-secondary">Mattresses, upholstery, baby mattresses, pet-friendly homes, family bedrooms</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Avoids</dt>
                <dd className="text-text-secondary">Harsh chemical smell and sticky residue</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Important note</dt>
                <dd className="text-text-secondary">Results depend on mattress fabric, stain type, odor level, and condition</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Why we use organic cleaning solutions */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-5">
                Why We Use Organic Cleaning Solutions
              </h2>
              <div className="space-y-4">
                <p className="text-text-secondary text-base leading-relaxed">
                  Bedrooms are some of the most personal indoor spaces in a home. People spend roughly a third of
                  their life sleeping on a mattress, and in many households, children and pets have close, direct
                  contact with that same surface every day.
                </p>
                <p className="text-text-secondary text-base leading-relaxed">
                  Harsh chemical odors can be unpleasant in any indoor space, but they matter even more in a room
                  meant for rest. Organic, plant-based cleaning is a better fit for family homes precisely because
                  it&apos;s designed to be effective without making the bedroom smell like a chemical cleanup afterward.
                </p>
                <p className="text-text-secondary text-base leading-relaxed">
                  This is not a tradeoff between effectiveness and safety. It is our standard approach on every
                  visit, built for mattresses and indoor fabrics specifically, with low-moisture care when
                  appropriate and a focus on being gentle on fabric while still addressing everyday buildup.
                </p>
              </div>
            </div>
            {heroImage && (
              <div className="relative rounded-3xl overflow-hidden border border-primary/15 shadow-lg shadow-primary/10">
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
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

      {/* What our approach is designed for */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-10">
            What Our Organic Cleaning Approach Is Designed For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DESIGNED_FOR.map((item) => (
              <div
                key={item.title}
                className="bg-surface rounded-2xl p-6 border border-primary/12 hover:border-cta/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-light ring-1 ring-primary/15 flex items-center justify-center shrink-0">
                  <item.Icon className="w-5 h-5 text-cta" aria-hidden />
                </div>
                <h3 className="font-bold text-text-primary text-base leading-snug">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organic vs traditional comparison table */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">
            Organic vs Traditional Mattress Cleaning
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-primary/12 bg-white">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="bg-primary-light/60 text-left">
                  <th className="px-4 py-3.5 font-bold text-text-primary">Cleaning Factor</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Organic / Non-Toxic Approach</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Traditional Harsh Chemical Approach</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Odor after cleaning", "No harsh chemical smell", "Strong fragrance often used to mask chemical odor"],
                  ["Indoor comfort", "Designed for everyday bedroom use", "Can leave noticeable odor in the room for a while"],
                  ["Family and pet considerations", "Family-safe and pet-safe by design", "May require longer wait time before resuming normal use"],
                  ["Fabric care", "Gentle on fabric, low-moisture when appropriate", "Can vary by product strength and formula"],
                  ["Residue concern", "No sticky residue", "Some products can leave residue behind"],
                  ["Bedroom use", "Built specifically for sleeping surfaces", "Often adapted from general-purpose cleaning products"],
                  ["Cleaning goal", "Helps refresh and reduce buildup", "Can be effective for tough buildup, depending on formula"],
                  ["Best for", "Family homes, nurseries, pet-friendly households", "Situations where a household has no chemical sensitivity concerns"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-primary/10">
                    {row.map((cell, i) => (
                      <td key={i} className={i === 0 ? "px-4 py-3.5 font-semibold text-text-primary" : "px-4 py-3.5 text-text-secondary"}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-text-secondary/70 mt-4">
            This comparison reflects general differences in approach, not a claim about every traditional cleaning
            product or provider. Results for either approach vary based on mattress condition.
          </p>
        </div>
      </section>

      {/* Non-toxic process steps */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-10">
            Our Non-Toxic Mattress Cleaning Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="bg-surface rounded-2xl p-6 border border-primary/12">
                <span className="text-xs font-bold text-cta/60 tracking-widest">{step.n}</span>
                <h3 className="text-base font-bold text-text-primary mt-2 mb-2">{step.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
          {processImage && (
            <div className="relative rounded-3xl overflow-hidden border border-primary/15 shadow-sm mt-10 max-w-3xl mx-auto">
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={processImage.src}
                  alt={processImage.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mattress types */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-3">
            Mattress Types We Clean With Organic Solutions
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-8 max-w-2xl">
            Every mattress is evaluated before cleaning, since fabric and construction affect the safest, most
            effective method.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MATTRESS_TYPES.map((type) => (
              <div key={type.title} className="bg-white rounded-2xl p-5 border border-primary/12">
                <h3 className="text-sm font-bold text-text-primary mb-1.5">{type.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{type.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safe for kids, pets, family homes */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-light ring-1 ring-primary/15 mb-6">
            <Heart className="w-6 h-6 text-primary-dark" aria-hidden />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-5">
            Safe for Kids, Pets, and Everyday Family Homes
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            From kids&apos; rooms and nurseries to pet-friendly homes and other sensitive indoor spaces, our process
            is built around no harsh chemical smell, no sticky residue, and a method designed specifically for
            sleeping surfaces. It&apos;s a better fit for families who prefer a non-toxic cleaning approach over
            traditional chemical-heavy methods.
          </p>
        </div>
      </section>

      {/* What organic cleaning can help with */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">
            What Organic Mattress Cleaning Can Help With
          </h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {ORGANIC_HELPS_WITH.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2.5 rounded-full bg-white border border-primary/15 text-sm font-semibold text-text-primary hover:border-cta/35 hover:text-cta transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-text-secondary">
            See our{" "}
            <Link href="/pricing" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              mattress cleaning price guide
            </Link>{" "}
            for typical starting prices, view our{" "}
            <Link href="/gallery" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              before &amp; after gallery
            </Link>{" "}
            for real project photos, read our{" "}
            <Link href="/mattress-material-cleaning-guide" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              mattress material cleaning guide
            </Link>{" "}
            or{" "}
            <Link href="/professional-vs-diy-mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              professional vs DIY comparison
            </Link>
            , or{" "}
            <Link href="/contact" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              contact us
            </Link>{" "}
            with questions before booking.
          </p>
        </div>
      </section>

      {/* Results depend on condition */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-6">
            Important: Results Depend on Mattress Condition
          </h2>
          <ul className="space-y-3">
            {[
              "Older stains may not fully disappear, even with thorough treatment.",
              "Deep urine contamination may need a dedicated enzyme treatment beyond routine cleaning.",
              "Different fabrics respond differently. What works on memory foam may not work the same on a natural-fiber cover.",
              "Chemical stains, bleach marks, dye transfer, and old yellowing can be permanent.",
              "The final method depends on the mattress fabric and our inspection findings.",
              "You'll get a clear explanation of what to expect before any work begins.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <ClipboardList className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden />
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
            Organic Mattress Cleaning Products for Los Angeles Homes
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Our organic, non-toxic approach travels with us across Los Angeles homes, apartments, condos, and
            high-rise buildings, including guest rooms and nurseries in family and pet-friendly households. In
            coastal communities, indoor air comfort can matter more for drying time and odor control. For busy city
            living, a non-toxic standard means routine mattress refreshes don&apos;t add another layer of chemical
            exposure to an already active household.
          </p>
        </div>
      </section>

      <AnswerBlock
        heading="Quick Answers"
        items={[
          {
            q: "Is your mattress cleaning process truly non-toxic?",
            a: "Yes. Our standard process uses organic, plant-based formulas instead of bleach or ammonia-based products, with no harsh chemical residue left behind.",
          },
          {
            q: "Can organic cleaning fully remove every stain or odor?",
            a: "Not always. Results vary based on mattress condition, and older or chemical stains may improve significantly but not disappear completely.",
          },
        ]}
      />

      <CtaSection
        heading="Get a Free Quote for Organic Mattress Cleaning"
        body="Tell us about your mattress and we'll explain the right cleaning approach and a clear quote before any work begins."
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
                Questions About Our Process?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Call now to ask about our organic cleaning solutions, or send a message and we&apos;ll follow up
                shortly.
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
                  <BookOpen className="w-3.5 h-3.5" aria-hidden />
                  View our price guide
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
        items={PRODUCTS_FAQS}
        eyebrow="Organic Cleaning Questions"
        heading="Organic Mattress Cleaning: Frequently Asked Questions"
        variant="white"
        relatedLinks={[
          { label: "Organic Mattress Cleaning", href: "/organic-mattress-cleaning" },
          { label: "Mattress Cleaning", href: "/mattress-cleaning" },
          { label: "Pricing Guide", href: "/pricing" },
          { label: "Before & After Gallery", href: "/gallery" },
        ]}
      />
    </>
  );
}
