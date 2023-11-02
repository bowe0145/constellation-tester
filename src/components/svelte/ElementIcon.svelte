<script lang="ts">
  import Fa from "svelte-fa";
  import { EElement } from "../../core/stars";
  import {
    faMoon,
    faFireFlameCurved,
    faDroplet,
    faWind,
    faMountain,
    faSun,
    faFaceTired,
    faLock,
  } from "@fortawesome/free-solid-svg-icons";

  export let element: EElement | "unknown" = "unknown";
  export let locked: boolean = false;
  /*
  Dark = "Dark",
  Fire = "Fire",
  Water = "Water",
  Wind = "Wind",
  Earth = "Earth",
  Light = "Light",
    */
</script>

<!-- if else for each element -->
{#if locked}
  <Fa icon={faLock} />
{:else if element === "Dark"}
  <Fa icon={faMoon} />
{:else if element === "Fire"}
  <Fa icon={faFireFlameCurved} />
{:else if element === "Water"}
  <Fa icon={faDroplet} />
{:else if element === "Wind"}
  <Fa icon={faWind} />
{:else if element === "Earth"}
  <Fa icon={faMountain} />
{:else if element === "Light"}
  <Fa icon={faSun} />
{:else}
  <Fa icon={faFaceTired} />
{/if}
