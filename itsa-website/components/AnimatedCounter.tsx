"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1.6,
  className = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;

    if (reduced) {
      ref.current.textContent = `${prefix}${target}${suffix}`;
      return;
    }

    const counter = { val: 0 };
    const tween = gsap.to(counter, {
      val: target,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${Math.floor(counter.val)}${suffix}`;
        }
      },
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none reset",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [target, suffix, prefix, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
