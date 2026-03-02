import type { Tech } from "@/lib/types";

interface TechBadgeProps {
  tech: Tech | string;
  variant?: "default" | "solid";
  className?: string;
}

export default function TechBadge({
  tech,
  variant = "default",
  className = "",
}: TechBadgeProps) {
  const baseClasses =
    "font-medium rounded-full cursor-default transition-colors";

  const variants = {
    default:
      "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-white/20 px-3 py-1 text-xs",
    solid:
      "bg-black/40 border border-white/5 text-muted-foreground hover:text-white hover:border-white/20 px-3 py-1.5 text-sm",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {tech}
    </span>
  );
}
