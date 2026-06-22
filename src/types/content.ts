export interface FaqItem {
  q: string;
  a: string;
}

export interface AnswerItem {
  q: string;
  a: string;
}

export interface ServiceArea {
  slug: string;
  name: string;
  region: string;
  heroTagline: string;
  heroHeading: string;
  heroSubheading: string;
  introHeading: string;
  introParagraphs: string[];
  benefits: string[];
  nearbyAreas: string[];
  faqs: FaqItem[];
  seoTitle: string;
  seoDescription: string;

  /** Why local homeowners choose eco-friendly mattress cleaning — 2-3 sentences. */
  whyEcoFriendly: string;
  /** Common mattress issues tied to this area's homes/apartments/climate. */
  commonIssues: string[];
  /** How scheduling works for this area — short paragraph. */
  schedulingNote: string;
  /** Direct Q&A pairs for AI/answer-engine optimization, distinct from faqs accordion. */
  answerBlock: AnswerItem[];
  /** Related service slugs to cross-link from this area page. */
  relatedServiceSlugs: string[];
  /**
   * Set true for the area whose intent the homepage already owns (Los Angeles).
   * That area stays listed everywhere but does not get its own /service-areas/[slug]
   * page — it links to "/" instead, to avoid homepage/city-page keyword cannibalization.
   */
  isPrimaryMarket?: boolean;
}

export interface ServicePage {
  slug: string;
  name: string;
  shortDescription: string;
  iconName: ServiceIconName;
  heroHeading: string;
  heroSubheading: string;
  introHeading: string;
  introParagraphs: string[];
  benefits: string[];
  processSteps: { n: string; t: string; d: string }[];
  faqs: FaqItem[];
  seoTitle: string;
  seoDescription: string;
  fullPath: string;

  /** "What this service is" — 2-3 sentence plain definition. */
  whatItIs: string;
  /** "Who needs this service" — short paragraph or list framing. */
  whoNeedsIt: string[];
  /** Common problems this service helps address. */
  commonProblems: string[];
  /** Why eco-friendly / non-toxic matters for this specific service — 2-3 sentences. */
  ecoImportance: string;
  /** Before / during / after expectations. */
  expectations: { before: string; during: string; after: string };
  /** Benefits framed for families, kids, pets, allergy-sensitive homes. */
  householdBenefits: string[];
  /** When to schedule this service — short paragraph. */
  whenToSchedule: string;
  /** Direct Q&A pairs for AI/answer-engine optimization, distinct from faqs accordion. */
  answerBlock: AnswerItem[];
  /** Related service slugs to cross-link from this page. */
  relatedServiceSlugs: string[];
}

export type ServiceIconName =
  | "leaf"
  | "sparkles"
  | "droplets"
  | "shield-check"
  | "wind"
  | "baby";
