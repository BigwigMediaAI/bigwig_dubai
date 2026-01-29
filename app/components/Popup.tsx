"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import Button from "./Button";

const servicesList = [
  "SEO",
  "SMM (Social Media Marketing)",
  "Performance Marketing",
  "Content Marketing",
  "Website Development",
  "Email Marketing",
  "SMO (Social Media Optimization)",
  "Graphic & Video Design",
  "Affiliate Marketing",
  "Influencer Marketing",
  "Online Reputation Management (ORM)",
];

export default function ServicePopup({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => setMounted(false), 350);
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen && !mounted) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* MODAL */}
      <div
        className={`relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]/95 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        {/* SOFT GLOW */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[var(--accent-primary)]/25 blur-[160px]" />

        {/* HEADER */}
        <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-[var(--accent-primary)]" size={18} />
            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
              Start Your Project
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-white/60 hover:text-[var(--accent-primary)] transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="max-h-[70vh] overflow-y-auto px-6 py-5 scrollbar-hide">
          <p className="mb-6 text-sm text-[var(--text-secondary)]">
            Share your requirements and our team will reach out with strategy,
            timelines, and next steps.
          </p>

          <form className="space-y-5">
            <div className="flex gap-4">
              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[var(--accent-primary)] focus:outline-none"
              />
              {/* PHONE */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[var(--accent-primary)] focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[var(--accent-primary)] focus:outline-none"
            />

            {/* SERVICES */}
            <div>
              <p className="mb-3 text-sm font-medium text-[var(--text-secondary)]">
                Services you’re interested in
              </p>

              <div className="flex flex-wrap gap-2">
                {servicesList.map((service) => (
                  <label
                    key={service}
                    className="cursor-pointer rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-white/80 transition hover:border-[var(--accent-primary)]/50"
                  >
                    <input type="checkbox" className="peer hidden" />
                    <span className="peer-checked:text-[var(--accent-primary)]">
                      {service}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* MESSAGE */}
            <textarea
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[var(--accent-primary)] focus:outline-none"
            />
          </form>
        </div>

        {/* FOOTER */}
        <div className="border-t border-white/10 px-6 py-4">
          <Button type="submit" text="Send Request" />
        </div>
      </div>
    </div>
  );
}
