export type TeachingTerm = 'Winter' | 'Spring' | 'Summer' | 'Fall';

export type TeachingResource = {
  label: string;
  href: string;
  answerHref?: string;
};

export type TeachingCourse = {
  slug: string;
  year: number;
  term: TeachingTerm;
  code: string;
  title: string;
  resources: TeachingResource[];
};

const termOrder: Record<TeachingTerm, number> = {
  Winter: 0,
  Spring: 1,
  Summer: 2,
  Fall: 3,
};

// Add confirmed public resources to the corresponding course. Empty arrays show no links.
const courses: TeachingCourse[] = [
  {
    slug: '2026-fall-math-156',
    year: 2026,
    term: 'Fall',
    code: 'MATH 156',
    title: 'Machine Learning',
    resources: [
      { label: 'Week 0 Worksheet (PDF)', href: '/files/teaching/math156-2026-fall/week-0-worksheet.pdf' },
      { label: 'Week 1 Worksheet (PDF)', href: '/files/teaching/math156-2026-fall/week-1-worksheet.pdf' },
      { label: 'Algorithm Playground', href: 'https://claude.ai/artifact/7aGsWHj3ENQ3DB54SFNTQH' },
    ],
  },
  {
    slug: '2026-summer-math-31b',
    year: 2026,
    term: 'Summer',
    code: 'MATH 31B',
    title: 'Integration and Infinite Series',
    resources: [
      { label: 'Final Review Student Handout (PDF)', href: '/files/teaching/math31b-2026-summer/final-review-student-handout.pdf' },
      { label: 'Final Review Mind Map & Answers (PDF)', href: '/files/teaching/math31b-2026-summer/final-review-mind-map-answers.pdf' },
    ],
  },
  {
    slug: '2026-spring-math-180',
    year: 2026,
    term: 'Spring',
    code: 'MATH 180',
    title: 'Graph Theory',
    resources: [
      { label: 'Week 1 Worksheet (PDF)', href: '/files/teaching/math180-2026-spring/week-1-worksheet.pdf', answerHref: '/files/teaching/math180-2026-spring/week-1-answers.pdf' },
      { label: 'Week 2 Worksheet (PDF)', href: '/files/teaching/math180-2026-spring/week-2-worksheet.pdf', answerHref: '/files/teaching/math180-2026-spring/week-2-answers.pdf' },
      { label: 'Week 3 Worksheet (PDF)', href: '/files/teaching/math180-2026-spring/week-3-worksheet.pdf', answerHref: '/files/teaching/math180-2026-spring/week-3-answers.pdf' },
      { label: 'Week 4 Worksheet (PDF)', href: '/files/teaching/math180-2026-spring/week-4-worksheet.pdf', answerHref: '/files/teaching/math180-2026-spring/week-4-answers.pdf' },
      { label: 'Week 5 Worksheet (PDF)', href: '/files/teaching/math180-2026-spring/week-5-worksheet.pdf', answerHref: '/files/teaching/math180-2026-spring/week-5-answers.pdf' },
      { label: 'Week 6 Worksheet (PDF)', href: '/files/teaching/math180-2026-spring/week-6-worksheet.pdf', answerHref: '/files/teaching/math180-2026-spring/week-6-answers.pdf' },
      { label: 'Week 7 Worksheet (PDF)', href: '/files/teaching/math180-2026-spring/week-7-worksheet.pdf', answerHref: '/files/teaching/math180-2026-spring/week-7-answers.pdf' },
      { label: 'Week 8 Worksheet (PDF)', href: '/files/teaching/math180-2026-spring/week-8-worksheet.pdf', answerHref: '/files/teaching/math180-2026-spring/week-8-answers.pdf' },
      { label: 'Week 9 Worksheet (PDF)', href: '/files/teaching/math180-2026-spring/week-9-worksheet.pdf', answerHref: '/files/teaching/math180-2026-spring/week-9-answers.pdf' },
      { label: 'Week 10 Worksheet (PDF)', href: '/files/teaching/math180-2026-spring/week-10-worksheet.pdf', answerHref: '/files/teaching/math180-2026-spring/week-10-answers.pdf' },
    ],
  },
  {
    slug: '2026-winter-math-164',
    year: 2026,
    term: 'Winter',
    code: 'MATH 164',
    title: 'Optimization',
    resources: [
      { label: 'Week 1 Worksheet (PDF)', href: '/files/teaching/math164-2026-winter/week-1-worksheet.pdf', answerHref: '/files/teaching/math164-2026-winter/week-1-answers.pdf' },
      { label: 'Week 2 Worksheet (PDF)', href: '/files/teaching/math164-2026-winter/week-2-worksheet.pdf', answerHref: '/files/teaching/math164-2026-winter/week-2-answers.pdf' },
      { label: 'Week 3 Worksheet (PDF)', href: '/files/teaching/math164-2026-winter/week-3-worksheet.pdf', answerHref: '/files/teaching/math164-2026-winter/week-3-answers.pdf' },
      { label: 'Week 4 Worksheet (PDF)', href: '/files/teaching/math164-2026-winter/week-4-worksheet.pdf', answerHref: '/files/teaching/math164-2026-winter/week-4-answers.pdf' },
      { label: 'Week 5 Worksheet (PDF)', href: '/files/teaching/math164-2026-winter/week-5-worksheet.pdf', answerHref: '/files/teaching/math164-2026-winter/week-5-answers.pdf' },
      { label: 'Week 6 Worksheet (PDF)', href: '/files/teaching/math164-2026-winter/week-6-worksheet.pdf', answerHref: '/files/teaching/math164-2026-winter/week-6-answers.pdf' },
      { label: 'Week 7 Worksheet (PDF)', href: '/files/teaching/math164-2026-winter/week-7-worksheet.pdf', answerHref: '/files/teaching/math164-2026-winter/week-7-answers.pdf' },
      { label: 'Week 8 Worksheet (PDF)', href: '/files/teaching/math164-2026-winter/week-8-worksheet.pdf', answerHref: '/files/teaching/math164-2026-winter/week-8-answers.pdf' },
      { label: 'Week 9 Worksheet (PDF)', href: '/files/teaching/math164-2026-winter/week-9-worksheet.pdf', answerHref: '/files/teaching/math164-2026-winter/week-9-answers.pdf' },
      { label: 'Week 10 Worksheet (PDF)', href: '/files/teaching/math164-2026-winter/week-10-worksheet.pdf', answerHref: '/files/teaching/math164-2026-winter/week-10-answers.pdf' },
    ],
  },
  {
    slug: '2026-winter-math-174e',
    year: 2026,
    term: 'Winter',
    code: 'MATH 174E',
    title: 'Mathematics of Finance for Mathematics/Economics Students',
    resources: [
      { label: 'Week 1 Worksheet (PDF)', href: '/files/teaching/math174e-2026-winter/week-1-worksheet.pdf', answerHref: '/files/teaching/math174e-2026-winter/week-1-answers.pdf' },
      { label: 'Week 2 Worksheet (PDF)', href: '/files/teaching/math174e-2026-winter/week-2-worksheet.pdf', answerHref: '/files/teaching/math174e-2026-winter/week-2-answers.pdf' },
      { label: 'Week 3 Worksheet (PDF)', href: '/files/teaching/math174e-2026-winter/week-3-worksheet.pdf', answerHref: '/files/teaching/math174e-2026-winter/week-3-answers.pdf' },
      { label: 'Week 4 Worksheet (PDF)', href: '/files/teaching/math174e-2026-winter/week-4-worksheet.pdf', answerHref: '/files/teaching/math174e-2026-winter/week-4-answers.pdf' },
      { label: 'Week 5 Worksheet (PDF)', href: '/files/teaching/math174e-2026-winter/week-5-worksheet.pdf', answerHref: '/files/teaching/math174e-2026-winter/week-5-answers.pdf' },
      { label: 'Week 6 Worksheet (PDF)', href: '/files/teaching/math174e-2026-winter/week-6-worksheet.pdf', answerHref: '/files/teaching/math174e-2026-winter/week-6-answers.pdf' },
      { label: 'Week 7 Worksheet (PDF)', href: '/files/teaching/math174e-2026-winter/week-7-worksheet.pdf', answerHref: '/files/teaching/math174e-2026-winter/week-7-answers.pdf' },
      { label: 'Week 8 Worksheet (PDF)', href: '/files/teaching/math174e-2026-winter/week-8-worksheet.pdf', answerHref: '/files/teaching/math174e-2026-winter/week-8-answers.pdf' },
      { label: 'Week 9 Worksheet (PDF)', href: '/files/teaching/math174e-2026-winter/week-9-worksheet.pdf', answerHref: '/files/teaching/math174e-2026-winter/week-9-answers.pdf' },
      { label: 'Week 10 Worksheet (PDF)', href: '/files/teaching/math174e-2026-winter/week-10-worksheet.pdf', answerHref: '/files/teaching/math174e-2026-winter/week-10-answers.pdf' },
    ],
  },
  {
    slug: '2025-fall-math-32a',
    year: 2025,
    term: 'Fall',
    code: 'MATH 32A',
    title: 'Calculus of Several Variables',
    resources: [],
  },
  {
    slug: '2025-summer-math-32b',
    year: 2025,
    term: 'Summer',
    code: 'MATH 32B',
    title: 'Calculus of Several Variables',
    resources: [],
  },
  {
    slug: '2025-spring-math-151b',
    year: 2025,
    term: 'Spring',
    code: 'MATH 151B',
    title: 'Applied Numerical Methods',
    resources: [],
  },
  {
    slug: '2025-winter-math-135',
    year: 2025,
    term: 'Winter',
    code: 'MATH 135',
    title: 'Ordinary Differential Equations',
    resources: [],
  },
  {
    slug: '2024-fall-math-31a',
    year: 2024,
    term: 'Fall',
    code: 'MATH 31A',
    title: 'Differential and Integral Calculus',
    resources: [],
  },
];

export const teaching = [...courses].sort(
  (a, b) => b.year - a.year || termOrder[b.term] - termOrder[a.term],
);
