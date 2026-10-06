import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import Marquee from "@/components/sections/Marquee";

export const metadata: Metadata = {
  title: "Community",
  description: "300+ members strong — the student community behind ITSA at PVPPCOE.",
};

const TESTIMONIALS = [
  { quote: "Shipped my first real project through an ITSA hackathon", who: "2nd year, IT" },
  { quote: "Found my mentor through office hours", who: "3rd year, IT" },
  { quote: "Learned Git properly for the first time", who: "1st year, IT" },
  { quote: "Design systems workshop changed how I build UI", who: "3rd year, IT" },
];

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="COMMUNITY"
        title="300+ students, one department."
        intro="ITSA is only as strong as the members who show up to build — this is the community that makes it work."
      />

      <Marquee items={["#BUILDWITHITSA", "300+ MEMBERS", "SION MUMBAI", "IT DEPARTMENT"]} />

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-content px-6 md:px-10 grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.quote} delay={Math.min(i * 0.08, 0.3)} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="border border-line p-6 h-full">
                <p className="font-display text-2xl md:text-3xl text-paper leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 spec-label text-mist">{t.who}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-panel border-t border-line py-12 md:py-16">
        <div className="mx-auto max-w-content px-6 md:px-10 text-center">
          <Reveal>
            <div className="font-display text-6xl md:text-8xl text-paper tracking-tight">
              <AnimatedCounter target={300} suffix="+" />
            </div>
            <p className="spec-label text-mist mt-4">MEMBERS ACROSS ALL FOUR YEARS</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
