import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Events",
  description: "Hackathons, developer workshops, mentorship sessions, and design sprints run by ITSA at PVPPCOE.",
};

const EVENTS = [
  {
    status: "UPCOMING",
    title: "CodeSprint — 24hr Hackathon",
    type: "Hackathon & Coding",
    detail: "Teams of 4 build a working product from scratch in 24 hours, judged by faculty and alumni.",
  },
  {
    status: "UPCOMING",
    title: "Git & GitHub for Real Projects",
    type: "Developer Workshop",
    detail: "Branching, PRs, and collaborating on a shared codebase without breaking main.",
  },
  {
    status: "RECURRING",
    title: "Mentor Office Hours",
    type: "Faculty Mentorship",
    detail: "Drop-in sessions with department mentors for project reviews and technical guidance.",
  },
  {
    status: "RECURRING",
    title: "Design Systems Sprint",
    type: "Design Systems & UI/UX",
    detail: "A hands-on session building a reusable component library and design tokens from scratch.",
  },
  {
    status: "PAST",
    title: "Intro to Cloud Deployment",
    type: "Developer Workshop",
    detail: "Deploying a full-stack app end to end — from repo to a live, working URL.",
  },
  {
    status: "PAST",
    title: "ITSA Annual Hack Night",
    type: "Hackathon & Coding",
    detail: "The department's flagship overnight build event, running for multiple years.",
  },
];

export default function EventsPage() {
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
        eyebrow="EVENTS LOG"
        title="30+ events a year, across four tracks."
        intro="From overnight hackathons to weekly mentor office hours — this is the working calendar of ITSA, not a highlight reel."
      />

      <section className="bg-ink py-6 md:py-8">
        <div className="mx-auto max-w-content px-6 md:px-10">
          {EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={Math.min(i * 0.04, 0.3)}>
              <div className="group grid md:grid-cols-12 gap-4 md:gap-6 items-center py-7 border-b border-line hover:border-copper/60 transition-colors duration-300">
                <div className="md:col-span-2 spec-label text-copperDim">{e.status}</div>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl text-paper group-hover:text-copper transition-colors duration-300">
                    {e.title}
                  </h3>
                </div>
                <div className="md:col-span-2 spec-label text-mist">{e.type}</div>
                <p className="md:col-span-4 text-mist text-sm md:text-base">{e.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-panel border-t border-line py-12 md:py-16">
        <div className="mx-auto max-w-content px-6 md:px-10 grid md:grid-cols-12 gap-8 items-center">
          <Reveal className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl text-paper tracking-tight">
              Want an event calendar invite?
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:text-right">
            <a
              href="/contact"
              className="spec-label text-copper hover:text-paper transition-colors"
            >
              REACH OUT ON THE CONTACT PAGE →
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
