import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "ITSA is the Information Technology Student Association of PVPPCOE — building the bridge between classroom learning and real-world technology.",
};

export default function AboutPage() {
  return (
    <>
      {/* INTRO SECTION */}
      <section className="relative min-h-[70svh] flex flex-col justify-center bg-ink py-12 md:py-16">
        <div className="mx-auto max-w-content w-full px-6 md:px-10">
          <Reveal delay={0.2} className="mb-4">
            <div className="spec-label text-copperDim">ABOUT / 01</div>
          </Reveal>

          <Reveal delay={0.4}>
            <h1 className="font-display text-[10vw] md:text-[6vw] leading-[0.9] tracking-tight text-paper mb-6">
              More than a student association.
            </h1>
          </Reveal>

          <Reveal delay={0.6}>
            <p className="text-mist text-base md:text-lg leading-relaxed max-w-xl">
              ITSA is where technology students come together to learn,
              build, compete and create.
            </p>
          </Reveal>

          {/* Technical rule */}
          <Reveal delay={0.8}>
            <div className="h-[1px] w-24 bg-line mt-8"></div>
          </Reveal>
        </div>

        {/* Background trace lines continuation */}
        <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
          >
            <path className="trace-line" d="M0 300H200L250 350V600H800L860 460V900" />
            <path className="trace-line" d="M1440 400H1240L1190 440V200H600L540 260V900" />
          </svg>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="bg-panel py-12 md:py-16 border-b border-line">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal delay={0.2} className="mb-6">
            <div className="spec-label text-copperDim">WHO WE ARE</div>
          </Reveal>

          <Reveal delay={0.4} className="max-w-2xl text-mist text-base leading-relaxed">
            ITSA is a student-led technology community within the Information Technology Department at PVPPCOE.
            We bring students together to learn, build, experiment, collaborate, compete, connect with industry,
            and develop leadership through hands-on technical experiences.
          </Reveal>
        </div>
      </section>

      {/* THE ITSA CYCLE SECTION */}
      <section className="relative bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-content px-6 md:px-10">
          {/* Vertical connector line */}
          <div className="absolute inset-y-0 left-1/2 -ml-[0.5px] w-[1px] bg-line opacity-30 md:hidden"></div>

          <div className="relative md:grid md:grid-cols-2 md:gap-12">
            {/* LEARN Column */}
            <div className="md:col-span-1 mb-10 md:mb-0">
              <Reveal delay={0.2} direction="right">
                <div className="spec-label text-copperDim mb-2">01</div>
              </Reveal>

              <Reveal delay={0.4} direction="right">
                <h3 className="font-display text-2xl md:text-3xl text-paper tracking-tight mb-4">
                  LEARN
                </h3>
              </Reveal>

              <Reveal delay={0.6} direction="right" className="text-mist space-y-3">
                <p>Workshops</p>
                <p>Seminars</p>
                <p>Technical Sessions</p>
              </Reveal>

              {/* Connector line */}
              <Reveal delay={0.8} direction="right">
                <div className="h-[50px] w-[1px] bg-line mt-6 mx-auto"></div>
              </Reveal>
            </div>

            {/* BUILD Column */}
            <div className="md:col-span-1 mb-10 md:mb-0">
              <Reveal delay={0.4} direction="left">
                <div className="spec-label text-copperDim mb-2">02</div>
              </Reveal>

              <Reveal delay={0.6} direction="left">
                <h3 className="font-display text-2xl md:text-3xl text-paper tracking-tight mb-4">
                  BUILD
                </h3>
              </Reveal>

              <Reveal delay={0.8} direction="left" className="text-mist space-y-3">
                <p>Projects</p>
                <p>Hackathons</p>
                <p>Experiments</p>
              </Reveal>

              {/* Connector line */}
              <Reveal delay={1.0} direction="left">
                <div className="h-[50px] w-[1px] bg-line mt-6 mx-auto"></div>
              </Reveal>
            </div>

            {/* CONNECT Column */}
            <div className="md:col-span-1 mb-10 md:mb-0">
              <Reveal delay={0.6} direction="right">
                <div className="spec-label text-copperDim mb-2">03</div>
              </Reveal>

              <Reveal delay={0.8} direction="right">
                <h3 className="font-display text-2xl md:text-3xl text-paper tracking-tight mb-4">
                  CONNECT
                </h3>
              </Reveal>

              <Reveal delay={1.0} direction="right" className="text-mist space-y-3">
                <p>Peers</p>
                <p>Mentors</p>
                <p>Industry</p>
              </Reveal>

              {/* Connector line */}
              <Reveal delay={1.2} direction="right">
                <div className="h-[50px] w-[1px] bg-line mt-6 mx-auto"></div>
              </Reveal>
            </div>

            {/* LEAD Column */}
            <div className="md:col-span-1">
              <Reveal delay={0.8} direction="left">
                <div className="spec-label text-copperDim mb-2">04</div>
              </Reveal>

              <Reveal delay={1.0} direction="left">
                <h3 className="font-display text-2xl md:text-3xl text-paper tracking-tight mb-4">
                  LEAD
                </h3>
              </Reveal>

              <Reveal delay={1.2} direction="left" className="text-mist space-y-3">
                <p>Teams</p>
                <p>Initiatives</p>
                <p>Community</p>
              </Reveal>
            </div>
          </div>

          {/* Horizontal connector for mobile view */}
          <Reveal delay={1.4} className="hidden md:block mt-10">
            <div className="h-[1px] w-full bg-line opacity-30"></div>
          </Reveal>
        </div>
      </section>

      {/* PURPOSE SECTION */}
      <section className="relative bg-panel py-16 md:py-20 border-b border-line">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal delay={0.2}>
            <h2 className="font-display text-[8vw] md:text-[5vw] leading-[0.9] tracking-tighter text-paper mb-6 max-w-md">
              Bridging the gap between<br/>
              the classroom and the real world.
            </h2>
          </Reveal>

          <Reveal delay={0.4} className="text-mist text-base md:text-lg leading-relaxed max-w-xl">
            Students develop technical capability through hands-on projects, gain real-world exposure
            via industry connections, foster innovation through experimentation, and experience
            professional growth in collaborative environments.
          </Reveal>

          {/* Technical rule */}
          <Reveal delay={0.6} className="mt-8">
            <div className="h-[1px] w-32 bg-line"></div>
          </Reveal>
        </div>

        {/* Background elements */}
        <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
          >
            <path className="trace-line" d="M200 100H1240" />
            <path className="trace-line" d="M200 800H1240" />
          </svg>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="bg-ink py-12 md:py-16">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <Reveal delay={0.2} className="mb-8">
            <div className="spec-label text-copperDim">VALUES</div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            {/* First row */}
            <Reveal delay={0.4} className="flex flex-col items-center">
              <div className="font-display text-3xl md:text-4xl text-paper tracking-tight mb-2">
                COLLABORATE
              </div>
              <div className="h-[1px] w-16 bg-line opacity-50"></div>
            </Reveal>

            <Reveal delay={0.5} className="flex flex-col items-center">
              <div className="font-display text-2xl md:text-3xl text-paper tracking-tight mb-2">
                LEARN
              </div>
              <div className="h-[1px] w-16 bg-line opacity-50"></div>
            </Reveal>

            <Reveal delay={0.6} className="flex flex-col items-center">
              <div className="font-display text-2xl md:text-3xl text-copper tracking-tight mb-2">
                EXPERIMENT
              </div>
              <div className="h-[1px] w-16 bg-line opacity-50"></div>
            </Reveal>

            {/* Second row */}
            <Reveal delay={0.7} className="flex flex-col items-center">
              <div className="font-display text-2xl md:text-3xl text-paper tracking-tight mb-2">
                INNOVATE
              </div>
              <div className="h-[1px] w-16 bg-line opacity-50"></div>
            </Reveal>

            <Reveal delay={0.8} className="flex flex-col items-center">
              <div className="font-display text-2xl md:text-3xl text-paper tracking-tight mb-2">
                LEAD
              </div>
              <div className="h-[1px] w-16 bg-line opacity-50"></div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}