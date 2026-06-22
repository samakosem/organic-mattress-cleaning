/** Single source of truth for business facts — schema, footer, header, trust strips. */

export const SITE_NAME = "Organic Mattress Cleaning";
export const SITE_URL = "https://organicmattresscleaning.com";

export const BUSINESS_PHONE = "(800) 735-1242";
export const BUSINESS_PHONE_TEL = "+18007351242";

export const BUSINESS_ADDRESS = "1510 Laurel Canyon Blvd #26";
export const BUSINESS_CITY = "Los Angeles";
export const BUSINESS_STATE = "CA";
export const BUSINESS_ZIP = "90046";
export const BUSINESS_FULL_ADDRESS = `${BUSINESS_ADDRESS}, ${BUSINESS_CITY}, ${BUSINESS_STATE} ${BUSINESS_ZIP}`;

export const BUSINESS_HOURS_DISPLAY = "Open 24/7";

export const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/sb6DfrErpjMubYqd7";

export const SOCIAL_URLS = {
  facebook: "https://www.facebook.com/profile.php?id=61591083026340",
} as const;

export const SCHEMA_SAME_AS: string[] = [SOCIAL_URLS.facebook];

export const SERVICE_AREA_CITIES: string[] = [
  "Los Angeles",
  "Santa Monica",
  "Malibu",
  "Beverly Hills",
  "West Hollywood",
  "Hollywood",
  "Burbank",
  "Glendale",
  "Pasadena",
  "Encino",
  "Sherman Oaks",
  "Studio City",
  "Van Nuys",
  "North Hollywood",
  "Woodland Hills",
  "Culver City",
  "Marina del Rey",
  "Venice",
  "Brentwood",
];
