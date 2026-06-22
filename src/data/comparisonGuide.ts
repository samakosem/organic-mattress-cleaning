export interface DiyVsProRow {
  factor: string;
  diy: string;
  professional: string;
}

export const DIY_VS_PRO_TABLE: DiyVsProRow[] = [
  {
    factor: "Light surface refresh",
    diy: "Can often be handled with vacuuming and spot care.",
    professional: "Also available as a routine organic refresh visit.",
  },
  {
    factor: "Urine odor",
    diy: "Surface cleanup may not reach uric acid crystals deeper in the padding.",
    professional: "Enzyme-based treatment targets the odor source directly.",
  },
  {
    factor: "Old stains",
    diy: "Limited tools and products to fully address set-in stains.",
    professional: "Professional-grade extraction and targeted treatment, though full removal still isn't guaranteed.",
  },
  {
    factor: "Sweat and yellowing",
    diy: "Home spot-cleaning may lighten mild buildup.",
    professional: "Extraction cleaning can address more widespread buildup.",
  },
  {
    factor: "Pet odor",
    diy: "Risk of masking odor with fragrance rather than treating the source.",
    professional: "Enzyme-based treatment addresses the underlying cause.",
  },
  {
    factor: "Baby mattress cleaning",
    diy: "Limited access to gentle, professional-grade non-toxic products.",
    professional: "Extra-gentle, non-toxic formulas designed for infant contact surfaces.",
  },
  {
    factor: "Memory foam",
    diy: "High risk of over-wetting dense foam.",
    professional: "Low-moisture method designed specifically for foam's moisture sensitivity.",
  },
  {
    factor: "Moisture control",
    diy: "Easy to use too much water without realizing the risk.",
    professional: "Moisture level chosen based on mattress material and condition.",
  },
  {
    factor: "Drying guidance",
    diy: "Often guesswork.",
    professional: "Specific guidance provided based on what was used during the visit.",
  },
  {
    factor: "Product selection",
    diy: "Whatever's available at home, not always mattress-appropriate.",
    professional: "Organic, plant-based products selected for mattress fabric specifically.",
  },
  {
    factor: "Cost",
    diy: "Lower upfront cost, but mistakes can be costly to fix later.",
    professional: "Transparent pricing based on mattress size and condition. See our pricing guide.",
  },
  {
    factor: "Best for",
    diy: "Light, routine maintenance with no deep stains or odor.",
    professional: "Stains, odors, urine accidents, sanitizing goals, and moisture-sensitive materials.",
  },
];

export const DIY_MISTAKES: string[] = [
  "Using too much water on the mattress",
  "Using bleach, which can damage fabric and doesn't address odor at the source",
  "Mixing random cleaning chemicals together",
  "Scrubbing aggressively, which can spread a stain or push it deeper",
  "Not allowing the mattress to fully dry before covering it",
  "Covering the mattress with sheets or a protector too early",
  "Using strong fragrance sprays instead of treating the actual odor source",
  "Assuming an online cleaning hack fits every mattress material the same way",
];

export const WHEN_TO_CALL_PRO: string[] = [
  "Urine odor that hasn't fully resolved with home cleanup",
  "Old or set-in stains",
  "Large stains covering a wide area",
  "Pet accidents, especially repeated ones in the same spot",
  "Baby mattress accidents",
  "Memory foam or pillow-top mattress concerns",
  "Odor that returns after a DIY attempt",
  "Multiple stains across the mattress",
  "Moisture-sensitive mattress materials",
  "Wanting an organic, non-toxic process instead of household chemical products",
];
