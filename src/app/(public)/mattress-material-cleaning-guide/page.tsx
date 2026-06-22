import type { Metadata } from "next";
import Link from "next/link";
import { Phone, XCircle } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { FaqSection } from "@/components/public/sections/FaqSection";
import { LeadForm } from "@/components/public/forms/LeadForm";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildFaqSchema } from "@/lib/schema/faq";
import { MATERIAL_TYPES, MATERIAL_DEEP_DIVES } from "@/data/materialGuide";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Mattress Material Cleaning Guide | Organic Mattress Cleaning",
    description:
      "Learn how mattress material affects cleaning methods, moisture control, stain treatment, drying time, and organic mattress cleaning options for memory foam, latex, hybrid, pillow-top, innerspring, and baby mattresses.",
    canonical: "/mattress-material-cleaning-guide",
  });
}

const WHAT_CAN_GO_WRONG = [
  "Over-wetting the mattress, especially memory foam or pillow-top layers",
  "Slow drying that leaves the mattress damp longer than necessary",
  "Odor trapped deeper instead of being addressed at the source",
  "Residue left behind from the wrong cleaning product",
  "Fabric discoloration from an incompatible cleaning solution",
  "Pushing a stain deeper into the padding instead of lifting it out",
  "Using harsh chemicals on delicate or natural materials",
];

const MATERIAL_FAQS = [
  {
    q: "Can memory foam mattresses be professionally cleaned?",
    a: "Yes. We use a low-moisture, organic approach specifically suited to memory foam's denser material and slower drying time.",
  },
  {
    q: "Can latex mattresses be cleaned?",
    a: "Yes, though the fabric cover and latex type matter. We inspect the cover before selecting a cleaning method.",
  },
  {
    q: "Are pillow-top mattresses harder to clean?",
    a: "The padded top layer can trap moisture more than a flatter mattress, so we use a careful, low-moisture approach for pillow-top mattresses.",
  },
  {
    q: "Is hybrid mattress cleaning different?",
    a: "Hybrid mattresses combine coil and foam or latex layers, so we focus treatment on the fabric top and comfort layer while accounting for the layered construction.",
  },
  {
    q: "Can you clean baby mattresses?",
    a: "Yes, using extra-gentle, non-toxic formulas suited to a surface infants are in direct, prolonged contact with.",
  },
  {
    q: "Can you remove urine odor from memory foam?",
    a: "Enzyme-based treatment can help, though foam holds odor differently than other materials, so results vary based on how deep it's set.",
  },
  {
    q: "Will my mattress get too wet?",
    a: "We use a low-moisture approach and select the method based on your specific mattress material to minimize this risk.",
  },
  {
    q: "How long does a memory foam mattress take to dry?",
    a: "Memory foam typically takes longer to dry than innerspring mattresses due to its density. We provide specific drying guidance after each visit.",
  },
  {
    q: "Can mattress toppers be cleaned?",
    a: "Yes, mattress toppers can generally be cleaned using a similar fabric-aware approach to the mattress itself.",
  },
  {
    q: "Is organic cleaning safe for delicate mattress materials?",
    a: "Our organic, non-toxic approach is generally gentler than harsh chemical alternatives, but we still inspect delicate materials individually before cleaning.",
  },
  {
    q: "Does mattress material affect price?",
    a: "It can be a factor in the approach used, though our starting prices are primarily based on mattress size. See our pricing guide for typical ranges.",
  },
  {
    q: "Should I send a mattress label photo?",
    a: "It can help us understand the material in advance, especially for latex or specialty foam mattresses.",
  },
];

export default function MattressMaterialGuidePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Mattress Material Cleaning Guide", url: "/mattress-material-cleaning-guide" },
  ]);
  const faqSchema = buildFaqSchema(MATERIAL_FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Mattress Material Cleaning Guide", url: "/mattress-material-cleaning-guide" }]}
        categoryBadge="Memory Foam • Latex • Hybrid • Pillow-Top"
        heading="Mattress Material Cleaning Guide"
        subheading="Different mattress materials need different cleaning approaches. Learn how fabric, foam, latex, pillow-top layers, and mattress construction affect stain treatment, odor removal, drying time, and organic mattress cleaning."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        ctaSecondaryLabel="(800) 735-1242"
        ctaSecondaryUrl="tel:+18007351242"
        minHeight="min-h-[60vh]"
      />

      {/* Direct Answer */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="rounded-2xl bg-primary-light/50 border border-primary/15 p-6 sm:p-8">
            <p className="text-xs font-bold text-cta uppercase tracking-widest mb-3">Quick Answer</p>
            <h2 className="text-lg sm:text-xl font-bold text-text-primary leading-snug mb-3">
              Why does mattress material matter when cleaning?
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Mattress material matters because memory foam, latex, hybrid, pillow-top, innerspring, and baby
              mattresses can respond differently to moisture, cleaning solutions, stain treatment, and drying
              time. A professional cleaning method should be selected based on mattress construction, fabric
              sensitivity, stain type, odor depth, and moisture control needs.
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
                <dt className="font-semibold text-text-primary">Memory foam</dt>
                <dd className="text-text-secondary">Moisture-sensitive, needs careful low-moisture cleaning</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Latex</dt>
                <dd className="text-text-secondary">May require gentle fabric-aware care</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Pillow-top</dt>
                <dd className="text-text-secondary">Stains can settle into upper padding</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Hybrid</dt>
                <dd className="text-text-secondary">Layered construction can affect drying</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Baby mattresses</dt>
                <dd className="text-text-secondary">Require extra care and non-toxic product selection</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Best approach</dt>
                <dd className="text-text-secondary">Inspect before cleaning</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Material comparison table */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">
            Mattress Material Comparison Table
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-primary/12 bg-white">
            <table className="w-full text-sm min-w-[760px]">
              <thead>
                <tr className="bg-primary-light/60 text-left">
                  <th className="px-4 py-3.5 font-bold text-text-primary">Mattress Type</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Cleaning Concern</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Moisture Sensitivity</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Common Issues</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Best Cleaning Approach</th>
                </tr>
              </thead>
              <tbody>
                {MATERIAL_TYPES.map((mat) => (
                  <tr key={mat.type} className="border-t border-primary/10">
                    <td className="px-4 py-3.5 font-semibold text-text-primary whitespace-nowrap">
                      <Link href={`/${mat.relatedServiceSlug}`} className="hover:text-cta transition-colors">{mat.type}</Link>
                    </td>
                    <td className="px-4 py-3.5 text-text-secondary">{mat.cleaningConcern}</td>
                    <td className="px-4 py-3.5 text-text-secondary whitespace-nowrap">{mat.moistureSensitivity}</td>
                    <td className="px-4 py-3.5 text-text-secondary">{mat.commonIssues}</td>
                    <td className="px-4 py-3.5 text-text-secondary">{mat.bestApproach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Deep dives */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="space-y-12">
            {MATERIAL_DEEP_DIVES.map((dive) => (
              <div key={dive.title}>
                <h2 className="text-2xl font-bold text-text-primary leading-tight mb-4">{dive.title}</h2>
                <div className="space-y-3">
                  {dive.paragraphs.map((p, i) => (
                    <p key={i} className="text-text-secondary text-base leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What can go wrong */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">
            What Can Go Wrong With the Wrong Cleaning Method
          </h2>
          <ul className="space-y-3">
            {WHAT_CAN_GO_WRONG.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Organic by material */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-5">
            Organic Cleaning by Mattress Material
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Our organic cleaning solutions and non-toxic process are designed to fit a wide range of mattress
            materials, but we don&apos;t apply the exact same method to every mattress without inspecting it
            first. Foam, latex, fabric covers, and natural materials each get a method suited to their specific
            moisture sensitivity and condition.
          </p>
        </div>
      </section>

      <section className="py-12 bg-surface border-t border-primary/10">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-sm text-text-secondary">
            See our{" "}
            <Link href="/organic-mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">organic mattress cleaning</Link>,{" "}
            <Link href="/mattress-sanitizing" className="text-cta hover:text-primary-dark font-semibold transition-colors">mattress sanitizing</Link>,{" "}
            <Link href="/baby-mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">baby mattress cleaning</Link>,{" "}
            <Link href="/urine-odor-removal" className="text-cta hover:text-primary-dark font-semibold transition-colors">urine odor removal</Link>, and{" "}
            <Link href="/mattress-stain-removal" className="text-cta hover:text-primary-dark font-semibold transition-colors">mattress stain removal</Link> services, or view our{" "}
            <Link href="/pricing" className="text-cta hover:text-primary-dark font-semibold transition-colors">pricing guide</Link> and{" "}
            <Link href="/gallery" className="text-cta hover:text-primary-dark font-semibold transition-colors">gallery</Link>.
          </p>
        </div>
      </section>

      <CtaSection
        heading="Not Sure What Type of Mattress You Have?"
        body="Send us a photo of the mattress label, fabric surface, or stain concern. We'll help identify the safest cleaning approach and provide a clear quote before service."
      />

      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
                Talk to Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-5">Call Now</h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Call now to describe your mattress, or send a message and we&apos;ll follow up shortly.
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
        items={MATERIAL_FAQS}
        eyebrow="Material Questions"
        heading="Mattress Material Cleaning: Frequently Asked Questions"
        variant="white"
        relatedLinks={[
          { label: "Mattress Cleaning", href: "/mattress-cleaning" },
          { label: "Baby Mattress Cleaning", href: "/baby-mattress-cleaning" },
          { label: "Pricing Guide", href: "/pricing" },
        ]}
      />
    </>
  );
}
