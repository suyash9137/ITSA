import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Leadership from "@/components/sections/Leadership";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Team",
  description: "The faculty and student leadership running ITSA at PVPPCOE.",
};

const CORE_TEAM = [
  { role: "Vice President", track: "Operations" },
  { role: "Technical Lead", track: "Hackathons & Coding" },
  { role: "Workshops Lead", track: "Developer Workshops" },
  { role: "Mentorship Coordinator", track: "Faculty Mentorship" },
  { role: "Design Lead", track: "Design Systems & UI/UX" },
  { role: "Events Coordinator", track: "Operations" },
  { role: "Outreach Lead", track: "Community" },
  { role: "Content Lead", track: "Community" },
];

export default function TeamPage() {
  return (
    <div className="relative min-h-[100vh]">
      {/* Background trace lines */}
      <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <path className="trace-line" d="M0 300H200L250 350V600H800L860 460V900" />
          <path className="trace-line" d="M1440 400H1240L1190 440V200H600L540 260V900" />
        </svg>
      </div>

      <PageHeader
        eyebrow="TEAM"
        title="Two layers. One association."
        intro="A faculty mentorship layer that gives ITSA institutional backing, and a student leadership layer that actually runs it week to week."
      />

      <Leadership />

      <section className="bg-ink py-12 md:py-16">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal className="mb-8">
            <h2 className="font-display text-4xl md:text-6xl text-paper tracking-tight max-w-xl">
              Core team, by track
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {CORE_TEAM.map((m, i) => (
              <Reveal key={m.role} delay={Math.min(i * 0.04, 0.3)} className="bg-ink p-7 group hover:bg-panel transition-colors duration-300">
                <div className="spec-label text-copperDim mb-4">{String(i + 1).padStart(2, "0")}</div>
                <div className="font-display text-xl text-paper group-hover:text-copper transition-colors duration-300">
                  {m.role}
                </div>
                <div className="text-mist text-sm mt-1">{m.track}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-panel border-t border-line py-12 md:py-16 text-center">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl text-paper tracking-tight">
              Every core team member started as a member.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-4">
            <a href="/contact" className="spec-label text-copper hover:text-paper transition-colors">
              JOIN ITSA →
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
