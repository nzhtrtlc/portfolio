"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PageIntro() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Page Load Animation for Sidebar
      gsap.fromTo(
        "aside",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
        },
      );

      // 2. Bento Cards Scroll Reveal
      // We assume elements with class 'bento-card' should stagger reveal
      const bentoCards = gsap.utils.toArray<HTMLElement>(".bento-card");
      if (bentoCards.length > 0) {
        gsap.fromTo(
          bentoCards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: "main",
              start: "top 80%",
              // Only trigger once
              once: true,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}
