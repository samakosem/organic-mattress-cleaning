import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Heart, Sparkles } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { SectionHeading } from "@/components/public/sections/SectionHeading";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { getImagesForUse, fleetImages } from "@/data/images";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "About Us",
    description:
      "Organic Mattress Cleaning provides eco-friendly, non-toxic mattress cleaning in Los Angeles. Learn about our approach to safe, plant-based cleaning.",
    canonical: "/about",
  });
}

const VALUES = [
  { Icon: Leaf, title: "Organic First", body: "We choose plant-based, non-toxic products over harsh chemical solvents, even when it takes more effort." },
  { Icon: ShieldCheck, title: "Safety Above All", body: "Every product and process is selected with kids, pets, and allergy-sensitive household members in mind." },
  { Icon: Heart, title: "Genuine Care", body: "We treat every mattress like it's in our own home — thorough, careful, and honest about what your mattress actually needs." },
  { Icon: Sparkles, title: "Real Results", body: "Organic doesn't mean weaker. Our process is built to lift stains, neutralize odors, and remove allergens just as effectively." },
];

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ]);
  const vanImage = getImagesForUse("about-mobile-service")[0] ?? fleetImages[0];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]}
        categoryBadge="About Us"
        heading="Organic Mattress Cleaning, Built on Safety"
        subheading="We started Organic Mattress Cleaning because Los Angeles homeowners deserved a mattress cleaning option that didn't trade clean results for harsh chemicals."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        minHeight="min-h-[60vh]"
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mb-14">
            <SectionHeading
              subheading="Our Approach"
              heading="Why We Focus Exclusively on Organic Cleaning"
              description="Mattresses absorb everything you bring to bed — sweat, skin oils, allergens, and whatever your kids or pets track in. Cleaning that mattress with harsh chemical residue just adds another layer of exposure. We built our process around plant-based, non-toxic formulas that clean deeply without that trade-off."
              layout="stacked"
            />
          </div>

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

      <section className="py-16 sm:py-24 bg-surface border-t border-primary/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <SectionHeading
                subheading="Serving Los Angeles"
                heading="Built for Mobile Service in Los Angeles"
                description="Organic Mattress Cleaning is designed around convenience. Instead of asking customers to transport a mattress, we bring professional mattress cleaning tools, eco-conscious products, and mobile service directly to the home."
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

      <CtaSection heading="Experience the Organic Difference" body="Get a free quote today and see why more LA families are choosing non-toxic mattress care." />
    </>
  );
}
