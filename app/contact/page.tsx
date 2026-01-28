"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
import Button from "../components/Button";

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

const faqs = [
  {
    q: "How quickly will you respond?",
    a: "We typically respond within 24 hours on business days. We typically respond within 24 hours on business days. We typically respond within 24 hours on business days. We typically respond within 24 hours on business days. ",
  },
  {
    q: "Do you work with startups?",
    a: "Yes, we work with startups, scale-ups, and established brands.",
  },
  {
    q: "Is there a minimum project size?",
    a: "There is no fixed minimum. We scope projects based on your goals and requirements.",
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes, the first consultation is completely free and obligation-free.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We work across real estate, SaaS, e-commerce, professional services, and emerging brands.",
  },
  {
    q: "How do you measure success?",
    a: "We focus on measurable KPIs such as leads, conversions, ROI, and long-term growth.",
  },
  {
    q: "Will I have a dedicated point of contact?",
    a: "Yes, you’ll work with a dedicated strategist who understands your business goals.",
  },
];

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
            <h1 className="mb-6 text-4xl md:text-6xl font-bold leading-tight text-[var(--text-primary)]">
              Let’s Start a <br />
              <span className="text-[var(--accent-primary)]">
                Meaningful Conversation
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
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
              <p className="mb-4 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
                Contact Us
              </p>

              <h2 className="mb-6 text-4xl md:text-6xl font-bold leading-tight text-[var(--text-primary)]">
                Want to work with us? <br />
                <span className="text-[var(--accent-primary)]">
                  Let’s connect
                </span>
              </h2>

              <p className="max-w-xl text-[var(--text-secondary)]">
                Follow us on social platforms or reach out directly — we’re
                always open to meaningful conversations.
              </p>
            </div>

            {/* RIGHT SOCIAL GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {socials.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-[var(--border-light)] bg-[var(--bg-glass)] px-5 py-4 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-primary)]/15 text-[var(--accent-primary)]">
                        <Icon size={18} />
                      </div>
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        {item.name}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-[var(--text-muted)]"
                    />
                  </a>
                );
              })}
            </div>
          </div>
          {/* ================= CONTACT INFO ================= */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ADDRESS */}
            <div className="group relative rounded-2xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
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
            <div className="group relative rounded-2xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
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
            <div className="group relative rounded-2xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-6 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
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
            <div className="relative rounded-3xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-8 md:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              {/* SUBTLE INNER GLOW */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[var(--accent-primary)]/10" />

              {/* HEADER */}
              <div className="mb-10">
                <p className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)]">
                  Start a Conversation
                </p>

                <h3 className="mb-3 text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
                  Tell us about your project
                </h3>

                <p className="max-w-md text-[var(--text-secondary)]">
                  Share a few details and our team will get back to you with
                  clear next steps.
                </p>
              </div>

              {/* FORM */}
              <form className="space-y-5">
                {/* NAME + PHONE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Full Name" placeholder="John Doe" />
                  <Input label="Phone Number" placeholder="+971 50 123 4567" />
                </div>

                {/* EMAIL */}
                <Input label="Email Address" placeholder="you@company.com" />

                {/* SERVICES */}
                <div>
                  <label className="mb-3 block text-sm text-[var(--text-secondary)]">
                    Services you’re interested in
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "SEO",
                      "Paid Advertising",
                      "Branding",
                      "Web Development",
                      "Social Media",
                    ].map((service) => (
                      <label
                        key={service}
                        className="group flex items-center gap-3 rounded-lg border border-[var(--border-light)] bg-black/40 px-4 py-3 text-sm text-[var(--text-secondary)] transition"
                      >
                        <input
                          type="checkbox"
                          className="accent-[var(--accent-primary)]"
                        />
                        <span className="group-hover:text-[var(--text-primary)]">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-sm text-[var(--text-secondary)]">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your goals, timeline, or challenges..."
                    className="w-full rounded-xl border border-[var(--border-light)] bg-black/40 px-4 py-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/40"
                  />
                </div>

                {/* DIVIDER */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--accent-primary)]/40 to-transparent" />

                {/* SUBMIT */}

                <Button type="submit" text="Submit Inquiry" />
              </form>
            </div>

            {/* ================= RIGHT: FAQ ================= */}
            <div>
              <p className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)]">
                FAQs
              </p>

              <h3 className="mb-8 text-3xl font-bold text-[var(--text-primary)]">
                Everything You Might Want to Know
              </h3>

              <div className="space-y-3">
                {faqs.map((item, index) => (
                  <FAQAccordion
                    key={index}
                    question={item.q}
                    answer={item.a}
                    isOpen={openIndex === index}
                    onToggle={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  />
                ))}
              </div>
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

type InputProps = {
  label: string;
  placeholder?: string;
};

function Input({ label, placeholder }: InputProps) {
  return (
    <div className="relative">
      <label className="mb-2 block text-sm text-[var(--text-secondary)]">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-[var(--border-light)]
          bg-black/40
          px-4
          py-3
          text-sm
          text-[var(--text-primary)]
          placeholder:text-[var(--text-muted)]
          focus:outline-none
          focus:ring-2
          focus:ring-[var(--accent-primary)]/40
          focus:border-[var(--accent-primary)]/50
        "
      />
    </div>
  );
}

type FAQAccordionProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
};

function FAQAccordion({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQAccordionProps) {
  return (
    <div
      className={`rounded-xl border backdrop-blur-md transition-all duration-300 ${
        isOpen
          ? "border-[var(--border-accent)] bg-[var(--bg-glass)]"
          : "border-[var(--border-light)] bg-[var(--bg-glass)]"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        {/* QUESTION */}
        <span
          className={`text-xl transition-colors ${
            isOpen
              ? "font-semibold text-[var(--accent-primary)]"
              : "font-medium text-[var(--text-primary)]"
          }`}
        >
          {question}
        </span>

        {/* PLUS / MINUS ICON */}
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full border text-lg leading-none transition-all ${
            isOpen
              ? "border-[var(--accent-primary)] text-[var(--accent-primary)]"
              : "border-[var(--border-light)] text-[var(--text-muted)]"
          }`}
        >
          {isOpen ? "–" : "+"}
        </span>
      </button>

      {/* ANSWER */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div
          className={`overflow-hidden px-5 pb-4 transition-colors ${
            isOpen
              ? "text-sm  text-[var(--text-secondary)]"
              : "text-sm text-[var(--text-secondary)]"
          }`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}
