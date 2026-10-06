"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function MagneticButton({
  href,
  children,
  className = "",
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    gsap.to(ref.current, {
      x: relX * 0.3,
      y: relY * 0.4,
      duration: 0.5,
      ease: "power3.out",
    });
  }

  function handleLeave() {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  }

  const base =
    variant === "solid"
      ? "bg-copper text-ink hover:bg-paper"
      : "border border-line text-paper hover:border-copper hover:text-copper";

  return (
    <Link
      href={href}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-300 ${base} ${className}`}
    >
      {children}
    </Link>
  );
}
