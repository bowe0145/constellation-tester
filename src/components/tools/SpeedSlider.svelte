<script lang="ts">
  import { starPageRollSpeed } from "@stores/svelteStores";

  $: min = 1;
  $: max = 1001;
  $: step = 50;

  // Create an array of numbers from min to max with step
  $: range = Array.from(
    { length: (max - min) / step + 1 },
    (_, i) => min + i * step
  );
</script>

<p>Reroll Speed</p>
<input
  type="range"
  {min}
  {max}
  class="range px-2"
  {step}
  bind:value={$starPageRollSpeed}
/>
<div class="w-full flex justify-between text-xs px-5 select-none">
  {#each range as value, index (value)}
    <span class="notch">|</span>
  {/each}
</div>
