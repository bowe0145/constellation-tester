import { EElement, EStatName } from "./stars";

type StatRange = [number, number][];

type ElementStatData = {
  [key in EStatName]?: StatRange;
};

type DarkStatData = {
  [EStatName.PvPAttack]: StatRange;
  [EStatName.PvPDefense]: StatRange;
};

type WaterStatData = {
  [EStatName.Parry]: StatRange;
  [EStatName.CritHitResistance]: StatRange;
};

type FireStatData = {
  [EStatName.Attack]: StatRange;
  [EStatName.CriticalHit]: StatRange;
};

type WindStatData = {
  [EStatName.Accuracy]: StatRange;
  [EStatName.Evasion]: StatRange;
};

type EarthStatData = {
  [EStatName.Defense]: StatRange;
  [EStatName.Health]: StatRange;
};

type LightStatData = {
  [EStatName.PvPAccuracy]: StatRange;
  [EStatName.PvPEvasion]: StatRange;
};

type StatRanges = {
  [key in EElement]: ElementStatData;
};

const darkRanges: DarkStatData = {
  [EStatName.PvPAttack]: [
    [150, 800],
    [800, 2500],
    [2500, 3500],
  ] as StatRange,
  [EStatName.PvPDefense]: [
    [300, 1600],
    [1600, 5000],
    [5000, 7000],
  ] as StatRange,
};

const waterRanges: WaterStatData = {
  [EStatName.Parry]: [
    [75, 400],
    [400, 1250],
    [1250, 1750],
  ],
  [EStatName.CritHitResistance]: [
    [75, 400],
    [400, 1250],
    [1250, 1750],
  ],
};

const fireRanges: FireStatData = {
  [EStatName.Attack]: [
    [30, 160],
    [50, 200],
    [500, 700],
  ],
  [EStatName.CriticalHit]: [
    [75, 400],
    [400, 1250],
    [1250, 1750],
  ],
};

const windRanges: WindStatData = {
  [EStatName.Accuracy]: [
    [75, 400],
    [400, 1250],
    [1250, 1750],
  ],
  [EStatName.Evasion]: [
    [75, 400],
    [400, 1250],
    [1250, 1750],
  ],
};

const earthRanges: EarthStatData = {
  [EStatName.Defense]: [
    [75, 400],
    [400, 1250],
    [1250, 1750],
  ],
  [EStatName.Health]: [
    [300, 1600],
    [1600, 5000],
    [5000, 7000],
  ],
};

const lightRanges: LightStatData = {
  [EStatName.PvPAccuracy]: [
    [150, 800],
    [800, 2500],
    [2500, 3500],
  ],
  [EStatName.PvPEvasion]: [
    [150, 800],
    [800, 2500],
    [2500, 3500],
  ],
};

export const statRanges: StatRanges = {
  Dark: darkRanges,
  Water: waterRanges,
  Fire: fireRanges,
  Wind: windRanges,
  Earth: earthRanges,
  Light: lightRanges,
};
