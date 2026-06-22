import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";
import { SERVICES } from "@/data/services";

interface GalleryCardProps {
  item: GalleryItem;
}

export function GalleryCard({ item }: GalleryCardProps) {
  const relatedService = SERVICES.find((s) => s.slug === item.relatedServiceSlug);

  return (
    <div className="bg-white rounded-2xl border border-primary/12 overflow-hidden hover:border-cta/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 flex flex-col">
      <div className="relative w-full aspect-[4/3]">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-[11px] font-bold text-primary-dark uppercase tracking-wide">
          {item.imageType === "singleProject" ? "Project Photo" : "Before & After"}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2.5 flex-1">
        <h3 className="text-sm font-bold text-text-primary leading-snug">{item.title}</h3>
        <p className="text-xs text-text-secondary/70 uppercase tracking-wide font-medium">
          {item.location} &middot; {item.service}
        </p>
        <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
        <p className="text-xs text-text-secondary/60 italic">{item.resultNote}</p>
        {relatedService && (
          <Link
            href={relatedService.fullPath}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cta hover:text-primary-dark transition-colors mt-1"
          >
            View {relatedService.name} <ArrowRight className="w-3.5 h-3.5" aria-hidden />
          </Link>
        )}
      </div>
    </div>
  );
}
