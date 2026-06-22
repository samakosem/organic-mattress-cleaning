import Image from "next/image";
import { SectionHeading } from "@/components/public/sections/SectionHeading";
import type { ImageAsset } from "@/data/images";

interface BeforeAfterSectionProps {
  images: ImageAsset[];
  eyebrow?: string;
  heading?: string;
  description?: string;
}

const DISCLAIMER =
  "Images are illustrative before-and-after style examples of common mattress cleaning situations. Results vary depending on mattress material, age, stain type, and how long the stain has been present.";

export function BeforeAfterSection({
  images,
  eyebrow = "The Difference",
  heading = "Before-and-After Style Examples",
  description = "A look at common mattress cleaning situations our organic process is designed to help with.",
}: BeforeAfterSectionProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-white" aria-labelledby="before-after-heading">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <SectionHeading id="before-after-heading" subheading={eyebrow} heading={heading} description={description} className="mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.slice(0, 6).map((img) => (
            <figure
              key={img.src}
              className="group rounded-2xl border border-primary/12 bg-surface overflow-hidden hover:border-cta/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200"
            >
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="p-4">
                {img.title && <p className="text-sm font-bold text-text-primary mb-1">{img.title}</p>}
                <p className="text-xs text-text-secondary leading-relaxed">{img.caption ?? img.alt}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-xs text-text-secondary/70 text-center mt-8 max-w-3xl mx-auto leading-relaxed">
          {DISCLAIMER}
        </p>
      </div>
    </section>
  );
}
