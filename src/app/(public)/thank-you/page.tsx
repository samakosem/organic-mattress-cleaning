import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { PhoneLink } from "@/components/public/layout/PhoneLink";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Thank You",
    description: "Thank you for contacting Organic Mattress Cleaning. We'll be in touch shortly.",
    canonical: "/thank-you",
    noIndex: true,
  });
}

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white py-16">
      <div className="max-w-md mx-auto px-5 text-center">
        <div className="w-16 h-16 rounded-full bg-primary-light border border-primary/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">Request Received</h1>
        <p className="text-text-secondary text-base leading-relaxed mb-8">
          Thank you for reaching out to Organic Mattress Cleaning. We&apos;ll follow up shortly to confirm your
          appointment details.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <PhoneLink className="btn btn-outline">Call Us Now</PhoneLink>
        </div>
      </div>
    </section>
  );
}
