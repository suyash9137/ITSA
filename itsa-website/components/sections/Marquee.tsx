"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function Marquee({ items }: { items: string[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !trackRef.current) return;
    const track = trackRef.current;
    const width = track.scrollWidth / 2;

    const tween = gsap.to(track, {
      x: -width,
      duration: 28,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [reduced]);

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-line py-8">
      <div ref={trackRef} className="flex gap-16 w-max">
        {doubled.map((it, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl text-panel2 whitespace-nowrap tracking-tight"
          >
            {it} <span className="text-copperDim">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
