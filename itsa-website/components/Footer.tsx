import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-panel">
      <div className="mx-auto max-w-content px-6 md:px-10 py-12 md:py-16">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="font-display text-3xl md:text-4xl tracking-tight text-paper leading-tight">
                Building the department&apos;s
                <br />
                technical culture, together.
              </p>
              <p className="mt-6 text-mist max-w-sm">
                The Information Technology Student Association at PVPPCOE —
                run by students, for students, backed by faculty.
              </p>
            </div>

            <div className="md:col-span-2 md:col-start-8 spec-label text-mist flex flex-col gap-3">
              <span className="text-copperDim">NAVIGATE</span>
              <Link href="/about" className="text-paper hover:text-copper w-fit">About</Link>
              <Link href="/events" className="text-paper hover:text-copper w-fit">Events</Link>
              <Link href="/team" className="text-paper hover:text-copper w-fit">Team</Link>
              <Link href="/resources" className="text-paper hover:text-copper w-fit">Resources</Link>
            </div>

            <div className="md:col-span-3 spec-label text-mist flex flex-col gap-3">
              <span className="text-copperDim">CONTACT</span>
              <a href="mailto:itsa@pvppcoe.ac.in" className="text-paper hover:text-copper w-fit">
                itsa@pvppcoe.ac.in
              </a>
              <span className="text-paper">
                Sion, Mumbai – 400022
              </span>
              <Link href="/contact" className="text-paper hover:text-copper w-fit">
                Let&apos;s Connect →
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 pt-8 border-t border-line/60 flex flex-col md:flex-row justify-between gap-4 spec-label text-mist">
          <span>© {new Date().getFullYear()} ITSA — PVPPCOE Information Technology Department</span>
          <span>AICTE Approved · University of Mumbai Affiliated</span>
        </div>
      </div>
    </footer>
  );
}
