import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Heart,
  Sparkles,
  Tag,
  ImageIcon,
  MapPin,
  HelpCircle,
  BookOpen,
  ClipboardList,
  Wrench,
  Droplet,
  Wind,
  Users,
  Baby,
  PawPrint,
  Building2,
} from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { SectionHeading } from "@/components/public/sections/SectionHeading";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { FaqSection } from "@/components/public/sections/FaqSection";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildFaqSchema } from "@/lib/schema/faq";
import { getImagesForUse, fleetImages } from "@/data/images";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "About Organic Mattress Cleaning | Los Angeles Non-Toxic Mattress Cleaning",
    description:
      "Learn about Organic Mattress Cleaning, our non-toxic process, Los Angeles service area, and family-safe care for stains, odors and sanitizing.",
    canonical: "/about",
  });
}

const VALUES = [
  { Icon: Leaf, title: "Organic Cleaning Solutions", body: "Plant-based, non-toxic formulas instead of harsh chemical solvents, on every visit." },
  { Icon: ShieldCheck, title: "Non-Toxic Process", body: "No harsh chemical residue left behind once the mattress has dried." },
  { Icon: Heart, title: "Family-Safe and Pet-Safe", body: "Selected with kids, pets, and allergy-sensitive household members in mind." },
  { Icon: Sparkles, title: "Mattress-Specific Care", body: "Method chosen based on mattress fabric, construction, and condition, not a one-size-fits-all approach." },
  { Icon: Droplet, title: "Stain and Odor Options", body: "Targeted treatment available for stains, urine odor, pet concerns, and general buildup." },
  { Icon: Tag, title: "Transparent Pricing", body: "Clear starting prices and typical ranges, confirmed before any work begins." },
  { Icon: ClipboardList, title: "Honest Expectations", body: "We explain what's realistic for your mattress instead of overpromising results." },
  { Icon: MapPin, title: "Los Angeles Local Service", body: "Mobile service across Los Angeles and surrounding LA communities." },
];

const PHILOSOPHY_STEPS = [
  "Inspect the mattress first, checking fabric, stains, odor, and condition.",
  "Choose the cleaning method based on mattress type and condition.",
  "Use organic, non-toxic cleaning solutions throughout.",
  "Treat stains and odors carefully, with fabric-aware methods.",
  "Control moisture so the mattress isn't left over-saturated.",
  "Explain realistic results before and after the visit.",
  "Provide post-cleaning care guidance to help the mattress stay fresher longer.",
];

const WHO_WE_HELP = [
  { Icon: Users, label: "Families and parents" },
  { Icon: Baby, label: "Baby and nursery rooms" },
  { Icon: PawPrint, label: "Pet owners" },
  { Icon: Building2, label: "Renters, apartment, and condo residents" },
  { Icon: ImageIcon, label: "Airbnb and guest room owners" },
  { Icon: Wind, label: "Allergy-sensitive households" },
];

const PROCESS_STEPS = [
  { n: "01", t: "Inspection", d: "We check mattress size, fabric, stain condition, odor level, and overall condition." },
  { n: "02", t: "Organic Pre-Treatment When Needed", d: "Visible stains or odor-prone areas get a targeted, plant-based spot treatment." },
  { n: "03", t: "Mattress-Safe Cleaning", d: "The method is selected based on the mattress material and condition." },
  { n: "04", t: "Stain/Odor/Sanitizing Options", d: "Optional treatment for stains, urine odor, or sanitizing goals, without promising medical outcomes." },
  { n: "05", t: "Drying Guidance and Final Care", d: "We explain drying time and simple steps to help keep the mattress fresher between cleanings." },
];

const RESOURCE_LINKS = [
  { label: "Pricing Guide", href: "/pricing", Icon: Tag },
  { label: "Organic Cleaning Products", href: "/organic-cleaning-products", Icon: Leaf },
  { label: "Before & After Gallery", href: "/gallery", Icon: ImageIcon },
  { label: "Service Areas", href: "/service-areas", Icon: MapPin },
  { label: "FAQ", href: "/faq", Icon: HelpCircle },
  { label: "Blog", href: "/blog", Icon: BookOpen },
];

const ABOUT_FAQS = [
  {
    q: "What makes your mattress cleaning organic?",
    a: "We use organic, plant-based cleaning solutions instead of bleach, ammonia, or synthetic fragrance, on every visit, not as a premium add-on.",
  },
  {
    q: "Are you local to Los Angeles?",
    a: "Yes. We're a mobile mattress cleaning service based in Los Angeles, serving the city and surrounding LA communities.",
  },
  {
    q: "Do you clean mattresses in apartments and condos?",
    a: "Yes, we regularly serve apartments, condos, and high-rise buildings throughout the Los Angeles area.",
  },
  {
    q: "Do you clean baby mattresses?",
    a: "Yes. We use extra-gentle, non-toxic formulas for crib and baby mattresses specifically because infants spend extended time in direct contact with the surface.",
  },
  {
    q: "Do you remove urine odor?",
    a: "We offer enzyme-based urine odor removal, which can help break down the source of the odor. Results vary based on how deep the odor has set in.",
  },
  {
    q: "Can you guarantee stain removal?",
    a: "No. We don't guarantee stain removal. Many stains improve significantly, but older or chemical stains may not fully disappear. We explain what's realistic before starting.",
  },
  {
    q: "Are your products safe for pets?",
    a: "Yes, our formulas are pet-safe by design, with no harsh chemical residue left behind once the mattress has dried.",
  },
  {
    q: "How do I get an accurate quote?",
    a: "Share your mattress size, stain or odor concern, and service address. We'll walk through the best option and confirm a clear quote before any work begins.",
  },
  {
    q: "Do you offer pricing before service?",
    a: "Yes. See our pricing guide for typical starting prices and ranges, and we confirm a final quote before work begins.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Los Angeles and surrounding LA communities, including Santa Monica, Beverly Hills, West Hollywood, Malibu, Burbank, Pasadena, Encino, Sherman Oaks, Studio City, Culver City, Marina del Rey, Venice, Brentwood, Glendale, and Woodland Hills.",
  },
];

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);
  const faqSchema = buildFaqSchema(ABOUT_FAQS);
  const vanImage = getImagesForUse("about-mobile-service")[0] ?? fleetImages[0];

  return (
    <>
      {/* No invented founder names, years in business, certifications, or awards. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]}
        categoryBadge="Organic Mattress Cleaning in Los Angeles"
        heading="About Organic Mattress Cleaning"
        subheading="We provide organic, non-toxic mattress cleaning for Los Angeles homes, apartments, condos, children's rooms, guest rooms, and pet-friendly households."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        ctaSecondaryLabel="(800) 735-1242"
        ctaSecondaryUrl="tel:+18007351242"
        minHeight="min-h-[60vh]"
        showLeadForm
        leadFormSource="about-page"
      />

      {/* Who we are */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-5">Who We Are</h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Organic Mattress Cleaning is a Los Angeles-focused mattress cleaning service built around organic
            cleaning solutions, honest communication, and indoor-safe cleaning for real homes. We help customers
            with routine mattress cleaning, stains, odor concerns, urine accidents, sanitizing goals, dust
            mite-related buildup, baby mattresses, and pet-friendly homes.
          </p>
        </div>
      </section>

      {/* Why we started with organic cleaning */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-6">
            Why We Started With Organic Cleaning
          </h2>
          <div className="space-y-4">
            <p className="text-text-secondary text-base leading-relaxed">
              Mattresses are some of the most intimate surfaces in a home. People spend roughly a third of their
              life sleeping on one, and harsh chemical odors don&apos;t belong in a room meant for rest.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Families want safer options for kids and pets, and organic, non-toxic cleaning is a natural fit with
              how modern households already think about indoor home care. Customers also deserve clear
              expectations and transparent pricing rather than vague promises. That is the standard we built
              this service around.
            </p>
          </div>
        </div>
      </section>

      {/* What makes our approach different */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-10">
            What Makes Our Approach Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-surface rounded-2xl p-6 border border-primary/12 hover:border-cta/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-light ring-1 ring-primary/15 flex items-center justify-center shrink-0">
                  <value.Icon className="w-5 h-5 text-cta" aria-hidden />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary mb-2 text-base leading-snug">{value.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{value.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our cleaning philosophy */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-8">Our Cleaning Philosophy</h2>
          <ul className="space-y-3">
            {PHILOSOPHY_STEPS.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <Wrench className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-text-secondary leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we help */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-3">Who We Help</h2>
          <p className="text-text-secondary text-base leading-relaxed mb-10 max-w-2xl">
            From everyday family households to renters and short-term rental hosts, we work with customers dealing
            with urine odor, sweat stains, food spills, pet odor, and dust buildup.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {WHO_WE_HELP.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-2.5 p-4 rounded-2xl bg-surface border border-primary/12">
                <div className="w-9 h-9 rounded-xl bg-primary-light ring-1 ring-primary/15 flex items-center justify-center">
                  <item.Icon className="w-4.5 h-4.5 text-cta" aria-hidden />
                </div>
                <span className="text-xs font-semibold text-text-primary leading-snug">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas we serve */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionHeading
                subheading="Serving Los Angeles"
                heading="Los Angeles Areas We Serve"
                description="We provide mobile mattress cleaning across Los Angeles and surrounding LA communities, including Santa Monica, Beverly Hills, West Hollywood, Malibu, Burbank, Pasadena, Encino, Sherman Oaks, Studio City, Culver City, Marina del Rey, Venice, Brentwood, Glendale, and Woodland Hills."
                layout="stacked"
                className="mb-6"
              />
              <Link href="/service-areas" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:text-primary-dark transition-colors">
                See all areas we serve <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            {vanImage && (
              <figure className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10">
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
                {vanImage.caption && (
                  <figcaption className="px-4 py-3 text-xs text-text-secondary bg-white border-t border-primary/10">
                    {vanImage.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        </div>
      </section>

      {/* Trust, safety, transparency */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-6">
            Trust, Safety, and Transparency
          </h2>
          <ul className="space-y-3 mb-6">
            {[
              "Clear quotes confirmed before work begins.",
              "No fake guarantees and no unrealistic stain promises.",
              "Organic cleaning solutions on every visit.",
              "No harsh chemical smell left behind.",
              "Optional stain, odor, and sanitizing treatments based on your needs.",
              "Results vary by mattress fabric and condition. We explain this upfront.",
              "Customers can send photos before booking for a more informed estimate.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-cta shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-text-secondary">
            See our{" "}
            <Link href="/pricing" className="text-cta hover:text-primary-dark font-semibold transition-colors">pricing guide</Link>,{" "}
            <Link href="/gallery" className="text-cta hover:text-primary-dark font-semibold transition-colors">before &amp; after gallery</Link>, and{" "}
            <Link href="/organic-cleaning-products" className="text-cta hover:text-primary-dark font-semibold transition-colors">organic cleaning products</Link> pages for more detail.
          </p>
        </div>
      </section>

      {/* Our process */}
      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-10">Our Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="bg-white rounded-2xl p-5 border border-primary/12">
                <span className="text-xs font-bold text-cta/60 tracking-widest">{step.n}</span>
                <h3 className="text-sm font-bold text-text-primary mt-2 mb-2">{step.t}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful resources */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-10">Helpful Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESOURCE_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 bg-surface rounded-2xl p-5 border border-primary/12 hover:border-cta/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-primary-light ring-1 ring-primary/15 flex items-center justify-center shrink-0">
                  <link.Icon className="w-4.5 h-4.5 text-cta" aria-hidden />
                </div>
                <span className="text-sm font-bold text-text-primary group-hover:text-primary-dark transition-colors">{link.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-text-secondary/50 ml-auto group-hover:translate-x-0.5 transition-transform" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Experience the Organic Difference" body="Get a free quote today and see why more LA families are choosing non-toxic mattress care." />

      <FaqSection
        items={ABOUT_FAQS}
        eyebrow="About Us"
        heading="About Organic Mattress Cleaning: Frequently Asked Questions"
        variant="surface"
        relatedLinks={[
          { label: "Pricing Guide", href: "/pricing" },
          { label: "Before & After Gallery", href: "/gallery" },
          { label: "Organic Cleaning Products", href: "/organic-cleaning-products" },
        ]}
      />
    </>
  );
}
