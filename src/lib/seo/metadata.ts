import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/constants/business";

const DEFAULT_DESCRIPTION =
  "Eco-friendly, non-toxic organic mattress cleaning in Los Angeles. Family-safe, pet-safe deep cleaning, sanitizing, and stain removal. Open 24/7.";

interface BuildMetadataOptions {
  title: string;
  description?: string;
  canonical: string;
  ogImagePath?: string;
  noIndex?: boolean;
  /** Use title exactly as given, skipping the automatic brand suffix — for pages with a fixed, exact target title (e.g. homepage). */
  exactTitle?: boolean;
}

export function buildMetadata({
  title,
  description,
  canonical,
  ogImagePath = "/opengraph-image",
  noIndex = false,
  exactTitle = false,
}: BuildMetadataOptions): Metadata {
  const resolvedDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = canonical.startsWith("http") ? canonical : `${SITE_URL}${canonical}`;
  const ogImage = ogImagePath.startsWith("http") ? ogImagePath : `${SITE_URL}${ogImagePath}`;
  // Avoid double brand suffix — if the title already names the brand, use it as-is.
  const fullTitle = exactTitle || title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title: { absolute: fullTitle },
    description: resolvedDescription,
    alternates: { canonical: canonicalUrl },
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      title,
      description: resolvedDescription,
      url: canonicalUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "website",
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: resolvedDescription,
      images: [ogImage],
    },
  };
}
