import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { FaqSection } from "@/components/public/sections/FaqSection";
import { CtaSection } from "@/components/public/sections/CtaSection";
import { RelatedLinksSection } from "@/components/public/sections/RelatedLinksSection";
import { BlogPostCard } from "@/components/public/cards/BlogPostCard";
import { buildMetadata } from "@/lib/seo/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildFaqSchema } from "@/lib/schema/faq";
import { buildBlogPostingSchema } from "@/lib/schema/article";
import { SOCIAL_URLS } from "@/lib/constants/business";
import { BLOG_POSTS } from "@/data/blog";
import { SERVICES } from "@/data/services";
import { SERVICE_AREAS, getAreaHref } from "@/data/serviceAreas";
import { getImagesForUse } from "@/data/images";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return buildMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    canonical: `/blog/${post.slug}`,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);
  const faqSchema = buildFaqSchema(post.faqs);
  const blogPostingSchema = buildBlogPostingSchema({
    title: post.title,
    description: post.seoDescription,
    slug: post.slug,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
  });

  const relatedServices = post.relatedServiceSlugs
    .map((s) => SERVICES.find((svc) => svc.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const relatedAreas = (post.relatedAreaSlugs ?? [])
    .map((s) => SERVICE_AREAS.find((a) => a.slug === s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const featuredImage = getImagesForUse(post.slug)[0];
  const inlineImage = getImagesForUse(`${post.slug}-inline`)[0];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />

      <article className="pt-28 pb-16 sm:pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-text-secondary/70 flex-wrap">
              <li>
                <Link href="/" className="hover:text-primary-dark transition-colors">Home</Link>
              </li>
              <li aria-hidden className="text-text-secondary/30">›</li>
              <li>
                <Link href="/blog" className="hover:text-primary-dark transition-colors">Blog</Link>
              </li>
              <li aria-hidden className="text-text-secondary/30">›</li>
              <li className="text-text-secondary">{post.title}</li>
            </ol>
          </nav>

          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light text-primary-dark text-xs font-bold uppercase tracking-wide mb-5">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-5">
            {post.title}
          </h1>

          <div className={`flex items-center gap-5 text-sm text-text-secondary flex-wrap ${post.author ? "mb-3" : "mb-8 pb-6 border-b border-primary/10"}`}>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" aria-hidden />
              {formatDate(post.datePublished)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" aria-hidden />
              {post.readMinutes} min read
            </span>
          </div>

          {post.author && (
            <p className="text-sm text-text-secondary mb-8 pb-6 border-b border-primary/10">
              By <span className="font-semibold text-text-primary">{post.author.name}</span> · {post.author.role}
            </p>
          )}

          {featuredImage && (
            <figure className="mb-10">
              <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-primary/15 shadow-lg shadow-primary/10">
                <Image
                  src={featuredImage.src}
                  alt={featuredImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
              {featuredImage.caption && (
                <figcaption className="text-xs text-text-secondary/70 mt-2.5 text-center">{featuredImage.caption}</figcaption>
              )}
            </figure>
          )}

          <div className="space-y-5 mb-10">
            {post.intro.map((para, i) => (
              <p key={i} className="text-text-secondary text-lg leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {post.answerBlock && post.answerBlock.length > 0 && (
            <div className="rounded-2xl bg-primary-light/50 border border-primary/15 p-6 mb-10">
              <p className="text-xs font-bold text-cta uppercase tracking-widest mb-3">Quick Answer</p>
              <div className="space-y-4">
                {post.answerBlock.map((item) => (
                  <div key={item.q}>
                    <p className="text-sm font-bold text-text-primary mb-1">{item.q}</p>
                    <p className="text-sm text-text-secondary leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Table of contents */}
          <nav aria-label="Table of contents" className="rounded-2xl bg-surface border border-primary/12 p-6 mb-10">
            <p className="text-xs font-bold text-cta uppercase tracking-widest mb-3">In This Article</p>
            <ol className="space-y-2">
              {post.sections.map((section, i) => (
                <li key={section.heading}>
                  <a href={`#section-${i}`} className="text-sm text-text-secondary hover:text-primary-dark transition-colors">
                    {i + 1}. {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-10">
            {post.sections.map((section, i) => (
              <section key={section.heading} id={`section-${i}`}>
                <h2 className="text-2xl font-bold text-text-primary leading-tight mb-4">{section.heading}</h2>
                <div className="space-y-4">
                  {section.body.map((para, j) => (
                    <p key={j} className="text-text-secondary text-base leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                {inlineImage && i === 1 && (
                  <figure className="mt-6">
                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-primary/15 shadow-sm">
                      <Image
                        src={inlineImage.src}
                        alt={inlineImage.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="object-cover"
                      />
                    </div>
                    {inlineImage.caption && (
                      <figcaption className="text-xs text-text-secondary/70 mt-2.5 text-center">{inlineImage.caption}</figcaption>
                    )}
                  </figure>
                )}
              </section>
            ))}
          </div>
        </div>
      </article>

      {relatedServices.length > 0 && (
        <RelatedLinksSection
          items={relatedServices.map((s) => ({
            href: s.fullPath,
            typeLabel: "Service",
            title: s.name,
            description: s.shortDescription,
          }))}
          eyebrow="Related Services"
          heading="Services Mentioned in This Article"
          variant="surface"
        />
      )}

      {relatedAreas.length > 0 && (
        <RelatedLinksSection
          items={relatedAreas.map((a) => ({
            href: getAreaHref(a),
            typeLabel: "Service Area",
            title: a.isPrimaryMarket ? `${a.name} (Main Service Area)` : a.name,
            description: a.heroTagline,
          }))}
          eyebrow="Service Areas"
          heading="Mobile Mattress Cleaning Near You"
          variant="white"
        />
      )}

      <FaqSection items={post.faqs} eyebrow="Common Questions" heading={`${post.title}: FAQ`} variant="surface" />

      <section className="py-10 bg-white border-t border-primary/10">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-sm text-text-secondary">
            Have questions or want to see what we&apos;re working on?{" "}
            <a
              href={SOCIAL_URLS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cta hover:text-primary-dark transition-colors underline underline-offset-2"
            >
              Follow Organic Mattress Cleaning on Facebook
            </a>
            .
          </p>
        </div>
      </section>

      <div className="bg-white border-t border-primary/10">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 py-8 text-center">
          <p className="text-sm text-text-secondary">
            Wondering what this typically costs?{" "}
            <Link href="/pricing" className="text-cta hover:text-primary-dark font-semibold transition-colors">
              See our mattress cleaning price guide
            </Link>
            .
          </p>
        </div>
      </div>

      <CtaSection
        heading="Ready for a Fresher, Healthier Mattress?"
        body="Get a free quote today for organic mattress cleaning in Los Angeles — no obligation, no pressure."
      />

      {otherPosts.length > 0 && (
        <section className="py-14 sm:py-20 bg-surface border-t border-primary/10">
          <div className="max-w-6xl mx-auto px-5 sm:px-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-8">More From the Blog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherPosts.map((p) => (
                <BlogPostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
