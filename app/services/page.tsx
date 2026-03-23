"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import GlobalCTA from "../components/Cta";
import Services from "../components/Services";
import Button from "../components/Button";
import { useState } from "react";
import ServicePopup from "../components/Popup";

export default function ServicePage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-black">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <Image
          src="/aboutpage.png"
          alt="Digital marketing services in Dubai"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/20 blur-[200px]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            {/* BREADCRUMB */}
            <div className="mb-4 flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Link
                href="/"
                className="hover:text-[var(--accent-primary)] transition"
              >
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--text-secondary)]">Services</span>
            </div>

            {/* TITLE */}
            <h1 className="mb-6 text-4xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
              Performance-Driven Digital Services <br />
              <span className="text-[var(--accent-primary)]">
                That Generate Real ROI
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
              We help Dubai businesses generate leads, increase revenue, and
              scale faster through SEO, paid ads, social media, and web
              development.
            </p>

            {/* 🔥 TRUST BADGES */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
              <span>⭐ 5.0 Client Satisfaction</span>
              <span>Trusted by UAE Brands</span>
              <span>ROI-Focused Strategies</span>
            </div>

            {/* 🔥 CTA BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                text="Get Free Marketing Audit"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SERVICES */}
      <Services />

      {/* CTA */}
      <GlobalCTA />

      <Footer />

      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
