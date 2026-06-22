export type BlogCategory =
  | "Mattress Cleaning Tips"
  | "Stain & Odor Removal"
  | "Eco-Friendly Cleaning"
  | "Allergy-Sensitive Homes"
  | "Family & Baby Mattress Care"
  | "Los Angeles Home Care";

export interface BlogFaqItem {
  q: string;
  a: string;
}

export interface BlogPostSection {
  heading: string;
  body: string[];
}

export interface BlogAnswerItem {
  q: string;
  a: string;
}

export interface BlogAuthor {
  name: string;
  role: string;
  bio: string;
}

/** Full post — has body content, gets a real /blog/[slug] page + BlogPosting schema. */
export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  datePublished: string;
  /** Set only when the post has been substantively updated after first publish. */
  dateModified?: string;
  readMinutes: number;
  author?: BlogAuthor;
  intro: string[];
  /** Short, direct Q&A pairs near the top of the article for AI/answer-engine quoting. */
  answerBlock?: BlogAnswerItem[];
  sections: BlogPostSection[];
  faqs: BlogFaqItem[];
  relatedServiceSlugs: string[];
  /** Service-area slugs to cross-link where natural (e.g. "los-angeles", "santa-monica"). */
  relatedAreaSlugs?: string[];
  isPublished: true;
}

/** Planned post — listing card only, no live page yet, not linked, not in sitemap. */
export interface PlannedBlogPost {
  title: string;
  category: BlogCategory;
  excerpt: string;
  isPublished: false;
}

export type BlogListItem = BlogPost | PlannedBlogPost;
