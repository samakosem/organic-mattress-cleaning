import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getImagesForUse } from "@/data/images";
import type { BlogPost } from "@/types/blog";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  const image = getImagesForUse(post.slug)[0];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl border border-primary/12 hover:border-cta/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 flex flex-col overflow-hidden"
    >
      <div className="relative w-full aspect-[16/9] bg-primary-light">
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-bold text-cta uppercase tracking-wide mb-2">{post.category}</span>
        <h3 className="text-base font-bold text-text-primary leading-snug mb-2 group-hover:text-primary-dark transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-text-secondary/70">
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" aria-hidden />
            {post.readMinutes} min
          </span>
          <span className="inline-flex items-center gap-1.5 text-cta font-semibold text-sm">
            Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
