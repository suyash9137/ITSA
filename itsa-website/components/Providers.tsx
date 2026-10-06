"use client";

import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Preloader from "@/components/Preloader";
import PageTransition from "@/components/PageTransition";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <PageTransition>
        <main>{children}</main>
      </PageTransition>
    </SmoothScrollProvider>
  );
}
