import {
  ETier,
  EElementRequirement,
  type IStat,
  EStatName,
  EElement,
  type IStar,
} from "@/core/stars";
import { derived, writable } from "svelte/store";
import { sveltePage } from "@stores/svelteStores";

export type ISet = {
  requirements: { Element: EElement | "Any"; Amount: number }[];
  effects: IStat[];
  name: string;
  tier: ETier;
  description: string;
};

export type ISetPage = ISet[];

const set3Star: ISetPage = [
  {
    requirements: [{ Element: EElementRequirement.Any, Amount: 3 }],
    effects: [
      { name: EStatName.Attack, value: 80 },
      { name: EStatName.Accuracy, value: 300 },
      { name: EStatName.Defense, value: 500 },
    ],
    name: "Epic Set",
    tier: ETier.Epic,
    description: "Imprint all slots with Epic elements to gain effects",
  },
  {
    requirements: [{ Element: EElementRequirement.Any, Amount: 3 }],
    effects: [
      { name: EStatName.Attack, value: 200 },
      { name: EStatName.Accuracy, value: 750 },
      { name: EStatName.Defense, value: 1250 },
    ],
    name: "Legendary Set",
    tier: ETier.Legendary,
    description: "Imprint all slots with Legendary elements to gain effects",
  },
  {
    requirements: [{ Element: EElementRequirement.Any, Amount: 1 }],
    effects: [
      { name: EStatName.Attack, value: 100 },
      { name: EStatName.Accuracy, value: 375 },
      { name: EStatName.Defense, value: 625 },
    ],
    name: "Legendary x1 Set",
    tier: ETier.Legendary,
    description: "Imprint all slots with Legendary elements to gain effects",
  },
  {
    requirements: [{ Element: EElementRequirement.Any, Amount: 3 }],
    effects: [
      { name: EStatName.Attack, value: 300 },
      { name: EStatName.Accuracy, value: 1250 },
      { name: EStatName.Defense, value: 1750 },
    ],
    name: "Mythic Set",
    tier: ETier.Mythic,
    description: "Imprint all slots with Mythic elements to gain effects",
  },
];

// Mythic Fire Set
// Mythic Water Set...
const set4Star: ISetPage = [
  {
    requirements: [{ Element: EElement.Fire, Amount: 4 }],
    effects: [
      { name: EStatName.Attack, value: 1160 },
      { name: EStatName.CriticalHit, value: 4500 },
      { name: EStatName.CriticalDamage, value: 20 },
    ],
    name: "Mythic Fire Set",
    tier: ETier.Mythic,
    description: "Imprint all slots with Mythic Fire elements to gain effects",
  },
];
const set5Star: ISetPage = [];
const set6Star: ISetPage = [];
const set7Star: ISetPage = [];

export function getQualifiedSet(
  stars: IStar[],
  setPage: ISetPage
): ISet | null {
  let qualifiedSet: ISet | null = null;

  setPage.forEach((set) => {
    let matchCount = 0;

    // Check if the current set's requirements are met by the stars
    set.requirements.forEach((req) => {
      const count = stars.filter((star) =>
        req.Element === "Any"
          ? star.tier === set.tier
          : star.element === req.Element && star.tier === set.tier
      ).length;

      // If the requirement is for 'Any' element, check only the tier
      if (req.Element === "Any") {
        if (count >= req.Amount) {
          matchCount++;
        }
      } else {
        // If the requirement is for a specific element, check both element and tier
        if (count === req.Amount) {
          matchCount++;
        }
      }
    });

    // If the requirements match and the set is better than the current qualified set, update the qualified set
    if (
      matchCount === set.requirements.length &&
      (!qualifiedSet || compareSets(qualifiedSet, set))
    ) {
      qualifiedSet = set;
    }
  });

  return qualifiedSet;
}

// Compares two sets and returns true if the second one is better than the first
function compareSets(set1: ISet, set2: ISet): boolean {
  // Compare the effects of the sets - this might be based on value, number of effects, or however you determine one set is better than another
  const totalValue1 = set1.effects.reduce(
    (acc, effect) => acc + (effect.value || 0),
    0
  );
  const totalValue2 = set2.effects.reduce(
    (acc, effect) => acc + (effect.value || 0),
    0
  );

  return totalValue2 > totalValue1;
}

export const pageSets = derived([sveltePage], ([$page]) => {
  switch ($page) {
    case "1":
      return set3Star;
    case "2":
    case "3":
      return set4Star;
    case "4":
    case "5":
      return set5Star;
    case "6":
      return set6Star;
    case "7":
      return set7Star;
    default:
      return set3Star;
  }
});
