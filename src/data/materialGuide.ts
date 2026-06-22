export interface MaterialInfo {
  type: string;
  cleaningConcern: string;
  moistureSensitivity: "Low" | "Moderate" | "High";
  commonIssues: string;
  bestApproach: string;
  relatedServiceSlug: string;
}

export const MATERIAL_TYPES: MaterialInfo[] = [
  {
    type: "Memory Foam",
    cleaningConcern: "Dense material holds onto moisture longer than other types.",
    moistureSensitivity: "High",
    commonIssues: "Slow drying, odor absorption, risk of trapped moisture.",
    bestApproach: "Low-moisture, organic treatment with careful drying guidance.",
    relatedServiceSlug: "mattress-cleaning",
  },
  {
    type: "Hybrid Mattresses",
    cleaningConcern: "Combines foam and coil layers, each responding differently to moisture.",
    moistureSensitivity: "Moderate",
    commonIssues: "Fabric top staining, foam comfort layer odor retention.",
    bestApproach: "Fabric-aware cleaning suited to the specific top layer material.",
    relatedServiceSlug: "mattress-cleaning",
  },
  {
    type: "Latex Mattresses",
    cleaningConcern: "Natural and synthetic latex can respond differently to cleaning solutions.",
    moistureSensitivity: "Moderate",
    commonIssues: "Fabric cover sensitivity, varying solution compatibility.",
    bestApproach: "Inspect fabric cover first, then select a gentle, fabric-aware method.",
    relatedServiceSlug: "mattress-cleaning",
  },
  {
    type: "Pillow-Top Mattresses",
    cleaningConcern: "Extra padded top layer can trap stains and moisture near the surface.",
    moistureSensitivity: "High",
    commonIssues: "Visible yellowing, sweat buildup, slower drying in the top layer.",
    bestApproach: "Careful, low-moisture extraction focused on the padded layer.",
    relatedServiceSlug: "mattress-stain-removal",
  },
  {
    type: "Innerspring Mattresses",
    cleaningConcern: "Traditional coil construction is generally more straightforward to clean.",
    moistureSensitivity: "Low",
    commonIssues: "Surface staining, general buildup over time.",
    bestApproach: "Standard organic extraction cleaning works well for most innerspring mattresses.",
    relatedServiceSlug: "mattress-cleaning",
  },
  {
    type: "Crib & Baby Mattresses",
    cleaningConcern: "Small surface, but extra care needed given direct infant contact.",
    moistureSensitivity: "Moderate",
    commonIssues: "Urine accidents, food spills, need for extra-gentle products.",
    bestApproach: "Extra-gentle, non-toxic formulas with careful drying before reuse.",
    relatedServiceSlug: "baby-mattress-cleaning",
  },
];

export interface MaterialDeepDive {
  title: string;
  paragraphs: string[];
}

export const MATERIAL_DEEP_DIVES: MaterialDeepDive[] = [
  {
    title: "Memory Foam Mattress Cleaning",
    paragraphs: [
      "Memory foam's dense structure means it absorbs and holds onto moisture longer than coil-based mattresses, which makes moisture control the central concern when cleaning it.",
      "Odor, including urine odor, can settle deeper into foam than into other materials, which is part of why enzyme-based treatment is often recommended specifically for foam mattresses with odor concerns.",
      "Our organic approach uses a low-moisture method on memory foam specifically to reduce the risk of slow drying or trapped dampness, with clear drying guidance provided after the visit.",
    ],
  },
  {
    title: "Hybrid Mattress Cleaning",
    paragraphs: [
      "Hybrid mattresses combine a coil support base with foam or latex comfort layers under a fabric top, meaning the cleaning approach has to account for more than one material at once.",
      "Stains and odor concerns are usually most relevant to the fabric top and immediate comfort layer, so treatment focuses there while still considering how moisture moves through the layered construction.",
      "Drying guidance for hybrids depends on how much of the comfort layer needed treatment versus a surface-only refresh.",
    ],
  },
  {
    title: "Pillow-Top Mattress Cleaning",
    paragraphs: [
      "The extra padded layer on top of a pillow-top mattress is exactly where sweat, body oil, and visible yellowing tend to concentrate, since it's the surface in most direct, prolonged contact with the body.",
      "That same padding can also trap moisture if too much liquid is used during cleaning, which is why a careful, low-moisture approach matters more here than on a flatter mattress surface.",
      "Stain age plays a big role in pillow-top results. Recently developed yellowing tends to improve more than discoloration that's been building for years.",
    ],
  },
  {
    title: "Latex Mattress Cleaning",
    paragraphs: [
      "Natural and synthetic latex don't always respond the same way to cleaning solutions, and the fabric cover over the latex matters just as much as the latex itself.",
      "We inspect the fabric cover and construction before choosing a method, since what's safe for one latex mattress cover isn't automatically safe for another.",
      "Moisture and solution sensitivity vary by latex type, so a cautious, fabric-aware approach is the standard here.",
    ],
  },
  {
    title: "Baby & Crib Mattress Cleaning",
    paragraphs: [
      "Crib and baby mattresses are smaller, but they call for extra care given how much direct, prolonged contact infants have with the surface.",
      "Our process is designed to be family-safe and pet-safe, and on baby mattresses specifically we lean toward the gentlest non-toxic formulas available, without making any medical or health claims about the outcome.",
      "Urine accidents and food spills are the most common concerns on baby mattresses, and we treat both with non-toxic, fabric-aware methods.",
    ],
  },
];
