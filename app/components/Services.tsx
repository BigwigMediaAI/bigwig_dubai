"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../components/Button";
import {
  Search,
  TrendingUp,
  Share2,
  PenTool,
  Monitor,
  Zap,
} from "lucide-react";

/* ================= SERVICES DATA ================= */

const services = [
  {
    id: "seo",
    slug: "seo",
    name: "SEO & Organic Growth",
    icon: Search,
    title: "Rank Higher. Get Found. Grow Organically.",
    desc: "We build long-term organic visibility through technical SEO, content strategy, and authority building tailored for Dubai’s competitive market.",
    points: [
      "Local & International SEO",
      "Technical SEO & audits",
      "Content-led ranking strategy",
    ],
    image: "/services/seo.png",
  },
  {
    id: "ads",
    slug: "performance-marketing",
    name: "Performance Marketing",
    icon: TrendingUp,
    title: "High-Intent Traffic That Converts",
    desc: "Data-driven paid campaigns across Google, Meta, and LinkedIn designed to maximize ROI and scale profitably.",
    points: ["Google & Meta Ads", "Funnel optimization", "Conversion tracking"],
    image: "/services/performance.png",
  },
  {
    id: "social",
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    icon: Share2,
    title: "Build Brand Authority on Social",
    desc: "We combine content, creatives, and paid strategies to grow engaged audiences and real business results.",
    points: [
      "Content & reels strategy",
      "Paid social growth",
      "Community engagement",
    ],
    image: "/services/smm.png",
  },
  {
    id: "content",
    slug: "content-branding",
    name: "Content & Branding",
    icon: PenTool,
    title: "Content That Builds Trust & Authority",
    desc: "Strategic content that positions your brand as a leader and drives qualified inbound demand.",
    points: ["Blogs & landing pages", "Brand messaging", "Authority building"],
    image: "/services/content.png",
  },
  {
    id: "web",
    slug: "web-cro",
    name: "Web & CRO",
    icon: Monitor,
    title: "Websites Built to Convert",
    desc: "High-performance websites optimized for speed, UX, and conversion rate optimization.",
    points: [
      "Conversion-focused UI",
      "Landing page optimization",
      "Analytics & testing",
    ],
    image: "/services/web.png",
  },
  {
    id: "automation",
    slug: "marketing-automation",
    name: "Marketing Automation",
    icon: Zap,
    title: "Scale Faster With Automation",
    desc: "Automate follow-ups, lead nurturing, and workflows to scale without increasing overhead.",
    points: ["CRM automation", "Email & WhatsApp flows", "Lead scoring"],
    image: "/services/marketing.png",
  },
];

/* ================= COMPONENT ================= */

export default function Services() {
  const [active, setActive] = useState(services[0]);
  const ActiveIcon = active.icon;

  return (
    <section
      id="services"
      className="relative w-full py-16 overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--accent-primary)]/10 blur-[140px]" />
      <div className="absolute bottom-0 -right-40 h-[400px] w-[400px] rounded-full bg-[var(--accent-primary)]/10 blur-[140px]" />

      {/* subtle dots */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 mx-auto w-11/12 md:w-5/6">
        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)]">
            Our Services
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
            Everything You Need to{" "}
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
              Grow Digitally
            </span>
          </h2>
        </div>

        {/* ===== GRID ===== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* LEFT: SERVICE LIST */}
          <div className="relative">
            <div className="max-h-[420px] overflow-y-auto space-y-2 rounded-2xl border border-[var(--border-light)] bg-black/20 p-3 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] custom-scrollbar">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActive(service)}
                    className={`w-full rounded-xl px-4 py-3 text-left transition-all
                      ${
                        active.id === service.id
                          ? "bg-white/5 border border-[var(--accent-primary)]/40"
                          : "border border-transparent hover:bg-white/5"
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={16}
                        className={
                          active.id === service.id
                            ? "text-[var(--accent-primary)]"
                            : "text-[var(--text-secondary)]"
                        }
                      />
                      <span className="text-sm font-medium text-[var(--text-primary)]">
                        {service.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SOFT DIVIDER */}
          <div className="hidden lg:block absolute left-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {/* MIDDLE: CONTENT */}
          <div className="text-[var(--text-primary)]">
            <ActiveIcon
              size={52}
              className="text-[var(--accent-primary)] mb-5"
            />
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-2xl font-bold">{active.title}</h3>
            </div>

            <p className="mb-6 text-[var(--text-secondary)] leading-relaxed">
              {active.desc}
            </p>

            <ul className="mb-8 space-y-3">
              {active.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]" />
                  {point}
                </li>
              ))}
            </ul>

            <Button text="Read More" href={`/services/${active.slug}`} />
          </div>

          <div className="hidden lg:block absolute left-2/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          {/* RIGHT: IMAGE */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--border-light)]">
              {/* moving glow */}

              <Image
                src={active.image}
                alt={active.name}
                width={420}
                height={400}
                className="relative z-10 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
