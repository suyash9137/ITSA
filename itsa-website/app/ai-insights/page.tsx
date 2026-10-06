import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AI Insights",
  description: "ITSA's take on AI tools, trends, and how IT students should actually be using them.",
};

const INSIGHTS = [
  {
    tag: "TOOLING",
    title: "AI coding assistants: what they're actually good for",
    copy: "Where tools like Copilot and Claude speed up real project work, and where relying on them slows down learning.",
  },
  {
    tag: "CAREERS",
    title: "What recruiters are asking IT grads about AI",
    copy: "The AI-literacy questions showing up in interviews this year, and how to actually prepare for them.",
  },
  {
    tag: "WORKSHOPS",
    title: "Inside our prompt-engineering workshop",
    copy: "What the session covered, and the exercises members found most useful.",
  },
  {
    tag: "RESEARCH",
    title: "Reading list: papers worth a student's time",
    copy: "A short, non-intimidating on-ramp into ML papers for students without a research background.",
  },
];

export default function AIInsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="AI INSIGHTS"
        title="What ITSA is learning about AI, in public."
        intro="Notes from our workshops, reading groups, and the tools members are actually using — not hype."
      />

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-content px-6 md:px-10 grid md:grid-cols-2 gap-px bg-line">
          {INSIGHTS.map((post, i) => (
            <Reveal key={post.title} delay={Math.min(i * 0.06, 0.3)} className="bg-ink p-8 md:p-10 group hover:bg-panel transition-colors duration-300">
              <div className="spec-label text-copperDim mb-6">{post.tag}</div>
              <h3 className="font-display text-2xl md:text-3xl text-paper leading-snug group-hover:text-copper transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-mist mt-4">{post.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
