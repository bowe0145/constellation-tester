import { defineConfig } from "astro/config";
import aws from "astro-sst/static";

import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "static",
  adapter: aws(),
  integrations: [svelte(), tailwind()],
});
