import { SITE_NAME, SITE_URL } from "@/lib/constants/business";

interface BlogPostingSchemaInput {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}

export function buildBlogPostingSchema({ title, description, slug, datePublished, dateModified }: BlogPostingSchemaInput) {
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
