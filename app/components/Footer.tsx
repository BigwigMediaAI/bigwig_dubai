"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  /* ================= NEWSLETTER STATE ================= */
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"success" | "error" | "info" | "">("");

  /* ================= SUBSCRIBE HANDLER ================= */
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      setLoading(true);
      setMessage("");
      setStatus("");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/subscribers`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        // already subscribed or validation error
        setStatus("info");
        setMessage(data.message || "You are already subscribed.");
        return;
      }

      setStatus("success");
      setMessage("🎉 Successfully subscribed! Thank you.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footer.png"
          alt="Dubai skyline at night"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-[var(--bg-primary)]/60" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-4">
          {/* BRAND */}
          <div className="space-y-6">
            <Image
              src="/bigwig-logo.png"
              alt="Bigwig"
              width={150}
              height={40}
            />

            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <p>
                <span className="text-[var(--text-primary)] font-medium">
                  Call:
                </span>{" "}
                +971 55 456 7592
              </p>
              <p>
                <span className="text-[var(--text-primary)] font-medium">
                  Email:
                </span>{" "}
                info@bigwig.com
              </p>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full
                    border border-[var(--border-light)]
                    text-[var(--text-secondary)]
                    hover:border-[var(--accent-primary)]
                    hover:text-[var(--accent-primary)]
                    transition"
                  >
                    <Icon size={16} />
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[var(--text-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              {[
                { label: "About Us", href: "/about" },
                { label: "Clients", href: "/clients" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 transition hover:text-[var(--accent-primary)]"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[var(--accent-primary)] opacity-70 group-hover:translate-x-1 transition"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[var(--text-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
              Services
            </h4>

            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              {[
                {
                  label: "Search Engine Optimization",
                  href: "/services/search-engine-optimization",
                },
                {
                  label: "Performance Marketing",
                  href: "/services/performance-marketing",
                },
                {
                  label: "Social Media Marketing",
                  href: "/services/social-media-marketing",
                },
                {
                  label: "Content Marketing",
                  href: "/services/content-marketing",
                },
                {
                  label: "Website Development",
                  href: "/services/website-development",
                },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 transition hover:text-[var(--accent-primary)]"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[var(--accent-primary)] opacity-70 group-hover:translate-x-1 transition"
                    />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[var(--text-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
              Get Updates
            </h4>

            <p className="mb-5 text-sm text-[var(--text-secondary)]">
              Get growth tips, insights & latest updates. No spam.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex items-center overflow-hidden rounded-full border border-[var(--border-light)] bg-black/30 backdrop-blur"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-transparent px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)]"
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center bg-[var(--accent-primary)] px-4 py-3 text-black hover:opacity-90 transition"
              >
                {loading ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                ) : (
                  <Send size={16} className="rotate-45" />
                )}
              </button>
            </form>
            {message && (
              <p
                className={`mt-3 text-xs ${
                  status === "success"
                    ? "text-green-400"
                    : status === "info"
                      ? "text-yellow-400"
                      : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}

            <p className="mt-4 text-xs text-[var(--text-secondary)]">
              🏆 Award-winning digital agency
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t mb-12 md:mb-0 border-white/10 py-5 backdrop-blur">
        <p className="text-center text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()}{" "}
          <span className="text-[var(--accent-primary)] font-medium">
            Bigwig
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
