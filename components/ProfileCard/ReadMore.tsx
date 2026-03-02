"use client";

import { useState } from "react";

export function ReadMore({
  maxLength = 100,
  children,
}: {
  maxLength?: number;
  children: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!children || children.length <= maxLength) {
    return <>{children}</>;
  }

  return (
    <>
      {isExpanded ? children : `${children.slice(0, maxLength)}...`}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        type="button"
        className="ml-2 text-primary/80 underline cursor-pointer font-medium hover:text-primary transition-colors text-xs"
      >
        {isExpanded ? "≪ read less" : "read more ≫"}
      </button>
    </>
  );
}
