import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_NAME } from "@/lib/constants/business";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Terms & Conditions",
    description: `Terms and conditions for using ${SITE_NAME} services and website.`,
    canonical: "/terms",
  });
}

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 prose-custom">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-text-secondary mb-10">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <h2>Services</h2>
        <p>
          {SITE_NAME} provides mattress cleaning services in Los Angeles and surrounding communities. Final
          pricing is provided after reviewing your mattress size, condition, and requested service.
        </p>

        <h2>Appointments</h2>
        <p>
          Appointments are scheduled based on availability. We ask that you provide accurate information about
          your mattress and any specific concerns (stains, odors, allergies) when booking.
        </p>

        <h2>Cancellations</h2>
        <p>
          If you need to reschedule or cancel an appointment, please contact us as soon as possible so we can
          accommodate other customers.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          While we take care to protect your mattress and property during service, {SITE_NAME} is not
          responsible for pre-existing damage or conditions not disclosed prior to service.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of our services after changes constitutes
          acceptance of the updated terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about these terms can be directed to us through our <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </section>
  );
}
