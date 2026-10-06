# Lunji Zhu academic website

A static academic website built with Astro and Markdown/MDX. The first rebuild is currently being reviewed locally; no new version has been deployed.

## Run locally

Use Node.js 24, then:

```sh
npm ci
npm run dev
```

Open http://localhost:4321/. The development preview includes draft notes and a small toolbar for comparing typography, accent color, and portrait placement. Serif + Blue and the portrait supplied by Lunji are the current defaults.

```sh
npm run check
npm run build
```

Production builds omit the toolbar and notes marked `draft: true`. For a private build including drafts, use `INCLUDE_DRAFTS=true npm run build`.

## Content

- `src/data/research.ts`: research titles, descriptions, status, and resources.
- `src/data/teaching.ts`: UCLA course history and course resources, sorted from newest to oldest.
- `src/data/cv.ts`: the shared CV reader-link resource.
- `src/content/notes/`: Markdown and MDX notes.
- `src/components/`: mathematical statements, interactive demonstrations, and PDF resources.
- `public/`: static files served at stable addresses.

See [authoring instructions](docs/AUTHORING.md) and [local review notes](docs/LOCAL-PREVIEW.md).

## Deployment and migration

The site is published at `https://lunjilv2.github.io/`, hosted from `lunjiLv2/lunjiLv2.github.io`. GitHub Pages uses GitHub Actions as its source. The deploy workflow installs locked dependencies, checks types, builds the static site, and deploys reviewed updates pushed to `master`. The check workflow validates pull requests and development branches without deployment.

The clean release contains only the Astro site and its authorized resources. Legacy Jekyll/Academic Pages files remain in the original Git history and the local migration checkout. Their original instructions are preserved in [LEGACY-ACADEMIC-PAGES.md](docs/LEGACY-ACADEMIC-PAGES.md); original licensing and attribution remain in `LICENSE`.
