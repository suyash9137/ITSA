import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center bg-ink px-6 text-center pt-24">
      <div className="spec-label text-copperDim mb-6">ERROR 404</div>
      <h1 className="font-display text-5xl md:text-7xl text-paper tracking-tight mb-8">
        This route doesn&apos;t exist.
      </h1>
      <Link href="/" className="spec-label text-copper hover:text-paper transition-colors">
        BACK TO HOME →
      </Link>
    </section>
  );
}
