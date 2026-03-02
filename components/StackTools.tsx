"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Database, TestTube2, Wrench } from "lucide-react";
import { useEffect, useRef } from "react";
import { skills } from "@/lib/data";
import GlassCard from "./ui/GlassCard";
import SectionHeader from "./ui/SectionHeader";
import TechBadge from "./ui/TechBadge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StackTools() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const header = containerRef.current?.querySelector(".skill-header");
      const cards = gsap.utils.toArray<HTMLElement>(".skill-card");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });

      if (header) {
        tl.fromTo(
          header,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        );
      }

      if (cards.length > 0) {
        tl.fromTo(
          cards,
          {
            y: 50,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4",
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    {
      title: "Frontend",
      icon: <Code2 className="text-primary mb-4" size={32} />,
      items: skills.frontend,
      style: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
      title: "Backend",
      icon: <Database className="text-secondary mb-4" size={32} />,
      items: skills.backend,
      style: "col-span-1 md:col-span-2 lg:col-span-1",
    },
    {
      title: "Testing",
      icon: <TestTube2 className="text-primary/70 mb-4" size={32} />,
      items: skills.testing,
      style: "col-span-1 md:col-span-2 lg:col-span-1",
    },
    {
      title: "DevOps & CI/CD",
      icon: <Wrench className="text-secondary/70 mb-4" size={32} />,
      items: skills.CI_CD,
      style: "col-span-1 md:col-span-2 lg:col-span-1",
    },
    {
      title: "Interests",
      icon: <Wrench className="text-secondary/70 mb-4" size={32} />,
      items: skills.interests,
      style: "col-span-1 md:col-span-2 lg:col-span-1",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="skills"
      className="flex flex-col gap-6 bento-card"
    >
      <SectionHeader title="Stack & Tools" className="skill-header" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <GlassCard
            key={category.title}
            className={`skill-card flex flex-col hover:bg-white/10 transition-colors ${category.style}`}
          >
            {category.icon}
            <h3 className="text-xl font-bold text-white mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <TechBadge key={skill} tech={skill} variant="solid" />
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
