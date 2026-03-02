"use client";

import { Download } from "lucide-react";
import GlassCard from "./ui/GlassCard";

export default function Banner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Main Large Typography Box */}
      <div className="md:col-span-2 lg:col-span-3 bento-card flex flex-col justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[0.9] relative z-10 select-none">
          <span className="text-white block group-hover:-translate-y-2 transition-transform duration-500 ease-out">
            SOFTWARE
          </span>
          <span className="text-white/20 block transform-gpu group-hover:translate-x-4 transition-transform duration-500 ease-out">
            ENGINEER
          </span>
        </h1>
      </div>

      <GlassCard className="bento-card p-8 bg-linear-to-br from-primary/10 to-primary/5 flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300">
        <span className="text-muted-foreground font-medium mb-4">
          Experience
        </span>
        <div>
          <span className="text-5xl lg:text-6xl font-heading font-bold text-white">
            9
          </span>
          <span className="text-xl text-primary font-medium ml-2">Years</span>
        </div>
      </GlassCard>

      <GlassCard className="bento-card p-8 bg-linear-to-br from-secondary/10 to-secondary/5 flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300">
        <span className="text-muted-foreground font-medium mb-4">Focus</span>
        <div>
          <span className="text-3xl lg:text-4xl font-heading font-bold text-white block mb-1">
            Fullstack
          </span>
          <span className="text-xl text-secondary font-medium block">
            SaaS & AI
          </span>
        </div>
      </GlassCard>

      <GlassCard className="md:col-span-2 lg:col-span-1 bento-card p-8 bg-white/5 flex flex-col justify-between min-h-[200px] hover:scale-[1.02] transition-transform duration-300">
        <span className="text-muted-foreground font-medium mb-4">Resume</span>
        <a
          href="/resume.pdf"
          download
          className="group/btn mt-auto flex items-center justify-between px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-full cursor-pointer"
        >
          <span className="text-lg font-bold text-white group-hover/btn:text-primary transition-colors">
            Download CV
          </span>
          <Download
            size={20}
            className="text-white/50 group-hover/btn:text-primary group-hover/btn:-translate-y-0.5 transition-all duration-300"
          />
        </a>
      </GlassCard>
    </section>
  );
}
