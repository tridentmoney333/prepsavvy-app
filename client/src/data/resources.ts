export interface Resource {
  id: number;
  title: string;
  type: 'PDF' | 'Video';
  size: string;
  category: 'Test Preparation' | 'Application Materials' | 'Interview Preparation';
  description: string;
  downloads?: number;
  views?: number;
  isPopular?: boolean;
  isNew?: boolean;
}

export const resources: Resource[] = [
  {
    id: 1,
    title: "Application Resources",
    type: "PDF",
    size: "Coming Soon",
    category: "Application Materials",
    description: "Personal Statement Starter Kit with prompts, samples, reference letter request guide, application timeline, and school comparison chart.",
    downloads: 0,
    isPopular: true
  },
  {
    id: 2,
    title: "Interview Prep",
    type: "Video",
    size: "Coming Soon",
    category: "Interview Preparation",
    description: "MMI practice scenarios, panel interview guide, top 30 interview questions with ideal response frameworks, and mock interview scorecard.",
    views: 0,
    isNew: true
  },
  {
    id: 3,
    title: "DAT Prep Hub",
    type: "PDF",
    size: "Coming Soon",
    category: "Test Preparation",
    description: "DAT study calendar template, section approach videos, Booster vs Bootcamp comparison, reading comp strategy, and CDAT vs US DAT guide.",
    downloads: 0,
    isPopular: true
  },
  {
    id: 4,
    title: "Undergrad Strategy / GPA Boost",
    type: "PDF",
    size: "Coming Soon",
    category: "Application Materials",
    description: "Undergraduate planning workbook, GPA booster courses, elective tracker, pre-dental resume guide, and shadowing & volunteering log template.",
    downloads: 0
  },
  {
    id: 5,
    title: "Money & Logistics",
    type: "PDF",
    size: "Coming Soon",
    category: "Application Materials",
    description: "Dental school tuition & fees breakdown, budgeting guide, scholarships & bursaries masterlist, and how to afford dental school video.",
    downloads: 0
  },
  {
    id: 6,
    title: "Mindset, Branding & Mentorship",
    type: "Video",
    size: "Coming Soon",
    category: "Interview Preparation",
    description: "Success stories from applicants, imposter syndrome toolkit, building your pre-dental brand on social media, and mental health guide.",
    views: 0,
    isNew: true
  }
];
