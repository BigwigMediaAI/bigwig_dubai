"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  Building2,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Hotel,
  Car,
  Briefcase,
  Plane,
} from "lucide-react";

const industries = [
  { name: "Real Estate", icon: Building2 },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Education", icon: GraduationCap },
  { name: "Hospitality", icon: Hotel },
  { name: "Automotive", icon: Car },
  { name: "Corporate", icon: Briefcase },
  { name: "Travel & Tourism", icon: Plane },

  // 🔥 EXTRA (for smooth loop)
  { name: "Finance", icon: Briefcase },
  { name: "Startups", icon: Building2 },
  { name: "Luxury Brands", icon: Hotel },
  { name: "Retail", icon: ShoppingCart },
  { name: "Fitness & Gym", icon: Stethoscope },
  { name: "Beauty & Salon", icon: GraduationCap },
];

export default function Industries() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-[var(--bg-primary)]">
      {/* BACKGROUND (same premium) */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[#101010] to-[var(--bg-primary)]" />
      <div className="absolute left-[-220px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/15 blur-[160px]" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/80 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-11/12 md:w-5/6">
        {/* HEADING */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur">
            Industries We Serve
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] leading-[1.15]">
            Marketing Solutions Tailored for <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[var(--accent-primary)] via-[#FFD88A] to-[var(--accent-glow)] bg-clip-text text-transparent">
                Dubai’s Key Industries
              </span>
              <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-[var(--accent-primary)]/40 blur-sm" />
            </span>
          </h2>

          <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-[var(--accent-primary)] to-transparent rounded-full" />
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          speed={6000} // 🔥 smoother luxury scroll
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false} // 🔥 continuous feel
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <SwiperSlide key={index}>
                <div className="group relative h-full rounded-2xl border border-[var(--border-light)] bg-black/30 backdrop-blur-xl p-6 text-center transition-all duration-300  hover:shadow-[0_20px_60px_rgba(207,174,112,0.25)]">
                  {/* Glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--accent-primary)]/50 transition" />

                  {/* ICON */}
                  <div className="mb-4 flex justify-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/30 to-transparent border border-[var(--accent-primary)]/40 shadow-[0_0_20px_rgba(207,174,112,0.35)]">
                      <Icon
                        size={22}
                        className="text-[var(--accent-primary)]"
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                    {item.name}
                  </h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
