import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, ShieldCheck, Heart, Clock, Phone } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { TestimonialCard } from "@/components/public/cards/TestimonialCard";
import { LeadForm } from "@/components/public/forms/LeadForm";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { TESTIMONIALS } from "@/data/testimonials";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Mattress Cleaning Reviews Los Angeles | Organic Mattress Cleaning",
    description:
      "What local customers say about Organic Mattress Cleaning's eco-friendly, non-toxic mattress cleaning service across Los Angeles.",
    canonical: "/reviews",
    exactTitle: true,
  });
}

const TRUST_BADGES = [
  { Icon: Leaf, label: "Organic & Plant-Based" },
  { Icon: ShieldCheck, label: "Non-Toxic Process" },
  { Icon: Heart, label: "Family & Pet Safe" },
  { Icon: Clock, label: "Open 24/7" },
];

export default function ReviewsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/reviews" },
  ]);

  return (
    <>
      {/*
        Visible testimonials only — no AggregateRating or LocalBusiness review
        schema is generated here. These quotes are feedback shared directly by
        customers, not pulled from any third-party review platform.
      */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Reviews", url: "/reviews" }]}
        categoryBadge="Customer Testimonials"
        heading="What Local Customers Say"
        subheading="Real feedback from Los Angeles-area households who've booked organic, non-toxic mattress cleaning with us."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        ctaSecondaryLabel="(800) 735-1242"
        ctaSecondaryUrl="tel:+18007351242"
        minHeight="min-h-[55vh]"
        showLeadForm
        leadFormSource="reviews-page"
      />

      {/* Trust badges */}
      <section className="py-12 sm:py-16 bg-white border-b border-primary/10">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="flex flex-col items-center text-center gap-2.5 p-4 rounded-2xl bg-surface border border-primary/12"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-light ring-1 ring-primary/15 flex items-center justify-center">
                  <badge.Icon className="w-5 h-5 text-cta" aria-hidden />
                </div>
                <span className="text-xs font-semibold text-text-primary leading-snug">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial grid */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-4">
            <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
              Customer Testimonials
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-3">
              Feedback From Los Angeles Households
            </h2>
          </div>
          <p className="text-xs text-text-secondary/60 mb-10">Feedback shared directly by customers.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Contextual internal links */}
      <section className="py-8 bg-white border-t border-primary/10">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <p className="text-sm text-text-secondary leading-relaxed">
            Interested in booking?{" "}
            <Link href="/contact" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              Request a free quote
            </Link>{" "}
            or see our{" "}
            <Link href="/pricing" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              mattress cleaning prices in Los Angeles
            </Link>
            . We offer{" "}
            <Link href="/organic-mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              organic mattress cleaning in Los Angeles
            </Link>
            ,{" "}
            <Link href="/mattress-stain-removal" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              mattress stain removal
            </Link>
            ,{" "}
            <Link href="/urine-odor-removal" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              urine odor removal from mattresses
            </Link>
            , and more, serving{" "}
            <Link href="/" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              mattress cleaning in Los Angeles
            </Link>{" "}
            and surrounding communities.
          </p>
        </div>
      </section>

      {/* Organic / non-toxic trust section */}
      <section className="py-16 sm:py-24 bg-white border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary-light ring-1 ring-primary/15 mb-6">
            <Leaf className="w-6 h-6 text-primary-dark" aria-hidden />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-5">
            Organic, Non-Toxic Mattress Cleaning You Can Feel Good About
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Every visit uses organic cleaning solutions built on a plant-based approach. It&apos;s safe for families
            and pets, and free of the harsh chemical smell that lingers after a traditional cleaning. The
            process works for mattresses, upholstery, and the everyday indoor environments your household
            spends the most time in.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <CtaSection
        heading="Get Your Free Mattress Cleaning Quote"
        body="Join Los Angeles-area households who've chosen organic, non-toxic mattress cleaning. No obligation, no pressure."
      />

      {/* Phone CTA + contact form CTA */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden />
                Ready When You Are
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight mb-5">
                Talk to Us Before You Book
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Call now to ask questions or check availability, or send us a message and we&apos;ll follow up
                shortly.
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
    </>
  );
}
