import Reveal from "@/components/Reveal";

export default function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative bg-ink pt-20 pb-12 md:pt-24 md:pb-16 border-b border-line">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal>
          <div className="spec-label text-copperDim mb-6">{eyebrow}</div>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display text-5xl md:text-8xl text-paper tracking-tight leading-[0.95] max-w-4xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.16} className="mt-6">
            <p className="text-mist text-lg max-w-xl">{intro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
