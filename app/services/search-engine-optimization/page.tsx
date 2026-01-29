"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import GlobalCTA from "@/app/components/Cta";
import Footer from "@/app/components/Footer";

export default function Seo() {
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
            <div className="mb-4 flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <span className="hover:text-[var(--accent-primary)] transition cursor-pointer">
                <Link href="/">Home</Link>
              </span>
              <span>/</span>
              <span className="hover:text-[var(--accent-primary)] transition cursor-pointer">
                <Link href="/services">Services</Link>
              </span>
              <span>/</span>
              <span className="text-[var(--text-secondary)]">
                Search Engine Optimization
              </span>
            </div>

            {/* TITLE */}
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="mb-6 text-4xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]"
            >
              Search Engine Optimization That <br />
              <span className="text-[var(--accent-primary)]">
                Drives Sustainable Organic Growth
              </span>
            </h1>

            {/* SUBTEXT */}
            <p
              data-aos="fade-right"
              data-aos-delay="300"
              className="max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]"
            >
              We help your business rank higher, attract qualified organic
              traffic, and build long-term visibility through technical SEO,
              content optimization, and authority building — without relying on
              paid ads.
            </p>
          </div>
        </div>
      </section>

      <GlobalCTA />

      <Footer />
    </div>
  );
}
