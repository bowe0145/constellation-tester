// A star contains the following properties:
// Element - the type of star (Dark, Fire, Water, Wind, Earth, Light)
// Tier - (Legendary, Mythic)
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
  PvECriticalDamageDecrease = "PvE Crit DMG Decrease",
  PvPCriticalDamageDecrease = "PvP Crit DMG Decrease",
  DefBoostRate = "Def Boost Rate",
  PvPParry = "PvP Parry",
  PvEAttack = "PvE Attack",
  PvEDefense = "PvE Defense",
  AoeDamageDecrease = "AoE Damage Decrease",
}

export enum EStatValue {
  // Dark
  PvPAttack = 0.5,
  PvPDefense = 0.5,
  // Fire
  Attack = 5,
  CriticalHit = 1,
  // Water
  Parry = 1,
  CritHitResistance = 0.5,
  // Wind
  Accuracy = 1,
  Evasion = 1,
  // Earth
  Defense = 2,
  Health = 2,
  // Light
  PvPAccuracy = 0.5,
  PvPEvasion = 0.5,
  // Extra
  CriticalDamage = 0.5,
  MPPotency = 0.5,
  PvECriticalDamageDecrease = 0.5,
  PvPCriticalDamageDecrease = 0.5,
  DefBoostRate = 0.5,
  PvPParry = 0.5,
  PvEAttack = 0.5,
  PvEDefense = 0.5,
  AoeDamageDecrease = 0.5,
}

// Create a mapping from EStatName to EStatValue
export const EStatNameToValueMap: { [key in EStatName]: EStatValue } = {
  [EStatName.PvPAttack]: EStatValue.PvPAttack,
  [EStatName.PvPDefense]: EStatValue.PvPDefense,
  [EStatName.Attack]: EStatValue.Attack,
  [EStatName.CriticalHit]: EStatValue.CriticalHit,
  [EStatName.Parry]: EStatValue.Parry,
  [EStatName.CritHitResistance]: EStatValue.CritHitResistance,
  [EStatName.Accuracy]: EStatValue.Accuracy,
  [EStatName.Evasion]: EStatValue.Evasion,
  [EStatName.Defense]: EStatValue.Defense,
  [EStatName.Health]: EStatValue.Health,
  [EStatName.PvPAccuracy]: EStatValue.PvPAccuracy,
  [EStatName.PvPEvasion]: EStatValue.PvPEvasion,
  [EStatName.CriticalDamage]: EStatValue.CriticalDamage,
  [EStatName.MPPotency]: EStatValue.MPPotency,
  [EStatName.PvECriticalDamageDecrease]: EStatValue.PvECriticalDamageDecrease,
  [EStatName.PvPCriticalDamageDecrease]: EStatValue.PvPCriticalDamageDecrease,
  [EStatName.DefBoostRate]: EStatValue.DefBoostRate,
  [EStatName.PvPParry]: EStatValue.PvPParry,
  [EStatName.PvEAttack]: EStatValue.PvEAttack,
  [EStatName.PvEDefense]: EStatValue.PvEDefense,
  [EStatName.AoeDamageDecrease]: EStatValue.AoeDamageDecrease,
};

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
