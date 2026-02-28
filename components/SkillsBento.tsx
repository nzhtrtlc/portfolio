import { Code2, Database, TestTube2, Wrench } from "lucide-react";
import { skills } from "@/lib/data";

export default function SkillsBento() {
  const categories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="text-primary mb-4" size={32} />,
      items: skills.frontend,
      style: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
      title: "Backend & Systems",
      icon: <Database className="text-secondary mb-4" size={32} />,
      items: skills.backend,
      style: "col-span-1 md:col-span-2 lg:col-span-1",
    },
    {
      title: "Testing Integration",
      icon: <TestTube2 className="text-primary/70 mb-4" size={32} />,
      items: skills.testing,
      style: "col-span-1",
    },
    {
      title: "DevOps & Tooling",
      icon: <Wrench className="text-secondary/70 mb-4" size={32} />,
      items: skills.other,
      style: "col-span-1 md:col-span-1 lg:col-span-2",
    },
  ];

  return (
    <section id="skills" className="flex flex-col gap-6 bento-card">
      <div className="flex items-center gap-4 px-2 mb-2">
        <h2 className="text-3xl font-heading font-bold text-white">
          Stack & Tools
        </h2>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className={`p-6 md:p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col hover:bg-white/10 transition-colors ${category.style}`}
          >
            {category.icon}
            <h3 className="text-xl font-bold text-white mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium rounded-full bg-black/40 text-muted-foreground border border-white/5 hover:text-white hover:border-white/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
