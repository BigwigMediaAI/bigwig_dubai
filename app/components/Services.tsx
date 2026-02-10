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
    slug: "search-engine-optimization",
    name: "SEO & Organic Growth",
    icon: Search,
    title: "Rank Higher. Get Found. Grow Organically.",
    desc: "We drive sustainable organic growth through technical SEO, content strategy, and authority building tailored for competitive markets.",
    points: [
      "Local & international SEO",
      "Technical SEO & audits",
      "Content-led ranking strategy",
    ],
    image: "/services/seo.png",
  },

  {
    id: "performance",
    slug: "performance-marketing",
    name: "Performance Marketing",
    icon: TrendingUp,
    title: "High-Intent Traffic That Converts",
    desc: "ROI-focused paid campaigns across Google, Meta, and LinkedIn designed to scale profitably with full-funnel optimization.",
    points: [
      "Google, Meta & LinkedIn Ads",
      "Conversion-focused funnels",
      "Advanced tracking & optimization",
    ],
    image: "/services/performance.png",
  },

  {
    id: "smm",
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    icon: Share2,
    title: "Build Authority & Engagement on Social",
    desc: "We grow brands through strategic content, community engagement, and paid social campaigns that drive real impact.",
    points: [
      "Content & reel strategy",
      "Paid social growth",
      "Community management",
    ],
    image: "/services/smm.png",
  },

  {
    id: "content",
    slug: "content-marketing",
    name: "Content Marketing",
    icon: PenTool,
    title: "Content That Builds Trust & Demand",
    desc: "High-quality content designed to educate, influence, and convert — across blogs, landing pages, and campaigns.",
    points: [
      "Blogs & long-form content",
      "Landing page copy",
      "Inbound demand generation",
    ],
    image: "/services/content.png",
  },

  {
    id: "web",
    slug: "website-development",
    name: "Website Development",
    icon: Monitor,
    title: "Websites Built for Speed & Conversion",
    desc: "High-performance websites engineered for UX, speed, scalability, and measurable business results.",
    points: [
      "Custom website development",
      "Conversion-focused UI/UX",
      "Performance & analytics setup",
    ],
    image: "/services/web.png",
  },

  {
    id: "email",
    slug: "email-marketing",
    name: "Email Marketing",
    icon: Search,
    title: "Turn Subscribers Into Customers",
    desc: "Personalized email campaigns that nurture leads, increase retention, and drive repeat revenue.",
    points: [
      "Campaign & newsletter strategy",
      "Automation & segmentation",
      "Retention-focused flows",
    ],
    image: "/services/email.png",
  },

  {
    id: "smo",
    slug: "social-media-optimization",
    name: "Social Media Optimization (SMO)",
    icon: TrendingUp,
    title: "Optimize Profiles for Visibility & Growth",
    desc: "We optimize social profiles to increase reach, engagement, and brand credibility across platforms.",
    points: [
      "Profile & bio optimization",
      "Hashtag & posting strategy",
      "Organic reach improvement",
    ],
    image: "/services/smo.png",
  },

  {
    id: "design",
    slug: "graphic-video-design",
    name: "Graphic & Video Design",
    icon: Share2,
    title: "Visuals That Capture Attention",
    desc: "High-impact creatives designed to stop the scroll and reinforce your brand identity across platforms.",
    points: [
      "Brand creatives & ad designs",
      "Short-form & promo videos",
      "Social & marketing visuals",
    ],
    image: "/services/design.png",
  },

  {
    id: "affiliate",
    slug: "affiliate-marketing",
    name: "Affiliate Marketing",
    icon: PenTool,
    title: "Scale Revenue Through Partnerships",
    desc: "We help you build and manage affiliate programs that drive consistent, performance-based growth.",
    points: [
      "Affiliate program setup",
      "Partner recruitment",
      "Tracking & performance optimization",
    ],
    image: "/services/affiliate.png",
  },

  {
    id: "influencer",
    slug: "influencer-marketing",
    name: "Influencer Marketing",
    icon: Monitor,
    title: "Influence That Drives Action",
    desc: "Strategic influencer collaborations that amplify reach, build trust, and generate measurable results.",
    points: [
      "Influencer sourcing & vetting",
      "Campaign execution",
      "Performance tracking",
    ],
    image: "/services/influencer.png",
  },

  {
    id: "orm",
    slug: "online-reputation-management",
    name: "Online Reputation Management (ORM)",
    icon: PenTool,
    title: "Protect & Strengthen Your Brand Image",
    desc: "We monitor, manage, and improve your online reputation to build long-term trust and credibility.",
    points: [
      "Review monitoring & response",
      "Brand sentiment management",
      "Crisis & reputation control",
    ],
    image: "/services/orm.png",
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
        <div className="mb-10 max-w-3xl">
          <p
            data-aos="zoom-in"
            className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)]"
          >
            Our Services
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight"
          >
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
          <div className="my-6 h-[2px] w-24 bg-gradient-to-r from-[var(--accent-primary)] to-transparent rounded-full" />
        </div>

        {/* ===== GRID ===== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* LEFT: SERVICE LIST */}
          <div data-aos="fade-up" data-aos-delay="250" className="relative">
            <div className="max-h-[420px] scrollbar-hide overflow-y-auto space-y-2 rounded-2xl border border-[var(--border-light)] bg-black/20 p-3 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] custom-scrollbar">
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
          <div
            data-aos="zoom-in"
            data-aos-delay="350"
            className="text-[var(--text-primary)]"
          >
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
            <div
              data-aos="zoom-in"
              data-aos-delay="450"
              className="relative overflow-hidden rounded-2xl border border-[var(--border-light)]"
            >
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
