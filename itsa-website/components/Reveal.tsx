"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

type Direction = "up" | "down" | "left" | "right" | "fade";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  distance = 48,
  className = "",
  as: Tag = "div",
  stagger,
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  distance?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;
    if (reduced) return;

    const targets = stagger
      ? Array.from(ref.current.children)
      : [ref.current];

    const from: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") from.y = distance;
    if (direction === "down") from.y = -distance;
    if (direction === "left") from.x = distance;
    if (direction === "right") from.x = -distance;

    gsap.set(targets, from);

    const anim = gsap.to(targets, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      stagger: stagger ?? 0,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [direction, delay, distance, reduced, stagger]);

  const Component = Tag as any;
  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
