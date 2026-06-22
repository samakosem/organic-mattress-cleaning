import {
  SITE_NAME,
  SITE_URL,
  BUSINESS_PHONE_TEL,
  BUSINESS_ADDRESS,
  BUSINESS_CITY,
  BUSINESS_STATE,
  BUSINESS_ZIP,
  BUSINESS_HOURS_DISPLAY,
  GOOGLE_MAPS_URL,
  SCHEMA_SAME_AS,
  SERVICE_AREA_CITIES,
} from "@/lib/constants/business";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    description:
      "Eco-friendly, non-toxic organic mattress cleaning serving Los Angeles. Family-safe and pet-safe deep cleaning, sanitizing, stain and odor removal.",
    url: SITE_URL,
    telephone: BUSINESS_PHONE_TEL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS,
      addressLocality: BUSINESS_CITY,
      addressRegion: BUSINESS_STATE,
      postalCode: BUSINESS_ZIP,
      addressCountry: "US",
    },
    areaServed: SERVICE_AREA_CITIES.map((name) => ({ "@type": "City", name })),
    openingHours: BUSINESS_HOURS_DISPLAY === "Open 24/7" ? "Mo-Su 00:00-23:59" : undefined,
    sameAs: SCHEMA_SAME_AS,
    hasMap: GOOGLE_MAPS_URL,
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
  };
}

export function buildServiceSchema(
  serviceName: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: serviceName,
    serviceType: serviceName,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
    },
    areaServed: SERVICE_AREA_CITIES.map((name) => ({ "@type": "City", name })),
  };
}

/**
 * City-scoped Service schema for /service-areas/[areaSlug] pages.
 * Provider keeps the real LA business address — mobile service, no fake
 * per-city office. areaServed is the single city this page covers.
 */
export function buildAreaServiceSchema(
  cityName: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Organic Mattress Cleaning in ${cityName}, CA`,
    serviceType: "Mattress Cleaning",
    description,
    url,
    areaServed: {
      "@type": "City",
      name: cityName,
    },
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      telephone: BUSINESS_PHONE_TEL,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS_ADDRESS,
        addressLocality: BUSINESS_CITY,
        addressRegion: BUSINESS_STATE,
        postalCode: BUSINESS_ZIP,
        addressCountry: "US",
      },
    },
  };
}
