import type { Metadata } from "next";
import { Star } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { SOCIAL_URLS, GOOGLE_MAPS_URL } from "@/lib/constants/business";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Reviews",
    description:
      "See what Los Angeles customers say about Organic Mattress Cleaning's eco-friendly, non-toxic mattress cleaning service.",
    canonical: "/reviews",
  });
}

export default function ReviewsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/reviews" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Reviews", url: "/reviews" }]}
        categoryBadge="Customer Reviews"
        heading="What Our Customers Say"
        subheading="We're a growing organic mattress cleaning service in Los Angeles. As we complete more jobs, we'll be sharing real customer feedback here."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        minHeight="min-h-[55vh]"
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 text-center">
          <div className="flex justify-center mb-5" aria-hidden>
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 text-stone-200" />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-4">
            We&apos;re Just Getting Started
          </h2>
          <p className="text-text-secondary text-base leading-relaxed mb-8">
            Organic Mattress Cleaning is a new, dedicated mattress cleaning service serving Los Angeles. We
            haven&apos;t collected customer reviews yet — check back soon, or follow us on Facebook for updates
            and early customer feedback as we grow.
          </p>
          <a
            href={SOCIAL_URLS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-stone-300 hover:border-primary/40 text-text-primary hover:text-primary-dark font-semibold text-sm transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
              <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.883v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
            </svg>
            Follow Us on Facebook
          </a>
          <p className="text-xs text-text-secondary/60 mt-6">
            You can also find us on{" "}
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline underline-offset-2">
              Google Maps
            </a>
            .
          </p>
        </div>
      </section>

      <CtaSection heading="Be One of Our First Reviews" body="Book your organic mattress cleaning today and let us know how it went." />
    </>
  );
}
