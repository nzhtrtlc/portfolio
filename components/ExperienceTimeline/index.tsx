"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import TechBadge from "@/components/ui/TechBadge";
import type { Tech } from "@/lib/types";
import { experience } from "./data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      const offset = (headerRef.current?.offsetHeight || 80) + 180;

      items.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: `top ${offset}px`,
          onEnter: () => item.classList.add("is-active"),
          onLeaveBack: () => item.classList.remove("is-active"),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="flex flex-col gap-6 bento-card relative"
    >
      {/* Sticky Header */}
      <SectionHeader
        ref={headerRef}
        title="Experience"
        className="z-20 py-6 bg-background/90 backdrop-blur-xl sticky top-0 -mt-2 mb-0"
      />

      {/* Full height timeline area without internal scroll */}
      <div className="relative border-l border-transparent ml-4">
        {experience.map((exp, index) => (
          <ExperienceItem
            key={exp.company}
            exp={exp}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({
  exp,
  isLast,
}: {
  exp: {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    details?: ReactNode;
    technologies?: Tech[];
  };
  isLast: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="timeline-item relative flex flex-col mb-12 last:mb-0 pl-8 group cursor-pointer">
      {/* Colored Timeline Vertical Line Segment */}
      <div
        className={`absolute left-[-2px] top-4 w-[2px] bg-white/10 group-[.is-active]:bg-primary transition-colors duration-500 ${isLast ? "h-full" : "-bottom-12"}`}
      />

      {/* Timeline dot */}
      <div className="absolute left-[-7px] top-4 w-3 h-3 bg-secondary rounded-full group-[.is-active]:scale-150 group-[.is-active]:bg-primary transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.6)] z-10" />

      {/* Content Card */}
      <GlassCard className="relative border-transparent transition-all duration-300 group-hover:bg-white/10 group-[.is-active]:bg-white/10 group-[.is-active]:border-white/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
          <div>
            <h3 className="text-xl font-bold text-white group-[.is-active]:text-primary transition-colors">
              {exp.role}
            </h3>
            <h4 className="text-lg font-medium text-muted-foreground">
              {exp.company}
            </h4>
          </div>
          <div className="text-xs md:text-sm font-medium text-white/40 bg-white/5 px-3 py-1 rounded-full w-fit group-[.is-active]:text-primary transition-colors">
            {exp.period} • {exp.location}
          </div>
        </div>

        <p className="text-muted-foreground/80 font-light leading-relaxed">
          {exp.description}
        </p>

        {/* Expandable Details Area */}
        {exp.details && (
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              isExpanded
                ? "grid-rows-[1fr] opacity-100 mt-6"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >
            <div className="overflow-hidden">{exp.details}</div>
          </div>
        )}

        {/* Technologies Used */}
        {exp.technologies && exp.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        )}

        {/* Toggle Button at the bottom center of the card line */}
        {exp.details && !isExpanded && (
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 z-10">
            {/* Pulsing glow ring */}
            <span className="absolute inset-0 rounded-full animate-ping [animation-duration:3s] bg-primary/30 opacity-0 group-[.is-active]:opacity-100 pointer-events-none" />
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="cursor-pointer relative flex items-center gap-1.5 px-4 py-1.5 bg-card border border-white/10 group-[.is-active]:border-primary/60 hover:border-primary text-xs font-medium text-muted-foreground group-[.is-active]:text-primary/80 hover:text-primary rounded-full transition-all duration-300 shadow-none group-[.is-active]:shadow-[0_0_12px_rgba(139,92,246,0.25)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
            >
              Show Details
              <ChevronDown size={14} />
            </button>
          </div>
        )}
        {exp.details && isExpanded && (
          <button
            type="button"
            onClick={() => setIsExpanded(false)}
            className="cursor-pointer absolute left-1/2 -translate-x-1/2 -bottom-4 flex items-center gap-1.5 px-4 py-1.5 bg-card border border-white/10 group-[.is-active]:border-primary/30 hover:border-primary text-xs font-medium text-muted-foreground group-[.is-active]:text-primary/60 hover:text-primary rounded-full transition-all duration-300 z-10 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          >
            Hide Details
            <ChevronDown
              size={14}
              className="rotate-180 transition-transform duration-300"
            />
          </button>
        )}
      </GlassCard>
    </div>
  );
}
