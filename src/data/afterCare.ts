export interface DryingGuideRow {
  cleaningType: string;
  dryingConsideration: string;
  whatAffectsDrying: string;
  afterCareTip: string;
}

export const DRYING_GUIDE: DryingGuideRow[] = [
  {
    cleaningType: "Routine Cleaning",
    dryingConsideration: "Typically the fastest-drying option since less moisture is used.",
    whatAffectsDrying: "Room airflow and mattress material.",
    afterCareTip: "Keep sheets off until the surface feels fully dry to the touch.",
  },
  {
    cleaningType: "Stain Treatment",
    dryingConsideration: "May take somewhat longer than routine cleaning depending on the treated area size.",
    whatAffectsDrying: "How large the treated area is and the mattress fabric.",
    afterCareTip: "Avoid pressing on the treated area while it's still damp.",
  },
  {
    cleaningType: "Urine Odor Treatment",
    dryingConsideration: "Often needs more drying attention since the treatment targets deeper layers.",
    whatAffectsDrying: "How deep the odor had set in and the mattress material.",
    afterCareTip: "Extra airflow and patience help the enzyme treatment finish working as it dries.",
  },
  {
    cleaningType: "Sanitizing Option",
    dryingConsideration: "Drying time varies with the sanitizing method used.",
    whatAffectsDrying: "Mattress thickness and ventilation.",
    afterCareTip: "Follow the specific drying guidance given at the end of your visit.",
  },
  {
    cleaningType: "Two-Sided Cleaning",
    dryingConsideration: "Typically takes longer since both sides need to dry.",
    whatAffectsDrying: "Ability to prop or stand the mattress for airflow on both sides.",
    afterCareTip: "If possible, allow extra ventilation time before flipping back to normal use.",
  },
  {
    cleaningType: "Memory Foam / Pillow-Top Care",
    dryingConsideration: "Usually the slowest-drying mattress types due to dense material.",
    whatAffectsDrying: "Foam density and how much moisture was needed for treatment.",
    afterCareTip: "Give extra time before covering, since these materials hold moisture longer than innerspring mattresses.",
  },
];

export interface AfterCareCard {
  title: string;
  body: string;
}

export const AFTER_CARE_BY_GOAL: AfterCareCard[] = [
  {
    title: "After Urine Odor Treatment",
    body: "Allow extra drying time and airflow so the enzyme treatment can fully finish working. Avoid covering the area until it's completely dry.",
  },
  {
    title: "After Stain Treatment",
    body: "Keep the treated area uncovered until dry, and avoid pressing down on it, which can push moisture back into the fabric.",
  },
  {
    title: "After Baby Mattress Cleaning",
    body: "Wait until the mattress is fully dry before placing a fitted sheet, since infants are in close, prolonged contact with the surface.",
  },
  {
    title: "After Dust Mite Cleaning",
    body: "Vacuuming bedroom floors and washing bedding regularly afterward can help maintain the results between visits.",
  },
  {
    title: "After Sanitizing",
    body: "Follow the specific drying guidance given after your visit, since sanitizing methods can vary in moisture level.",
  },
  {
    title: "After Pet-Related Cleaning",
    body: "Keep pets off the mattress until it's fully dry to avoid reintroducing moisture or odor before the treatment finishes.",
  },
];
