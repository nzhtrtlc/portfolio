import PageIntro from "@/components/animations/PageIntro";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import HeroBento from "@/components/HeroBento";
import ProjectsGrid from "@/components/ProjectsGrid";
import Sidebar from "@/components/Sidebar";
import SkillsBento from "@/components/SkillsBento";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/30 selection:text-primary-foreground font-body">
      {/* Global GSAP orchestrator for bento cards and list items */}
      <PageIntro />

      <main className="max-w-[1400px] mx-auto w-full p-4 md:p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative items-start">
          {/* Left Column - Sticky Sidebar */}
          <Sidebar />

          {/* Right Column - Scrolling Content */}
          <div className="flex flex-col flex-1 gap-8 lg:gap-12 w-full min-w-0 pb-24">
            {/* Bento Hero */}
            <HeroBento />

            {/* Experience Timeline */}
            <ExperienceTimeline />

            {/* Projects Grid */}
            <ProjectsGrid />

            {/* Skills Bento */}
            <SkillsBento />
          </div>
        </div>
      </main>
    </div>
  );
}
