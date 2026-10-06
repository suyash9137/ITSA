import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import Initiatives from "@/components/sections/Initiatives";
import Leadership from "@/components/sections/Leadership";
import Vision from "@/components/sections/Vision";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Initiatives />
      <Vision />
      <Leadership />
      <CTA />
    </>
  );
}
