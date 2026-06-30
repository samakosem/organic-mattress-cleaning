import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Leaf, Users } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { LiveAvailabilityWidget } from "@/components/public/sections/LiveAvailabilityWidget";
import { LeadForm } from "@/components/public/forms/LeadForm";
import { PhoneLink } from "@/components/public/layout/PhoneLink";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import {
  BUSINESS_FULL_ADDRESS,
  BUSINESS_HOURS_DISPLAY,
  GOOGLE_MAPS_URL,
} from "@/lib/constants/business";
import { getImagesForUse } from "@/data/images";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Contact Organic Mattress Cleaning Los Angeles | Free Quote",
    description:
      "Contact Organic Mattress Cleaning for a free quote on eco-friendly mattress cleaning in Los Angeles. Call (800) 735-1242 or request a quote online. Open 24/7.",
    canonical: "/contact",
    exactTitle: true,
  });
}

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);
  const vanImage = getImagesForUse("contact-trust")[0];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]}
        categoryBadge="Get in Touch"
        heading="Contact Organic Mattress Cleaning"
        subheading="Have a question or ready to book? Reach out by phone or send us a message and we'll get back to you shortly."
        ctaPrimaryLabel="Call (800) 735-1242"
        ctaPrimaryUrl="tel:+18007351242"
        minHeight="min-h-[55vh]"
      />

      <section className="py-12 sm:py-16 bg-white border-b border-primary/10">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <LiveAvailabilityWidget />
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-text-primary leading-tight mb-6">Get in Touch</h2>

              {/* Strong phone CTA */}
              <PhoneLink
                className="flex items-center gap-3.5 mb-6 p-4 rounded-2xl bg-cta text-white shadow-md shadow-cta/25 hover:bg-primary-dark transition-colors"
                aria-label="Call Organic Mattress Cleaning now at (800) 735-1242"
              >
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/80 uppercase tracking-wide">
                    Need Help Today? Call Now
                  </div>
                  <div className="text-lg font-bold text-white">(800) 735-1242</div>
                </div>
              </PhoneLink>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <MapPin className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">Address</div>
                    <p className="text-text-secondary text-sm">{BUSINESS_FULL_ADDRESS}</p>
                    <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:text-primary-dark transition-colors">
                      View on Google Maps →
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <Clock className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">Hours</div>
                    <p className="text-text-secondary text-sm">{BUSINESS_HOURS_DISPLAY}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <Mail className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-text-primary">Email</div>
                    <a href="mailto:hello@organicmattresscleaning.com" className="text-text-secondary hover:text-primary-dark transition-colors text-sm">
                      hello@organicmattresscleaning.com
                    </a>
                  </div>
                </div>
              </div>

              {vanImage && (
                <figure className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-sm">
                  <div className="relative w-full aspect-[16/9]">
                    <Image
                      src={vanImage.src}
                      alt={vanImage.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-4 py-2.5 text-xs text-text-secondary bg-surface border-t border-primary/10">
                    Need mobile mattress cleaning today? Call now to check availability.
                  </figcaption>
                </figure>
              )}
            </div>

            <div className="bg-surface rounded-3xl p-8 border border-primary/15 shadow-sm">
              <h3 className="text-lg font-bold text-text-primary mb-1.5">Send Us a Message</h3>
              <p className="text-text-secondary text-sm mb-6">We&apos;ll respond as soon as possible.</p>
              <LeadForm variant="contact" />

              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6 pt-6 border-t border-primary/10">
                <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <Leaf className="w-3.5 h-3.5 text-cta shrink-0" />
                  Eco-Friendly &amp; Non-Toxic
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <ShieldCheck className="w-3.5 h-3.5 text-cta shrink-0" />
                  Family &amp; Pet Safe
                </div>
                <div className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <Users className="w-3.5 h-3.5 text-cta shrink-0" />
                  Talk to a Specialist
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contextual internal links */}
      <section className="py-8 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <p className="text-sm text-text-secondary leading-relaxed">
            See our{" "}
            <Link href="/pricing" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              mattress cleaning prices in Los Angeles
            </Link>{" "}
            before you book. We offer{" "}
            <Link href="/mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              professional mattress cleaning in Los Angeles
            </Link>
            ,{" "}
            <Link href="/organic-mattress-cleaning" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              organic and non-toxic mattress cleaning
            </Link>
            , and{" "}
            <Link href="/urine-odor-removal" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              urine odor removal
            </Link>
            . Serving{" "}
            <Link href="/" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              mattress cleaning in Los Angeles
            </Link>{" "}
            and surrounding areas 24/7.
          </p>
        </div>
      </section>
    </>
  );
}
