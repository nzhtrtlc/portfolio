import type { ReactNode } from "react";
import type { Tech } from "@/lib/types";

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  details?: ReactNode;
  technologies?: Tech[];
}

const Entry = ({ title, content }: { title: string; content: ReactNode }) => (
  <div className="mb-4 last:mb-0">
    <h4 className="text-gray-400 font-semibold mb-2">{title}</h4>
    <p className="text-muted-foreground/80 text-sm leading-relaxed">
      {content}
    </p>
  </div>
);

export const experience: ExperienceEntry[] = [
  {
    company: "plan0.ai",
    role: "Fullstack Engineer",
    period: "Apr 2025 – Present",
    location: "Remote",
    description: `plan0.ai is building an AI-powered construction cost estimation platform that helps contractors and developers predict project costs quickly and accurately. I work across the full stack — shipping product features, ML pipelines, and the production AWS infrastructure underneath.`,
    details: (
      <section>
        <Entry
          title="Construction Cost Analytics Platform"
          content="An AI-powered benchmarking tool that extracts metadata from estimate files and predicts trade unit rates against 400+ historical projects. I orchestrated multi-step Python ML pipelines from a Node.js backend with structured JSON parsing and resilient error recovery, and built a real-time progress stream so the frontend has live visibility into long-running ML jobs. Designed a multi-output regression pipeline predicting 86 unit-rate fields per project with cross-validation. Integrated PostgreSQL via Prisma (Node) and SQLAlchemy (Python) with a CSV fallback, and rendered results as interactive Plotly visualizations."
        />
        <Entry
          title="Construction Estimation App (Costimate)"
          content="The flagship product — a large-scale collaborative SPA for construction site planning with 3D GIS, canvas-based design tools, and real-time multi-user editing. I delivered features across the full stack: interactive canvas (Konva, Fabric), 3D GIS (CesiumJS), and Redux Toolkit on the frontend; real-time collaboration on Socket.io with authenticated rooms on the Node.js backend; and AWS S3 uploads, image processing, background job workers, and the Anthropic SDK integrated for cost-estimation intelligence."
        />
        <Entry
          title="AWS Cloud Infrastructure (IaC)"
          content="Designed and shipped the production AWS environment for Costimate and adjacent services, fully codified in Terraform and Terragrunt across staging and production. Architected a containerized environment on ECS Fargate (4 services behind an ALB) running across multiple availability zones for high availability. Provisioned managed PostgreSQL on RDS with multi-AZ HA and centralized secret management via AWS Secrets Manager. Built CI/CD pipelines with GitHub Actions using OIDC-based keyless deployments — replacing static IAM credentials with short-lived, scoped access. Authored reusable Terragrunt modules covering ECS, RDS, S3, CloudFront, IAM, and CloudWatch, mirrored cleanly across staging and production."
        />
      </section>
    ),
    technologies: [
      "React",
      "NextJS",
      "TypeScript",
      "NodeJS",
      "Python",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
      "Redux Toolkit",
      "TailwindCSS",
      "AWS",
      "Docker",
      "Terraform",
      "Terragrunt",
      "GitHub Actions",
    ],
  },
  {
    company: "Hoobe LLC",
    role: "Fullstack Engineer / Founder",
    period: "Nov 2024 – Apr 2025",
    location: "Remote, TR, USA",
    description: `I founded Hoobe LLC and delivered two contract engagements as a fullstack engineer — plan0.ai (a US-based AI construction estimation startup) and Retcat (an AI-powered hotel reservation automation platform).`,
    details: (
      <section>
        <Entry
          title="plan0.ai — Marketing Website"
          content={
            <>
              A public-facing site for plan0.ai with cinematic scroll
              storytelling, animated SVG visualizations, and an interactive 3D
              building model. I engineered scroll-driven storytelling with GSAP
              (ScrollTrigger, ScrollSmoother, SplitText) and a global
              scroll-progress indicator, rendered an interactive 3D building
              model with Three.js / react-three-fiber, and statically built and
              globally distributed the site via AWS S3 + CloudFront.
              <a
                href="https://plan0.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-500 hover:underline text-xs cursor-pointer"
              >
                https://plan0.ai
              </a>
            </>
          }
        />
        <Entry
          title="plan0.ai — Proposal Document Generator"
          content="An internal tool that automates professional .docx consulting proposals from PDF tender inputs and a structured staff/bio registry. I integrated Google Gemini with structured JSON output to extract project addresses from uploaded PDFs, and built a Docxtemplater + PizZip rendering pipeline supporting conditional sections and inline signature images. Implemented Google Places autocomplete and a PostgreSQL-backed staff/bio registry grouped by division. Architected as a TypeScript monorepo (Express 5 API + React/Vite frontend) with shared types across packages."
        />
        <Entry
          title="Retcat — Hotel Reservation Automation"
          content="A SaaS platform that automates hotel PMS data entry by processing inbound agency reservation emails end-to-end, eliminating manual work for hotel staff. I engineered a real-time email listener with allowlist filtering, PDF parsing, and an AI service for structured reservation extraction. Designed full Elektra PMS integration with live price fetching, reservation creation, and JWT auto-refresh on token expiry."
        />
      </section>
    ),
    technologies: [
      "React",
      "NextJS",
      "TypeScript",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Prisma",
      "GSAP",
      "Three.js",
      "TailwindCSS",
      "AWS",
      "Docker",
    ],
  },
  {
    company: "Craftgate",
    role: "Software Engineer",
    period: "Dec 2023 – Oct 2024",
    location: "Remote, TR",
    description: `Craftgate is a One-Stop Shop Payment Orchestration Platform. I led frontend development across multiple products, driving accessibility, usability, and performance improvements. Built and maintained the company website with Next.js — improving SEO and page load performance. Optimized the customer panel with React, reducing load time by 40% under high daily usage. Implemented Cypress component and e2e tests, modernized the build configuration, and resolved vulnerable dependency chains. Initiated and architected an internal Design System as a private npm package using Storybook, Tailwind, TypeScript, and React.`,
    technologies: [
      "React",
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Storybook",
      "Cypress",
    ],
  },
  {
    company: "Confidential Client",
    role: "Fullstack Engineer",
    period: "May 2023 – Aug 2023",
    location: "Remote, TR/GER",
    description:
      "Led the Vue 2 → Vue 3 migration for mission-critical features, improving performance and developer experience. Established a modern dev toolchain (Prettier, ESLint, testing, CI hooks) and architected a maintainable frontend with Vue 3, Vite, and TypeScript. Mentored engineers and conducted PR reviews to raise overall code quality.",
    technologies: ["Vue 2", "Vue 3", "Vite", "TypeScript", "ESLint"],
  },
  {
    company: "Toptal (Core Team)",
    role: "Frontend Engineer",
    period: "Sep 2021 – Feb 2023",
    location: "Remote, USA",
    description: `Toptal is an exclusive network of top software developers, designers, marketing experts, management consultants, and product managers. Top companies hire Toptal talent for their most critical projects.
    I worked as a Frontend Engineer on Toptal's Client Portal team.`,
    details: (
      <section>
        <Entry
          title="Client Portal"
          content="Core contributor on the Client Portal team — one of Toptal's primary product domains. Built client-facing features with React, TypeScript, and Apollo GraphQL. Migrated 100+ Enzyme tests to React Testing Library, increasing coverage to 85%. Drove code quality through 100+ PR reviews per quarter and mentored teammates on testing best practices."
        />
        <Entry
          title="Monorepo Migration"
          content="Initiated a monorepo migration, reducing cross-project dependency conflicts by 30%."
        />
        <Entry
          title="Staff Portal Micro-frontend"
          content="Contributed to Staff Portal — a large-scale micro-frontend architecture — collaborating across squads on modular, scalable delivery."
        />
      </section>
    ),
    technologies: [
      "React",
      "TypeScript",
      "Apollo",
      "GraphQL",
      "React Testing Library",
      "Monorepo",
    ],
  },
  {
    company: "Segmentify",
    role: "Frontend Engineer",
    period: "Mar 2021 – Sep 2021",
    location: "Remote, TR",
    description: `Segmentify is a plug & play SaaS solution for online retailers to boost sales with personalised product recommendations.
      In my first month I modernized a React app with legacy class components, converting them to functional components using React Hooks across the Client Panel (React, Redux, ES6+). Lowered technical debt, expedited team delivery cadence, and implemented unit and end-to-end testing with Cypress.`,
    technologies: ["React", "Redux", "Javascript", "Unit Testing", "Cypress"],
  },
  {
    company: "Cloud Nesil",
    role: "Fullstack Developer",
    period: "Sep 2018 – Mar 2021",
    location: "On-site",
    description: `Across multiple projects with international clients, I developed backend services with NestJS, TypeORM, and PostgreSQL, and frontends with React, Redux, and React Query. Containerized services with Docker, set up Jenkins CI/CD pipelines, and automated end-to-end test flows. Led and supported juniors and new grads through their first professional roles.`,
    technologies: [
      "React",
      "Redux",
      "NestJS",
      "NodeJS",
      "TypeORM",
      "Docker",
      "Jenkins",
      "PostgreSQL",
      "TypeScript",
      "Unit Testing",
      "React Native",
    ],
    details: (
      <section>
        <Entry
          title="Ultumus"
          content={
            <>
              Ultumus is a leading provider of ETF and index data, calculation,
              and workflow solutions, trusted by top global financial
              institutions. Led a 3-engineer team in a full rewrite of their
              internal staff panel — migrating a legacy vanilla JS/HTML codebase
              to a modern React and SASS architecture. Delivered
              high-performance data tables with virtual scrolling and pagination
              to handle large datasets without degrading load times. Optimised
              complex forms using <code>shouldComponentUpdate</code> to reduce
              unnecessary re-renders, authored unit tests for all frontend
              components, and managed deployments via Jenkins.
            </>
          }
        />
        <Entry
          title="Financial Project"
          content="Fullstack development for a finance sector client — NestJS, TypeORM, and PostgreSQL on the backend; React, Redux, and React Query on the frontend."
        />
        <Entry
          title="MTM Mobile App"
          content="A companion mobile app commissioned alongside an existing Angular web app for a French client. Led a 3-engineer team to build the React Native application from the ground up — establishing the repository structure, project scaffolding, and a shared development environment to align the team from day one."
        />
      </section>
    ),
  },
  {
    company: "Gavth Studio",
    role: "Fullstack Developer",
    period: "Oct 2017 – Jul 2018",
    location: "Remote, UK",
    description:
      "Founding engineer at a small UK startup. I built the company website and the main product end-to-end — both frontend and backend.",
    technologies: [
      "NodeJS",
      "MongoDB",
      "GraphQL",
      "NextJS",
      "React",
      "TypeScript",
    ],
    details: (
      <section>
        <Entry
          title="Marina Reservation Platform"
          content="A full-stack yacht marina management platform enabling boat owners to reserve berths and book marina dining experiences. Architected and delivered the complete product as the sole engineer — a GraphQL API backed by Node.js and MongoDB, a React-based admin dashboard for marina staff, and a public-facing marketing site built with Next.js."
        />
      </section>
    ),
  },
  {
    company: "Setrow Solutions",
    role: "Software Developer",
    period: "Sep 2014 – Sep 2016",
    location: "On-site",
    description:
      "Setrow is the first professional company I worked at. I built customer-facing tools (Smart Pop-ups, Loyalty Scripts) with PHP/MySQL, handled high-volume datasets via RabbitMQ and Redis, and configured our Linux servers.",
    technologies: [
      "PHP",
      "MySQL",
      "Linux",
      "Redis",
      "Javascript",
      "Jquery",
      "AJAX",
      "HTML5",
      "CSS",
    ],
    details: (
      <section>
        <Entry
          title="Smart Pop-up System"
          content="Designed and built an end-to-end smart pop-up platform for e-commerce brands, encompassing a full-featured dashboard, a targeting engine, and an analytics suite. Customers could configure pop-ups with custom shapes, positions, copy, and call-to-action buttons directly from the admin panel. The targeting engine enabled conditional display based on page URL, country, device type, and user segment. An integrated analytics module tracked impressions, clicks, and conversions in real time. Delivered the entire stack solo — PHP backend with MySQL, Smarty-templated frontend using vanilla JavaScript, AJAX, HTML, and CSS."
        />
        <Entry
          title="Customer Loyalty System"
          content="Developed a loyalty points engine for e-commerce brands that analysed thousands of customer records to generate behavioural insights. The system tracked purchases and site visits to calculate per-customer loyalty scores, enabling brands to run targeted campaigns — such as dispatching discount codes to customers with 60+ points."
        />
        <Entry
          title="Data Integration"
          content="Built a suite of PHP data ingestion scripts to onboard new brand clients, normalising and importing customer, order, and product data from heterogeneous sources including CSV exports, relational databases, and XML APIs."
        />
      </section>
    ),
  },
];
