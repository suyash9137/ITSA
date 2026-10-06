"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/resources", label: "Resources" },
  { href: "/ai-insights", label: "AI Insights" },
  { href: "/community", label: "Community" },
  { href: "/contact", label: "Let's Connect" },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > lastY.current && y > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    if (open) {
      gsap.set(menuRef.current, { display: "flex" });
      gsap.fromTo(
        menuRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.6, ease: "power4.inOut" }
      );
      gsap.fromTo(
        ".menu-link",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, delay: 0.2, duration: 0.6, ease: "power3.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: "inset(0% 0% 100% 0%)",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          if (menuRef.current) gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className={`mx-auto max-w-content px-6 md:px-10 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "py-3" : "py-6"
          }`}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <span className="h-2 w-2 rounded-full bg-copper group-hover:animate-pulse" />
            <span className="font-display text-lg tracking-tight text-paper">
              ITSA<span className="text-copper">.</span>
            </span>
          </Link>

          <div
            className={`hidden md:flex items-center gap-1 rounded-full border border-line/80 backdrop-blur transition-colors duration-500 px-1.5 py-1.5 ${
              scrolled ? "bg-panel/80" : "bg-panel/40"
            }`}
          >
            {LINKS.slice(0, 6).map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-4 py-1.5 rounded-full text-sm transition-colors duration-300 ${
                  pathname === l.href
                    ? "bg-copper text-ink"
                    : "text-mist hover:text-paper"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2 text-paper spec-label z-[60]"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span>{open ? "CLOSE" : "MENU"}</span>
            <span className="relative w-5 h-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        ref={menuRef}
        className="hidden fixed inset-0 z-50 bg-ink flex-col justify-center px-6 md:px-16"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        <nav className="flex flex-col gap-2">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="menu-link group flex items-baseline gap-4 py-2 border-b border-line/60"
            >
              <span className="spec-label text-copperDim w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-4xl md:text-7xl tracking-tight text-mist group-hover:text-paper transition-colors duration-300">
                {l.label}
              </span>
            </Link>
          ))}
        </nav>
        <div className="mt-10 spec-label text-mist">
          IT STUDENT ASSOCIATION — PVPPCOE, SION MUMBAI
        </div>
      </div>
    </>
  );
}
