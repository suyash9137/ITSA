"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import Reveal from "@/components/Reveal";

export default function Vision() {
  const bigTextRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !bigTextRef.current || !sectionRef.current) return;

    const tween = gsap.to(bigTextRef.current, {
      xPercent: -15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reduced]);

  return (
    <section ref={sectionRef} className="relative bg-ink overflow-hidden py-20 md:py-28">
      <div
        ref={bigTextRef}
        className="absolute top-6 left-0 whitespace-nowrap font-display text-[18vw] leading-none text-panel2 select-none pointer-events-none"
        aria-hidden="true"
      >
        AICTE APPROVED · UNIVERSITY OF MUMBAI · AICTE APPROVED ·
      </div>

      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 md:gap-6">
          <Reveal className="md:col-span-4" direction="right">
            <div className="spec-label text-copperDim">DEPARTMENT VISION</div>
          </Reveal>
          <Reveal className="md:col-span-8" direction="left">
            <p className="font-display text-2xl md:text-4xl text-paper leading-snug tracking-tight">
              The IT Department at PVPPCOE — AICTE approved and affiliated to
              the University of Mumbai — exists to produce engineers who can
              reason about systems, not just pass exams about them. ITSA is
              the department&apos;s applied layer: where that reasoning turns
              into shipped code, run events, and a working technical
              community of 300+ students.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
