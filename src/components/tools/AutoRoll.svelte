<script lang="ts">
  import { faBars } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  import {
    unlockedStarsOnPage,
    updateStar,
    starsOnPage,
    sveltePage,
    starRollCost,
    starRollCurrency,
    starPageRollAttempts,
    starPageRollTotalCost,
    starPageRollSpeed,
  } from "@/stores/svelteStores";
  import {
    pageSets,
    getBestSet,
    getQualifyingSets,
  } from "@stores/starSetStore";
  import { EElement, ETier } from "@/core/stars";

  $: open = false;
  $: selectedSetNum = -1;
  $: selectedSet = $pageSets[selectedSetNum] || null;

  let isRolling = false; // To control the auto-roll process

  const handleAutoRoll = () => {
    isRolling = true; // Start rolling

    const delay = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    const rerollStars = async () => {
      while (isRolling) {
        // const qualifiedSet = getBestSet(
        //   $starsOnPage.map((star) => star.star),
        //   $pageSets
        // );
        const qualifyingSets = getQualifyingSets(
          $starsOnPage.map((star) => star.star),
          $pageSets
        );

        if (qualifyingSets.includes(selectedSet)) {
          isRolling = false;
          break;
        }

        // if (qualifiedSet === selectedSet) {
        //   isRolling = false;
        //   break;
        // }

        starPageRollAttempts.update((value) => value + 1);
        starPageRollTotalCost.update((value) => value + $starRollCost);

        for (let i = 0; i < $unlockedStarsOnPage.length; i++) {
          // Reroll every star if it's not locked
          if (!$unlockedStarsOnPage[i].star.locked) {
            $unlockedStarsOnPage[i].star.randomize();
            updateStar(
              $unlockedStarsOnPage[i].id,
              $unlockedStarsOnPage[i].star
            );
          }
        }

        // Wait for 500ms before the next roll
        await delay($starPageRollSpeed);
      }
    };

    rerollStars().then(() => {
      isRolling = false; // Stop rolling
    });
  };

  // To stop the auto-roll process from anywhere in your code, you can simply set `isRolling` to `false`.
  const stopAutoRoll = () => {
    isRolling = false;
  };

  // Function to handle radio change
  function handleRadioChange(event: Event) {
    const target = event.target as HTMLInputElement;
    selectedSetNum = parseInt(target.value, 10);

    // Close
    open = false;
  }
</script>

<!-- If not open, show button group (actual button, settings button) -->
{#if !open}
  <div class="flex flex-col justify-center items-center">
    <div class="btn-group">
      {#if isRolling}
        <button class="btn btn-primary" on:click={stopAutoRoll}>
          <span>Stop Auto Roll</span>
        </button>
      {:else}
        <button class="btn btn-primary" on:click={handleAutoRoll}>
          <span>Auto Roll</span>
        </button>
      {/if}
      <button class="btn btn-primary" on:click={() => (open = true)}>
        <span><Fa icon={faBars} /></span>
      </button>
    </div>
  </div>
{:else}
  <dialog
    class="w-full min-h-80 h-screen overflow-y-scroll fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
    {open}
  >
    <div class="bg-white/50 p-6 rounded shadow-lg text-center">
      <!-- Loop through pageSets -->
      {#each $pageSets.filter((set) => set.tier === ETier.Mythic) as pageSet, index}
        <div class="auto-roll-dialogue-page-set mb-2">
          <h4 class="font-medium text-md">{pageSet.name}</h4>
          <input
            type="radio"
            class="mt-1"
            value={index}
            checked={selectedSetNum === index}
            on:change={handleRadioChange}
          />
        </div>
      {/each}
      <div class="auto-roll-dialogue-header mb-4">
        <h3 class="text-lg font-bold">Auto Roll</h3>
        <button class="btn btn-primary mt-2" on:click={() => (open = false)}>
          <span>Close</span>
        </button>
      </div>
    </div>
  </dialog>
{/if}
