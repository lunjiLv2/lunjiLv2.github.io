# Writing and updating the website

Write ordinary notes in Markdown (`.md`). Use MDX (`.mdx`) when a note needs a theorem component, a PDF preview, or an interactive demonstration. Both formats support mathematical notation. Content lives in `src/content/notes/`; the filename determines its note address.

## Update the CV

The CV uses an Overleaf reader link, as requested on October 5, 2026. Set `href` in `src/data/cv.ts` to the exact View Link copied from Overleaf, preserving any fragment. The homepage and navigation share this resource configuration; an empty configuration hides both links while the reader URL is unavailable. Do not substitute an editor or project URL, and do not derive a reader token from it. Check that the link opens the intended CV without editing access, then rebuild the site. Updating the Overleaf document keeps this website link current without exporting another PDF.

Keep the separate local editable CV source outside the public repository and preserve its original template. Local LaTeX compilation is independent of the website's reader-link resource.

The current reader URL is `https://www.overleaf.com/read/pfghqtpymjyn#2bbc99`, supplied and checked on October 5, 2026. It is configured in `src/data/cv.ts`; both the homepage and navigation show the CV link.

## Update Research

The manuscript list lives in `src/data/research.ts` and appears on both the homepage and `/research/`. The two brief ongoing-project entries are written directly in `src/pages/research/index.astro` and appear only on the full Research page. Lunji supplied their titles and one-sentence descriptions on October 5, 2026: Ensemble Sampling and AI for Applied Differential Equations. Each title includes “with Prof.” and a personal-homepage link for the collaborator. `ResearchFigure.astro` provides their static SVG illustrations: schematic sample points over distribution contours, and a connection between differential equations, AI and analysis. These are conceptual diagrams, not experimental results or a specific algorithm. Keep additional technical details out of those entries unless Lunji supplies them for publication.

## Update Teaching

The course list lives in `src/data/teaching.ts` and is displayed at `/teaching/`. Courses are sorted by year and then Fall, Summer, Spring, Winter, from newest to oldest. Preserve the course names and terms supplied by Lunji; add a teaching role only when confirmed.

The teaching feedback link is in `src/pages/teaching/index.astro`, below the page title and above the course list. Keep Lunji's supplied Google Forms URL, the invitation to share thoughts, and the emphasized reminder to specify the class. The anonymous label comes from Lunji and the form's public title; the site's code does not control the form's collection settings.

Add worksheets or Algorithm Playground links to the relevant course's resources when Lunji provides the material. Each resource appears as a separate indented link beneath its course. Courses without resources display only their term, course number, and title. No placeholder buttons or empty course detail pages are needed.

To pair a worksheet with its supplied answers on one row, add `answerHref` to that resource. The worksheet uses `label` and `href`; the second link displays “Answers (PDF)” and names the worksheet for screen readers. Without `answerHref`, only the worksheet link appears. The 2026 Spring MATH 180 entry has worksheet and answer pairs for all Weeks 1–10, including the subsequently supplied Week 5 key. Its PDFs live in `public/files/teaching/math180-2026-spring/`.

The Winter 2026 MATH 164 and MATH 174E entries also have Weeks 1–10 worksheet/answer pairs. Their PDFs live in `public/files/teaching/math164-2026-winter/` and `public/files/teaching/math174e-2026-winter/`. Lunji confirmed both terms when adding these materials; retain that confirmed term and do not infer teaching roles. Replace a supplied PDF at its existing resource path when a correction arrives, then verify the rendered pages and served file contents.

The 2026 Fall MATH 156 entry currently links to student worksheet PDFs stored in `public/files/teaching/math156-2026-fall/` and the student Algorithm Playground. The 2026 Summer MATH 31B entry uses the complete Final Review Student Handout and Mind Map & Answers files explicitly supplied by Lunji, stored in `public/files/teaching/math31b-2026-summer/`. Those two links sit side by side, as requested; on narrow screens their text wraps within each link. Use the exact material authorized for publication and verify the rendered pages before copying it. For student worksheets, do not substitute a TA key or solutions version unless Lunji explicitly supplies that version for publication. Keep external playground links pointed at the student release URL supplied by Lunji.

## Start a note

Copy the frontmatter below into a new file such as `src/content/notes/my-note.md`. Replace the example title and description. Keep `draft: true` while the content is being reviewed.

```yaml
---
title: My note title
description: A short description of the question this note answers.
date: 2026-09-30
lang: en
tags: [Sampling]
draft: true
---
```

Use `lang: zh` for a Chinese note and `lang: en` for an English note. A note may use either language; translating every article is optional. Omit `lang` if the language has not yet been checked. Dates are optional and describe the article itself, rather than the filesystem modification time or an automatically generated LaTeX cover date. Undated notes follow dated notes and are ordered by filename.

The local preview can expose drafts for review; the production build excludes them. A missing `draft` field defaults to `true`. Only switch to `draft: false` after confirming the text and any attached material can be public. Once there are published notes, the homepage and Notes directory show those notes; a draft's direct address remains available in development. Draft exclusion affects the generated website, so keep private files outside the public Git repository.

For a note that should link directly to an external page, add `externalUrl: https://example.com/my-note` to its frontmatter. Its title will link there and no local article route will be built. Keep the original read-only share URL and any fragment when linking to Overleaf; the editor's redirected project URL is not a substitute for the share link.

## Write mathematics

Use single dollar signs for inline mathematics, such as `$\Sigma = AA^\top$`, and double dollar signs for a display. KaTeX renders these formulas when the site builds.

```md
The covariance is $\Sigma = AA^\top$.

$$
p(x) = \frac{\exp(-\tfrac12 x^\top\Sigma^{-1}x)}
{(2\pi)^{d/2}\sqrt{\det\Sigma}}.
$$
```

Try new LaTeX commands in the local preview. Web formulas do not run a full LaTeX document: document classes, bibliographies, and arbitrary packages belong in a compiled PDF. Mathematical accuracy and correspondence with a source theorem still require review.

## Add a theorem and an optional proof

For an MDX note, import the component after the frontmatter. Imports below assume the file is directly inside `src/content/notes/`.

```mdx
import MathTheorem from '../../components/MathTheorem.astro';

<MathTheorem title="Gaussian transformation" id="gaussian-transformation">

If $Z \sim \mathcal N(0,I)$ and $X=AZ$, then $X$ has covariance $AA^\top$.

<div slot="proof">

Use the covariance identity $\operatorname{Cov}(AZ)=A\operatorname{Cov}(Z)A^\top$.

</div>
</MathTheorem>
```

Leave blank lines around Markdown inside the component. The proof uses a native disclosure element, so it works with a keyboard and without JavaScript. Omit the `proof` slot when there is no proof; use `proofOpen={true}` to show it initially. `proofTitle` changes the disclosure label, for example to `证明`. A unique `id` allows links such as `[the transformation](#gaussian-transformation)`. The component does not invent theorem numbering or resolve citations.

## Add the Gaussian demonstration

```mdx
import SamplingDemo from '../../components/SamplingDemo.astro';

<SamplingDemo id="my-gaussian-demo" />
```

The demo uses a fixed seed and direct Gaussian samples. Its controls change the standard-deviation ratio and rotation. Play reveals samples; Pause and Reset remain available. Animation pauses when the demo leaves the viewport or the tab is hidden. The reduced-motion preference disables playback and shows the samples as a static figure. If multiple demos appear on one page, assign each a different `id`. This component includes its own browser script and requires no React dependency or `client:*` directive.

## Attach a PDF

Place a confirmed public PDF in `public/files/` with a stable filename, then reference it from MDX. This component remains available for future content. The five current Overleaf notes are external links and do not ship local PDFs. The example below is a usage pattern; no placeholder PDF is shipped.

```mdx
import PdfResource from '../../components/PdfResource.astro';

<PdfResource
  id="my-note-pdf"
  href="/files/my-note.pdf"
  title="My note — PDF"
  date="2026-09-30"
/>
```

The PDF and the PDF.js reader load only after a reader clicks Preview PDF. The preview fits one page to the available width, with Previous / Next and Go to page controls. Close preview hides the reader and retains the loaded document for reopening. Open PDF and Download stay available if previewing fails or is inconvenient on a phone. The canvas preview is visual; use Open PDF for document text selection, search and accessible text. Add `preview={false}` for links without a reader. Use a unique `id` for each preview on the same page. A browser may open rather than download PDFs hosted on another origin; keeping confirmed files under this site's `public/files/` gives the download link the most predictable behavior.

For plain Markdown, use `[Open PDF](/files/my-note.pdf)`. Confirm a manuscript's version and public status before copying it into `public/`; a local file or a name containing “SSRN” does not establish that it is already public.

For the current Overleaf notes, use only an external-link entry, as requested on October 1, 2026. See `src/content/notes/applied-ode.md`: its frontmatter contains the title, short description with attribution, language, `draft: false`, and the original read-only `externalUrl`, including its fragment. Do not attach a `PdfResource` or copy these five PDFs into `public/`. The title opens Overleaf directly; no local detail page is generated. For example:

```yaml
---
title: Applied ODE Notes
description: Notes for MATH 266A, taught by Jacob Bedrossian and typed by Lunji Zhu.
lang: en
tags: [ODE, Course notes]
draft: false
externalUrl: https://www.overleaf.com/read/jtfgkgsrqwsc#e85455
---
```

Keep lecture and coauthor credits in the description for an external entry, since it has no local body. This link-only choice applies to these five notes; it does not remove the ability to publish other local Markdown/MDX articles with formulas, animation or PDFs.

## Preview an update

Use Node.js 24, then run these commands from the repository directory:

```sh
npm run dev
```

The development server includes drafts. Open the local address printed in the terminal, then check the note's formulas, links and interactive controls. Inspect a narrow mobile view as well as the desktop view. Before preparing a production version, run:

```sh
npm run check
npm run build
```

The ordinary build excludes `draft: true` notes. `INCLUDE_DRAFTS=true npm run build` is available for a local build that includes them; such a build is for review, not publication. Changing an article file or replacing a confirmed PDF does not require changing the overall page layout. Production publication is a separate step from preparing this local preview.
