<!-- Slot.svelte -->
<script lang="ts">
  import type { IStar } from "../../core/stars";
  import ElementIcon from "./ElementIcon.svelte";
  import { starsOnPage, updateStar } from "@/stores/svelteStores";

  export let id: number;
  export let star: IStar;

  $: currentStar = $starsOnPage.find((star) => star.id === id);

  const handleClick = () => {
    if (currentStar?.star) {
      const star = currentStar.star;
      star.toggleLock();
      updateStar(id, star);
    }
  };
</script>

<button
  on:click={handleClick}
  class="star slot {currentStar?.star.element.toLowerCase()} {currentStar?.star.tier?.toLocaleLowerCase()}"
>
  <p>{currentStar?.id}</p>
  <ElementIcon element={star?.element} locked={star.locked} />
</button>
