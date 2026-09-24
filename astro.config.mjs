import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Served from https://armaanguha.com/ (custom domain on GitHub Pages).
export default defineConfig({
  site: 'https://armaanguha.com',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { themes: { light: 'vitesse-light', dark: 'vitesse-dark' } },
  },
})
