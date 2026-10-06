"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

const INITIATIVES = [
  {
    n: "01",
    title: "Hackathons & Coding",
    copy: "Multi-day builds where teams ship a working product from a blank repo — the flagship ITSA format that has run 10+ hackathons and put PVPPCOE teams on inter-college leaderboards.",
    tag: "COMPETITIVE",
  },
  {
    n: "02",
    title: "Developer Workshops",
    copy: "Hands-on sessions on the stack students actually need — from Git and APIs to React and cloud deploys — taught by seniors and alumni, not slides.",
    tag: "SKILL-BUILDING",
  },
  {
    n: "03",
    title: "Faculty Mentorship",
    copy: "20+ mentors from the IT department pair with project teams and hackathon squads, turning ambitious ideas into things that actually ship on time.",
    tag: "GUIDANCE",
  },
  {
    n: "04",
    title: "Design Systems & UI/UX",
    copy: "A dedicated design track — covering interface design, prototyping, and design systems — so IT students ship products that also look and feel considered.",
    tag: "CRAFT",
  },
];

export default function Initiatives() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const progressRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !wrapRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[];
    gsap.set(panels.slice(1), { autoAlpha: 0, y: 24 });

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: wrapRef.current,
        start: "top top",
        end: `+=${panels.length * 85}%`,
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const idx = Math.min(
            panels.length - 1,
            Math.floor(self.progress * panels.length)
          );
          panels.forEach((p, i) => {
            if (i === idx) {
              gsap.to(p, { autoAlpha: 1, y: 0, duration: 0.4, overwrite: true });
            } else {
              gsap.to(p, { autoAlpha: 0, y: i < idx ? -24 : 24, duration: 0.4, overwrite: true });
            }
          });
          progressRefs.current.forEach((bar, i) => {
            if (!bar) return;
            bar.style.transform = i <= idx ? "scaleX(1)" : "scaleX(0)";
          });
        },
      });

      return () => st.kill();
    }, wrapRef);

    return () => ctx.revert();
  }, [reduced]);

  if (reduced) {
    return (
      <section className="bg-ink py-20 px-6 md:px-10">
        <div className="mx-auto max-w-content grid gap-16">
          {INITIATIVES.map((it) => (
            <div key={it.n} className="grid md:grid-cols-12 gap-6 border-t border-line pt-8">
              <div className="md:col-span-2 spec-label text-copperDim">{it.n}</div>
              <div className="md:col-span-4">
                <h3 className="font-display text-3xl text-paper">{it.title}</h3>
              </div>
              <p className="md:col-span-6 text-mist">{it.copy}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={wrapRef} className="relative h-screen overflow-hidden bg-ink">
      <div className="absolute top-0 left-0 right-0 px-6 md:px-10 pt-10">
        <div className="mx-auto max-w-content flex gap-2">
          {INITIATIVES.map((it, i) => (
            <div key={it.n} className="flex-1 h-[2px] bg-line overflow-hidden">
              <div
                ref={(el) => {
                  progressRefs.current[i] = el;
                }}
                className="h-full w-full bg-copper origin-left"
                style={{ transform: "scaleX(0)" }}
              />
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-content mt-4 spec-label text-mist">
          WHAT WE DO
        </div>
      </div>

      <div className="relative mx-auto max-w-content h-full px-6 md:px-10 flex items-center">
        <div className="relative w-full h-[55vh] md:h-[45vh]">
          {INITIATIVES.map((it, i) => (
            <div
              key={it.n}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              className="absolute inset-0 grid md:grid-cols-12 gap-6 items-center"
            >
              <div className="md:col-span-4">
                <div className="spec-label text-copperDim mb-4">
                  {it.n} / {it.tag}
                </div>
                <h3 className="font-display text-5xl md:text-6xl text-paper tracking-tight leading-[1.02]">
                  {it.title}
                </h3>
              </div>
              <p className="md:col-span-6 md:col-start-6 text-mist text-lg md:text-xl leading-relaxed">
                {it.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
