import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants/business";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Privacy Policy",
    description: `Privacy policy for ${SITE_NAME}: how we collect, use, and protect your information.`,
    canonical: "/privacy-policy",
  });
}

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 prose-custom">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Privacy Policy</h1>
        <p className="text-sm text-text-secondary mb-10">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <h2>Information We Collect</h2>
        <p>
          When you request a quote or contact {SITE_NAME} through {SITE_URL}, we collect the information you
          provide directly, such as your name, phone number, email address, property address, and any details
          about your mattress cleaning request.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information you provide to respond to quote requests, schedule appointments, and
          communicate with you about our services. We do not sell your personal information to third parties.
        </p>

        <h2>Information Sharing</h2>
        <p>
          We do not share your personal information with third parties except as necessary to provide our
          services (such as email delivery providers) or as required by law.
        </p>

        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect the information you share with us. However, no method of
          transmission over the internet is completely secure.
        </p>

        <h2>Your Choices</h2>
        <p>
          You may contact us at any time to request that we delete the information you have provided to us.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this privacy policy, please contact us through our{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </section>
  );
}
