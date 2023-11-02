import type { ETier, IStat, EStatName } from "./stars";

export class Stat implements IStat {
  name: EStatName;
  value?: number | undefined;
  range?: number[] | undefined;
  tier?: ETier | undefined;

  constructor(
    name: EStatName,
    value?: number | undefined,
    range?: number[] | undefined,
    tier?: ETier | undefined
  ) {
    this.name = name;
    this.value = value;
    this.range = range;
    this.tier = tier;
  }
}
