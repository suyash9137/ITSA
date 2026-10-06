"use client";

// Shared, module-scoped so the Preloader and the Hero section agree on
// whether the boot sequence is about to play, without a prop/event bus.
let willPlay: boolean | null = null;

export function getPreloaderWillPlay(): boolean {
  if (willPlay !== null) return willPlay;
  if (typeof window === "undefined") return false;
  const seen = sessionStorage.getItem("itsa-preloader-seen") === "1";
  willPlay = !seen;
  return willPlay;
}

export function markPreloaderSeen() {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("itsa-preloader-seen", "1");
  }
  willPlay = false;
}
