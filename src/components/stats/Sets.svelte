<script lang="ts">
  import { EElementRequirement } from "@/core/stars";
  import { starsOnPage } from "@/stores/svelteStores";
  import { getBestSet, pageSets } from "@stores/starSetStore";

  $: set = getBestSet(
    $starsOnPage.map((star) => star.star),
    $pageSets
  );

  starsOnPage.subscribe((value) => {
    const stars = value.map((star) => star.star);
    // console.log($pageSets);
    const set = getBestSet(stars, $pageSets);
    // console.log("set", set);
  });
</script>

<div class="text-black dark:text-gray-100">
  <p class="text-black dark:text-gray-100">Current Set</p>
  <span>{set?.name}</span>
  <!-- <span>{set?.description}</span> -->
  <p>Effects:</p>
  {#each set?.effects ?? [] as effect}
    <p>{effect.name}: {effect.value}</p>
  {/each}
</div>
