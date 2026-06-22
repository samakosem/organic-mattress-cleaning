export interface StainTypeInfo {
  name: string;
  cause: string;
  difficulty: "Usually Easier" | "Moderate" | "Often Difficult";
  whatAffectsResults: string;
  relatedServiceSlug: string;
}

export const STAIN_TYPES: StainTypeInfo[] = [
  {
    name: "Urine Stains",
    cause: "Pet accidents, potty-training, or bedwetting.",
    difficulty: "Often Difficult",
    whatAffectsResults: "How deep it's set, mattress age, and whether enzyme treatment has been tried before.",
    relatedServiceSlug: "urine-odor-removal",
  },
  {
    name: "Sweat Stains",
    cause: "Everyday body heat and moisture absorbed over time.",
    difficulty: "Usually Easier",
    whatAffectsResults: "How long the buildup has accumulated and the mattress fabric type.",
    relatedServiceSlug: "mattress-stain-removal",
  },
  {
    name: "Yellowing",
    cause: "Long-term sweat and body oil oxidation on the mattress surface.",
    difficulty: "Often Difficult",
    whatAffectsResults: "Age of the discoloration. Older yellowing can be partially or fully permanent.",
    relatedServiceSlug: "mattress-stain-removal",
  },
  {
    name: "Blood Stains",
    cause: "Cuts, injuries, or menstrual accidents.",
    difficulty: "Moderate",
    whatAffectsResults: "How fresh the stain is. Dried, set-in blood is harder to treat than fresh blood.",
    relatedServiceSlug: "mattress-stain-removal",
  },
  {
    name: "Wine Stains",
    cause: "Spilled red or white wine.",
    difficulty: "Moderate",
    whatAffectsResults: "How quickly it was blotted and whether it had time to dry and set.",
    relatedServiceSlug: "mattress-stain-removal",
  },
  {
    name: "Coffee Stains",
    cause: "Spilled coffee or tea, often from breakfast-in-bed habits.",
    difficulty: "Moderate",
    whatAffectsResults: "Whether sugar or cream was involved, and how long the spill sat before treatment.",
    relatedServiceSlug: "mattress-stain-removal",
  },
  {
    name: "Pet Stains",
    cause: "Pet accidents, shedding, or pets spending time on the bed.",
    difficulty: "Often Difficult",
    whatAffectsResults: "Whether odor has set in alongside the visible stain.",
    relatedServiceSlug: "urine-odor-removal",
  },
  {
    name: "Food Spills",
    cause: "Eating in bed, including crumbs, sauces, or general spills.",
    difficulty: "Usually Easier",
    whatAffectsResults: "How greasy or sugary the spill was and how quickly it was addressed.",
    relatedServiceSlug: "mattress-stain-removal",
  },
  {
    name: "Old Stains",
    cause: "Any stain that's had months or years to set into the fabric.",
    difficulty: "Often Difficult",
    whatAffectsResults: "How deep the stain has bonded with the fibers and whether prior DIY attempts were made.",
    relatedServiceSlug: "mattress-stain-removal",
  },
  {
    name: "Unknown Stains",
    cause: "Stains with an unclear origin, often inherited from a used mattress or unclear history.",
    difficulty: "Often Difficult",
    whatAffectsResults: "Without knowing the cause, treatment is based on visible characteristics and a cautious approach.",
    relatedServiceSlug: "mattress-stain-removal",
  },
];

export interface StainCardInfo {
  name: string;
  cause: string;
  whyDifficult: string;
  treatmentNote: string;
  limitation: string;
}

export const STAIN_CARDS: StainCardInfo[] = [
  {
    name: "Urine Stains",
    cause: "Pet accidents, potty-training, or bedwetting moisture soaking into the mattress.",
    whyDifficult: "Uric acid crystals settle into padding and can reactivate with humidity, carrying odor long after the visible stain seems gone.",
    treatmentNote: "Enzyme-based, organic treatment can help break down the uric acid at the source.",
    limitation: "Deep or long-set contamination may only partially improve, especially on older mattresses.",
  },
  {
    name: "Sweat Stains",
    cause: "Everyday body heat and moisture absorbed during sleep.",
    whyDifficult: "Builds up gradually and can be widespread rather than a single spot.",
    treatmentNote: "Organic stain treatment paired with extraction can help lift sweat-related discoloration.",
    limitation: "Long-term buildup may leave faint discoloration even after treatment.",
  },
  {
    name: "Yellow Stains",
    cause: "Oxidized sweat and body oils that have darkened over time.",
    whyDifficult: "Oxidation is a chemical change in the fabric, not just surface dirt.",
    treatmentNote: "Treatment can often lighten yellowing noticeably.",
    limitation: "Older yellowing may be partially or fully permanent.",
  },
  {
    name: "Blood Stains",
    cause: "Cuts, injuries, or menstrual accidents.",
    whyDifficult: "Blood proteins can bind to fabric, especially once dried.",
    treatmentNote: "Fresh blood typically responds better than dried, set-in blood.",
    limitation: "Older or large blood stains may only partially lift.",
  },
  {
    name: "Wine Stains",
    cause: "Spilled red or white wine, often from in-bed drinks.",
    whyDifficult: "Tannins and pigment in wine bind to fabric fibers the longer they sit.",
    treatmentNote: "Quick treatment after a spill tends to lift wine stains well.",
    limitation: "Stains left to dry for days can leave a faint shadow.",
  },
  {
    name: "Coffee Stains",
    cause: "Spilled coffee or tea.",
    whyDifficult: "Sugar and cream additives can make the stain stickier and more set-in.",
    treatmentNote: "Organic treatment can typically lift coffee stains well, especially when fresh.",
    limitation: "Set-in stains with sugar content can be more stubborn.",
  },
  {
    name: "Food Stains",
    cause: "Crumbs, sauces, and general food spills from eating in bed.",
    whyDifficult: "Greasy or oily foods can spread and bond with fabric.",
    treatmentNote: "Most food spills respond well to prompt organic spot treatment.",
    limitation: "Greasy stains left untreated for a long time may leave a residual mark.",
  },
  {
    name: "Pet Stains",
    cause: "Pet accidents or pets spending regular time on the bed.",
    whyDifficult: "Often comes with odor in addition to the visible stain.",
    treatmentNote: "Enzyme-based treatment addresses both the stain and the odor source.",
    limitation: "Repeat accidents in the same spot can mean deeper, harder-to-fully-resolve contamination.",
  },
  {
    name: "Body Oil Buildup",
    cause: "Natural skin oils absorbed into the mattress over months and years of use.",
    whyDifficult: "Gradual and often covers a larger area rather than a single spot.",
    treatmentNote: "Extraction cleaning can help lift built-up body oil discoloration.",
    limitation: "Years of accumulation may leave some residual discoloration.",
  },
  {
    name: "Unknown Stains",
    cause: "Unclear origin, often on a used or older mattress.",
    whyDifficult: "Without knowing the source, treatment has to be cautious and based on visible characteristics.",
    treatmentNote: "We treat unknown stains conservatively to avoid making them worse.",
    limitation: "Results are less predictable without knowing what caused the stain.",
  },
  {
    name: "Old Stains",
    cause: "Any stain that's had months or years to set in.",
    whyDifficult: "Time allows the stain to bond more deeply with mattress fibers.",
    treatmentNote: "Professional treatment can often improve old stains noticeably.",
    limitation: "Full removal is less likely the longer a stain has been left untreated.",
  },
];
