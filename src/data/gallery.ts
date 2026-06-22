export type GalleryCategory =
  | "Mattress Cleaning"
  | "Mattress Stain Removal"
  | "Urine Odor Treatment"
  | "Baby Mattress Cleaning"
  | "Mattress Sanitizing"
  | "Pet-Related Mattress Cleaning"
  | "Project Photos";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  location: string;
  service: string;
  /** Real photo on disk. We do not have separate before/after image pairs, so
   *  every item currently uses imageType "singleProject" and only `image` is set. */
  image: string;
  imageAlt: string;
  description: string;
  resultNote: string;
  relatedServiceSlug: string;
  citySlug?: string;
  imageType: "beforeAfter" | "singleProject";
}

const RESULT_NOTE_GENERAL =
  "Results vary based on mattress fabric, stain age, stain type, odor depth, and previous cleaning attempts.";

const RESULT_NOTE_URINE =
  "Results vary based on how deep the odor has set into the mattress, fabric type, and prior treatment attempts.";

/**
 * Real project photos from completed visits — not documented before/after
 * pairs (we don't have separate before-image + after-image files for the
 * same mattress), so every item is labeled as a single project photo,
 * never presented as before/after proof.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "general-refresh-1",
    title: "Queen Mattress Routine Cleaning in Los Angeles",
    category: "Mattress Cleaning",
    location: "Los Angeles, CA",
    service: "Mattress Cleaning",
    image: "/images/before-after/mattress cleaning before and after (5).webp",
    imageAlt: "Mattress surface after a routine organic mattress cleaning visit in Los Angeles",
    description: "Routine organic mattress cleaning addressing general surface buildup and discoloration.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "mattress-cleaning",
    imageType: "singleProject",
  },
  {
    id: "body-oil-sweat-1",
    title: "Body Oil & Sweat Discoloration Treatment",
    category: "Mattress Stain Removal",
    location: "Los Angeles, CA",
    service: "Mattress Stain Removal",
    image: "/images/before-after/mattress cleaning before and after (6).webp",
    imageAlt: "Mattress surface after organic treatment for body oil and sweat discoloration",
    description: "Organic stain treatment for body oil and sweat discoloration that builds up with everyday use.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "mattress-stain-removal",
    imageType: "singleProject",
  },
  {
    id: "wine-stain-1",
    title: "Queen Mattress Wine Stain Treatment",
    category: "Mattress Stain Removal",
    location: "Los Angeles, CA",
    service: "Mattress Stain Removal",
    image: "/images/before-after/mattress cleaning before and after (7).webp",
    imageAlt: "Mattress surface after organic treatment for a red wine stain",
    description: "Organic stain treatment for a red wine spill, using a plant-based, non-toxic approach.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "mattress-stain-removal",
    imageType: "singleProject",
  },
  {
    id: "child-stain-1",
    title: "Kids' Room Mattress Stain Treatment",
    category: "Baby Mattress Cleaning",
    location: "Los Angeles, CA",
    service: "Stain Treatment",
    image: "/images/before-after/mattress cleaning before and after (8).webp",
    imageAlt: "Mattress surface after organic stain treatment in a child's bedroom",
    description: "Gentle, non-toxic stain treatment for a mattress in a child's bedroom.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "baby-mattress-cleaning",
    imageType: "singleProject",
  },
  {
    id: "body-oil-corner-1",
    title: "Mattress Corner Body Oil Stain Treatment",
    category: "Mattress Stain Removal",
    location: "Los Angeles, CA",
    service: "Mattress Stain Removal",
    image: "/images/before-after/mattress cleaning before and after (9).webp",
    imageAlt: "Mattress corner after organic treatment for a body oil stain",
    description: "Targeted organic spot treatment for a body oil stain near the mattress corner.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "mattress-stain-removal",
    imageType: "singleProject",
  },
  {
    id: "extraction-process-1",
    title: "Professional Mattress Cleaning Process",
    category: "Project Photos",
    location: "Los Angeles, CA",
    service: "Mattress Cleaning",
    image: "/images/before-after/mattress cleaning before and after (10).webp",
    imageAlt: "Mattress cleaning technician using a professional extraction tool during a cleaning visit",
    description: "Our technician using professional extraction equipment during an organic mattress cleaning visit.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "mattress-cleaning",
    imageType: "singleProject",
  },
  {
    id: "sweat-childs-room-1",
    title: "Child's Bedroom Sweat Stain Treatment",
    category: "Baby Mattress Cleaning",
    location: "Los Angeles, CA",
    service: "Stain Treatment",
    image: "/images/before-after/mattress cleaning before and after (11).webp",
    imageAlt: "Mattress surface after organic treatment for a sweat stain in a child's bedroom",
    description: "Organic, non-toxic treatment for a sweat stain on a mattress in a child's room.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "baby-mattress-cleaning",
    imageType: "singleProject",
  },
  {
    id: "wine-spill-1",
    title: "Wine Spill Treatment, Los Angeles Home",
    category: "Mattress Stain Removal",
    location: "Los Angeles, CA",
    service: "Mattress Stain Removal",
    image: "/images/before-after/mattress cleaning before and after (12).webp",
    imageAlt: "Mattress surface after organic treatment for a wine spill in a Los Angeles home",
    description: "Plant-based stain treatment for a wine spill in a Los Angeles home.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "mattress-stain-removal",
    imageType: "singleProject",
  },
  {
    id: "urine-treatment-1",
    title: "Pet Urine Odor Treatment",
    category: "Urine Odor Treatment",
    location: "Los Angeles, CA",
    service: "Urine Odor Removal",
    image: "/images/before-after/mattress cleaning before and after (13).webp",
    imageAlt: "Mattress surface after organic urine odor treatment",
    description: "Enzyme-based, organic odor treatment for a pet-related urine accident.",
    resultNote: RESULT_NOTE_URINE,
    relatedServiceSlug: "urine-odor-removal",
    imageType: "singleProject",
  },
  {
    id: "pet-sweat-1",
    title: "Pet-Related Mattress Treatment Near Pet Bed",
    category: "Pet-Related Mattress Cleaning",
    location: "Los Angeles, CA",
    service: "Urine Odor Removal",
    image: "/images/before-after/mattress cleaning before and after (14).webp",
    imageAlt: "Mattress surface after organic treatment for sweat and pet-related buildup",
    description: "Organic treatment addressing sweat and pet-related buildup near a pet bed area.",
    resultNote: RESULT_NOTE_URINE,
    relatedServiceSlug: "urine-odor-removal",
    imageType: "singleProject",
  },
  {
    id: "body-oil-mountain-1",
    title: "Body Oil Stain Treatment, Hillside Home",
    category: "Mattress Stain Removal",
    location: "Los Angeles, CA",
    service: "Mattress Stain Removal",
    image: "/images/before-after/mattress cleaning before and after (15).webp",
    imageAlt: "Mattress surface after organic treatment for a body oil stain in a hillside home",
    description: "Organic stain treatment for body oil buildup in a hillside Los Angeles-area home.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "mattress-stain-removal",
    imageType: "singleProject",
  },
  {
    id: "sherman-oaks-1",
    title: "Mobile Mattress Cleaning, Sherman Oaks",
    category: "Mattress Cleaning",
    location: "Sherman Oaks, CA",
    service: "Mattress Cleaning",
    image: "/images/before-after/mattress cleaning before and after (17).webp",
    imageAlt: "Mobile organic mattress cleaning project photo from a Sherman Oaks home",
    description: "Mobile organic mattress cleaning visit at a Sherman Oaks home.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "mattress-cleaning",
    citySlug: "sherman-oaks",
    imageType: "singleProject",
  },
  {
    id: "north-hollywood-1",
    title: "Mobile Mattress Cleaning, North Hollywood",
    category: "Mattress Cleaning",
    location: "North Hollywood, CA",
    service: "Mattress Cleaning",
    image: "/images/before-after/mattress cleaning before and after (18).webp",
    imageAlt: "Mobile organic mattress cleaning project photo from a North Hollywood home",
    description: "Mobile organic mattress cleaning visit at a North Hollywood home.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "mattress-cleaning",
    citySlug: "north-hollywood",
    imageType: "singleProject",
  },
  {
    id: "encino-1",
    title: "Mobile Mattress Cleaning, Encino",
    category: "Mattress Cleaning",
    location: "Encino, CA",
    service: "Mattress Cleaning",
    image: "/images/before-after/mattress cleaning before and after (19).webp",
    imageAlt: "Mobile organic mattress cleaning project photo from an Encino home",
    description: "Mobile organic mattress cleaning visit at an Encino home.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "mattress-cleaning",
    citySlug: "encino",
    imageType: "singleProject",
  },
  {
    id: "burbank-1",
    title: "Mobile Mattress Cleaning, Burbank",
    category: "Mattress Sanitizing",
    location: "Burbank, CA",
    service: "Mattress Sanitizing",
    image: "/images/before-after/mattress cleaning before and after (20).webp",
    imageAlt: "Mobile organic mattress cleaning project photo from a Burbank home",
    description: "Mobile organic mattress sanitizing visit at a Burbank home.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "mattress-sanitizing",
    citySlug: "burbank",
    imageType: "singleProject",
  },
  {
    id: "studio-city-1",
    title: "Mobile Mattress Cleaning, Studio City",
    category: "Mattress Cleaning",
    location: "Studio City, CA",
    service: "Mattress Cleaning",
    image: "/images/before-after/mattress cleaning before and after (21).webp",
    imageAlt: "Mobile organic mattress cleaning project photo from a Studio City home",
    description: "Mobile organic mattress cleaning visit at a Studio City home.",
    resultNote: RESULT_NOTE_GENERAL,
    relatedServiceSlug: "mattress-cleaning",
    citySlug: "studio-city",
    imageType: "singleProject",
  },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Mattress Cleaning",
  "Mattress Stain Removal",
  "Urine Odor Treatment",
  "Baby Mattress Cleaning",
  "Mattress Sanitizing",
  "Pet-Related Mattress Cleaning",
  "Project Photos",
];
