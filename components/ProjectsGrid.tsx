import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/data";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="flex flex-col gap-6 bento-card">
      <div className="flex items-center gap-4 px-2 mb-2">
        <h2 className="text-3xl font-heading font-bold text-white">
          Selected Works
        </h2>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col p-6 md:p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-all duration-300 relative overflow-hidden h-full"
          >
            {/* Subtle Gradient Hover */}
            <div className="absolute inset-0 bg-linear-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">
                  {project.name}
                </h3>
                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors text-white"
                  >
                    <ArrowUpRight
                      size={20}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </Link>
                )}
              </div>

              <p className="text-muted-foreground mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/70"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/50">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
