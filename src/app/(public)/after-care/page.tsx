import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Wind, XCircle, Sparkles } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { FaqSection } from "@/components/public/sections/FaqSection";
import { LeadForm } from "@/components/public/forms/LeadForm";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildFaqSchema } from "@/lib/schema/faq";
import { DRYING_GUIDE, AFTER_CARE_BY_GOAL } from "@/data/afterCare";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Mattress Cleaning After-Care Guide | Organic Mattress Cleaning",
    description:
      "Learn what to do after professional mattress cleaning, including drying time, ventilation, when to put sheets back, when to sleep on the mattress, and how to keep your mattress fresher longer.",
    canonical: "/after-care",
  });
}

const FIRST_STEPS = [
  "Keep sheets off the mattress until it's fully dry.",
  "Allow airflow in the room.",
  "Open windows when practical for ventilation.",
  "Use a fan if one is available.",
  "Avoid covering the mattress with a protector too early.",
  "Follow the specific drying guidance given by your technician.",
];

const HELP_DRY_FASTER = [
  "Use a fan pointed at the mattress.",
  "Maximize airflow in the room.",
  "Use light ventilation rather than sealing the room up.",
  "Keep the mattress uncovered while it dries.",
  "Avoid piling on heavy bedding before it's dry.",
  "Do not use unsafe heat sources to speed up drying.",
  "Do not place the mattress in risky outdoor exposure unless specifically advised.",
];

const WHAT_TO_AVOID = [
  "Putting sheets on too soon",
  "Covering with a mattress protector too early",
  "Spilling water or extra cleaner on the treated area",
  "Using bleach after the visit",
  "Over-spraying fragrance instead of letting the mattress finish drying naturally",
  "Ignoring lingering moisture, even if it seems minor",
];

const FRESHER_LONGER_TIPS = [
  "Use a washable mattress protector.",
  "Wash sheets and bedding regularly.",
  "Vacuum bedroom floors to reduce dust tracked onto the bed.",
  "Rotate the mattress if the manufacturer allows it.",
  "Address spills or accidents quickly rather than letting them set in.",
  "Avoid eating or drinking in bed when possible.",
  "Schedule routine organic cleaning when it's been a while since the last visit.",
];

const AFTER_CARE_FAQS = [
  {
    q: "How long does a mattress take to dry after cleaning?",
    a: "Drying time varies based on mattress material, treatment type, and room airflow. We provide specific guidance after each visit rather than a fixed time for every mattress.",
  },
  {
    q: "When can I put sheets back on?",
    a: "Only once the mattress is fully dry to the touch. Putting sheets on too early can trap moisture.",
  },
  {
    q: "Can I sleep on the mattress the same day?",
    a: "Sometimes, depending on the treatment and drying conditions. If you're unsure whether it's fully dry, it's better to wait a bit longer.",
  },
  {
    q: "Should I use a fan?",
    a: "Yes, a fan pointed at the mattress can help speed up drying meaningfully.",
  },
  {
    q: "Should I open windows?",
    a: "When practical, yes. Ventilation helps the mattress dry faster and more evenly.",
  },
  {
    q: "Can I use a mattress protector right away?",
    a: "No, wait until the mattress is fully dry. A protector placed too early can trap moisture against the surface.",
  },
  {
    q: "Why does drying time vary?",
    a: "It depends on the mattress material, how much moisture was used, the treatment type, and how much airflow the room gets.",
  },
  {
    q: "Does urine odor treatment take longer to dry?",
    a: "Often yes, since the enzyme treatment needs to work through deeper layers of the padding.",
  },
  {
    q: "Does memory foam take longer to dry?",
    a: "Yes, memory foam is denser and holds moisture longer than innerspring mattresses.",
  },
  {
    q: "What if the mattress still feels damp?",
    a: "Give it more time with airflow. If it still feels damp after a day or two, reach out and we can advise further.",
  },
  {
    q: "How do I keep my mattress fresh after cleaning?",
    a: "A washable mattress protector, regular bedding washes, and addressing spills quickly all help maintain results between cleanings.",
  },
  {
    q: "Should I vacuum after mattress cleaning?",
    a: "Vacuuming the bedroom floor can help reduce dust being tracked back onto a freshly cleaned mattress.",
  },
  {
    q: "How often should I clean my mattress?",
    a: "Many households do well with cleaning every three to six months, though busy households, pets, or allergy concerns can mean more frequent cleaning helps.",
  },
];

export default function AfterCarePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "After-Care Guide", url: "/after-care" },
  ]);
  const faqSchema = buildFaqSchema(AFTER_CARE_FAQS);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "After-Care Guide", url: "/after-care" }]}
        categoryBadge="Drying Time • Fresh Mattress Tips • Los Angeles"
        heading="Mattress Cleaning After-Care Guide"
        subheading="Simple after-care steps to help your mattress dry properly, stay fresh, and get the best results after organic mattress cleaning, stain treatment, odor treatment, or sanitizing."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        ctaSecondaryLabel="(800) 735-1242"
        ctaSecondaryUrl="tel:+18007351242"
        minHeight="min-h-[60vh]"
        showLeadForm
        leadFormSource="after-care-page"
      />

      {/* Direct Answer */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="rounded-2xl bg-primary-light/50 border border-primary/15 p-6 sm:p-8">
            <p className="text-xs font-bold text-cta uppercase tracking-widest mb-3">Quick Answer</p>
            <h2 className="text-lg sm:text-xl font-bold text-text-primary leading-snug mb-3">
              How long should you wait after mattress cleaning before using the bed?
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              After mattress cleaning, you should wait until the mattress is fully dry before putting sheets back
              on or sleeping on it. Drying time can vary based on mattress material, moisture level, room
              airflow, stain treatment, odor treatment, and whether one or both sides were cleaned. Fans,
              ventilation, and keeping sheets off the mattress can help support proper drying.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-4 bg-white pb-12 sm:pb-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="rounded-2xl bg-surface border border-primary/12 p-6 sm:p-8">
            <p className="text-xs font-bold text-cta uppercase tracking-widest mb-4">Quick Facts</p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Put sheets back only after the mattress is fully dry</li>
              <li>Use fans or airflow when possible</li>
              <li>Do not cover the mattress too early</li>
              <li>Drying time depends on mattress type and treatment level</li>
              <li>Memory foam and pillow-top mattresses may need more drying care</li>
              <li>Ask for drying guidance after service</li>
            </ul>
          </div>
        </div>
      </section>

      {/* First steps */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">
            First Steps After Mattress Cleaning
          </h2>
          <ul className="space-y-3">
            {FIRST_STEPS.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <Wind className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-text-secondary leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Drying time table */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-3">Drying Time Guide</h2>
          <p className="text-text-secondary text-sm mb-8 max-w-2xl">
            Drying times are typical considerations, not exact guarantees — actual time varies by mattress and
            conditions.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-primary/12 bg-surface">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="bg-primary-light/60 text-left">
                  <th className="px-4 py-3.5 font-bold text-text-primary">Cleaning Type</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">Typical Drying Consideration</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">What Affects Drying</th>
                  <th className="px-4 py-3.5 font-bold text-text-primary">After-Care Tip</th>
                </tr>
              </thead>
              <tbody>
                {DRYING_GUIDE.map((row) => (
                  <tr key={row.cleaningType} className="border-t border-primary/10">
                    <td className="px-4 py-3.5 font-semibold text-text-primary whitespace-nowrap">{row.cleaningType}</td>
                    <td className="px-4 py-3.5 text-text-secondary">{row.dryingConsideration}</td>
                    <td className="px-4 py-3.5 text-text-secondary">{row.whatAffectsDrying}</td>
                    <td className="px-4 py-3.5 text-text-secondary">{row.afterCareTip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sheets + sleeping */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">When To Put Sheets Back On</h2>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                <li>Only when the mattress is dry to the touch.</li>
                <li>Avoid trapping moisture by covering it too soon.</li>
                <li>A mattress protector should only go on once it&apos;s fully dry.</li>
                <li>Check seams and pillow-top areas closely — they can stay damp longer.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-4">When Can You Sleep on the Mattress?</h2>
              <ul className="space-y-2.5 text-sm text-text-secondary">
                <li>Once it&apos;s fully dry, not just dry on the surface.</li>
                <li>Timing depends on airflow and the mattress material.</li>
                <li>If you&apos;re unsure, it&apos;s better to wait longer or ask us for guidance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Help dry faster */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">
            How To Help Your Mattress Dry Faster
          </h2>
          <ul className="space-y-3">
            {HELP_DRY_FASTER.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Wind className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What to avoid */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">What To Avoid After Cleaning</h2>
          <ul className="space-y-3">
            {WHAT_TO_AVOID.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fresher longer */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">Keeping Your Mattress Fresher Longer</h2>
          <ul className="space-y-3">
            {FRESHER_LONGER_TIPS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* After-care by goal */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-10">
            After-Care for Specific Cleaning Goals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AFTER_CARE_BY_GOAL.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-5 border border-primary/12">
                <h3 className="text-sm font-bold text-text-primary mb-2">{card.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local LA context */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-4">
            After-Care for Los Angeles Homes
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Los Angeles homes, apartments, and condos all have different airflow conditions, and coastal areas can
            add humidity to the mix. High-rise apartments with limited cross-ventilation may need a bit more
            patience or a fan to help drying along. Warm weather can help, but airflow still matters most for
            getting your mattress dry properly.
          </p>
        </div>
      </section>

      <section className="py-12 bg-surface border-t border-primary/10">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-sm text-text-secondary">
            See our{" "}
            <Link href="/pricing" className="text-cta hover:text-primary-dark font-semibold transition-colors">pricing guide</Link>,{" "}
            <Link href="/gallery" className="text-cta hover:text-primary-dark font-semibold transition-colors">before &amp; after gallery</Link>,{" "}
            <Link href="/organic-cleaning-products" className="text-cta hover:text-primary-dark font-semibold transition-colors">organic cleaning products</Link>,{" "}
            <Link href="/mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">mattress cleaning</Link>,{" "}
            <Link href="/urine-odor-removal" className="text-cta hover:text-primary-dark font-semibold transition-colors">urine odor removal</Link>,{" "}
            <Link href="/mattress-stain-removal" className="text-cta hover:text-primary-dark font-semibold transition-colors">mattress stain removal</Link>, and{" "}
            <Link href="/baby-mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">baby mattress cleaning</Link> pages.
          </p>
        </div>
      </section>

      <CtaSection
        heading="Have Questions After Your Mattress Cleaning?"
        body="We explain drying time, ventilation, and post-cleaning care before we leave, so you know when to put sheets back on and how to keep the mattress fresh."
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
                Call with any after-care questions, or send a message and we&apos;ll follow up shortly.
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
        items={AFTER_CARE_FAQS}
        eyebrow="After-Care Questions"
        heading="Mattress Cleaning After-Care: Frequently Asked Questions"
        variant="white"
        relatedLinks={[
          { label: "Mattress Cleaning", href: "/mattress-cleaning" },
          { label: "Urine Odor Removal", href: "/urine-odor-removal" },
          { label: "Pricing Guide", href: "/pricing" },
        ]}
      />
    </>
  );
}
