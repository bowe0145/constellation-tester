<script lang="ts">
  import { faDice } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import { get } from "svelte/store";
  import {
    unlockedStarsOnPage as unlockedStars,
    canRoll,
    starRollCost,
    starRollCurrency,
    updateStar,
    starPageRollAttempts,
    starPageRollTotalCost,
  } from "@stores/svelteStores";

  function handleClick(
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    starPageRollAttempts.update((value) => value + 1);
    starPageRollTotalCost.update((value) => value + $starRollCost);
    // Loop through the starList and call randomize on each star
    get(unlockedStars).forEach((star) => {
      if (star.star.locked) return;
      star.star.randomize();
    });

    // Update the stars in the store
    get(unlockedStars).forEach((star) => {
      if (star.star.locked) return;
      updateStar(star.id, star.star);
    });
  }
</script>

<button
  class="roll-button btn btn-primary max-w-lg"
  on:click={handleClick}
  disabled={!get(canRoll)}
>
  <span>
    {$starRollCost}
    {$starRollCurrency}
  </span>
  <Fa icon={faDice} />
</button>
