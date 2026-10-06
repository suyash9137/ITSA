"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // NOTE: wire this up to an actual endpoint (Formspree, a serverless
    // function, etc.) — this is a front-end placeholder submit handler.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <div className="border border-line p-10 md:p-14">
        <div className="spec-label text-copper mb-4">MESSAGE_SENT</div>
        <p className="font-display text-3xl md:text-4xl text-paper tracking-tight">
          Got it. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {[
        { id: "name", label: "Name", type: "text" },
        { id: "email", label: "Email", type: "email" },
      ].map((f) => (
        <div key={f.id} className="group">
          <label htmlFor={f.id} className="spec-label text-mist group-focus-within:text-copper transition-colors">
            {f.label.toUpperCase()}
          </label>
          <input
            id={f.id}
            name={f.id}
            type={f.type}
            required
            className="w-full bg-transparent border-b border-line focus:border-copper outline-none py-3 text-paper font-display text-xl md:text-2xl transition-colors duration-300"
          />
        </div>
      ))}

      <div className="group">
        <label htmlFor="message" className="spec-label text-mist group-focus-within:text-copper transition-colors">
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          required
          className="w-full bg-transparent border-b border-line focus:border-copper outline-none py-3 text-paper font-display text-xl md:text-2xl resize-none transition-colors duration-300"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-3 rounded-full bg-copper text-ink px-8 py-4 text-sm font-medium hover:bg-paper transition-colors duration-300 disabled:opacity-60"
      >
        {loading ? "SENDING…" : "Send message"}
      </button>
    </form>
  );
}
