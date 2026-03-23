"use client";
import Image from "next/image";
import Button from "../components/Button";
import ServicePopup from "./Popup";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--bg-primary)]">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/hero1.png"
        alt="Digital marketing agency Dubai"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[var(--bg-primary)]/70" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 pb-12">
        <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 items-center">
          {/* LEFT CONTENT */}
          <div className="text-[var(--text-primary)]">
            {/* TAGLINE */}
            <p
              data-aos="fade-right"
              className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur"
            >
              🚀 Dubai-Based Performance Marketing Agency
            </p>

            {/* HEADLINE */}
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="mb-6 text-4xl font-bold leading-tight md:text-5xl"
            >
              Drive More Leads & Sales <br />
              with{" "}
              <span className="text-[var(--accent-primary)]">
                ROI-Focused Marketing
              </span>
            </h1>

            {/* SUBTEXT */}
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="mb-6 max-w-xl text-[var(--text-secondary)] text-lg"
            >
              We help Dubai businesses generate high-quality leads, increase
              revenue, and scale faster using data-driven digital marketing
              strategies.
            </p>

            {/* TRUST BADGES */}
            <div
              data-aos="fade-right"
              data-aos-delay="250"
              className="mb-8 flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]"
            >
              <span>⭐ 5.0 Rating</span>
              <span>Trusted by UAE Brands</span>
              <span>Performance-Driven</span>
            </div>

            {/* CTA BUTTONS */}
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="flex flex-wrap gap-4"
            >
              {/* PRIMARY CTA */}
              <Button
                text="Get Free Marketing Audit"
                onClick={() => setOpen(true)}
              />

              {/* SECONDARY CTA */}
              <Link href="/services">
                <Button
                  text="View Services"
                  className="bg-transparent border border-[var(--border-light)] text-[var(--text-primary)]"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE (optional future image/animation) */}
          <div className="relative hidden md:flex items-center justify-start"></div>
        </div>
      </div>

      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
