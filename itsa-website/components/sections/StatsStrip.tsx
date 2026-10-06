import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";

const STATS = [
  { value: 300, suffix: "+", label: "Active members" },
  { value: 30, suffix: "+", label: "Events per year" },
  { value: 20, suffix: "+", label: "Industry mentors" },
  { value: 4, suffix: "", label: "Core initiative tracks" },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-line bg-panel">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-line">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="py-8 md:py-10 px-4 md:px-6">
              <div className="font-display text-4xl md:text-5xl text-paper tracking-tight">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 spec-label text-mist">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
