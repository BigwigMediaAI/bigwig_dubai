"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import GlobalCTA from "../components/Cta";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactFormCard from "../components/ContactFormCard";
import FaqSection from "../components/FaqSection";

const socials = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com",
  },
];
export default function ContactPage() {
  return (
    <div className="relative ">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <Image
          src="/aboutpage.png"
          alt="Dubai skyline digital future"
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
              <span className="text-[var(--text-secondary)]">Contact Us</span>
            </div>

            {/* TITLE */}
            <h2
              data-aos="fade-right"
              data-aos-delay="200"
              className="mb-6 text-4xl md:text-6xl font-bold leading-tight text-[var(--text-primary)]"
            >
              Let’s Start a <br />
              <span className="text-[var(--accent-primary)]">
                Meaningful Conversation
              </span>
            </h2>

            {/* SUBTEXT */}
            <p
              data-aos="fade-right"
              data-aos-delay="400"
              className="max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]"
            >
              Tell us about your goals, challenges, or ideas. Our team will get
              back to you with clarity, strategy, and next steps tailored to
              your business.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-black overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--accent-primary)]/10 blur-[120px]" />
        <div className="absolute bottom-0 -right-40 h-[400px] w-[400px] rounded-full bg-[var(--accent-primary)]/10 blur-[120px]" />

        {/* Subtle dotted pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative z-10 mx-auto w-11/12 md:w-5/6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <p
                data-aos="zoom-in"
                data-aos-delay="100"
                className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur"
              >
                Contact Us
              </p>

              <h2
                data-aos="fade-right"
                data-aos-delay="200"
                className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]"
              >
                Want to work with us? <br />
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
                  Let’s connect
                </span>
              </h2>

              <p
                data-aos="fade-right"
                data-aos-delay="400"
                className="max-w-xl text-[var(--text-secondary)]"
              >
                Follow us on social platforms or reach out directly — we’re
                always open to meaningful conversations.
              </p>
            </div>

            {/* RIGHT SOCIAL GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {socials.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="flip-left"
                    data-aos-delay={i * 120}
                    data-aos-duration="900"
                    className="
          group flex items-center justify-between
          rounded-xl
          border border-[var(--border-light)]
          bg-[var(--bg-glass)]
          px-5 py-4
          backdrop-blur-md
          transition-all duration-300
          hover:border-[var(--accent-primary)]/50
        "
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] transition group-hover:scale-110">
                        <Icon size={18} />
                      </div>
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        {item.name}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-[var(--text-muted)] transition group-hover:text-[var(--accent-primary)]"
                    />
                  </a>
                );
              })}
            </div>
          </div>
          {/* ================= CONTACT INFO ================= */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ADDRESS */}
            <div
              data-aos="flip-left"
              data-aos-delay="100"
              className="group relative rounded-2xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            >
              {/* TOP ACCENT */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/60 to-transparent" />

              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]">
                  <MapPin size={18} />
                </div>
                <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                  Office Address
                </h4>
              </div>

              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                Business Bay, Dubai <br />
                United Arab Emirates
              </p>
            </div>

            {/* PHONE */}
            <div
              data-aos="flip-left"
              data-aos-delay="300"
              className="group relative rounded-2xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/60 to-transparent" />

              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]">
                  <Phone size={18} />
                </div>
                <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                  Phone
                </h4>
              </div>

              <p className="text-sm text-[var(--text-secondary)]">
                +971 50 123 4567
              </p>
            </div>

            {/* EMAIL */}
            <div
              data-aos="flip-left"
              data-aos-delay="500"
              className="group relative rounded-2xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-primary)]/60 to-transparent" />

              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]">
                  <Mail size={18} />
                </div>
                <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                  Email
                </h4>
              </div>

              <p className="text-sm text-[var(--text-secondary)]">
                hello@youragency.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black overflow-hidden">
        {/* Subtle dotted background */}
        {/* Top & bottom vignette – softer */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

        {/* Center soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[#101010] to-[var(--bg-primary)]" />

        {/* LEFT: soft radial glow */}
        <div className="absolute left-[-200px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/10 blur-[140px]" />

        {/* RIGHT: darker fade (no glow) */}
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/80 to-transparent" />

        {/* Subtle grid – center focused, faded edges */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(circle at center, black 0%, black 35%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, black 35%, transparent 70%)",
            opacity: 0.25,
          }}
        />

        <div className="relative z-10 mx-auto w-11/12 md:w-5/6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* ================= LEFT: FORM ================= */}

            <ContactFormCard />

            {/* ================= RIGHT: FAQ ================= */}
            <div>
              <p className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)]">
                FAQs
              </p>

              <h2 className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
                Everything You Might{" "}
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
                  Want to Know
                </span>
              </h2>

              <FaqSection />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden">
        {/* TOP FADE (SMOOTH TRANSITION) */}
        <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black to-transparent" />

        {/* MAP */}
        <div className="relative h-[520px] w-full">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps?q=Business%20Bay%20Dubai&output=embed"
            className="absolute inset-0 h-full w-full  contrast-125 brightness-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/35" />

          {/* LOCATION BADGE */}
          <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
            <div className="flex items-center gap-3 rounded-full border border-[var(--border-light)] bg-[var(--bg-glass)] px-6 py-3 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
              <span className="text-sm font-medium text-[var(--text-primary)]">
                Business Bay, Dubai · UAE
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM FADE */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      <GlobalCTA />

      <Footer />
    </div>
  );
}
