export interface SizePricingItem {
  item: string;
  startingPrice: string;
  typicalRange: string;
  bestFor: string;
  notes: string;
  relatedServiceSlug: string;
}

export interface GoalPricingItem {
  item: string;
  priceImpact: string;
  whyItChanges: string;
  relatedServiceSlug: string;
}

export interface PriceExample {
  title: string;
  estimate: string;
}

/**
 * Editable starting prices and typical ranges — not guaranteed final prices.
 * Final pricing is confirmed after understanding mattress size, fabric,
 * stain/odor condition, and cleaning goals.
 */
export const PRICING_BY_SIZE: SizePricingItem[] = [
  {
    item: "Crib / Baby Mattress",
    startingPrice: "Starting at $59",
    typicalRange: "$59–$99",
    bestFor: "Crib mattresses and small baby/toddler mattresses",
    notes: "Gentle, non-toxic formulas suited to a surface infants sleep on directly.",
    relatedServiceSlug: "baby-mattress-cleaning",
  },
  {
    item: "Twin Mattress",
    startingPrice: "Starting at $89",
    typicalRange: "$89–$139",
    bestFor: "Kids' rooms, guest rooms, single-sleeper bedrooms",
    notes: "Price increases with stain severity, odor, or two-sided cleaning.",
    relatedServiceSlug: "mattress-cleaning",
  },
  {
    item: "Full Mattress",
    startingPrice: "Starting at $109",
    typicalRange: "$109–$159",
    bestFor: "Guest rooms and smaller primary bedrooms",
    notes: "Typical range assumes routine cleaning with no heavy staining.",
    relatedServiceSlug: "mattress-cleaning",
  },
  {
    item: "Queen Mattress",
    startingPrice: "Starting at $129",
    typicalRange: "$129–$189",
    bestFor: "The most common primary-bedroom mattress size",
    notes: "Add-ons like stain removal or sanitizing apply on top of this range.",
    relatedServiceSlug: "mattress-cleaning",
  },
  {
    item: "King / California King",
    startingPrice: "Starting at $149",
    typicalRange: "$149–$229",
    bestFor: "Larger primary bedrooms",
    notes: "Largest surface area, so pricing trends toward the higher end of most ranges.",
    relatedServiceSlug: "mattress-cleaning",
  },
];

export const PRICING_BY_GOAL: GoalPricingItem[] = [
  {
    item: "Organic Mattress Sanitizing",
    priceImpact: "+$25–$75",
    whyItChanges: "Depends on mattress size and overall condition.",
    relatedServiceSlug: "mattress-sanitizing",
  },
  {
    item: "Mattress Stain Removal",
    priceImpact: "+$35–$125",
    whyItChanges: "Depends on stain type, how long it's set in, and severity.",
    relatedServiceSlug: "mattress-stain-removal",
  },
  {
    item: "Urine Odor Removal",
    priceImpact: "+$49–$149",
    whyItChanges: "Depends on odor depth and whether enzyme treatment is needed.",
    relatedServiceSlug: "urine-odor-removal",
  },
  {
    item: "Dust Mite Mattress Cleaning",
    priceImpact: "+$35–$95",
    whyItChanges: "Depends on mattress size and the cleaning goal.",
    relatedServiceSlug: "dust-mite-mattress-cleaning",
  },
  {
    item: "Allergy-Focused Mattress Cleaning",
    priceImpact: "+$49–$125",
    whyItChanges: "Depends on mattress condition and how thorough the cleaning plan is.",
    relatedServiceSlug: "allergy-mattress-cleaning",
  },
  {
    item: "Baby Mattress Cleaning",
    priceImpact: "$59–$99 total",
    whyItChanges: "Smaller surface area, gentle non-toxic formulas as standard.",
    relatedServiceSlug: "baby-mattress-cleaning",
  },
  {
    item: "Two-Sided Mattress Cleaning",
    priceImpact: "+$40–$100",
    whyItChanges: "Depends on mattress size and access — doubles the surface area cleaned.",
    relatedServiceSlug: "mattress-cleaning",
  },
  {
    item: "Routine Organic Refresh",
    priceImpact: "Base price only",
    whyItChanges: "No add-ons needed when there's no heavy staining or odor concern.",
    relatedServiceSlug: "organic-mattress-cleaning",
  },
];

export const PRICE_EXAMPLES: PriceExample[] = [
  {
    title: "Queen mattress, routine organic cleaning",
    estimate: "Likely starts around $129–$189.",
  },
  {
    title: "King mattress with light odor and sanitizing",
    estimate: "Likely $179–$279 depending on condition.",
  },
  {
    title: "Twin mattress with a child's urine accident",
    estimate: "Likely $129–$229 depending on odor depth.",
  },
  {
    title: "Baby mattress, organic cleaning",
    estimate: "Likely $59–$99 depending on condition.",
  },
  {
    title: "Queen pillow-top mattress with an older stain",
    estimate: "Final quote depends on stain type, age, and how the fabric responds to treatment.",
  },
];

export const PRICE_INCREASE_FACTORS: string[] = [
  "Deep urine contamination",
  "Multiple stains",
  "Old yellowing or sweat stains",
  "Blood, wine, coffee, food, or unknown stains",
  "Heavy odor",
  "Cleaning both sides of the mattress",
  "Large king or California king mattress",
  "Delicate fabric or natural material",
  "High-rise access or difficult parking",
  "Multiple mattresses in one visit",
];

export const PRICE_DECREASE_FACTORS: string[] = [
  "Routine cleaning with no heavy stains",
  "One-sided cleaning only",
  "Multiple mattresses cleaned in the same home visit",
  "Easy access and parking",
  "Light refresh instead of odor treatment",
  "Baby or twin mattress size",
];

export const WHATS_INCLUDED: string[] = [
  "Mattress inspection",
  "Organic, non-toxic cleaning approach",
  "Pre-treatment for spots when needed",
  "Fabric-safe cleaning method",
  "Odor treatment when requested",
  "Sanitizing option",
  "Moisture control",
  "Post-cleaning care guidance",
  "Clear quote before work begins",
];
