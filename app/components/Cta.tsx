"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function GlobalCTA() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* GLOW BACKGROUND */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/25 blur-[160px]" />

      {/* DOTTED TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto w-11/12 md:w-5/6 py-12">
        <div className="rounded-3xl border border-[var(--border-light)] bg-[var(--bg-glass)] backdrop-blur-xl px-8 py-16 md:px-16 text-center">
          {/* BADGE */}
          <p className="mb-6 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)]">
            Work With Us
          </p>

          {/* TITLE */}
          <h2 className="mx-auto mb-6 max-w-4xl text-3xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
            Ready to Build a{" "}
            <span
              className="
    bg-gradient-to-r
    from-[var(--accent-primary)]
    via-[#FFD88A]
    to-[var(--accent-glow)]
    bg-clip-text
    text-transparent
    drop-shadow-[0_0_12px_rgba(255,200,100,0.35)]
  "
            >
              {" "}
              High-Growth Brand?
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mb-10 max-w-2xl text-[var(--text-secondary)]">
            Let’s discuss your goals and create a strategy tailored for Dubai’s
            competitive market.
          </p>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button text="Start a Project" />

            <Button
              text="View Our Services"
              className="border border-[var(--border-light)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
