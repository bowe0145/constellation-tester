<script lang="ts">
  import {
    starPageRollAttempts,
    starPageRollTotalCost,
    starRollCurrency,
    sveltePage,
  } from "@/stores/svelteStores";

  const resetAttempts = () => {
    starPageRollAttempts.set(0);
    starPageRollTotalCost.set(0);
  };

  sveltePage.subscribe(() => {
    resetAttempts();
  });

  // Format the number to have commas
  function formatNumber(number: number) {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0, // You can adjust this for decimal precision
    }).format(number);
  }
</script>

<div class="stats shadow h-32">
  <div class="stat">
    <div class="stat-title text-md w-auto">
      Attempts: {$starPageRollAttempts}
    </div>
    <div class="stat-value text-xs">
      Total Cost: {formatNumber($starPageRollTotalCost)}
      {$starRollCurrency}
    </div>
    <div class="stat-actions">
      <button
        class="btn btn-sm btn-warning"
        on:click|preventDefault={resetAttempts}>Reset</button
      >
    </div>
  </div>
</div>
