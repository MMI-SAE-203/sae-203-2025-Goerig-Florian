// @ts-check
import { defineConfig } from 'astro/config';


import alpinejs from '@astrojs/alpinejs';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
output:"server",
  integrations: [tailwind({ applyBaseStyles: false }),alpinejs()],
  experimental: {
    svg: true,
  }
});