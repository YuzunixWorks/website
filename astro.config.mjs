// @ts-check
import { defineConfig } from 'astro/config';
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    integrations: [icon()],
    adapter: cloudflare(),
    vite: {
        plugins: [tailwindcss()],
    },
});