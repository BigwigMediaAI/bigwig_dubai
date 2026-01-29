"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import GlobalCTA from "../components/Cta";
import Button from "../components/Button";
import ServicePopup from "../components/Popup";

export default function BlogPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative bg-black">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/aboutpage.png"
          alt="Trusted clients and brand partnerships"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-black/80" />

        {/* GOLD GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/20 blur-[200px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            {/* BREADCRUMB */}
            {/* BREADCRUMB */}
            <div className="mb-4 flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <span className="hover:text-[var(--accent-primary)] transition cursor-pointer">
                <Link href="/">Home</Link>
              </span>
              <span>/</span>
              <span className="text-[var(--text-secondary)]">Blog</span>
            </div>

            {/* TITLE */}
            <h1 className="mb-6 text-4xl md:text-6xl font-bold leading-tight text-[var(--text-primary)]">
              Insights, Ideas & <br />
              <span className="text-[var(--accent-primary)]">
                Digital Growth Stories
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
              Explore expert perspectives on digital marketing, branding, SEO,
              and web innovation. Practical insights, industry trends, and
              strategies to help your business stay ahead in a rapidly evolving
              digital world.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden">
        {/* Radial gold glow */}
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent-primary)]/12 blur-[200px]" />

        {/* Dotted texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/15 blur-[200px]" />
        </div>

        <div className="mx-auto max-w-5xl px-6">
          {/* GLASS CARD */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-12 text-center backdrop-blur-xl shadow-2xl">
            {/* INNER GLOW */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[var(--accent-primary)]/25 blur-[120px]" />

            {/* ICON / BADGE */}
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--accent-primary)]/40 bg-[var(--accent-primary)]/10">
              <span className="text-xl text-[var(--accent-primary)]">✦</span>
            </div>

            {/* TITLE */}
            <h2 className="mb-4 text-2xl md:text-4xl font-bold text-[var(--text-primary)]">
              Insights Are On the Way
            </h2>

            {/* SUBTEXT */}
            <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
              We’re crafting in-depth articles, practical guides, and expert
              insights focused on digital growth, branding, and performance
              marketing. Stay tuned — quality takes time.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => setOpen(true)}
                text="Start a Conversation"
              />

              <Link href="/services">
                <button className="rounded-full border border-white/20 px-8 py-3 text-sm text-white/80 transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]">
                  Explore Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GlobalCTA />

      <Footer />
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
