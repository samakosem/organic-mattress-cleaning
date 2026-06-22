export type ImageCategory = "hero" | "service" | "before-after" | "process" | "eco" | "fleet";

export interface ImageAsset {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  category: ImageCategory;
  /** Service slugs, "homepage-*" sections, or area slugs this image is suited for. */
  suggestedUse: string[];
  width: number;
  height: number;
}

/** Hero */
export const heroImages: ImageAsset[] = [
  {
    src: "/images/hero/mattress-cleaning-hero.webp",
    alt: "Organic, non-toxic mattress cleaning in a fresh, healthy Los Angeles bedroom",
    category: "hero",
    suggestedUse: ["homepage-hero", "all-hero-backgrounds"],
    width: 1672,
    height: 941,
  },
];

/** Branded fleet / mobile-service photography */
export const fleetImages: ImageAsset[] = [
  {
    src: "/images/car-van/organic-mattress-cleaning-van.webp",
    alt: "Organic Mattress Cleaning branded service van on a sunny Los Angeles street",
    title: "Organic Mattress Cleaning Service Van in Los Angeles",
    caption: "Mobile organic mattress cleaning available across Los Angeles service areas.",
    category: "fleet",
    suggestedUse: ["homepage-brand-trust", "about-mobile-service", "service-area-coverage", "contact-trust"],
    width: 1672,
    height: 941,
  },
];

/** Lifestyle / "in action" photography — technician, products, family */
export const serviceImages: ImageAsset[] = [
  {
    src: "/images/services/ChatGPT Image Jun 21, 2026, 01_17_09 PM (1).webp",
    alt: "Bright bedroom with a freshly cleaned mattress and a Los Angeles skyline view through the window",
    title: "Professional Mattress Cleaning in Los Angeles",
    category: "service",
    suggestedUse: ["mattress-cleaning", "how-often-should-you-clean-your-mattress"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/services/ChatGPT Image Jun 21, 2026, 01_17_09 PM (2).webp",
    alt: "Mattress cleaning technician using a professional extraction tool on a white mattress",
    title: "Professional Mattress Cleaning in Action",
    category: "service",
    suggestedUse: ["homepage-in-action", "mattress-cleaning", "mattress-sanitizing", "organic-mattress-cleaning"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/services/ChatGPT Image Jun 21, 2026, 01_17_10 PM (3).webp",
    alt: "Eco-friendly mattress cleaning products beside a freshly cleaned mattress",
    title: "Eco-Friendly Products & Tools",
    category: "service",
    suggestedUse: ["homepage-eco-products", "organic-mattress-cleaning", "allergy-mattress-cleaning", "organic-mattress-cleaning-vs-traditional-cleaning"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/services/ChatGPT Image Jun 21, 2026, 01_17_10 PM (4).webp",
    alt: "Mother, daughter, and dog relaxing on a clean mattress in a bright Los Angeles bedroom",
    title: "Family-Safe, Non-Toxic Mattress Cleaning",
    category: "service",
    suggestedUse: ["homepage-family-safe", "baby-mattress-cleaning", "allergy-mattress-cleaning", "organic-mattress-cleaning"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/process/mattress cleaning services (1).webp",
    alt: "Mattress cleaning technician treating a stain with a handheld extraction tool",
    category: "service",
    suggestedUse: ["mattress-cleaning", "mattress-stain-removal"],
    width: 1448,
    height: 1086,
  },
  {
    src: "/images/process/mattress cleaning services (2).webp",
    alt: "Technician using a steam extraction wand on a mattress surface",
    category: "service",
    suggestedUse: ["mattress-sanitizing", "dust-mite-mattress-cleaning"],
    width: 1448,
    height: 1086,
  },
  {
    src: "/images/process/mattress cleaning services (3).webp",
    alt: "Mattress cleaning technician kneeling beside professional cleaning equipment in a bedroom",
    category: "service",
    suggestedUse: ["mattress-cleaning", "urine-odor-removal", "how-to-remove-urine-smell-from-a-mattress-inline"],
    width: 1448,
    height: 1086,
  },
  {
    src: "/images/process/mattress cleaning services (4).webp",
    alt: "Technician cleaning a mattress while a parent and child relax nearby",
    title: "Family-Safe Mattress Cleaning",
    category: "service",
    suggestedUse: ["baby-mattress-cleaning", "allergy-mattress-cleaning"],
    width: 1448,
    height: 1086,
  },
  {
    src: "/images/process/mattress cleaning services (5).webp",
    alt: "Mattress cleaning technician working in a bedroom with a city skyline view",
    category: "service",
    suggestedUse: ["mattress-cleaning", "organic-mattress-cleaning", "how-often-should-you-clean-your-mattress"],
    width: 1448,
    height: 1086,
  },
  {
    src: "/images/process/mattress cleaning services (6).webp",
    alt: "Close-up of a technician spot-treating a mattress stain by hand",
    category: "service",
    suggestedUse: ["mattress-stain-removal", "urine-odor-removal", "what-to-do-after-spilling-wine-on-a-mattress-inline"],
    width: 1448,
    height: 1086,
  },
];

/** Infographic-style educational graphics */
export const processImages: ImageAsset[] = [
  {
    src: "/images/services/ChatGPT Image Jun 21, 2026, 01_17_11 PM (7).webp",
    alt: "Infographic showing what can build up in a mattress over time, including dust mites, allergens, body oils, and odor",
    title: "What Can Build Up in a Mattress?",
    category: "process",
    suggestedUse: ["homepage-process", "dust-mite-mattress-cleaning", "allergy-mattress-cleaning", "what-builds-up-inside-a-mattress", "mattress-cleaning-for-allergy-sensitive-homes"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/services/ChatGPT Image Jun 21, 2026, 01_17_11 PM (8).webp",
    alt: "Infographic explaining why homeowners choose organic mattress cleaning, including plant-based products and a non-toxic process",
    title: "Why Choose Organic Mattress Cleaning?",
    category: "process",
    suggestedUse: ["homepage-why-organic", "organic-mattress-cleaning", "organic-mattress-cleaning-vs-traditional-cleaning-inline"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/services/ChatGPT Image Jun 21, 2026, 01_17_11 PM (9).webp",
    alt: "Five-step mattress cleaning process diagram: inspect, pre-treat, deep clean, extract and refresh, final check",
    title: "Our Mattress Cleaning Process",
    category: "process",
    suggestedUse: ["homepage-process", "mattress-cleaning", "mattress-sanitizing"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/services/ChatGPT Image Jun 21, 2026, 01_17_12 PM (10).webp",
    alt: "Infographic listing six signs a mattress needs cleaning: stains, odors, allergy flare-ups, dust build-up, pet accidents, and yellowing",
    title: "Signs Your Mattress Needs Cleaning",
    category: "process",
    suggestedUse: ["homepage-process", "dust-mite-mattress-cleaning", "mattress-stain-removal"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/process/Mattress cleaning service process (21).webp",
    alt: "Graphic highlighting that professional mattress cleaning can help reduce dust mites and trapped debris for allergy-sensitive homes",
    title: "Great for Allergy-Sensitive Homes",
    category: "process",
    suggestedUse: ["allergy-mattress-cleaning", "dust-mite-mattress-cleaning", "mattress-cleaning-for-allergy-sensitive-homes-inline"],
    width: 1254,
    height: 1254,
  },
  {
    src: "/images/process/Mattress cleaning service process (23).webp",
    alt: "Graphic showing a family with a cat and dog, highlighting eco-friendly, non-toxic, mattress-safe cleaning",
    title: "Safe for Families, Kids & Pets",
    category: "process",
    suggestedUse: ["baby-mattress-cleaning", "organic-mattress-cleaning", "homepage-family-safe"],
    width: 1254,
    height: 1254,
  },
  {
    src: "/images/process/Mattress cleaning service process (3).webp",
    alt: "Map-style graphic listing Los Angeles area communities served by Organic Mattress Cleaning",
    title: "Serving the Greater Los Angeles Area",
    category: "process",
    suggestedUse: ["service-areas-hub"],
    width: 1254,
    height: 1254,
  },
];

/** Eco / lifestyle (duplicates of select serviceImages, kept distinct for category clarity) */
export const ecoImages: ImageAsset[] = [
  {
    src: "/images/eco/ChatGPT Image Jun 21, 2026, 01_17_10 PM (3).webp",
    alt: "Plant-based mattress cleaning products and folded towels beside a clean mattress",
    title: "Eco-Friendly Products & Tools",
    category: "eco",
    suggestedUse: ["organic-mattress-cleaning", "homepage-eco-products"],
    width: 1672,
    height: 941,
  },
];

/** Before/after — generic, unbranded landscape examples (safe for any page) */
export const beforeAfterImages: ImageAsset[] = [
  {
    src: "/images/before-after/mattress cleaning before and after (5).webp",
    alt: "Before and after style example of a yellowed mattress surface cleaned to a fresh white finish",
    title: "General Mattress Refresh Example",
    caption: "General mattress refresh example.",
    category: "before-after",
    suggestedUse: ["homepage-before-after", "mattress-cleaning"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/before-after/mattress cleaning before and after (6).webp",
    alt: "Before and after style example of body oil and sweat discoloration removed from a mattress",
    title: "Body Oil & Sweat Discoloration Example",
    caption: "Body oil and sweat discoloration example.",
    category: "before-after",
    suggestedUse: ["homepage-before-after", "mattress-stain-removal", "mattress-cleaning"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/before-after/mattress cleaning before and after (7).webp",
    alt: "Before and after style example of a red wine stain removed from a mattress",
    title: "Wine Stain Example",
    caption: "Illustrative example. Results vary based on mattress material, age, stain type, and how long the stain has been present.",
    category: "before-after",
    suggestedUse: ["homepage-before-after", "mattress-stain-removal", "what-to-do-after-spilling-wine-on-a-mattress"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/before-after/mattress cleaning before and after (8).webp",
    alt: "Before and after style example of a yellow stain cleaned from a mattress near a child's bedroom",
    title: "General Stain Example",
    caption: "General stain example.",
    category: "before-after",
    suggestedUse: ["mattress-stain-removal", "baby-mattress-cleaning"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/before-after/mattress cleaning before and after (9).webp",
    alt: "Before and after style example of a body oil stain removed from a mattress corner",
    title: "Body Oil Stain Example",
    caption: "Body oil stain example.",
    category: "before-after",
    suggestedUse: ["mattress-stain-removal"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/before-after/mattress cleaning before and after (10).webp",
    alt: "Mattress cleaning technician using an extraction tool beside a partially cleaned mattress",
    title: "Professional Cleaning Example",
    caption: "Professional cleaning example.",
    category: "before-after",
    suggestedUse: ["homepage-before-after", "mattress-cleaning"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/before-after/mattress cleaning before and after (11).webp",
    alt: "Before and after style example of a sweat stain cleaned from a mattress in a child's room",
    title: "Sweat Stain Example",
    caption: "Sweat stain example.",
    category: "before-after",
    suggestedUse: ["mattress-stain-removal", "baby-mattress-cleaning"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/before-after/mattress cleaning before and after (12).webp",
    alt: "Before and after style example of a wine spill removed from a mattress with a city view in the background",
    title: "Wine Spill Example",
    caption: "Wine spill example.",
    category: "before-after",
    suggestedUse: ["mattress-stain-removal", "homepage-before-after"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/before-after/mattress cleaning before and after (13).webp",
    alt: "Before and after style example of a urine-style stain cleaned from a mattress",
    title: "Pet Accident Example",
    caption: "Illustrative example. Results vary based on mattress material, age, stain type, and how long the stain has been present.",
    category: "before-after",
    suggestedUse: ["urine-odor-removal", "homepage-before-after", "how-to-remove-urine-smell-from-a-mattress"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/before-after/mattress cleaning before and after (14).webp",
    alt: "Before and after style example of a sweat stain cleaned from a mattress near a pet bed",
    title: "Pet Accident & Sweat Example",
    caption: "Pet accident and sweat example.",
    category: "before-after",
    suggestedUse: ["urine-odor-removal", "mattress-stain-removal"],
    width: 1672,
    height: 941,
  },
  {
    src: "/images/before-after/mattress cleaning before and after (15).webp",
    alt: "Before and after style example of a body oil stain cleaned from a mattress with a mountain view in the background",
    title: "Body Oil Stain Example",
    caption: "Body oil stain example.",
    category: "before-after",
    suggestedUse: ["mattress-stain-removal"],
    width: 1672,
    height: 941,
  },
];

/** Before/after — city-specific branded examples, matched to existing service-area slugs only */
export const cityBeforeAfterImages: Record<string, ImageAsset> = {
  "sherman-oaks": {
    src: "/images/before-after/mattress cleaning before and after (17).webp",
    alt: "Mobile organic mattress cleaning before and after style example for a Sherman Oaks home",
    title: "Sherman Oaks Mattress Cleaning Example",
    caption: "Before-and-after style example.",
    category: "before-after",
    suggestedUse: ["sherman-oaks"],
    width: 1122,
    height: 1402,
  },
  "north-hollywood": {
    src: "/images/before-after/mattress cleaning before and after (18).webp",
    alt: "Mobile organic mattress cleaning before and after style example for a North Hollywood home",
    title: "North Hollywood Mattress Cleaning Example",
    caption: "Before-and-after style example.",
    category: "before-after",
    suggestedUse: ["north-hollywood"],
    width: 1122,
    height: 1402,
  },
  encino: {
    src: "/images/before-after/mattress cleaning before and after (19).webp",
    alt: "Mobile organic mattress cleaning before and after style example for an Encino home",
    title: "Encino Mattress Cleaning Example",
    caption: "Before-and-after style example.",
    category: "before-after",
    suggestedUse: ["encino"],
    width: 1122,
    height: 1402,
  },
  burbank: {
    src: "/images/before-after/mattress cleaning before and after (20).webp",
    alt: "Mobile organic mattress cleaning before and after style example for a Burbank home",
    title: "Burbank Mattress Cleaning Example",
    caption: "Before-and-after style example.",
    category: "before-after",
    suggestedUse: ["burbank"],
    width: 1122,
    height: 1402,
  },
  "studio-city": {
    src: "/images/before-after/mattress cleaning before and after (21).webp",
    alt: "Mobile organic mattress cleaning before and after style example for a Studio City home",
    title: "Studio City Mattress Cleaning Example",
    caption: "Before-and-after style example.",
    category: "before-after",
    suggestedUse: ["studio-city"],
    width: 1122,
    height: 1402,
  },
};

/** Generic Los Angeles / valley-area lifestyle image for city pages without a dedicated photo */
export const genericAreaImage: ImageAsset = {
  src: "/images/before-after/mattress cleaning before and after (10).webp",
  alt: "Professional mattress cleaning example for Los Angeles area homes",
  category: "before-after",
  suggestedUse: ["service-area-fallback"],
  width: 1672,
  height: 941,
};

export const ALL_IMAGES: ImageAsset[] = [
  ...heroImages,
  ...fleetImages,
  ...serviceImages,
  ...processImages,
  ...ecoImages,
  ...beforeAfterImages,
  ...Object.values(cityBeforeAfterImages),
];

export function getImagesForUse(use: string): ImageAsset[] {
  return ALL_IMAGES.filter((img) => img.suggestedUse.includes(use));
}
