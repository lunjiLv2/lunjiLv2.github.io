import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Shared by Markdown and MDX. Add reusable notation here instead of repeating
// definitions in each article. These macros are mathematical notation only;
// complete LaTeX documents should be supplied as PDF files.
const mathMacros = {
  '\\R': '\\mathbb{R}',
  '\\N': '\\mathbb{N}',
  '\\Z': '\\mathbb{Z}',
  '\\E': '\\mathbb{E}',
  '\\P': '\\mathbb{P}',
  '\\norm': '\\left\\lVert #1 \\right\\rVert',
  '\\abs': '\\left\\lvert #1 \\right\\rvert',
};

export default defineConfig({
  site: 'https://lunjilv2.github.io',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: { theme: 'github-light' },
    // Astro 7 defaults to Sätteri; Unified supports the remark/rehype math
    // plugins used here. MDX inherits this processor and its macros.
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        [rehypeKatex, { macros: mathMacros, output: 'htmlAndMathml' }],
      ],
    }),
  },
});
