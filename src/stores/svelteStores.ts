import { ECurrency, type IStar } from "@/core/stars";
import { writable, get, derived, readable } from "svelte/store";

export const svelteStars = writable<{ id: number; star: IStar }[]>([]);
export const sveltePage = writable("1");
const sveltePageSlots = readable([3, 4, 4, 5, 5, 6, 7]);

export const slotsOnPage = derived(
  [sveltePage, sveltePageSlots],
  ([$page, $slots]) => {
    return $slots[+$page - 1];
  }
);

export const starsOnPage = derived(
  [svelteStars, sveltePage],
  ([$stars, $page]) => {
    return $stars.filter((star) => +star.id.toString()[0] === +$page);
  }
);

export const lockedStars = derived(svelteStars, ($stars) => {
  return $stars.filter((star) => star.star.locked);
});

export const unlockedStars = derived(svelteStars, ($stars) => {
  return $stars.filter((star) => !star.star.locked);
});

export const lockedStarsOnPage = derived(
  [lockedStars, sveltePage],
  ([$lockedStars, $page]) => {
    return $lockedStars.filter((star) => +star.id.toString()[0] === +$page);
  }
);

export const unlockedStarsOnPage = derived(
  [unlockedStars, sveltePage],
  ([$unlockedStars, $page]) => {
    return $unlockedStars.filter((star) => +star.id.toString()[0] === +$page);
  }
);

export const canRoll = derived(
  [lockedStarsOnPage, slotsOnPage],
  ([$lockedStars, $slots]) => {
    return $lockedStars.length < $slots;
  }
);

export const starRollCurrency = derived(
  [lockedStarsOnPage, sveltePage],
  ([$lockedStars, $page]) => {
    if ($page === "7") {
      return ECurrency.SkyGateway;
    }
    if ($lockedStars.length === 0) {
      return ECurrency.Gold;
    } else {
      return ECurrency.StarPieceModTicket;
    }
  }
);

export const starRollCost = derived(
  [lockedStarsOnPage, starRollCurrency],
  ([$lockedStars, $currency]) => {
    switch ($currency) {
      case ECurrency.SkyGateway:
        switch ($lockedStars.length) {
          case 0:
            return 1;
          case 1:
            return 3;
          case 2:
            return 5;
          case 3:
            return 12;
          case 4:
            return 37;
          case 5:
            return 75;
          case 6:
            return 225;
          default:
            return 1;
        }
      case ECurrency.StarPieceModTicket:
        switch ($lockedStars.length) {
          case 1:
            return 1;
          case 2:
            return 5;
          case 3:
            return 25;
          case 4:
            return 125;
          case 5:
            return 625;
          default:
            return 1;
        }
      default:
        return 200_000;
    }
  }
);

export const updateStar = (id: number, star: IStar) => {
  const stars = get(svelteStars);
  const existingStar = stars.find((s) => +s.id === +id);

  if (existingStar) {
    // Replace it with the new star
    const index = stars.indexOf(existingStar);

    svelteStars.set([
      ...stars.slice(0, index),
      { id: +id, star },
      ...stars.slice(index + 1),
    ]);
  }
};

export const findStar = (id: number) =>
  get(svelteStars).find((star) => +star.id === +id);

export const addStar = ({ id, star }: { id: number; star: IStar }) => {
  const stars = get(svelteStars);
  const existingStar = stars.find((s) => +s.id === +id);

  if (existingStar) {
    // Replace it with the new star
    const index = stars.indexOf(existingStar);

    svelteStars.set([
      ...stars.slice(0, index),
      { id: +id, star },
      ...stars.slice(index + 1),
    ]);
  } else {
    svelteStars.set([...stars, { id: +id, star }]);
  }
};
