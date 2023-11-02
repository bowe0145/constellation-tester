// A star contains the following properties:
// Element - the type of star (Dark, Fire, Water, Wind, Earth, Light)
// Tier - (Epic, Legendary, Mythic)
// Possible Stats - (stat 1, stat 2)
// Stat 1 - (Range of possible values)
// Stat 2 - (Range of possible values)
// Active Stat (stat 1 or 2)
// Active Stat Value (value of active stat)

// Enum ElementRequirement
export enum EElementRequirement {
  Dark = "Dark",
  Fire = "Fire",
  Water = "Water",
  Wind = "Wind",
  Earth = "Earth",
  Light = "Light",
  Any = "Any",
}

// Enum Name
export enum EStatName {
  // Dark
  PvPAttack = "PvP Attack",
  PvPDefense = "PvP Defense",
  // Fire
  Attack = "Attack",
  CriticalHit = "Critical Hit",
  // Water
  Parry = "Parry",
  CritHitResistance = "Crit Hit Resistance",
  // Wind
  Accuracy = "Accuracy",
  Evasion = "Evasion",
  // Earth
  Defense = "Defense",
  Health = "Health",
  // Light
  PvPAccuracy = "PvP Accuracy",
  PvPEvasion = "PvP Evasion",
  // Extra
  CriticalDamage = "Critical Damage",
  MPPotency = "MP Potency",
}

export enum ECurrency {
  Gold = "Gold",
  StarPieceModTicket = "Star Piece Mod Ticket",
  SkyGateway = "Sky Gateway",
}

export type TCurrency = (typeof ECurrency)[keyof typeof ECurrency];

// Enum element
export enum EElement {
  Dark = "Dark",
  Fire = "Fire",
  Water = "Water",
  Wind = "Wind",
  Earth = "Earth",
  Light = "Light",
}

// Enum tier
export enum ETier {
  Epic = "Epic",
  Legendary = "Legendary",
  Mythic = "Mythic",
}

export const tierValues = Object.values(ETier);

export interface IStat {
  name: EStatName;
  value?: number;
  range?: number[];
  tier?: ETier;
}

export interface IStar {
  element: EElement;
  tier?: ETier;
  activeStat?: IStat;
  locked: boolean;
  randomize: () => void;
  toggleLock: () => void;
}

export interface ISet {
  name: string;
  stars: IStar[];
  effects: IStat[];
}
