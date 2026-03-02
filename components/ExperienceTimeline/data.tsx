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
    company: "Hoobe LLC",
    role: "Fullstack Engineer / Founder",
    period: "Nov 2024 – Present",
    location: "Remote, TR, USA",
    description: `At plan0.ai, we're building an AI-powered construction cost estimation platform that helps contractors and developers estimate project costs quickly and accurately. We're using the latest technologies to create a seamless and intuitive user experience. I worked on 4 different projects.`,
    details: (
      <section>
        <Entry
          title="plan0.ai Website"
          content={
            <>
              Built company website using Next.js, TypeScript, TailwindCSS and
              GSAP. Created scroll trigger animations, and implemented a 3D
              construction model using three.js
              <br />
              Served on AWS CloudFront S3 Bucket.
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
          title="Proposal Generator"
          content={`
          I have built a proposal generator which generates a docx file based on
          the user's input and from a initial template. I created a React app
          for the frontend, there is a form for the user. In this form user can
          upload a pdf file and we excract an address from it using gemini api.
          I created the backend endpoints using nodejs. And there is an address
          input, I have implemented autocomplete using Google Places API
          integrated with my backend edpoint. When all inputs filled user clicks
          generate button and it generated a docx file filled with dynamic data
          user provided inside backend server then returns a blob to the
          frontend and automatically downloads.
          `}
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
      "TailwindCSS",
      "AWS",
      "Three.js",
    ],
  },
  {
    company: "Craftgate",
    role: "Software Engineer",
    period: "Dec 2023 – Oct 2024",
    location: "Remote, TR",
    description: `Craftgate is a One-Stop Shop Payment Orchestration Platform. I worked on frontend development across products, improving accessibility and performance. Delivered features on new website with Next.js and optimized customer panel load time by 40%. 
      Engineered company Design System with React, Storybook, TypeScript and Tailwind.`,
    technologies: ["React", "NextJS", "TypeScript", "TailwindCSS", "Storybook"],
  },
  {
    company: "Confidential Client",
    role: "Fullstack Engineer",
    period: "May 2023 – Aug 2023",
    location: "Remote, TR/GER",
    description:
      "Led Vue 2 to Vue 3 migration. Architected maintainable frontend with Vite and TypeScript, establishing modern dev toolchains (Prettier, ESLint, CI hooks).",
    technologies: ["Vue 2", "Vue 3", "Vite", "TypeScript", "ESLint"],
  },
  {
    company: "Toptal (Core Team)",
    role: "Frontend Engineer",
    period: "Sep 2021 – Feb 2023",
    location: "Remote, USA",
    description: `Toptal is an exclusive network of top software developers, designers, marketing experts, management consultants, and product managers. Top companies hire Toptal talent for their most critical projects.
    Worked as a Frontend Engineer for Toptal's Client Portal team`,
    details: (
      <section>
        <Entry
          title="Client Portal"
          content="Core contributor to the Client Portal team, building with React, TypeScript, and Apollo GraphQL. Migrated 100+ Enzyme tests to React Testing Library, achieving over 85% coverage. Developed client-facing UI screens and new features across the product."
        />
        <Entry
          title="Monorepo Migration"
          content="Initiated a monorepo migration to reduce dependency conflicts across projects."
        />
        <Entry
          title="Staff Panel Micro-frontend"
          content="Contributed to the internal Staff Panel micro-frontend, gaining hands-on experience with micro-frontend architecture."
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
      In my first month, I modernized a React app which had legacy class components. I converted them to functional components using React Hooks in Client Panel using React, Redux, ES6+. 
      Lowered technical debt and expedited team delivery cadence.
      Implemented unit testing and e2e testing using cypress`,
    technologies: ["React", "Redux", "ECMAScript", "Unit Testing", "Cypress"],
  },
  {
    company: "Cloud Nesil",
    role: "Fullstack Developer",
    period: "Sep 2018 – Mar 2021",
    location: "On-site",
    description: `In this company I have worked several projects and many of our clients were international.
      I have developed backend services (NestJS, TypeORM) and frontends (React, Redux). 
      Containerized services with Docker + Jenkins.
      I Lead/Supported juniors/new grads for their first professional experiences.
      `,
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
      "This was a small startup founded in UK, London. I was the founding engineer and I created company website and the main product; frontend and backend.",
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
      "Setrow is my first professional company I worked at. I have built customer-facing tools (Smart Pop-ups, Loyalty Scripts) with PHP/MySQL. Handled high-volume datasets via RabbitMQ and Redis. Configured our Linux servers.",
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
