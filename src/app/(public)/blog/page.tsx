import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Lock, Leaf } from "lucide-react";
import { HeroSection } from "@/components/public/sections/HeroSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { BlogPostCard } from "@/components/public/cards/BlogPostCard";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { BLOG_POSTS, PLANNED_BLOG_POSTS } from "@/data/blog";
import { getImagesForUse } from "@/data/images";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Blog",
    description:
      "Mattress cleaning tips, stain and odor removal guides, eco-friendly cleaning advice, and Los Angeles home care guides from Organic Mattress Cleaning.",
    canonical: "/blog",
  });
}

const CATEGORIES = [
  "Mattress Cleaning Tips",
  "Stain & Odor Removal",
  "Eco-Friendly Cleaning",
  "Allergy-Sensitive Homes",
  "Family & Baby Mattress Care",
  "Los Angeles Home Care",
] as const;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );
  const [featuredPost, ...restPosts] = sortedPosts;
  const featuredImage = featuredPost ? getImagesForUse(featuredPost.slug)[0] : undefined;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <HeroSection
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }]}
        categoryBadge="Mattress Care Guides"
        heading="Organic Mattress Cleaning Blog"
        subheading="Practical guides on mattress cleaning, eco-safe cleaning methods, stain and odor removal, and healthier home care for Los Angeles families."
        ctaPrimaryLabel="Get a Free Quote"
        ctaPrimaryUrl="/contact"
        minHeight="min-h-[55vh]"
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <p className="text-text-secondary text-lg leading-relaxed max-w-3xl mb-12">
            Tips and guides on mattress cleaning, eco-friendly and non-toxic cleaning methods, stain and odor
            removal, and healthy home care for allergy-sensitive households across Los Angeles. Written by the
            team at Organic Mattress Cleaning.
          </p>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2.5 mb-12">
            {CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full bg-primary-light border border-primary/15 text-sm font-semibold text-primary-dark"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl bg-surface border border-primary/15 hover:border-cta/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 overflow-hidden mb-12"
            >
              {featuredImage && (
                <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-full bg-primary-light order-1 lg:order-2">
                  <Image
                    src={featuredImage.src}
                    alt={featuredImage.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-8 sm:p-10 flex flex-col justify-center order-2 lg:order-1">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-primary-dark text-xs font-bold uppercase tracking-wide mb-4 w-fit">
                  Featured · {featuredPost.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight mb-4 group-hover:text-primary-dark transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-5 text-sm text-text-secondary">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4" aria-hidden />
                    {featuredPost.readMinutes} min read
                  </span>
                  <span>{formatDate(featuredPost.datePublished)}</span>
                  <span className="inline-flex items-center gap-1.5 text-cta font-semibold">
                    Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Published post grid */}
          {restPosts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {restPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {/* Planned / coming soon */}
          {PLANNED_BLOG_POSTS.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-6">Coming Soon</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {PLANNED_BLOG_POSTS.map((post) => (
                  <div
                    key={post.title}
                    className="rounded-2xl border border-dashed border-primary/20 bg-surface/60 overflow-hidden flex flex-col opacity-80"
                  >
                    <div className="w-full aspect-[16/9] bg-primary-light/40 flex items-center justify-center">
                      <Leaf className="w-8 h-8 text-primary/30" aria-hidden />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-bold text-text-secondary/60 uppercase tracking-wide mb-2">{post.category}</span>
                      <h3 className="text-base font-bold text-text-secondary leading-snug mb-2">{post.title}</h3>
                      <p className="text-sm text-text-secondary/80 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-secondary/60">
                        <Lock className="w-3 h-3" aria-hidden />
                        Coming soon
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaSection heading="Need Help Now?" body="Skip the wait — get a free quote for organic mattress cleaning today." />
    </>
  );
}
