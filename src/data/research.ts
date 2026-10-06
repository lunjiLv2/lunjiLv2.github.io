export type ResearchItem = {
  slug: string;
  title: string;
  shortTitle: string;
  href: string;
  kind: 'clustering';
  status: string;
  description: string;
  authors?: { name: string; href?: string }[];
  resources: { label: string; href: string }[];
};

export const research: ResearchItem[] = [
  {
    slug: 'clustering-statistical-arbitrage',
    title: 'Quantifying the Contributions of Clustering to Statistical Arbitrage',
    shortTitle: 'Clustering and statistical arbitrage',
    href: 'https://ssrn.com/abstract=7448198',
    kind: 'clustering',
    status: 'Submitted manuscript · 2026',
    description: 'Separating the contributions of clustering and downstream trading models within a common evaluation pipeline.',
    authors: [
      { name: 'Lunji Zhu' },
      { name: 'Yixuan He' },
      { name: 'Mihai Cucuringu', href: 'https://math.ucla.edu/~mihai/index.html' },
    ],
    resources: [
      { label: 'SSRN', href: 'https://ssrn.com/abstract=7448198' },
      { label: 'Code', href: 'https://github.com/lunjiLv2/clustering-statarb-replication' },
    ],
  },
];
