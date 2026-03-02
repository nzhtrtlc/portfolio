import PageIntro from "@/components/animations/PageIntro";
import Banner from "@/components/Banner";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import StackTools from "@/components/StackTools";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/30 selection:text-primary-foreground font-body">
      <PageIntro />
      <main className="max-w-[1400px] mx-auto w-full p-4 md:p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative items-start">
          <ProfileCard />
          <div className="flex flex-col flex-1 gap-8 lg:gap-12 w-full min-w-0 pb-24">
            <Banner />
            <ExperienceTimeline />
            <StackTools />
          </div>
        </div>
      </main>
    </div>
  );
}
