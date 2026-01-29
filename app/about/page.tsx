"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Button from "../components/Button";
import { Target, Eye, Users } from "lucide-react";
import { Search, Layers, Rocket, TrendingUp } from "lucide-react";
import GlobalCTA from "../components/Cta";
import ServicePopup from "../components/Popup";
import { useState } from "react";

export default function AboutPage() {
  const [open, setOpen] = useState(false);
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
              <span className="text-[var(--text-secondary)]">About Us</span>
            </div>

            {/* TITLE */}
            <h1
              data-aos="fade-right"
              data-aos-delay="50"
              className="mb-6 text-4xl md:text-6xl font-bold leading-tight text-[var(--text-primary)]"
            >
              Building Digital Brands <br />
              <span className="text-[var(--accent-primary)]">
                That Lead Markets
              </span>
            </h1>

            {/* SUBTEXT */}
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]"
            >
              We are a performance-driven digital marketing agency helping
              ambitious brands grow, scale, and dominate competitive markets
              like Dubai through strategy, creativity, and technology.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-black">
        {/* DOTTED BACKGROUND */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto w-11/12 md:w-5/6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* ================= LEFT CONTENT (STICKY) ================= */}
            <div className="lg:sticky lg:top-32 self-start">
              <p
                data-aos="zoom-in"
                data-aos-delay="50"
                className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur"
              >
                About Us
              </p>

              <h2
                data-aos="fade-up"
                data-aos-delay="200"
                className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]"
              >
                A Digital Partner Built <br />
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
                  for Long-Term Growth
                </span>
              </h2>

              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="mb-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]"
              >
                We help ambitious brands grow through performance marketing,
                creativity, and data-driven strategy — focused on measurable
                impact.
              </p>

              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="mb-10 max-w-xl text-[var(--text-muted)]"
              >
                From startups to enterprises, we work as an extension of your
                team to deliver consistent results in competitive markets like
                Dubai.
              </p>
              <div data-aos="flip-left" data-aos-delay="500">
                <Button
                  onClick={() => setOpen(true)}
                  text="Let’s Work Together"
                />
              </div>
            </div>

            {/* ================= RIGHT SCROLL STORY ================= */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="relative h-[260vh]"
            >
              {/* CARD 1 – BASE */}
              <div className="sticky top-32 z-10">
                <Card
                  label="Our Mission"
                  title="Drive Real Business Growth"
                  text="Our mission is to help brands grow sustainably through performance marketing, strategic thinking, and continuous optimization."
                  icon="mission"
                />
              </div>

              {/* CARD 2 – OVERLAPS CARD 1 */}
              <div className="sticky top-32 z-20 mt-[30vh]">
                <Card
                  label="Our Vision"
                  title="Build Market-Leading Brands"
                  text="We envision becoming the go-to growth partner for brands that want to lead, innovate, and dominate their industries."
                  icon="vision"
                />
              </div>

              {/* CARD 3 – OVERLAPS CARD 2 */}
              <div className="sticky top-32 z-30 mt-[60vh]">
                <Card
                  label="Collaborate With Us"
                  title="A True Extension of Your Team"
                  text="We work closely with internal teams, aligning goals, processes, and execution to achieve long-term success."
                  icon="collaborate"
                  cta
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black overflow-hidden">
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
          {/* ================= SECTION HEADER ================= */}
          <div className="mb-20 max-w-3xl">
            <p
              data-aos="zoom-in"
              data-aos-delay="100"
              className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur"
            >
              Why Choose Us
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]"
            >
              We Focus on What <br />
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
                Truly Drives Results
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-[var(--text-secondary)]"
            >
              Our approach combines experience, transparency, and performance to
              help brands grow confidently in competitive markets.
            </p>
          </div>

          {/* ================= GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[240px] gap-6">
            {/* COLLABORATION (TALL) */}
            <div
              data-aos="flip-left"
              data-aos-delay="200"
              className="lg:row-span-2 rounded-2xl overflow-hidden border border-[var(--border-light)] bg-black relative"
            >
              <img
                src="/aboutPage/coll.png"
                alt="Collaboration"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative z-10 p-6 flex h-full flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">
                  Seamless Collaboration
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Transparent communication and aligned execution at every
                  stage.
                </p>
              </div>
            </div>

            {/* YEARS OF EXPERIENCE (TALL) */}
            <div
              data-aos="flip-left"
              data-aos-delay="300"
              className="lg:row-span-2 rounded-2xl overflow-hidden border border-[var(--border-light)] bg-black relative"
            >
              <img
                src="/aboutPage/exp.png"
                alt="Years of Experience"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative z-10 p-6 flex h-full flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">
                  Years of Experience
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Deep industry knowledge built over years of real-world
                  execution.
                </p>
              </div>
            </div>

            {/* GROWTH (TALL) */}
            <div
              data-aos="flip-left"
              data-aos-delay="400"
              className="lg:row-span-2 rounded-2xl overflow-hidden border border-[var(--border-light)] bg-black relative"
            >
              <img
                src="/aboutPage/growth.png"
                alt="Growth"
                className="absolute inset-0 h-full w-full object-fill"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative z-10 p-6 flex h-full flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">
                  Performance-Driven Growth
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Every strategy is optimized to deliver measurable ROI.
                </p>
              </div>
            </div>

            {/* HAPPY CLIENTS (WIDE) */}
            <div
              data-aos="flip-left"
              data-aos-delay="500"
              className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-[var(--border-light)] bg-[var(--bg-glass)] backdrop-blur-md"
            >
              <div className="grid h-full grid-cols-1 md:grid-cols-2">
                {/* LEFT CONTENT */}
                <div className="flex flex-col justify-center p-8">
                  {/* STARS */}
                  <div className="mb-3 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 fill-[var(--accent-primary)]"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.566-.955L10 0l2.946 5.955 6.566.955-4.756 4.635 1.122 6.545z" />
                      </svg>
                    ))}
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold text-[var(--text-primary)]">
                    Trusted by Happy Clients
                  </h3>

                  <p className="max-w-md text-[var(--text-secondary)]">
                    Long-term partnerships built on trust, transparency, and
                    consistently measurable results.
                  </p>
                </div>

                {/* RIGHT IMAGE (SMALLER & CENTERED) */}
                <div className="relative flex items-center justify-center p-6">
                  <div className="relative h-40 w-40 md:h-44 md:w-44 overflow-hidden rounded-xl">
                    <img
                      src="/aboutPage/client.png"
                      alt="Happy Clients"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </div>
              </div>
            </div>

            {/* QUALITY / TRUST (SINGLE) */}
            <div
              data-aos="flip-left"
              data-aos-delay="600"
              className="rounded-2xl overflow-hidden border border-[var(--border-light)] bg-black relative"
            >
              <img
                src="/aboutPage/commit.png"
                alt="Commitment to Quality"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative z-10 p-6 flex h-full flex-col justify-end">
                <h3 className="text-xl font-semibold text-white">
                  Commitment to Quality
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  High standards across strategy, execution, and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-black overflow-hidden">
        {/* DOTTED BACKGROUND */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10 mx-auto w-11/12 md:w-5/6 py-16">
          {/* ================= HEADER ================= */}
          <div className="mb-20 max-w-3xl">
            <p
              data-aos="zoom-in"
              data-aos-delay="100"
              className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur"
            >
              Our Process
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]"
            >
              How We Turn Ideas Into <br />
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
                Scalable Growth
              </span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-[var(--text-secondary)]"
            >
              A clear, structured approach designed to deliver consistent and
              measurable results.
            </p>
          </div>

          {/* ================= PROCESS STEPS ================= */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* FLOWING CONNECTOR */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="hidden md:block absolute top-14 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-primary)]/40 to-transparent"
            />

            <ProcessStep
              number="01"
              title="Discover"
              text="We understand your brand, competitors, and market to uncover real opportunities."
              icon="search"
            />

            <ProcessStep
              number="02"
              title="Strategize"
              text="We design a custom roadmap aligned with your goals and audience intent."
              icon="layers"
            />

            <ProcessStep
              number="03"
              title="Execute"
              text="Campaigns are launched with precision across the right channels."
              icon="rocket"
            />

            <ProcessStep
              number="04"
              title="Optimize"
              text="We refine, scale, and optimize continuously to maximize ROI."
              icon="trending"
            />
          </div>
        </div>
      </section>

      <GlobalCTA />

      <Footer />
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

type CardProps = {
  label: string;
  title: string;
  text: string;
  icon: "mission" | "vision" | "collaborate";
  cta?: boolean;
};

const ICONS = {
  mission: Target,
  vision: Eye,
  collaborate: Users,
  search: Search,
  layers: Layers,
  rocket: Rocket,
  trending: TrendingUp,
};

function Card({ label, title, text, icon, cta }: CardProps) {
  const Icon = ICONS[icon];

  return (
    <div className="h-[320px] rounded-2xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-8 backdrop-blur-md flex flex-col justify-between">
      <div>
        {/* ICON */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]">
          <Icon size={22} strokeWidth={2} />
        </div>

        {/* LABEL */}
        <span className="mb-3 inline-block text-sm text-[var(--accent-primary)]">
          {label}
        </span>

        {/* TITLE */}
        <h3 className="mb-4 text-2xl font-semibold text-[var(--text-primary)]">
          {title}
        </h3>

        {/* TEXT */}
        <p className="text-[var(--text-secondary)] leading-relaxed">{text}</p>
      </div>

      {/* CTA (OPTIONAL) */}
      {cta && (
        <button className="mt-6 self-start text-sm font-medium text-[var(--accent-primary)]">
          Start a Conversation →
        </button>
      )}
    </div>
  );
}

type ProcessStepProps = {
  number: string;
  title: string;
  text: string;
  icon: "search" | "layers" | "rocket" | "trending";
};

function ProcessStep({ number, title, text, icon }: ProcessStepProps) {
  const Icon = ICONS[icon];

  return (
    <div
      data-aos="flip-left"
      data-aos-delay="200"
      className="relative group text-center md:text-left"
    >
      {/* ICON + NUMBER */}
      <div className="relative z-10 mx-auto md:mx-0 mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border-accent)] bg-[var(--bg-glass)] backdrop-blur-md text-[var(--accent-primary)] shadow-[0_0_30px_var(--accent-glow)]">
        <Icon size={22} strokeWidth={2} />
        <span className="absolute -bottom-5 text-xs font-medium text-[var(--accent-primary)]">
          {number}
        </span>
      </div>

      {/* CARD */}
      <div className="rounded-xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-6 backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_40px_var(--accent-glow)]">
        <h3 className="mb-3 text-xl font-semibold text-[var(--text-primary)]">
          {title}
        </h3>

        <p className="text-[var(--text-secondary)] leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
