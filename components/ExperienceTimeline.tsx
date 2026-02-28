import { experience } from "@/lib/data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="flex flex-col gap-6 bento-card">
      <div className="flex items-center gap-4 px-2 mb-2">
        <h2 className="text-3xl font-heading font-bold text-white">
          Experience
        </h2>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="relative border-l border-white/10 ml-4">
        {experience.map((exp) => (
          <div
            key={exp.company}
            className="bento-card relative flex flex-col mb-12 last:mb-0 pl-8 group"
          >
            {/* Timeline dot */}
            <div className="absolute left-[-5px] top-2 w-2 h-2 bg-secondary rounded-full group-hover:scale-150 group-hover:bg-primary transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.6)]" />

            {/* Content Card */}
            <div className="p-6 md:p-8 rounded-4xl bg-white/5 border border-transparent backdrop-blur-md transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-medium text-muted-foreground">
                    {exp.company}
                  </h4>
                </div>
                <div className="text-xs md:text-sm font-medium text-white/40 bg-white/5 px-3 py-1 rounded-full w-fit group-hover:text-primary">
                  {exp.period} • {exp.location}
                </div>
              </div>
              <p className="text-muted-foreground/80 font-light leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
