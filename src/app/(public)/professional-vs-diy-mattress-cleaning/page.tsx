import type { Metadata } from "next";
import Link from "next/link";
import { Phone, XCircle, CheckCircle2 } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { FaqSection } from "@/components/public/sections/FaqSection";
import { LeadForm } from "@/components/public/forms/LeadForm";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildFaqSchema } from "@/lib/schema/faq";
import { DIY_VS_PRO_TABLE, DIY_MISTAKES, WHEN_TO_CALL_PRO } from "@/data/comparisonGuide";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Professional vs DIY Mattress Cleaning | Organic Mattress Cleaning",
    description:
      "Compare professional vs DIY mattress cleaning, including stain treatment, urine odor, drying risk, mattress material concerns, organic cleaning, cost, and when to call a professional in Los Angeles.",
    canonical: "/professional-vs-diy-mattress-cleaning",
  });
}

const DIY_OK_FOR = [
  "Light vacuuming of the mattress surface",
  "Routine sheet and protector care",
  "Fresh surface crumbs",
  "Very light odor refresh",
  "Manufacturer-approved spot care",
  "Situations with no deep stains or odor concerns",
];

const COMPARISON_FAQS = [
  {
    q: "Is professional mattress cleaning worth it?",
    a: "For stains, odors, or moisture-sensitive materials, professional cleaning generally offers better tools and products than what's available for DIY use at home.",
  },
  {
    q: "Can I clean a mattress myself?",
    a: "Yes, for light surface refresh and routine maintenance. Deeper stains, urine odor, and delicate materials are where DIY runs into more risk.",
  },
  {
    q: "What is the biggest risk of DIY mattress cleaning?",
    a: "Over-wetting the mattress, which can lead to slow drying, trapped moisture, and sometimes a musty smell that's worse than the original problem.",
  },
  {
    q: "Can DIY remove urine odor?",
    a: "Surface cleanup can help, but it often doesn't reach the uric acid crystals deeper in the padding that carry the odor.",
  },
  {
    q: "Should I use bleach on a mattress?",
    a: "No. Bleach can damage mattress fabric and doesn't address the underlying cause of most odors.",
  },
  {
    q: "Can too much water damage a mattress?",
    a: "Yes, especially memory foam, which can hold moisture for a long time and is at higher risk of trapped dampness or odor.",
  },
  {
    q: "Is professional cleaning better for memory foam?",
    a: "Generally yes, since professional methods use a controlled, low-moisture approach suited to foam's density.",
  },
  {
    q: "When should I call a mattress cleaner?",
    a: "For urine odor, stains, pet accidents, baby mattress concerns, or any situation where DIY hasn't resolved the issue.",
  },
  {
    q: "Is organic professional cleaning safer for kids and pets?",
    a: "Our organic, non-toxic process avoids the harsh chemical residue found in some traditional products, which is generally a better fit for households with kids and pets.",
  },
  {
    q: "Does professional cleaning remove every stain?",
    a: "No. Many stains improve significantly, but older or chemical stains may not fully disappear regardless of the method used.",
  },
  {
    q: "How much does professional mattress cleaning cost?",
    a: "Starting prices vary by mattress size and condition. See our pricing guide for typical ranges.",
  },
  {
    q: "Can I send photos before booking?",
    a: "Yes, sending a photo of the stain or concern helps us give a more informed starting estimate.",
  },
  {
    q: "What should I do after cleaning?",
    a: "Follow our after-care guide for drying time, ventilation, and tips on keeping the mattress fresh longer.",
  },
];

export default function ProfessionalVsDiyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Professional vs DIY Mattress Cleaning", url: "/professional-vs-diy-mattress-cleaning" },
  ]);
  const faqSchema = buildFaqSchema(COMPARISON_FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Professional vs DIY", url: "/professional-vs-diy-mattress-cleaning" }]}
        categoryBadge="DIY vs Professional • Honest Mattress Cleaning Guide"
        heading="Professional vs DIY Mattress Cleaning"
        subheading="Some light mattress refresh tasks can be handled at home, but stains, urine odor, moisture-sensitive materials, and deep odor concerns often need a professional mattress cleaning approach."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        ctaSecondaryLabel="(800) 735-1242"
        ctaSecondaryUrl="tel:+18007351242"
        minHeight="min-h-[60vh]"
        showLeadForm
        leadFormSource="professional-vs-diy-page"
      />

      {/* Direct Answer */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="rounded-2xl bg-primary-light/50 border border-primary/15 p-6 sm:p-8">
            <p className="text-xs font-bold text-cta uppercase tracking-widest mb-3">Quick Answer</p>
            <h2 className="text-lg sm:text-xl font-bold text-text-primary leading-snug mb-3">
              Is professional mattress cleaning better than DIY?
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Professional mattress cleaning can be a better choice when the mattress has urine odor, visible
              stains, pet-related concerns, deep odor, delicate materials, or moisture-sensitive construction.
              DIY methods may help with light surface refresh, but they can also create problems if the mattress
              is over-wet, scrubbed aggressively, treated with harsh chemicals, or covered before fully dry.
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
                <dt className="font-semibold text-text-primary">DIY may help with</dt>
                <dd className="text-text-secondary">Light surface refresh and routine maintenance</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Professional cleaning may help with</dt>
                <dd className="text-text-secondary">Stains, odors, urine accidents, sanitizing goals, and delicate materials</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Biggest DIY risk</dt>
                <dd className="text-text-secondary">Over-wetting and slow drying</dd>
              </div>
              <div>
                <dt className="font-semibold text-text-primary">Organic professional advantage</dt>
                <dd className="text-text-secondary">Non-toxic product selection and fabric-aware cleaning</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold text-text-primary">Best first step</dt>
                <dd className="text-text-secondary">Identify stain type, mattress material, and odor depth</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">Honest Comparison Table</h2>
          <div className="overflow-x-auto rounded-2xl border border-primary/12 bg-white">
            <table className="w-full text-sm min-w-[680px]">
              <thead>
                <tr className="bg-primary-light/60 text-left">
                  <th className="px-4 py-3.5 font-bold text-text-primary">Factor</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">DIY Mattress Cleaning</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Professional Organic Mattress Cleaning</th>
                </tr>
              </thead>
              <tbody>
                {DIY_VS_PRO_TABLE.map((row) => (
                  <tr key={row.factor} className="border-t border-primary/10">
                    <td className="px-4 py-3.5 font-semibold text-text-primary whitespace-nowrap">{row.factor}</td>
                    <td className="px-4 py-3.5 text-text-secondary">{row.diy}</td>
                    <td className="px-4 py-3.5 text-text-secondary">{row.professional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When DIY may be enough */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">When DIY May Be Enough</h2>
          <ul className="space-y-3">
            {DIY_OK_FOR.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* When to call a pro */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">When To Call a Professional</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {WHEN_TO_CALL_PRO.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Common DIY mistakes */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">Common DIY Mistakes</h2>
          <ul className="space-y-3">
            {DIY_MISTAKES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Professional organic advantages */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-5">
            Professional Organic Mattress Cleaning Advantages
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Inspection first, organic cleaning solutions, a non-toxic process, fabric-aware methods, stain and
            odor treatment options, careful moisture control, drying guidance, transparent pricing, and honest
            expectations — that&apos;s the standard we bring to every visit.
          </p>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-5">Cost Comparison</h2>
          <p className="text-text-secondary text-base leading-relaxed mb-4">
            DIY may seem cheaper upfront, but mistakes can make stains worse, spread odor, or create moisture
            issues that are harder to fix later. Professional pricing depends on mattress size, stain type, odor
            depth, fabric, and cleaning goals.
          </p>
          <Link href="/pricing" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:text-primary-dark transition-colors">
            View our pricing guide →
          </Link>
        </div>
      </section>

      {/* Local LA context */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-4">
            DIY vs Professional Cleaning in Los Angeles
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Apartments and condos with limited airflow can make DIY drying riskier, especially in busier
            households with kids, pets, or frequent guest rooms. Our mobile mattress cleaning service brings the
            professional organic approach directly to Los Angeles homes, so you don&apos;t have to guess at the
            right method.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-t border-primary/10">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-sm text-text-secondary">
            See our{" "}
            <Link href="/pricing" className="text-cta hover:text-primary-dark font-semibold transition-colors">pricing guide</Link>,{" "}
            <Link href="/gallery" className="text-cta hover:text-primary-dark font-semibold transition-colors">gallery</Link>,{" "}
            <Link href="/organic-cleaning-products" className="text-cta hover:text-primary-dark font-semibold transition-colors">organic cleaning products</Link>,{" "}
            <Link href="/mattress-stain-guide" className="text-cta hover:text-primary-dark font-semibold transition-colors">stain guide</Link>,{" "}
            <Link href="/mattress-material-cleaning-guide" className="text-cta hover:text-primary-dark font-semibold transition-colors">material cleaning guide</Link>, and{" "}
            <Link href="/after-care" className="text-cta hover:text-primary-dark font-semibold transition-colors">after-care guide</Link>, plus our{" "}
            <Link href="/mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">mattress cleaning</Link>,{" "}
            <Link href="/organic-mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">organic mattress cleaning</Link>,{" "}
            <Link href="/mattress-stain-removal" className="text-cta hover:text-primary-dark font-semibold transition-colors">stain removal</Link>, and{" "}
            <Link href="/urine-odor-removal" className="text-cta hover:text-primary-dark font-semibold transition-colors">urine odor removal</Link> services.
          </p>
        </div>
      </section>

      <CtaSection
        heading="Not Sure If You Need DIY or Professional Cleaning?"
        body="Tell us the mattress size, material, stain type, odor concern, and service address. We'll help you understand whether a routine refresh, stain treatment, urine odor treatment, or professional cleaning visit makes sense."
      />

      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
                Talk to Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-5">Get My Free Quote</h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Call now to talk through your situation, or send a message and we&apos;ll follow up shortly.
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
        items={COMPARISON_FAQS}
        eyebrow="Comparison Questions"
        heading="Professional vs DIY Mattress Cleaning: Frequently Asked Questions"
        variant="white"
        relatedLinks={[
          { label: "Mattress Cleaning", href: "/mattress-cleaning" },
          { label: "Organic Mattress Cleaning", href: "/organic-mattress-cleaning" },
          { label: "Pricing Guide", href: "/pricing" },
        ]}
      />
    </>
  );
}
