# Local website preview

This is the first rebuild of Lunji Zhu's existing GitHub Pages repository. The local migration branch is `codex/academic-site`; the original Jekyll source remains in Git history and in that checkout while the migration is reviewed. The clean release snapshot contains only the Astro source and authorized resources. Only `src/` and `public/` produce the new Astro site.

The site is not deployed. Lunji has selected Serif + Blue and supplied the portrait now shown on the homepage. The biography adapts Lunji's draft and remains a deferred content edit, as confirmed on October 5, 2026. Research links to the submitted manuscript on SSRN, and five selected notes link directly to Overleaf. The homepage and navigation now link to Lunji's supplied CV reader URL, `https://www.overleaf.com/read/pfghqtpymjyn#2bbc99`, with its fragment preserved. The reader opens in Viewing mode with a non-editable source pane. Public contact links use `lunji@math.ucla.edu`, as confirmed by Lunji.

Research presents the submitted manuscript with its title linking directly to SSRN, plus SSRN and Code resources. There is no separate local manuscript overview page. Teaching lists the UCLA courses supplied by Lunji in reverse chronological order, including the subsequently confirmed MATH 164 course in Winter 2026. The 2026 Fall MATH 156 entry has indented links to the Week 0 and Week 1 student worksheet PDFs and the student Algorithm Playground. The 2026 Summer MATH 31B entry has side-by-side Final Review Student Handout and Final Review Mind Map & Answers links. MATH 180 Spring 2026, MATH 164 Winter 2026, and MATH 174E Winter 2026 each list Weeks 1–10, with worksheets and their supplied answer keys on the same row. Other course resources will be added when Lunji provides them; courses without resources have no placeholder buttons.

Use Node 24, then:

```sh
npm ci
npm run dev
```

Open `http://localhost:4321/`. The local development preview includes the design comparison strip and draft notes. It lets you compare serif/sans titles, teal/blue accents, and the homepage with or without the selected portrait. The portrait is shown by default; `?photo=off` hides it for comparison in development. These controls are excluded from production. The original portrait is in `src/assets/portrait.jpg`; Astro generates an optimized WebP for the website, and CSS controls its framing.

```sh
npm run check
npm run build
```

Production builds exclude notes marked `draft: true`.

To review the selected public content without design controls or draft pages, run `npm run build` followed by `npm run preview -- --port 4322`, then open `http://127.0.0.1:4322/`.

To build a private review version that includes drafts:

```sh
INCLUDE_DRAFTS=true npm run build
npm run preview
```

The published main-site URL is `https://lunjilv2.github.io/`, using the `lunjiLv2/lunjiLv2.github.io` repository and no project subpath. GitHub Pages is configured to use GitHub Actions. The deploy workflow publishes reviewed updates pushed to `master`; the check workflow validates pull requests and development branches without deployment. The UCLA entry page is a separate follow-up.

For writing new notes and inserting components, see [AUTHORING.md](AUTHORING.md).
