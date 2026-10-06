"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { getPreloaderWillPlay, markPreloaderSeen } from "@/lib/preloaderState";

export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const willPlay = getPreloaderWillPlay();

    if (reduced || !willPlay) {
      markPreloaderSeen();
      setDone(true);
      return;
    }

    const counter = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        markPreloaderSeen();
        setDone(true);
      },
    });

    tl.to(counter, {
      val: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = String(Math.floor(counter.val)).padStart(3, "0");
        }
        if (barRef.current) {
          barRef.current.style.width = `${counter.val}%`;
        }
      },
    })
      .to(
        ".pre-word",
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
        },
        0
      )
      .to(rootRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
        delay: 0.15,
      });

    return () => {
      tl.kill();
    };
  }, [reduced]);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-ink"
      aria-hidden="true"
    >
      <div className="flex gap-3 overflow-hidden text-3xl md:text-5xl font-display tracking-tight text-paper">
        {["ITSA", "//", "PVPPCOE"].map((w, i) => (
          <span
            key={i}
            className="pre-word inline-block translate-y-full opacity-0"
          >
            {w}
          </span>
        ))}
      </div>
      <div className="mt-8 w-48 md:w-64">
        <div className="h-[2px] w-full bg-line overflow-hidden">
          <div ref={barRef} className="h-full bg-copper" style={{ width: "0%" }} />
        </div>
        <div className="mt-3 flex items-center justify-between spec-label">
          <span>BOOTING_SYSTEM</span>
          <span ref={countRef}>000</span>
        </div>
      </div>
    </div>
  );
}
