"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import GlobalCTA from "../components/Cta";
import Button from "../components/Button";
import ServicePopup from "../components/Popup";

interface Client {
  _id: string;
  name: string;
  image: string;
}

export default function ClientPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

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
      <Navbar />

      {/* HERO */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <Image
          src="/aboutpage.png"
          alt="Trusted clients"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/20 blur-[200px]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-4 flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Link href="/" className="hover:text-[var(--accent-primary)]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--text-secondary)]">Clients</span>
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              Trusted by Brands <br />
              <span className="text-[var(--accent-primary)]">
                That Scale & Succeed
              </span>
            </h1>

            {/* Subtext */}
            <p className="max-w-xl text-lg text-[var(--text-secondary)]">
              We partner with ambitious brands across Dubai to drive measurable
              growth, increase revenue, and build long-term digital success.
            </p>

            {/* 🔥 TRUST */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
              <span>⭐ 5.0 Client Satisfaction</span>
              <span>{clients.length}+ Brands</span>
              <span>ROI-Focused Growth</span>
            </div>

            {/* 🔥 CTA */}
            <div className="mt-8 flex gap-4">
              <Button text="Work With Us" onClick={() => setOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="relative overflow-hidden bg-black py-16">
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--accent-primary)]/12 blur-[200px]" />

        <div className="relative z-10 mx-auto w-11/12 md:w-5/6">
          {/* Heading */}
          <div className="mb-20 text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-1 text-sm text-[var(--text-secondary)]">
              Trusted Partnerships
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
              Brands That{" "}
              <span className="text-[var(--accent-primary)]">
                Trust Our Work
              </span>
            </h2>
          </div>

          {/* LOADER */}
          {loading ? (
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="animate-pulse flex justify-center">
                  <div className="aspect-square w-full max-w-[230px] rounded-3xl bg-white/[0.05]" />
                </div>
              ))}
            </div>
          ) : clients.length === 0 ? (
            <div className="text-center py-24">
              <h3 className="text-xl text-white">No clients yet</h3>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-4">
              {clients.map((client, index) => (
                <div
                  key={client._id}
                  className="group relative flex justify-center"
                >
                  {/* Card */}
                  <div className="relative flex aspect-square w-full max-w-[230px] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-500 hover:scale-[1.05] hover:border-[var(--accent-primary)]/40">
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={180}
                      height={180}
                      className="object-contain bg-white p-4 rounded-xl grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
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
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
