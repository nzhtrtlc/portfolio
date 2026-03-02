export const personalInfo = {
  name: "Nezih Tartilaci",
  email: "20neziht@gmail.com",
  phone: "+90 553 775 87 05",
  github: "https://github.com/nzhtrtlc",
  linkedin: "https://www.linkedin.com/in/neziht",
  role: "Software Engineer",
  summary: `Fullstack Software Engineer with 9 years of experience building high-performing, scalable web applications. Specialized in modern JavaScript ecosystems, particularly React and TypeScript. Previously worked with Toptal's Core Team and other tech innovators, focusing on crafting exceptional user experiences. \nRemote work veteran with 5+ years of experience collaborating with global teams across Turkey, USA, Canada and UK. \n 🔧 Core Technologies: Javascript, Typescript, NodeJS, React, NextJS, GraphQL, PostgreSQL, Python, AWS, Docker \n \n 📫 Open to discussing: Frontend Architecture, Modern Web Development, Distributed Systems, Remote Work`,
};

export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "SASS",
    "TailwindCSS",
    "ECMAScript",
    "React",
    "Next.js",
    "TypeScript",
    "Apollo",
    "React Query",
    "Redux/Zustand",
    "Webpack",
    "Babel",
    "ESLint",
  ],
  backend: [
    "Node.js",
    "NestJS",
    "Express",
    "PostgreSQL",
    "GraphQL",
    "Rest API",
    "MongoDB",
    "Python",
  ],
  testing: [
    "Cypress",
    "React Testing Library",
    "Jest",
    "Enzyme",
    "Vitest",
    "Playwright",
    "Storybook",
  ],
  CI_CD: ["GitHub Actions", "Jenkins", "AWS", "Docker", "Git"],
  interests: [
    "Monorepo",
    "Micro Frontend",
    "Computer Science Theory",
    "Web Performance",
    "How things works?",
  ],
};

export const projects = [
  {
    name: "plan0.ai",
    description: "AI-Powered Preconstruction Cost Estimation & Analytics",
    url: "https://plan0.ai",
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

export const education = [
  {
    institution: "Istanbul Gedik University",
    degree: "Associate in Computer Programming",
    period: "2014 – 2016",
  },
];
