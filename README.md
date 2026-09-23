# armaanguha — personal site

Minimal portfolio + blog built with [Astro](https://astro.build). Inspired by
[antfu.me](https://antfu.me) and [radnaabazar.com](https://www.radnaabazar.com/en).

```sh
npm install
npm run dev      # http://localhost:4321/
npm run build
```

- **Content** (bio, projects, timeline): `src/data/profile.ts`
- **Blog posts**: add a Markdown file to `src/content/posts/`
- **Styles**: `src/styles/global.css`
- **Deploy**: pushes to `main` publish to GitHub Pages via `.github/workflows/deploy.yml`.
  Live at https://ogshrug.github.io/
