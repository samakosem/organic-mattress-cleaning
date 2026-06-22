import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/public/cards/ServiceCard";
import { SectionHeading } from "@/components/public/sections/SectionHeading";
import { PublicButton } from "@/components/ui/PublicButton";
import type { ServicePage } from "@/types/content";

interface ServicesSectionProps {
  services: ServicePage[];
  eyebrow?: string;
  heading?: string;
  description?: string;
  showCta?: boolean;
  excludeSlug?: string;
}

export function ServicesSection({
  services,
  eyebrow = "Our Services",
  heading = "Organic Mattress Cleaning Services in Los Angeles",
  description = "From deep sanitizing to stain and odor removal, every service uses safe, plant-based cleaning agents.",
  showCta = true,
  excludeSlug,
}: ServicesSectionProps) {
  const list = excludeSlug ? services.filter((s) => s.slug !== excludeSlug) : services;

  return (
    <section className="bg-surface py-16 sm:py-24 px-5 sm:px-8 lg:px-12 border-t border-stone-200/50" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto">
        <SectionHeading id="services-heading" subheading={eyebrow} heading={heading} description={description} className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((service, index) => (
            <ServiceCard
              key={service.slug}
              name={service.name}
              fullPath={service.fullPath}
              shortDescription={service.shortDescription}
              iconName={service.iconName}
              index={index}
            />
          ))}
        </div>

        {showCta && (
          <div className="mt-12 text-center">
            <PublicButton href="/contact" variant="outline" align="center" icon={<ArrowRight className="w-4 h-4" aria-hidden />}>
              Get a Free Quote
            </PublicButton>
          </div>
        )}
      </div>
    </section>
  );
}
