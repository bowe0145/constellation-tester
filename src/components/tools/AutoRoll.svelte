<script lang="ts">
  import { EElement } from "@/core/stars";
  import ElementIcon from "../svelte/ElementIcon.svelte";
  import { faBars } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  import {
    autoRollDark,
    autoRollFire,
    autoRollWater,
    autoRollWind,
    autoRollEarth,
    autoRollLight,
  } from "@stores/autorollStore";
  import { unlockedStarsOnPage } from "@/stores/svelteStores";

  $: open = false;

  const handleAutoRoll = () => {
    // For each of the unlocked stars on page, if the star is not locked, roll it
    // Continue to roll until only the desired elements are left

    // Get the stars on the page
    const stars = $unlockedStarsOnPage;

    // Get the desired elements
    const desiredElements = [
      $autoRollDark,
      $autoRollFire,
      $autoRollWater,
      $autoRollWind,
      $autoRollEarth,
      $autoRollLight,
    ];

    // Get the elements that are not desired
    const undesiredElements = desiredElements.filter((element) => !element);

    //

    // Loop through the stars and roll them
    stars.forEach((star) => {
      // If the star is locked, continue
      if (star.star.locked) return;

      // If the star is not locked, roll it
      star.star.randomize();
    });
  };
</script>

<!-- If not open, show button group (actual button, settings button) -->
{#if !open}
  <div class="btn-group">
    <button class="btn btn-primary" on:click={handleAutoRoll}>
      <span>Auto Roll</span>
    </button>
    <button class="btn btn-primary" on:click={() => (open = true)}>
      <span><Fa icon={faBars} /></span>
    </button>
  </div>
{:else}
  <!-- If open, show a dialogue to toggle on/off each EElemetn -->
  <dialog class="w-full h-full" {open}>
    <div class="auto-roll-dialogue-header">
      <h3>Auto Roll</h3>
      <button class="btn btn-primary" on:click={() => (open = false)}>
        <span>Close</span>
      </button>
    </div>
    <!-- Center the children vertically -->
    <div class="auto-roll-dialogue-body flex flex-row mx-auto justify-around">
      <div class="auto-roll-dialogue-body-row">
        <label title="dark" for="dark"
          ><ElementIcon element={EElement.Dark} locked={false} /></label
        >
        <input
          type="checkbox"
          name="dark"
          id="dark"
          bind:checked={$autoRollDark}
        />
      </div>
      <div class="auto-roll-dialogue-body-row">
        <label title="fire" for="fire"
          ><ElementIcon element={EElement.Fire} locked={false} /></label
        >
        <input
          type="checkbox"
          name="fire"
          id="fire"
          bind:checked={$autoRollFire}
        />
      </div>
      <div class="auto-roll-dialogue-body-row">
        <label title="water" for="water"
          ><ElementIcon element={EElement.Water} locked={false} /></label
        >
        <input
          type="checkbox"
          name="water"
          id="water"
          bind:checked={$autoRollWater}
        />
      </div>
      <div class="auto-roll-dialogue-body-row">
        <label title="wind" for="wind"
          ><ElementIcon element={EElement.Wind} locked={false} /></label
        >
        <input
          type="checkbox"
          name="wind"
          id="wind"
          bind:checked={$autoRollWind}
        />
      </div>
      <div class="auto-roll-dialogue-body-row">
        <label title="earth" for="earth"
          ><ElementIcon element={EElement.Earth} locked={false} /></label
        >
        <input
          type="checkbox"
          name="earth"
          id="earth"
          bind:checked={$autoRollEarth}
        />
      </div>
      <div class="auto-roll-dialogue-body-row">
        <label title="light" for="light"
          ><ElementIcon element={EElement.Light} locked={false} /></label
        >
        <input
          type="checkbox"
          name="light"
          id="light"
          bind:checked={$autoRollLight}
        />
      </div>
    </div>
  </dialog>
{/if}
