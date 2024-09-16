// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
    integrations: [tailwind({ applyBaseStyles: false }), react(), alpinejs()],
});