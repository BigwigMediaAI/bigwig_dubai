"use client";
import { useState } from "react";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import GlobalCTA from "../components/Cta";

const clients = [
  { name: "ILN", logo: "/clients/iln.png" },
  { name: "CFT", logo: "/clients/cft.svg" },
  { name: "Steller Binge", logo: "/clients/binge.webp" },
  { name: "Billion Dollar FX", logo: "/clients/bdfx.gif" },
];

export default function ClientPage() {
  return (
    <div className="relative black">
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
            <div className="mb-4 flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <span className="hover:text-[var(--accent-primary)] transition cursor-pointer">
                <Link href="/">Home</Link>
              </span>
              <span>/</span>
              <span className="text-[var(--text-secondary)]">Clients</span>
            </div>

            {/* TITLE */}
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="mb-6 text-4xl md:text-6xl font-bold leading-tight text-[var(--text-primary)]"
            >
              Brands That <br />
              <span className="text-[var(--accent-primary)]">
                Trust & Grow With Us
              </span>
            </h1>

            {/* SUBTEXT */}
            <p
              data-aos="fade-right"
              data-aos-delay="300"
              className="max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]"
            >
              From ambitious startups to established enterprises, we partner
              with brands that value strategy, creativity, and measurable
              digital growth. Every collaboration is built on trust,
              transparency, and results.
            </p>
          </div>
        </div>
      </section>

      <section className="relative  py-16 overflow-hidden bg-black">
        {/* ================= BACKGROUND SYSTEM ================= */}
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

        {/* Soft top fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />

        <div className="relative z-10 mx-auto w-11/12 md:w-5/6 ">
          {/* ================= HEADING ================= */}
          <div className="mb-20 text-center">
            <p
              data-aos="zoom-in"
              data-aos-delay="100"
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
              Trusted Partnerships
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]"
            >
              Trusted by{" "}
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
                Leading Brands
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-5 max-w-2xl mx-auto text-[var(--text-secondary)]"
            >
              We collaborate with ambitious brands to build long-term growth,
              performance, and digital authority.
            </p>
          </div>

          {/* ================= LOGO GRID ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {clients.map((client, index) => (
              <div
                key={client.name}
                data-aos="flip-left"
                data-aos-delay={index * 200}
                className="group relative flex items-center justify-center"
              >
                {/* Floating glow ring */}
                <div className="absolute -inset-4 rounded-3xl bg-[var(--accent-primary)]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative flex h-32 w-full items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[var(--accent-primary)]/40 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                  {/* Accent dot */}
                  <span className="absolute top-4 right-4 h-2 w-2 rounded-full bg-[var(--accent-primary)] opacity-70" />

                  {/* Logo */}
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={80}
                    className="object-contain grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      <GlobalCTA />

      <Footer />
    </div>
  );
}
