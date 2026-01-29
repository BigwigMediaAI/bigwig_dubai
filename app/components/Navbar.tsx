"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "../components/Button";
import ServicePopup from "./Popup";

const services = [
  {
    name: "SEO (Search Engine Optimization)",
    href: "search-engine-optimization",
  },
  { name: "SMM (Social Media Marketing)", href: "social-media-marketing" },
  { name: "Performance Marketing", href: "performance-marketing" },
  { name: "Content Marketing", href: "content-marketing" },
  { name: "Website Development", href: "website-development" },
  { name: "Email Marketing", href: "email-marketing" },
  {
    name: "SMO (Social Media Optimization)",
    href: "social-media-optimization",
  },
  { name: "Graphic & Video Design", href: "graphic-video-design" },
  { name: "Affiliate Marketing", href: "affiliate-marketing" },
  { name: "Influencer Marketing", href: "influencer-marketing" },
  {
    name: "Online Reputation Management (ORM)",
    href: "online-reputation-management",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300
        `}
    >
      <div
        className={`${
          scrolled
            ? "bg-[var(--bg-glass)] backdrop-blur-xl border-b border-[var(--border-light)]"
            : "bg-transparent"
        }`}
      >
        {/* NAVBAR */}
        <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 py-4">
          {/* LEFT: LOGO (auto width) */}
          <Link href="/" className="flex items-center">
            <Image
              src="/bigwig-logo.png"
              alt="Bigwig Logo"
              width={140}
              height={44}
              priority
            />
          </Link>

          {/* CENTER: MENU (takes remaining width) */}
          <div className="hidden lg:flex justify-center">
            <ul className="flex items-center gap-12 rounded-full px-12 border border-[var(--border-light)] mx-auto">
              <li>
                <Link
                  href="/about"
                  className="text-base font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                >
                  About
                </Link>
              </li>

              {/* SERVICES DROPDOWN */}
              <li
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center py-3 gap-1 text-base font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition">
                  <Link href="/services">Services</Link>{" "}
                  <ChevronDown size={16} />
                </button>

                {servicesOpen && (
                  <div
                    className="
      absolute top-full left-1/2 z-50  w-[720px]
      -translate-x-1/2
      rounded-3xl
      border border-[var(--border-light)]
      bg-[var(--bg-secondary)]
      backdrop-blur-2xl
      shadow-2xl
    "
                  >
                    {/* SOFT GOLD GLOW */}
                    <div className="pointer-events-none absolute -top-32 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[var(--accent-primary)]/20 blur-[160px]" />

                    {/* GRID */}
                    <div className="relative grid grid-cols-4 gap-3 p-4">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={`/services/${service.href}`}
                          className="
            group
            relative
            rounded-2xl
            border border-transparent
            px-4 py-4
            transition-all duration-300
            hover:border-[var(--accent-primary)]/40
            hover:bg-white/5
          "
                        >
                          {/* HOVER GLOW */}
                          <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[var(--accent-primary)]/10 opacity-0 blur-xl transition group-hover:opacity-100" />

                          <span className="relative z-10 block text-sm font-thin  text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition">
                            {service.name}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* FOOTER CTA */}
                    <div className="border-t border-white/10 px-6 py-4 text-center">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-xs font-medium text-[var(--accent-primary)] transition hover:underline"
                      >
                        View all services
                        <span className="text-sm">→</span>
                      </Link>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/clients"
                  className="text-base font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                >
                  Clients
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-base font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-base font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* RIGHT: CTA (auto width) */}
          <div className="hidden lg:flex">
            <Button onClick={() => setOpen(true)} text="Get In Touch" />
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden justify-self-end text-[var(--text-primary)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden
    ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm
    bg-[var(--bg-glass)] backdrop-blur-xl
    border-l border-[var(--border-light)]
    transform transition-transform duration-300 lg:hidden
    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-light)]">
          <Image
            src="/bigwig-logo.png"
            alt="Bigwig Logo"
            width={120}
            height={36}
          />
          <button onClick={() => setMenuOpen(false)}>
            <X className="text-[var(--text-primary)]" size={26} />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            About
          </Link>

          {/* SERVICES (SINGLE ITEM ONLY) */}
          <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            Services
          </Link>

          <Link
            href="/clients"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            Clients
          </Link>

          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            Blog
          </Link>

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-lg font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            Contact
          </Link>

          <Button
            text="Get In Touch"
            onClick={() => setOpen(true)}
            className=" justify-center mt-6"
          />
        </div>
      </div>
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </header>
  );
}
