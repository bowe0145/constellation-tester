import { statRanges } from "./ranges";
import {
  type IStar,
  ETier,
  EElement as StarElement,
  type IStat,
  EStatName,
} from "./stars";

export class Star implements IStar {
  element: StarElement;
  tier?: ETier;
  activeStat?: IStat;
  locked: boolean;

  constructor(tier?: ETier, element?: StarElement) {
    this.element = element || this.randomElement();
    this.locked = false;

    if (tier) {
      this.tier = tier;
    } else {
      // Default to mythic
      this.tier = ETier.Mythic;
    }
  }

  set Tier(tier: ETier) {
    this.tier = tier;
  }

  set ActiveStat(name: EStatName) {
    if (this.tier) {
      if (statRanges?.[this.element as keyof typeof statRanges]) {
        const elementData = statRanges[this.element as keyof typeof statRanges];
        if (elementData && elementData.hasOwnProperty(name)) {
          const rangeGroup = elementData[name];
          if (rangeGroup) {
            // Check if rangeGroup is defined
            const tierIndex = Object.values(ETier).indexOf(this.tier);
            const range = rangeGroup[tierIndex];

            this.activeStat = {
              name: name,
              range: range,
              tier: this.tier,
              value: this.getRandomValue(range[0], range[1]),
            };
          }
        }
      }
    } else {
      throw new Error("Can't set value when Tier is undefined");
    }
  }

  private getRandomValue(min: number, max: number): number {
    const range = max - min;
    const steps = range / 25;
    const randomStep = Math.floor(Math.random() * (steps + 1));
    return min + randomStep * 25;
  }

  private randomElement(): StarElement {
    const elements = Object.values(StarElement);
    return elements[Math.floor(Math.random() * elements.length)] as StarElement;
  }

  public randomize(): void {
    if (this.locked) {
      return;
    }
    // Randomize the element
    const elements = Object.values(StarElement);
    this.element = this.randomElement();

    // Get available stats for the randomized element
    const elementData = statRanges[this.element as keyof typeof statRanges];
    if (elementData) {
      const availableStats = Object.keys(elementData) as EStatName[];
      const randomStatName =
        availableStats[Math.floor(Math.random() * availableStats.length)];

      // Set the activeStat (this will also randomize its value)
      this.ActiveStat = randomStatName;
    }
  }

  public toggleLock(): void {
    this.locked = !this.locked;
  }
}
