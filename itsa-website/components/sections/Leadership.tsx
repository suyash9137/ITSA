"use client";

import Reveal from "@/components/Reveal";

const LEADERS = [
  {
    name: "Dr. [HOD Name]",
    role: "Head of Department",
    detail: "Information Technology, PVPPCOE",
    tag: "FACULTY",
  },
  {
    name: "Prof. [Coordinator Name]",
    role: "Staff Coordinator",
    detail: "ITSA Faculty Advisor",
    tag: "FACULTY",
  },
  {
    name: "[Student Name]",
    role: "Student President",
    detail: "ITSA, Class of 2026",
    tag: "STUDENT LEAD",
  },
];

export default function Leadership() {
  return (
    <section className="bg-panel border-t border-line py-16 md:py-24">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <Reveal className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <h2 className="font-display text-4xl md:text-6xl text-paper tracking-tight max-w-lg">
            The people running the association
          </h2>
          <p className="spec-label text-mist max-w-xs">
            ONE FACULTY MENTORSHIP LAYER, ONE STUDENT LEADERSHIP LAYER
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {LEADERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden border border-line bg-ink aspect-[3/4]">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-110">
                  <span className="font-display text-8xl text-line select-none">
                    {p.name
                      .replace(/[\[\]]/g, "")
                      .split(" ")
                      .map((s) => s[0])
                      .join("")}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="spec-label text-copper mb-2">{p.tag}</div>
                  <div className="font-display text-2xl text-paper">{p.name}</div>
                  <div className="text-mist text-sm mt-1">{p.role}</div>
                  <div className="text-mist/70 text-xs mt-0.5">{p.detail}</div>
                </div>

                <div className="absolute inset-0 border border-copper opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
