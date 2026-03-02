import type { HTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "p-6 md:p-8 rounded-4xl bg-white/5 border border-white/10 backdrop-blur-md",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
GlassCard.displayName = "GlassCard";

export default GlassCard;
