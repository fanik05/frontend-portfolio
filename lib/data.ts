export const profile = {
  name: "Fatin Noor Anik",
  roles: ["Frontend Engineer", "React / Next.js Specialist", "UI Performance Engineer"],
  tagline:
    "I build resilient, high-performance web interfaces — React & TypeScript systems that stay fast and maintainable as they scale.",
  location: "Dhaka, Bangladesh",
  email: "fatinnooranik@gmail.com",
  available: "Open to frontend & full-stack roles",
};

export const about = [
  "I'm a frontend-focused software engineer building resilient, high-performance web applications — mostly in the React, Next.js, and TypeScript ecosystem. I've been developing professionally since 2022.",
  "Before that I spent a few years in QA and test automation, which gave me a quality-first instinct I still carry into every UI: test the edges, measure performance, and ship something that holds up under real load. Since moving into development I've owned frontends end to end for B2B and FinTech products, and recently completed an MSc in Computational Science at Laurentian University in Ontario, Canada.",
];

export const quickFacts = [
  { label: "Based in", value: "Dhaka, Bangladesh" },
  { label: "Developing since", value: "2022" },
  { label: "Core stack", value: "React · Next.js · TS" },
  { label: "Education", value: "MSc, Laurentian University" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/fanik05", handle: "@fanik05" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anikaust", handle: "in/anikaust" },
  { label: "Email", href: "mailto:fatinnooranik@gmail.com", handle: "fatinnooranik@gmail.com" },
];

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  /** Whether this role was a development or QA position. */
  track: "Development" | "Quality Engineering";
  summary: string;
  responsibilities: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    org: "Skilled",
    period: "2024 — 2025",
    track: "Development",
    summary: "Sole frontend engineer (remote contract) for Skilled — a global B2B professional-development platform — and its high-conversion marketing site.",
    responsibilities: [
      "Architected and delivered the entire frontend ecosystem independently — design system, routing, and data layer — for the platform and its high-conversion marketing site.",
      "Built a Learning & Development dashboard in Next.js that let team leads monitor growth metrics and manage complex, deeply-nested data flows.",
      "Designed a selector-scoped Zustand state layer that kept re-renders tight and made the codebase easy to extend.",
      "Dockerized the frontend and tuned server-side rendering for fast, consistent performance across local, staging, and production.",
    ],
    tags: ["Next.js", "TypeScript", "Zustand", "Docker"],
  },
  {
    role: "Software Engineer",
    org: "Binate Solutions Ltd.",
    period: "2022 — 2024",
    track: "Development",
    summary: "Standardized frontend architecture across a suite of B2B trading and e-learning platforms.",
    responsibilities: [
      "Unified the frontend codebase and component conventions across multiple products, making feature work faster and more consistent for the team.",
      "Built reusable UI patterns and shared libraries that were adopted across the platform suite.",
      "Containerized the applications with Docker and configured Nginx reverse proxies on AWS and DigitalOcean for reproducible deployments.",
      "Improved page responsiveness and SEO through efficient server-side rendering and careful state management.",
    ],
    tags: ["React", "Next.js", "Docker", "Nginx", "AWS"],
  },
  {
    role: "Software Engineer",
    org: "Spring Rain Pvt Ltd",
    period: "2022",
    track: "Development",
    summary: "First development role — built high-scale features for FinTech and Web3 products.",
    responsibilities: [
      "Engineered scalable, high-performance UIs with React, Node.js, and Koa for digital-finance applications serving thousands of active users.",
      "Diagnosed and resolved critical production defects to keep high-availability systems stable.",
      "Worked across MySQL, MongoDB, and DynamoDB data models while building responsive interfaces.",
    ],
    tags: ["React", "Node.js", "Koa", "DynamoDB"],
  },
  {
    role: "Software Test Engineer",
    org: "Spring Rain Pvt Ltd",
    period: "2020 — 2022",
    track: "Quality Engineering",
    summary: "Owned end-to-end test automation for a FinTech platform.",
    responsibilities: [
      "Designed and built comprehensive E2E automation suites with Playwright.",
      "Developed API testing frameworks with Newman and Supertest to validate data integrity across microservices.",
      "Embedded automated checks into the team's release process, catching regressions before they reached production.",
    ],
    tags: ["Playwright", "Newman", "Supertest"],
  },
  {
    role: "Junior Software Engineer (QA)",
    org: "Circle FinTech Ltd",
    period: "2019 — 2020",
    track: "Quality Engineering",
    summary: "Kick-started the team's mobile test automation.",
    responsibilities: [
      "Initiated the team's first end-to-end mobile automation framework using Appium and Python.",
      "Led the shift from manual to automated testing for a high-security mobile banking application.",
      "Validated complex financial workflows — fund transfers, account management — under strict security requirements.",
    ],
    tags: ["Appium", "Python"],
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "Zustand", "React Query", "Tailwind CSS", "Material UI", "Framer Motion"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "Express", "Koa", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Redis"],
  },
  {
    label: "DevOps & Tooling",
    items: ["Docker", "Nginx", "AWS", "DigitalOcean", "CI/CD · Jenkins", "Git"],
  },
  {
    label: "Testing & Automation",
    items: ["Playwright", "Appium", "Newman", "Supertest"],
  },
];

/** Flat list used by the infinite marquee. */
export const marqueeStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Zustand",
  "React Query",
  "Node.js",
  "Framer Motion",
  "Docker",
  "AWS",
  "PostgreSQL",
  "Playwright",
];
