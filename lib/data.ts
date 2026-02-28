export const personalInfo = {
  name: "Nezih Tartilaci",
  email: "20neziht@gmail.com",
  phone: "+90 553 775 87 05",
  github: "github.com/nzhtrtlc",
  linkedin: "linkedin.com/in/neziht",
  role: "Software Engineer",
  summary:
    "Fullstack Engineer with 8+ years building scalable SaaS platforms. Specialized in React, Next.js, TypeScript, Node.js, and GraphQL. Experienced in AI integrations, Python orchestration, real-time systems, and shipping user-facing features with a strong focus on code quality and testing.",
};

export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "SASS",
    "TailwindCSS",
    "Bootstrap",
    "MUI",
    "Ant Design",
    "JavaScript (ES6+)",
    "React",
    "Next.js",
    "TypeScript",
    "GraphQL",
    "Webpack",
    "Babel",
    "ESLint",
  ],
  backend: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB", "Python"],
  testing: ["Cypress", "React Testing Library", "Jest", "Enzyme"],
  other: ["Git", "Docker", "Jenkins", "Postman", "CI/CD", "Monorepo", "AWS"],
};

export const projects = [
  {
    name: "plan0.ai",
    description: "AI-Powered Preconstruction Cost Estimation & Analytics",
    url: "https://plan0.ai", // Replace with real URL if different
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "GSAP",
      "Three.js",
    ],
    details: [
      "Public-facing marketing site with cinematic animations and an interactive 3D building model.",
      "Statically exported and globally distributed via AWS S3 + CloudFront CDN.",
      "Built scroll-triggered animations, smooth inertia scrolling, and parallax effects using GSAP.",
      "Rendered an interactive 3D building model in-browser with Three.js / @react-three/fiber.",
    ],
  },
  {
    name: "Proposal Document Generator",
    description:
      "Internal tool that automates professional .docx proposal generation for consultants.",
    technologies: [
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind CSS v4",
      "Node.js",
      "Express v5",
      "PostgreSQL",
    ],
    details: [
      "Integrated Google Gemini to extract project addresses from uploaded PDF tender documents.",
      "Implemented Google Places API autocomplete and a PostgreSQL-backed consultant bio registry.",
      "Built a Docxtemplater/PizZip rendering pipeline for branded Word templates with conditional sections.",
    ],
  },
  {
    name: "Construction Cost Analytics Platform",
    description:
      "AI-powered benchmarking tool that extracts metadata from estimate files and runs ML models against 400+ historical projects to predict trade unit rates.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Express",
      "Prisma",
      "Python",
      "scikit-learn",
      "XGBoost",
      "React 19",
    ],
    details: [
      "Orchestrated multi-step Python pipelines from Node.js via child_process.spawn, capturing stdout/stderr.",
      "Designed a real-time log streaming system with EventEmitter and Server-Sent Events (SSE).",
      "Integrated PostgreSQL (on AWS EC2) via Prisma (TypeScript) and SQLAlchemy (Python).",
      "Built a Python ML pipeline to predict unit rates across 10+ construction trades visualized with Plotly.",
    ],
  },
  {
    name: "Retcat",
    description: "AI-Powered Hotel Reservation Automation",
    technologies: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    details: [
      "Built a SaaS platform that automates hotel PMS data entry by processing inbound agency reservation emails end-to-end.",
      "Engineered a real-time IMAP IDLE email listener with PDF parsing and AI service integration.",
      "Designed full Elektra PMS integration: live price fetching, payload construction, and JWT auto-refresh.",
    ],
  },
];

export const experience = [
  {
    company: "Hoobe LLC",
    role: "Fullstack Engineer / Founder",
    period: "Nov 2024 – Present",
    location: "Remote, TR, USA",
    description:
      "Building scalable SaaS solutions and AI-powered platforms in the construction tech space, including plan0.ai and related tools.",
  },
  {
    company: "Craftgate",
    role: "Software Engineer",
    period: "Dec 2023 – Oct 2024",
    location: "Remote, TR",
    description:
      "Led frontend development across products, improving accessibility and performance. Built website with Next.js and optimized customer panel load time by 40%. Engineered internal Design System with Storybook and Tailwind.",
  },
  {
    company: "Confidential Client",
    role: "Fullstack Engineer / Contractor",
    period: "May 2023 – Aug 2023",
    location: "Remote, TR/GER",
    description:
      "Led Vue 2 to Vue 3 migration. Architected maintainable frontend with Vite and TypeScript, establishing modern dev toolchains (Prettier, ESLint, CI hooks).",
  },
  {
    company: "Toptal",
    role: "Frontend Engineer",
    period: "Sep 2021 – Feb 2023",
    location: "Remote, USA",
    description:
      "Core contributor to Client Portal with React, TypeScript, Apollo GraphQL. Migrated 100+ tests to React Testing Library, hitting 85% coverage. Initiated monorepo migration to reduce dependency conflicts.",
  },
  {
    company: "Segmentify",
    role: "Frontend Engineer",
    period: "Mar 2021 – Sep 2021",
    location: "Remote, TR",
    description:
      "Modernized legacy class components with React Hooks in Client Panel using React, Redux, ES6+. Lowered technical debt and expedited team delivery cadence.",
  },
  {
    company: "Cloud Nesil",
    role: "Fullstack Developer",
    period: "Sep 2018 – Mar 2021",
    location: "On-site",
    description:
      "Developed backend services (NestJS, TypeORM) and frontends (React, Redux). Optimized big-data workflows cutting load times by 50%. Containerized services with Docker + Jenkins.",
  },
  {
    company: "Gavth Studio",
    role: "Fullstack Developer",
    period: "Oct 2017 – Jul 2018",
    location: "Remote, UK",
    description:
      "Built REST and GraphQL APIs with Node.js and MongoDB. Delivered Next.js applications with SSR optimization.",
  },
  {
    company: "Setrow Solutions",
    role: "Software Developer",
    period: "Sep 2014 – Sep 2016",
    location: "On-site",
    description:
      "Built customer-facing tools (Smart Pop-ups, Loyalty Scripts) with PHP/MySQL. Handled high-volume datasets via RabbitMQ and Redis.",
  },
];

export const education = [
  {
    institution: "Istanbul Gedik University",
    degree: "Associate in Computer Programming",
    period: "2014 – 2016",
  },
];
