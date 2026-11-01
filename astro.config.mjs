import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Served from https://armaanguha.com/ (custom domain on GitHub Pages).
export default defineConfig({
  site: 'https://armaanguha.com',
  base: '/',
  trailingSlash: 'ignore',
  // /cm is a private, unlisted page: keep it out of the sitemap
  integrations: [sitemap({ filter: (page) => !/^\/cm\/?$/.test(new URL(page).pathname) })],
  markdown: {
    shikiConfig: { themes: { light: 'vitesse-light', dark: 'vitesse-dark' } },
  },
})
