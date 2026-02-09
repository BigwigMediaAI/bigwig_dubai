"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* ================= TYPES ================= */

interface Testimonial {
  _id: string;
  name: string;
  designation: string;
  message: string;
  image: string | null;
  rating: number;
}

/* ================= COMPONENT ================= */

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [active, setActive] = useState<Testimonial | null>(null);

  /* ================= FETCH TESTIMONIALS ================= */
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/testimonial/public/list`,
        );
        const data = await res.json();

        setTestimonials(data);
        setActive(data[0]);
      } catch (error) {
        console.error("Failed to load testimonials");
      }
    };

    fetchTestimonials();
  }, []);

  /* ================= AUTO ROTATE (DESKTOP) ================= */
  useEffect(() => {
    if (!testimonials.length) return;

    const interval = setInterval(() => {
      setActive((prev) => {
        if (!prev) return testimonials[0];

        const currentIndex = testimonials.findIndex((t) => t._id === prev._id);
        return testimonials[(currentIndex + 1) % testimonials.length];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials]);

  if (!active) return null;

  return (
    <section className="relative bg-black overflow-hidden">
      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* CENTER GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/20 blur-[200px]" />

      <div className="relative z-10 mx-auto w-11/12 md:w-5/6 py-16">
        {/* ================= HEADING ================= */}
        <div className="mb-24 max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur">
            Client Testimonials
          </p>

          <h2 className="mb-6 text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
            Trusted by Brands That <br />
            <span className="bg-gradient-to-r from-[var(--accent-primary)] via-[#FFD88A] to-[var(--accent-glow)] bg-clip-text text-transparent">
              Demand Real Results
            </span>
          </h2>
        </div>

        {/* ================= DESKTOP ARC ================= */}
        <div className="relative hidden lg:flex justify-center">
          <div className="relative h-[420px] w-[760px]">
            {testimonials.map((item, index) => {
              const total = testimonials.length;
              const radius = 560;
              const centerY = 460;
              const startAngle = -Math.PI * 0.95;
              const endAngle = -Math.PI * 0.05;

              const angle =
                startAngle + (index * (endAngle - startAngle)) / (total - 1);

              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <button
                  key={item._id}
                  onClick={() => setActive(item)}
                  style={{
                    transform: `translate(${x}px, ${y + centerY}px)`,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 transition-all duration-500"
                >
                  <div
                    className={`relative h-24 w-24 rounded-full overflow-hidden ${
                      active._id === item._id
                        ? "ring-4 ring-[var(--border-accent)] scale-110 shadow-[0_0_45px_var(--accent-glow)]"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={item.image || "/ti.png"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </button>
              );
            })}

            {/* CENTER CONTENT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <Quote size={72} className="mb-10 text-[var(--accent-primary)]" />

              <p className="mb-8 max-w-xl text-lg md:text-2xl text-[var(--text-secondary)]">
                {active.message}
              </p>

              <div className="mb-6 flex gap-1">
                {Array.from({ length: active.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-[var(--accent-primary)] text-[var(--accent-primary)]"
                  />
                ))}
              </div>

              <p className="text-xl font-semibold text-[var(--text-primary)]">
                {active.name}
              </p>
              <p className="text-lg text-[var(--text-muted)]">
                {active.designation}
              </p>
            </div>
          </div>
        </div>

        {/* ================= MOBILE SWIPER ================= */}
        <div className="lg:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.05}
            centeredSlides
            loop
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item._id}>
                <MobileTestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

/* ================= MOBILE CARD ================= */

function MobileTestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="rounded-2xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-6 backdrop-blur-md text-center">
      <Quote size={40} className="mx-auto mb-4 text-[var(--accent-primary)]" />

      <p className="mb-6 text-base text-[var(--text-secondary)]">
        {item.message}
      </p>

      <div className="mb-4 flex justify-center gap-1">
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="fill-[var(--accent-primary)] text-[var(--accent-primary)]"
          />
        ))}
      </div>

      <p className="font-semibold text-[var(--text-primary)]">{item.name}</p>
      <p className="text-sm text-[var(--text-muted)]">{item.designation}</p>
    </div>
  );
}
