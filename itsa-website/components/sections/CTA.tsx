import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

export default function CTA() {
  return (
    <section className="bg-panel border-t border-line py-20 md:py-24">
      <div className="mx-auto max-w-content px-6 md:px-10 text-center">
        <Reveal>
          <div className="spec-label text-copperDim mb-6">
            APPLICATIONS OPEN · ALL IT YEARS WELCOME
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-8xl text-paper tracking-tight leading-[0.95]">
            Come build with us.
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <MagneticButton href="/contact" className="px-10 py-4 text-base">
            Let&apos;s Connect
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
