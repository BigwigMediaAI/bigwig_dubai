import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Dubai Market Expertise",
    desc: "We understand Dubai’s fast-moving, competitive digital ecosystem and build strategies that convert.",
  },
  {
    title: "Data-Driven Execution",
    desc: "Every campaign is backed by analytics, insights, and continuous optimization.",
  },
  {
    title: "ROI-Focused Growth",
    desc: "We prioritize real business outcomes — leads, sales, and scalability.",
  },
  {
    title: "Transparent Collaboration",
    desc: "Clear communication, honest reporting, and zero hidden surprises.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative w-full py-16 overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* ===== BACKGROUND DESIGN ===== */}

      {/* Curved vignette (top & bottom) */}
      {/* ===== BACKGROUND DESIGN (REFINED) ===== */}

      {/* Top & bottom vignette – softer */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Center soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-[#101010] to-[var(--bg-primary)]" />

      {/* LEFT: soft radial glow */}
      <div className="absolute left-[-200px] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/10 blur-[140px]" />

      {/* RIGHT: darker fade (no glow) */}
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/80 to-transparent" />

      {/* Subtle grid – center focused, faded edges */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 35%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, black 35%, transparent 70%)",
          opacity: 0.25,
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 mx-auto w-11/12 md:w-5/6">
        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur"
          >
            Why Choose Us
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight"
          >
            Designed for Brands That <br />
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
              Want Real Growth
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((item, i) => (
            <div
              key={i}
              data-aos="flip-left"
              data-aos-delay={i * 150}
              className="
    group relative rounded-2xl
    border border-[var(--border-light)]
    bg-black/30 backdrop-blur-xl p-7
    transition-all duration-300
    hover:border-[var(--accent-primary)]/60
    hover:-translate-y-1
  "
            >
              {/* Card glow */}
              <div
                className="
      pointer-events-none absolute -inset-px rounded-2xl
      bg-[var(--accent-primary)]/10
      opacity-0 blur-xl
      transition duration-300
      group-hover:opacity-100
    "
              />

              <div className="mb-4 flex items-center gap-3">
                <CheckCircle
                  size={22}
                  className="
    text-[var(--accent-primary)]
    drop-shadow-[0_0_6px_rgba(255,200,100,0.4)]
  "
                />

                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
              </div>

              <p className="text-[var(--text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
