import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/lib/data";
import GlassCard from "../ui/GlassCard";
import { ReadMore } from "./ReadMore";

export default function ProfileCard() {
  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.github,
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
    },
  ];

  return (
    <aside className="lg:sticky lg:top-8 flex flex-col gap-6 w-full lg:w-[320px] xl:w-[380px] shrink-0">
      {/* Profile Card */}
      <GlassCard className="flex flex-col shadow-2xl relative overflow-hidden group">
        {/* Subtle hover gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Image / Avatar Placeholder */}
        <div className="w-32 h-32 rounded-full mb-6 mx-auto overflow-hidden border-4 border-white/10 bg-linear-to-tr from-primary/20 to-secondary/20 flex items-center justify-center relative z-10">
          {/* Replace with next/image when available */}
          <span className="text-4xl font-heading font-bold text-white/50">
            NT
          </span>
        </div>

        <div className="text-center relative z-10 flex flex-col items-center">
          <h1 className="text-3xl font-heading font-bold text-white mb-2 tracking-tight">
            Nezih Tartilaci
          </h1>
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground mb-6">
            {personalInfo.role}
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed mb-8 whitespace-pre-wrap">
            <ReadMore maxLength={200}>{personalInfo.summary}</ReadMore>
          </p>

          {/* Contact / Location */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground/80 mb-8 self-center">
            <MapPin size={16} />
            <span>Remote / TR</span>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-3 gap-3 w-full">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                className="flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors text-muted-foreground"
              >
                <link.icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </GlassCard>
    </aside>
  );
}
