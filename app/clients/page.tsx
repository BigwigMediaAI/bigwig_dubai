"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import GlobalCTA from "../components/Cta";

/* ================= TYPES ================= */
interface Client {
  _id: string;
  name: string;
  image: string;
}

export default function ClientPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH CLIENTS ================= */
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/client`);
        const data = await res.json();
        setClients(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch clients");
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="relative bg-black">
      {/* NAVBAR */}
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/aboutpage.png"
          alt="Trusted clients and brand partnerships"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/20 blur-[200px]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Link href="/" className="hover:text-[var(--accent-primary)]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--text-secondary)]">Clients</span>
            </div>

            <h1 className="mb-6 text-4xl md:text-6xl font-bold text-[var(--text-primary)]">
              Brands That <br />
              <span className="text-[var(--accent-primary)]">
                Trust & Grow With Us
              </span>
            </h1>

            <p className="max-w-xl text-lg text-[var(--text-secondary)]">
              From ambitious startups to established enterprises, we partner
              with brands that value strategy, creativity, and measurable
              digital growth.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CLIENTS SECTION ================= */}
      <section className="relative overflow-hidden bg-black py-16">
        {/* ===== ACCENT GLOW ===== */}
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent-primary)]/12 blur-[200px]" />

        {/* ===== DOT PATTERN ===== */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative z-10 mx-auto w-11/12 md:w-5/6">
          {/* ================= HEADING ================= */}
          <div className="mb-20 text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
              Trusted Partnerships
            </p>

            <h2 className="text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-[var(--accent-primary)] via-[#FFD88A] to-[var(--accent-glow)] bg-clip-text text-transparent">
                Leading Brands
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[var(--text-secondary)]">
              We collaborate with ambitious brands to build long-term growth and
              digital authority.
            </p>
          </div>

          {/* ================= CONTENT ================= */}
          {loading ? (
            /* ===== LOADER ===== */
            <div className="py-24 text-center text-[var(--text-secondary)]">
              Loading trusted brands...
            </div>
          ) : clients.length === 0 ? (
            /* ===== EMPTY STATE ===== */
            <div className="mx-auto max-w-3xl py-24 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[var(--accent-primary)]/15 text-4xl">
                🤝
              </div>

              <h3 className="mb-4 text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
                Your Brand Could Be Here
              </h3>

              <p className="mb-8 leading-relaxed text-[var(--text-secondary)]">
                We’re currently onboarding new partners. Be among the first
                brands to collaborate with us and grow your digital presence.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-[var(--accent-primary)] px-6 py-3 font-medium text-black transition hover:opacity-90"
              >
                Become a Partner
              </Link>
            </div>
          ) : (
            /* ================= LOGO GRID ================= */
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4">
              {clients.map((client, index) => (
                <div
                  key={client._id}
                  data-aos="flip-left"
                  data-aos-delay={index * 120}
                  className="group relative flex items-center justify-center"
                >
                  {/* Glow on hover */}
                  <div className="absolute -inset-4 rounded-3xl bg-[var(--accent-primary)]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Square Card */}
                  <div className="relative flex aspect-square w-full max-w-[230px] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[var(--accent-primary)]/40 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                    <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-[var(--accent-primary)] opacity-70" />

                    {/* Logo */}
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={180}
                      height={180}
                      className="
                  object-contain
                  rounded-xl
                  bg-white
                  p-4
                  shadow-[0_8px_25px_rgba(0,0,0,0.08)]
                  grayscale
                  opacity-80
                  transition-all
                  duration-500
                  group-hover:grayscale-0
                  group-hover:opacity-100
                "
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <GlobalCTA />
      <Footer />
    </div>
  );
}
