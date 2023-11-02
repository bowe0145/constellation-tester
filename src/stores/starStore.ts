import { action, atom, computed } from "nanostores";
import type { IStar } from "../core/stars";
import { logger } from "@nanostores/logger";
import { $activeTab } from "./navigationStore";

export const totalStarPages = atom("7");

export const $stars = atom<{ id: number; star: IStar }[]>([]);

const destroy = logger({ $stars });

export const currentPageStars = computed([$activeTab, $stars], (tab, stars) => {
  return stars.filter((star) => +star.id.toString()[0] === +tab);
});

export const lockedStars = computed([currentPageStars], (stars) => {
  return stars.filter((star) => star.star.locked);
});

export const updateStar = (id: number, star: IStar) => {
  const stars = $stars.get();
  const existingStar = stars.find((s) => +s.id === +id);

  if (existingStar) {
    // Replace it with the new star
    const index = stars.indexOf(existingStar);

    $stars.set([
      ...stars.slice(0, index),
      { id: +id, star },
      ...stars.slice(index + 1),
    ]);
  }
};

export const findStar = (id: number) =>
  $stars.get().find((star) => +star.id === +id);

export const addStar = ({ id, star }: { id: number; star: IStar }) => {
  const stars = $stars.get();
  const existingStar = stars.find((s) => +s.id === +id);

  if (existingStar) {
    // Replace it with the new star
    const index = stars.indexOf(existingStar);

    $stars.set([
      ...stars.slice(0, index),
      { id: +id, star },
      ...stars.slice(index + 1),
    ]);
  } else {
    $stars.set([...stars, { id: +id, star }]);
  }
};

export const removeStar = action($stars, "removeStar", (store, id: number) => {
  // Find the existing star of that ID,
  const stars = store.get();
  let existingStar = null;

  for (let i = 0; i < stars.length; i++) {
    if (stars[i].id === id) {
      existingStar = stars[i];
      break;
    }
  }

  if (existingStar) {
    // Replace it with the new star
    const index = stars.indexOf(existingStar);
    stars.splice(index, 1);
  }
});
