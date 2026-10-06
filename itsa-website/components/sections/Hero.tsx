"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { getPreloaderWillPlay } from "@/lib/preloaderState";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const lineRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const bgRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const willPlayPreloader = getPreloaderWillPlay();
    const delay = reduced ? 0 : willPlayPreloader ? 2.55 : 0.1;

    const tl = gsap.timeline({ delay });
    tl.fromTo(
      lineRefs.current,
      { y: "110%" },
      { y: "0%", duration: 1.1, stagger: 0.09, ease: "power4.out" }
    ).fromTo(
      ".hero-fade",
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.08, ease: "power2.out" },
      "-=0.5"
    );

    // Parallax background trace lines on scroll
    if (!reduced && bgRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  const words = ["Build.", "Ship.", "Lead."];

  return (
    <section className="relative min-h-[80svh] flex flex-col justify-end overflow-hidden bg-ink pt-24 pb-16 md:pt-32 md:pb-24">
      <div ref={bgRef} className="absolute inset-0 -z-10 opacity-40">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <path className="trace-line" d="M0 120H420L470 170V400H900L960 460V900" />
          <path className="trace-line" d="M1440 60H1040L990 110V300H620L560 360V900" />
          <path className="trace-line" d="M0 700H300L340 740V900" />
          <circle cx="470" cy="170" r="4" fill="#E3A857" opacity="0.7" />
          <circle cx="960" cy="460" r="4" fill="#7C93FF" opacity="0.6" />
          <circle cx="990" cy="110" r="4" fill="#E3A857" opacity="0.5" />
        </svg>
      </div>

      <div className="mx-auto max-w-content w-full px-6 md:px-10">
        <div className="hero-fade spec-label text-copperDim mb-6">
          PVPPCOE · DEPARTMENT OF INFORMATION TECHNOLOGY
        </div>

        <h1 className="font-display text-[13vw] md:text-[7vw] leading-[0.95] tracking-tight text-paper">
          {words.map((w, i) => (
            <span key={i} className="block overflow-hidden">
              <span
                ref={(el) => {
                  lineRefs.current[i] = el;
                }}
                className="block"
              >
                {w}{" "}
                {i === 2 && (
                  <span className="text-copper">That&apos;s ITSA.</span>
                )}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p className="hero-fade max-w-md text-mist text-base md:text-lg">
            The Information Technology Student Association runs the
            hackathons, workshops, and mentorship that turn a classroom of IT
            students into a working technical community — 300+ members strong.
          </p>
          <div className="hero-fade flex gap-4">
            <MagneticButton href="/contact">Join ITSA</MagneticButton>
            <MagneticButton href="/events" variant="outline">
              See Events
            </MagneticButton>
          </div>
        </div>
      </div>

      <div className="hero-fade absolute bottom-6 right-6 md:right-10 flex items-center gap-3 spec-label text-mist">
        <span className="hidden md:inline">SCROLL</span>
        <span className="relative h-10 w-[1px] bg-line overflow-hidden">
          <span className="absolute top-0 left-0 w-full h-1/2 bg-copper animate-[scrolldown_1.8s_ease-in-out_infinite]" />
        </span>
      </div>

      <style>{`
        @keyframes scrolldown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
