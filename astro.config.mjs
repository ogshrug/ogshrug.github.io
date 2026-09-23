import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Served from https://ogshrug.github.io/ (user site, so no base path).
export default defineConfig({
  site: 'https://ogshrug.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { themes: { light: 'vitesse-light', dark: 'vitesse-dark' } },
  },
})
