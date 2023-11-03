import {
  ETier,
  EElementRequirement,
  type IStat,
  EStatName,
  EElement,
  type IStar,
  EStatValue,
  EStatNameToValueMap,
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
  {
    requirements: [{ Element: EElement.Water, Amount: 4 }],
    effects: [
      { name: EStatName.CritHitResistance, value: 5300 },
      { name: EStatName.Parry, value: 2200 },
      { name: EStatName.MPPotency, value: 30 },
    ],
    name: "Mythic Water Set",
    tier: ETier.Mythic,
    description: "Imprint all slots with Mythic Water elements to gain effects",
  },
  {
    requirements: [{ Element: EElement.Wind, Amount: 4 }],
    effects: [
      { name: EStatName.Accuracy, value: 3000 },
      { name: EStatName.Evasion, value: 4230 },
      { name: EStatName.PvECriticalDamageDecrease, value: 5400 },
    ],
    name: "Mythic Wind Set",
    tier: ETier.Mythic,
    description: "Imprint all slots with Mythic Wind elements to gain effects",
  },
  {
    requirements: [{ Element: EElement.Earth, Amount: 4 }],
    effects: [
      { name: EStatName.Defense, value: 6650 },
      { name: EStatName.Health, value: 3400 },
      { name: EStatName.DefBoostRate, value: 4 },
    ],
    name: "Mythic Earth Set",
    tier: ETier.Mythic,
    description: "Imprint all slots with Mythic Earth elements to gain effects",
  },
  {
    requirements: [{ Element: EElement.Dark, Amount: 4 }],
    effects: [
      { name: EStatName.PvPAttack, value: 4150 },
      { name: EStatName.PvPDefense, value: 15000 },
      { name: EStatName.PvPEvasion, value: 3350 },
    ],
    name: "Mythic Dark Set",
    tier: ETier.Mythic,
    description: "Imprint all slots with Mythic Dark elements to gain effects",
  },
  {
    requirements: [{ Element: EElement.Light, Amount: 4 }],
    effects: [
      { name: EStatName.PvPAccuracy, value: 7500 },
      { name: EStatName.PvPParry, value: 7500 },
    ],
    name: "Mythic Light Set",
    tier: ETier.Mythic,
    description: "Imprint all slots with Mythic Light elements to gain effects",
  },
  {
    name: "Mythic x2 Set",
    tier: ETier.Mythic,
    requirements: [{ Element: EElementRequirement.Any, Amount: 2 }],
    effects: [
      { name: EStatName.Attack, value: 600 },
      { name: EStatName.Accuracy, value: 1400 },
      { name: EStatName.Defense, value: 2850 },
    ],
    description: "Imprint 2 slots with Mythic elements to gain effects",
  },
  // Legendary Sets
  {
    requirements: [{ Element: EElement.Fire, Amount: 4 }],
    effects: [
      { name: EStatName.Attack, value: 890 },
      { name: EStatName.CriticalHit, value: 3450 },
      { name: EStatName.CriticalDamage, value: 15 },
    ],
    name: "Legendary Fire Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Fire elements to gain effects",
  },
  {
    requirements: [{ Element: EElement.Water, Amount: 4 }],
    effects: [
      { name: EStatName.CritHitResistance, value: 4050 },
      { name: EStatName.Parry, value: 1700 },
      { name: EStatName.MPPotency, value: 25 },
    ],
    name: "Legendary Water Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Water elements to gain effects",
  },
  {
    requirements: [{ Element: EElement.Wind, Amount: 4 }],
    effects: [
      { name: EStatName.Accuracy, value: 2300 },
      { name: EStatName.Evasion, value: 3250 },
      { name: EStatName.PvECriticalDamageDecrease, value: 4000 },
    ],
    name: "Legendary Wind Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Wind elements to gain effects",
  },
  {
    requirements: [{ Element: EElement.Earth, Amount: 4 }],
    effects: [
      { name: EStatName.Defense, value: 5100 },
      { name: EStatName.Health, value: 2600 },
      { name: EStatName.DefBoostRate, value: 3.5 },
    ],
    name: "Legendary Earth Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Earth elements to gain effects",
  },
  {
    requirements: [{ Element: EElement.Dark, Amount: 4 }],
    effects: [
      { name: EStatName.PvPAttack, value: 3200 },
      { name: EStatName.PvPDefense, value: 11500 },
      { name: EStatName.PvPEvasion, value: 2550 },
    ],
    name: "Legendary Dark Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Dark elements to gain effects",
  },
  {
    requirements: [{ Element: EElement.Light, Amount: 4 }],
    effects: [
      { name: EStatName.PvPAccuracy, value: 5000 },
      { name: EStatName.PvPParry, value: 6500 },
    ],
    name: "Legendary Light Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Light elements to gain effects",
  },
  {
    name: "Legendary x2 Set",
    tier: ETier.Legendary,
    requirements: [{ Element: EElementRequirement.Any, Amount: 2 }],
    effects: [
      { name: EStatName.Attack, value: 350 },
      { name: EStatName.Accuracy, value: 1125 },
      { name: EStatName.Defense, value: 1750 },
    ],
    description: "Imprint 2 slots with Legendary elements to gain effects",
  },
];
const set5Star: ISetPage = [
  {
    name: "Mythic 5-Color Set",
    tier: ETier.Mythic,
    description:
      "Imprint all slots with Mythic Fire, Water, Wind, Earth, or Dark Elements",
    requirements: [
      { Element: EElement.Fire, Amount: 1 },
      { Element: EElement.Water, Amount: 1 },
      { Element: EElement.Wind, Amount: 1 },
      { Element: EElement.Earth, Amount: 1 },
      { Element: EElement.Dark, Amount: 1 },
    ],
    effects: [
      { name: EStatName.Accuracy, value: 3700 },
      { name: EStatName.Defense, value: 8600 },
      { name: EStatName.CriticalDamage, value: 40 },
    ],
  },
  {
    name: "Mythic Fire Set",
    tier: ETier.Mythic,
    description: "Imprint all slots with Mythic Fire elements to gain effects",
    requirements: [{ Element: EElement.Fire, Amount: 5 }],
    effects: [
      { name: EStatName.Attack, value: 1830 },
      { name: EStatName.CriticalHit, value: 6300 },
      { name: EStatName.CriticalDamage, value: 25 },
    ],
  },
  {
    name: "Mythic Water Set",
    tier: ETier.Mythic,
    description: "Imprint all slots with Mythic Water elements to gain effects",
    requirements: [{ Element: EElement.Water, Amount: 5 }],
    effects: [
      { name: EStatName.CritHitResistance, value: 7760 },
      { name: EStatName.Parry, value: 3240 },
      { name: EStatName.MPPotency, value: 40 },
    ],
  },
  {
    name: "Mythic Wind Set",
    tier: ETier.Mythic,
    description: "Imprint all slots with Mythic Wind elements to gain effects",
    requirements: [{ Element: EElement.Wind, Amount: 5 }],
    effects: [
      { name: EStatName.Accuracy, value: 4200 },
      { name: EStatName.Evasion, value: 6470 },
      { name: EStatName.PvECriticalDamageDecrease, value: 6600 },
    ],
  },
  {
    name: "Mythic Earth Set",
    tier: ETier.Mythic,
    description: "Imprint all slots with Mythic Earth elements to gain effects",
    requirements: [{ Element: EElement.Earth, Amount: 5 }],
    effects: [
      { name: EStatName.Defense, value: 9700 },
      { name: EStatName.Health, value: 5200 },
      { name: EStatName.DefBoostRate, value: 6 },
    ],
  },
  {
    name: "Mythic Dark Set",
    tier: ETier.Mythic,
    description: "Imprint all slots with Mythic Dark elements to gain effects",
    requirements: [{ Element: EElement.Dark, Amount: 5 }],
    effects: [
      { name: EStatName.PvPAttack, value: 5800 },
      { name: EStatName.PvPDefense, value: 22000 },
      { name: EStatName.PvPEvasion, value: 5200 },
    ],
  },
  {
    name: "Mythic Light Set",
    tier: ETier.Mythic,
    description: "Imprint all slots with Mythic Light elements to gain effects",
    requirements: [{ Element: EElement.Light, Amount: 5 }],
    effects: [
      { name: EStatName.PvPAccuracy, value: 8500 },
      { name: EStatName.PvPParry, value: 11500 },
      { name: EStatName.PvECriticalDamageDecrease, value: 20000 },
    ],
  },
  {
    name: "Mythic x3 Set",
    tier: ETier.Mythic,
    description: "Imprint 3 slots with Mythic elements to gain effects",
    requirements: [{ Element: EElementRequirement.Any, Amount: 3 }],
    effects: [
      { name: EStatName.Attack, value: 900 },
      { name: EStatName.Accuracy, value: 2250 },
      { name: EStatName.Defense, value: 4000 },
    ],
  },
  {
    name: "Legendary 5-Color Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Fire, Water, Wind, Earth, or Dark Elements",
    requirements: [
      { Element: EElement.Fire, Amount: 1 },
      { Element: EElement.Water, Amount: 1 },
      { Element: EElement.Wind, Amount: 1 },
      { Element: EElement.Earth, Amount: 1 },
      { Element: EElement.Dark, Amount: 1 },
    ],
    effects: [
      { name: EStatName.Accuracy, value: 3000 },
      { name: EStatName.Defense, value: 7000 },
      { name: EStatName.CriticalDamage, value: 30 },
    ],
  },
  {
    name: "Legendary Fire Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Fire elements to gain effects",
    requirements: [{ Element: EElement.Fire, Amount: 5 }],
    effects: [
      { name: EStatName.Attack, value: 1400 },
      { name: EStatName.CriticalHit, value: 4900 },
      { name: EStatName.CriticalDamage, value: 20 },
    ],
  },
  {
    name: "Legendary Water Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Water elements to gain effects",
    requirements: [{ Element: EElement.Water, Amount: 5 }],
    effects: [
      { name: EStatName.CritHitResistance, value: 6000 },
      { name: EStatName.Parry, value: 2500 },
      { name: EStatName.MPPotency, value: 35 },
    ],
  },
  {
    name: "Legendary Wind Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Wind elements to gain effects",
    requirements: [{ Element: EElement.Wind, Amount: 5 }],
    effects: [
      { name: EStatName.Accuracy, value: 3250 },
      { name: EStatName.Evasion, value: 5000 },
      { name: EStatName.PvECriticalDamageDecrease, value: 5000 },
    ],
  },
  {
    name: "Legendary Earth Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Earth elements to gain effects",
    requirements: [{ Element: EElement.Earth, Amount: 5 }],
    effects: [
      { name: EStatName.Defense, value: 7500 },
      { name: EStatName.Health, value: 4000 },
      { name: EStatName.DefBoostRate, value: 5 },
    ],
  },
  {
    name: "Legendary Dark Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Dark elements to gain effects",
    requirements: [{ Element: EElement.Dark, Amount: 5 }],
    effects: [
      { name: EStatName.PvPAttack, value: 4500 },
      { name: EStatName.PvPDefense, value: 17000 },
      { name: EStatName.PvPEvasion, value: 4000 },
    ],
  },
  {
    name: "Legendary Light Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Light elements to gain effects",
    requirements: [{ Element: EElement.Light, Amount: 5 }],
    effects: [
      { name: EStatName.PvPAccuracy, value: 6500 },
      { name: EStatName.PvPParry, value: 9000 },
      { name: EStatName.PvECriticalDamageDecrease, value: 15000 },
    ],
  },
  {
    name: "Legendary x3 Set",
    tier: ETier.Legendary,
    description: "Imprint 3 slots with Legendary elements to gain effects",
    requirements: [{ Element: EElementRequirement.Any, Amount: 3 }],
    effects: [
      { name: EStatName.Attack, value: 500 },
      { name: EStatName.Accuracy, value: 1500 },
      { name: EStatName.Defense, value: 2500 },
    ],
  },
];
const set6Star: ISetPage = [
  {
    name: "Mythic 6-Color Set",
    tier: ETier.Mythic,
    description:
      "Imprint all slots with Mythic Fire, Water, Wind, Earth, Dark, or Light Elements to gain effects",
    requirements: [
      { Element: EElement.Fire, Amount: 1 },
      { Element: EElement.Water, Amount: 1 },
      { Element: EElement.Wind, Amount: 1 },
      { Element: EElement.Earth, Amount: 1 },
      { Element: EElement.Dark, Amount: 1 },
      { Element: EElement.Light, Amount: 1 },
    ],
    effects: [
      { name: EStatName.Attack, value: 2300 },
      { name: EStatName.Accuracy, value: 7000 },
      { name: EStatName.DefBoostRate, value: 9 },
    ],
  },
  {
    name: "Mythic Earth and Fire Set",
    tier: ETier.Mythic,
    description:
      "Imprint all slots with Mythic Earth and Fire Elements (3 each) to gain effects",
    requirements: [
      { Element: EElement.Fire, Amount: 3 },
      { Element: EElement.Earth, Amount: 3 },
    ],
    effects: [
      { name: EStatName.Attack, value: 2100 },
      { name: EStatName.CriticalHit, value: 5800 },
      { name: EStatName.CriticalDamage, value: 40 },
    ],
  },
  {
    name: "Mythic Wind and Water Set",
    tier: ETier.Mythic,
    description:
      "Imprint all slots with Mythic Wind and Water Elements (3 each) to gain effects",
    requirements: [
      { Element: EElement.Water, Amount: 3 },
      { Element: EElement.Wind, Amount: 3 },
    ],
    effects: [
      { name: EStatName.Accuracy, value: 4600 },
      { name: EStatName.Evasion, value: 5700 },
      { name: EStatName.PvPCriticalDamageDecrease, value: 19000 },
    ],
  },
  {
    name: "Mythic Dark and Light Set",
    tier: ETier.Mythic,
    description:
      "Imprint all slots with Mythic Dark and Light Elements (3 each) to gain effects",
    requirements: [
      { Element: EElement.Dark, Amount: 3 },
      { Element: EElement.Light, Amount: 3 },
    ],
    effects: [
      { name: EStatName.PvPAttack, value: 6500 },
      { name: EStatName.PvPDefense, value: 16400 },
      { name: EStatName.PvPAccuracy, value: 7800 },
    ],
  },
  {
    name: "Mythic x3 Set",
    tier: ETier.Mythic,
    description: "Imprint 3 slots with Mythic elements to gain effects",
    requirements: [{ Element: EElementRequirement.Any, Amount: 3 }],
    effects: [
      { name: EStatName.Attack, value: 1500 },
      { name: EStatName.Accuracy, value: 3000 },
      { name: EStatName.Health, value: 8000 },
    ],
  },
  {
    name: "Legendary 6-Color Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Fire, Water, Wind, Earth, Dark, or Light Elements to gain effects",
    requirements: [
      { Element: EElement.Fire, Amount: 1 },
      { Element: EElement.Water, Amount: 1 },
      { Element: EElement.Wind, Amount: 1 },
      { Element: EElement.Earth, Amount: 1 },
      { Element: EElement.Dark, Amount: 1 },
      { Element: EElement.Light, Amount: 1 },
    ],
    effects: [
      { name: EStatName.Attack, value: 2000 },
      { name: EStatName.Accuracy, value: 5500 },
      { name: EStatName.DefBoostRate, value: 7 },
    ],
  },
  {
    name: "Legendary Earth and Fire Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Earth and Fire Elements (3 each) to gain effects",
    requirements: [
      { Element: EElement.Fire, Amount: 3 },
      { Element: EElement.Earth, Amount: 3 },
    ],
    effects: [
      { name: EStatName.Attack, value: 1600 },
      { name: EStatName.CriticalHit, value: 4600 },
      { name: EStatName.CriticalDamage, value: 30 },
    ],
  },
  {
    name: "Legendary Wind and Water Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Wind and Water Elements (3 each) to gain effects",
    requirements: [
      { Element: EElement.Water, Amount: 3 },
      { Element: EElement.Wind, Amount: 3 },
    ],
    effects: [
      { name: EStatName.Accuracy, value: 3500 },
      { name: EStatName.Evasion, value: 4500 },
      { name: EStatName.PvPCriticalDamageDecrease, value: 15000 },
    ],
  },
  {
    name: "Legendary Dark and Light Set",
    tier: ETier.Legendary,
    description:
      "Imprint all slots with Legendary Dark and Light Elements (3 each) to gain effects",
    requirements: [
      { Element: EElement.Dark, Amount: 3 },
      { Element: EElement.Light, Amount: 3 },
    ],
    effects: [
      { name: EStatName.PvPAttack, value: 5000 },
      { name: EStatName.PvPDefense, value: 13000 },
      { name: EStatName.PvPAccuracy, value: 6000 },
    ],
  },
  {
    name: "Legendary x3 Set",
    tier: ETier.Legendary,
    description: "Imprint 3 slots with Legendary elements to gain effects",
    requirements: [{ Element: EElementRequirement.Any, Amount: 3 }],
    effects: [
      { name: EStatName.Attack, value: 900 },
      { name: EStatName.Accuracy, value: 2050 },
      { name: EStatName.Health, value: 6800 },
    ],
  },
];
const set7Star: ISetPage = [
  {
    name: "Mythic Fire, Wind, and Water Set",
    tier: ETier.Mythic,
    description:
      "Activated when slots are imprinted with Mythic grade Fire x2, Water x3, Wind x2 Elements",
    requirements: [
      { Element: EElement.Fire, Amount: 2 },
      { Element: EElement.Water, Amount: 3 },
      { Element: EElement.Wind, Amount: 2 },
    ],
    effects: [
      { name: EStatName.Attack, value: 2000 },
      { name: EStatName.CriticalHit, value: 3000 },
      { name: EStatName.PvEAttack, value: 4000 },
      { name: EStatName.PvEDefense, value: 12000 },
    ],
  },
  {
    name: "Mythic Darkness, Light, and Earth Set",
    tier: ETier.Mythic,
    description:
      "Activated when slots are imprinted with Mythic grade Dark x2, Light x2, Earth x3 Elements",
    requirements: [
      { Element: EElement.Dark, Amount: 2 },
      { Element: EElement.Light, Amount: 2 },
      { Element: EElement.Earth, Amount: 3 },
    ],
    effects: [
      { name: EStatName.PvPAttack, value: 4000 },
      { name: EStatName.PvPDefense, value: 15000 },
      { name: EStatName.PvPEvasion, value: 12000 },
      { name: EStatName.AoeDamageDecrease, value: 5000 },
    ],
  },
  {
    name: "Mythic Wind, Water, and Earth Set",
    tier: ETier.Mythic,
    description:
      "Activated when slots are imprinted with Mythic grade Wind x2, Water x2, Earth x3 Elements",
    requirements: [
      { Element: EElement.Wind, Amount: 2 },
      { Element: EElement.Water, Amount: 2 },
      { Element: EElement.Earth, Amount: 3 },
    ],
    effects: [
      { name: EStatName.Defense, value: 5000 },
      { name: EStatName.Accuracy, value: 5000 },
      { name: EStatName.Evasion, value: 5000 },
      { name: EStatName.DefBoostRate, value: 12 },
    ],
  },
  {
    name: "Mythic 4 Element Set",
    tier: ETier.Mythic,
    description: "Activated when 4 slots are imprinted with the Mythic grade",
    requirements: [{ Element: EElementRequirement.Any, Amount: 4 }],
    effects: [
      { name: EStatName.Defense, value: 5000 },
      { name: EStatName.CritHitResistance, value: 4000 },
      { name: EStatName.Health, value: 4000 },
    ],
  },
  {
    name: "Legendary Fire, Wind, and Water Set",
    tier: ETier.Legendary,
    description:
      "Activated when slots are imprinted with Legendary grade Fire x2, Water x3, Wind x2 Elements",
    requirements: [
      { Element: EElement.Fire, Amount: 2 },
      { Element: EElement.Water, Amount: 3 },
      { Element: EElement.Wind, Amount: 2 },
    ],
    effects: [
      { name: EStatName.Attack, value: 1500 },
      { name: EStatName.CriticalHit, value: 2000 },
      { name: EStatName.PvEAttack, value: 3000 },
      { name: EStatName.PvEDefense, value: 9000 },
    ],
  },
  {
    name: "Legendary Darkness, Light, and Earth Set",
    tier: ETier.Legendary,
    description:
      "Activated when slots are imprinted with Legendary grade Dark x2, Light x2, Earth x3 Elements",
    requirements: [
      { Element: EElement.Dark, Amount: 2 },
      { Element: EElement.Light, Amount: 2 },
      { Element: EElement.Earth, Amount: 3 },
    ],
    effects: [
      { name: EStatName.PvPAttack, value: 3000 },
      { name: EStatName.PvPDefense, value: 12000 },
      { name: EStatName.PvPEvasion, value: 9000 },
      { name: EStatName.AoeDamageDecrease, value: 2000 },
    ],
  },
  {
    name: "Legendary Wind, Water, and Earth Set",
    tier: ETier.Legendary,
    description:
      "Activated when slots are imprinted with Legendary grade Wind x2, Water x2, Earth x3 Elements",
    requirements: [
      { Element: EElement.Wind, Amount: 2 },
      { Element: EElement.Water, Amount: 2 },
      { Element: EElement.Earth, Amount: 3 },
    ],
    effects: [
      { name: EStatName.Defense, value: 3500 },
      { name: EStatName.Accuracy, value: 3500 },
      { name: EStatName.Evasion, value: 3500 },
      { name: EStatName.DefBoostRate, value: 8 },
    ],
  },
  {
    name: "Legendary 4 Element Set",
    tier: ETier.Legendary,
    description:
      "Activated when 4 slots are imprinted with the Legendary grade",
    requirements: [{ Element: EElementRequirement.Any, Amount: 4 }],
    effects: [
      { name: EStatName.Defense, value: 4000 },
      { name: EStatName.CritHitResistance, value: 2500 },
      { name: EStatName.Health, value: 4000 },
    ],
  },
];

export function getQualifyingSets(stars: IStar[], setPage: ISetPage): ISet[] {
  const qualifiedSets: ISet[] = [];

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

    // If the requirements match, add the set to the qualified sets
    if (matchCount === set.requirements.length) {
      qualifiedSets.push(set);
    }
  });

  return qualifiedSets;
}

export function getBestSet(stars: IStar[], setPage: ISetPage): ISet | null {
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
    (acc, effect) =>
      acc + (effect?.value || 0) * EStatNameToValueMap[effect.name],
    0
  );
  const totalValue2 = set2.effects.reduce(
    (acc, effect) =>
      acc + (effect?.value || 0) * EStatNameToValueMap[effect.name],
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
