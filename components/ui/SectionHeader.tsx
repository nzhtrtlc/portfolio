import type { HTMLAttributes } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ title, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge("flex items-center gap-4 px-2 mb-2", className)}
        {...props}
      >
        <h2 className="text-3xl font-heading font-bold text-white">{title}</h2>
        <div className="h-px bg-white/10 flex-1" />
      </div>
    );
  },
);
SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
