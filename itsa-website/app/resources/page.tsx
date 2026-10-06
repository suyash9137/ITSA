import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Resources",
  description: "Curated learning resources from ITSA — git, web development, DSA, and design.",
};

const CATEGORIES = [
  {
    n: "01",
    title: "Getting Started",
    items: ["Git & GitHub basics", "Setting up your dev environment", "Reading documentation well"],
  },
  {
    n: "02",
    title: "Web Development",
    items: ["Frontend fundamentals (HTML/CSS/JS)", "React & component thinking", "Shipping to production"],
  },
  {
    n: "03",
    title: "DSA & Interview Prep",
    items: ["Core data structures", "Problem-solving patterns", "Mock interview practice"],
  },
  {
    n: "04",
    title: "Design & UI/UX",
    items: ["Design fundamentals", "Prototyping with Figma", "Building a design system"],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="RESOURCE LIBRARY"
        title="Everything the seniors wish they'd had."
        intro="A working set of references maintained by ITSA members — organized by what you're trying to learn, not by file type."
      />

      <section className="bg-ink py-12 md:py-16">
        <div className="mx-auto max-w-content px-6 md:px-10">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.n} delay={Math.min(i * 0.05, 0.3)}>
              <div className="grid md:grid-cols-12 gap-6 py-8 border-b border-line">
                <div className="md:col-span-3">
                  <div className="spec-label text-copperDim mb-3">{c.n}</div>
                  <h3 className="font-display text-3xl text-paper">{c.title}</h3>
                </div>
                <ul className="md:col-span-8 md:col-start-5 space-y-2">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="text-mist hover:text-paper transition-colors border-b border-line/40 pb-2 cursor-pointer"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-panel border-t border-line py-12 md:py-16 text-center">
        <Reveal>
          <p className="spec-label text-mist max-w-lg mx-auto">
            HAVE A RESOURCE WORTH ADDING? SEND IT THROUGH THE CONTACT PAGE AND
            WE&apos;LL ADD IT TO THE LIST.
          </p>
        </Reveal>
      </section>
    </>
  );
}
