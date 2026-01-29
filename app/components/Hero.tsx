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
        alt="Digital marketing background"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[var(--bg-primary)]/60" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
        <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 items-center">
          {/* LEFT CONTENT */}
          <div className="text-[var(--text-primary)]">
            <p
              data-aos="fade-right"
              className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur"
            >
              🚀 Growth-driven digital marketing agency
            </p>

            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
            >
              Build a Powerful <br />
              <span className="text-[var(--accent-primary)]">
                Digital Presence
              </span>{" "}
              in Dubai
            </h1>

            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="mb-8 max-w-xl text-[var(--text-secondary)] text-lg"
            >
              We help brands dominate search, social, and paid media with
              data-driven strategies designed for Dubai’s competitive market.
            </p>

            {/* CTA BUTTONS */}
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="flex flex-wrap gap-4"
            >
              <Button
                text="Get Free Strategy Call"
                onClick={() => setOpen(true)}
              />
              <Link href="/services">
                <Button
                  text="View Services"
                  className="bg-transparent border border-[var(--border-light)] text-[var(--text-primary)] "
                />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden md:flex items-center justify-start"></div>
        </div>
      </div>
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </section>
  );
}
