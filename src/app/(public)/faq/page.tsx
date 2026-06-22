import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { FaqSection } from "@/components/public/sections/FaqSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildFaqSchema } from "@/lib/schema/faq";
import { GENERAL_FAQS } from "@/data/faqs";
import { SERVICES } from "@/data/services";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about organic mattress cleaning in Los Angeles — process, safety, pricing, and what to expect.",
    canonical: "/faq",
  });
}

export default function FaqPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" },
  ]);
  const allFaqs = [...GENERAL_FAQS, ...SERVICES.flatMap((s) => s.faqs)];
  const faqSchema = buildFaqSchema(allFaqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }]}
        categoryBadge="Frequently Asked Questions"
        heading="Your Mattress Cleaning Questions, Answered"
        subheading="Everything you need to know about our organic mattress cleaning process before you book."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        minHeight="min-h-[55vh]"
      />

      <FaqSection items={GENERAL_FAQS} eyebrow="General Questions" heading="General Questions" variant="white" contactPrompt={null} />

      <div className="bg-white border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 py-8 text-center">
          <p className="text-sm text-text-secondary">
            Wondering about cost?{" "}
            <Link href="/pricing" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              See our mattress cleaning price guide
            </Link>
            , learn about{" "}
            <Link href="/organic-cleaning-products" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              our organic cleaning products
            </Link>
            , or view our{" "}
            <Link href="/gallery" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              before &amp; after gallery
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Helpful Guides */}
      <section className="py-14 sm:py-20 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-xl font-bold text-text-primary mb-6 text-center">Helpful Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Mattress Stain Guide", href: "/mattress-stain-guide" },
              { label: "Mattress Material Cleaning Guide", href: "/mattress-material-cleaning-guide" },
              { label: "Mattress Cleaning After-Care", href: "/after-care" },
              { label: "Professional vs DIY Mattress Cleaning", href: "/professional-vs-diy-mattress-cleaning" },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="bg-white rounded-xl px-4 py-3.5 border border-primary/12 text-sm font-semibold text-text-primary hover:border-cta/30 hover:text-cta transition-colors text-center"
              >
                {guide.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Per-service FAQ — links each block back to its service page */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <p className="inline-flex items-center gap-1.5 text-xs font-bold text-cta tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" />
            By Service
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-10">
            Questions by Service
          </h2>

          <div className="space-y-10">
            {SERVICES.map((service) => (
              <div key={service.slug} className="bg-white rounded-2xl border border-primary/12 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                  <h3 className="text-lg font-bold text-text-primary">{service.name}</h3>
                  <Link
                    href={service.fullPath}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:text-primary-dark transition-colors"
                  >
                    View service <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                <div className="space-y-4">
                  {service.faqs.slice(0, 2).map((faq) => (
                    <div key={faq.q}>
                      <p className="text-sm font-semibold text-text-primary mb-1">{faq.q}</p>
                      <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Still Have Questions?" body="Reach out and we'll walk you through exactly what to expect." />
    </>
  );
}
