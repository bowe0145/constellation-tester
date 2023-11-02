<script lang="ts">
  import { Star } from "../../core/Star";
  import { addStar, slotsOnPage, starsOnPage } from "@/stores/svelteStores";

  interface Props {
    num: number;
    slots: number;
  }
  import Slot from "./StarSlot.svelte";

  export let num: Props["num"];
  export let slots: Props["slots"];

  for (let i = 0; i < slots; i++) {
    const id = +(num + "" + i); // Concat page number and slot number to create unique id

    const star = new Star();

    addStar({ id, star });
  }
</script>

<div class="star-page">
  <div class="star-container" data-page={num}>
    {#each $starsOnPage as star}
      <Slot id={star.id} star={star.star} />
    {/each}
  </div>
</div>

<style>
  /* Add any styles for the StarPage component here */
</style>
