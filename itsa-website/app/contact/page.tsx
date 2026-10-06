import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Let's Connect",
  description: "Get in touch with ITSA — join the association, propose an event, or ask about mentorship.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="LET'S CONNECT"
        title="Tell us what you want to build."
        intro="Whether you want to join, propose a workshop, or bring in a mentor — this goes straight to the student leadership team."
      />

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-content px-6 md:px-10 grid md:grid-cols-12 gap-14">
          <Reveal className="md:col-span-5" direction="right">
            <div className="spec-label text-copperDim mb-6">CONTACT DETAILS</div>
            <div className="space-y-4">
              <div>
                <div className="text-mist text-sm mb-1">Email</div>
                <a href="mailto:itsa@pvppcoe.ac.in" className="font-display text-2xl text-paper hover:text-copper transition-colors">
                  itsa@pvppcoe.ac.in
                </a>
              </div>
              <div>
                <div className="text-mist text-sm mb-1">Campus</div>
                <div className="font-display text-2xl text-paper">
                  P.V.P.P. College of Engineering, Sion, Mumbai
                </div>
              </div>
              <div>
                <div className="text-mist text-sm mb-1">Department</div>
                <div className="font-display text-2xl text-paper">
                  Information Technology
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-line spec-label text-mist">
              AICTE APPROVED · UNIVERSITY OF MUMBAI AFFILIATED
            </div>
          </Reveal>

          <Reveal className="md:col-span-6 md:col-start-7" direction="left">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
