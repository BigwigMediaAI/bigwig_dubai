"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* ================= DATA ================= */

const testimonials = [
  {
    id: 1,
    name: "James R.",
    role: "Startup Founder",
    image: "/t1.webp",
    text: "From start to finish, the communication was seamless and the design blew us away. They really know how to bring a brand to life!",
    rating: 5,
  },
  {
    id: 2,
    name: "Emma L.",
    role: "Marketing Head",
    image: "/t1.webp",
    text: "Professional team with excellent execution. Highly recommended.",
    rating: 5,
  },
  {
    id: 3,
    name: "Daniel K.",
    role: "E-commerce Owner",
    image: "/t1.webp",
    text: "Conversions increased massively after working with them.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sophia M.",
    role: "Brand Manager",
    image: "/t1.webp",
    text: "Clean design, great communication, and solid results.",
    rating: 5,
  },
  {
    id: 5,
    name: "Chris P.",
    role: "SaaS Founder",
    image: "/t1.webp",
    text: "They understand branding at a very deep level.",
    rating: 5,
  },
  {
    id: 6,
    name: "Olivia N.",
    role: "Consultant",
    image: "/t1.webp",
    text: "Everything was smooth and well executed.",
    rating: 5,
  },
  {
    id: 7,
    name: "Ryan T.",
    role: "Agency Owner",
    image: "/t1.webp",
    text: "One of the best teams we have worked with.",
    rating: 5,
  },
  {
    id: 8,
    name: "Ava S.",
    role: "Product Lead",
    image: "/t1.webp",
    text: "High quality output with attention to detail.",
    rating: 5,
  },
];

/* ================= COMPONENT ================= */

export default function Testimonials() {
  const [active, setActive] = useState(testimonials[0]);

  /* AUTO ROTATE (DESKTOP) */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const currentIndex = testimonials.findIndex((t) => t.id === prev.id);
        return testimonials[(currentIndex + 1) % testimonials.length];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-black overflow-hidden">
      {/* MAZE / GRID BACKGROUND – FULL SECTION */}
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

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 mx-auto w-11/12 md:w-5/6 py-16">
        {/* ================= HEADING ================= */}
        <div className="mb-24 max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur">
            Client Testimonials
          </p>

          <h2 className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]">
            Trusted by Brands That <br />
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
              Demand Real Results
            </span>
          </h2>
        </div>

        {/* ================= DESKTOP ARC ================= */}
        <div className="relative hidden lg:flex justify-center">
          <div className="relative h-[420px] w-[760px]">
            {/* AVATAR ARC */}
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
                  key={item.id}
                  onClick={() => setActive(item)}
                  style={{
                    transform: `translate(${x}px, ${y + centerY}px)`,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 transition-all duration-500"
                >
                  <div
                    className={`relative h-24 w-24 rounded-full overflow-hidden
                    ${
                      active.id === item.id
                        ? "ring-4 ring-[var(--border-accent)] scale-110 shadow-[0_0_45px_var(--accent-glow)]"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={item.image}
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
              <div className="mb-10">
                <Quote
                  size={72}
                  strokeWidth={2.2}
                  className="text-[var(--accent-primary)]"
                />
              </div>

              <p className="mb-8 max-w-xl text-lg md:text-2xl leading-relaxed text-[var(--text-secondary)]">
                {active.text}
              </p>

              <div className="mb-8 flex items-center justify-center gap-3">
                <span className="h-px w-40 bg-[var(--border-accent)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
                <span className="h-px w-40 bg-[var(--border-accent)]" />
              </div>

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
              <p className="text-lg text-[var(--text-muted)]">{active.role}</p>
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
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
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

function MobileTestimonialCard({ item }: { item: any }) {
  return (
    <div className="rounded-2xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-6 backdrop-blur-md text-center">
      <Quote size={40} className="mx-auto mb-4 text-[var(--accent-primary)]" />

      <p className="mb-6 text-base leading-relaxed text-[var(--text-secondary)]">
        {item.text}
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
      <p className="text-sm text-[var(--text-muted)]">{item.role}</p>
    </div>
  );
}
