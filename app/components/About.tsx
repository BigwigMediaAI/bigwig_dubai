import Image from "next/image";
import Button from "../components/Button";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-[var(--bg-primary)] py-16 overflow-hidden"
    >
      {/* BACKGROUND DECORATION */}
      {/* Soft gold glow */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--accent-primary)]/10 blur-[120px]" />
      <div className="absolute bottom-0 -right-40 h-[400px] w-[400px] rounded-full bg-[var(--accent-primary)]/10 blur-[120px]" />

      {/* Subtle dotted pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 via-transparent to-black" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-11/12 md:w-5/6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT: IMAGE */}
          <div className="relative">
            {/* Image glow */}
            <div className="absolute -inset-6 rounded-3xl bg-[var(--accent-primary)]/20 blur-2xl" />

            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="relative overflow-hidden rounded-tl-[60px] rounded-br-[60px]
             border border-[var(--border-accent)]
             bg-gradient-to-br from-black via-[#141414] to-black
             shadow-[0_25px_80px_rgba(207,174,112,0.25)]"
            >
              <Image
                src="/about.png"
                alt="Digital marketing team in Dubai"
                width={600}
                height={700}
                className="object-cover"
              />

              {/* Gold sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-[var(--accent-primary)]/10 to-transparent" />
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="text-[var(--text-primary)]">
            <p
              data-aos="zoom-in"
              className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur"
            >
              About Us
            </p>

            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="mb-6 text-3xl md:text-5xl font-bold leading-tight"
            >
              A Digital Marketing Agency <br />
              Built for{" "}
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
                Dubai’s Competitive Market
              </span>
            </h2>
            <div className="my-6 h-[2px] w-24 bg-gradient-to-r from-[var(--accent-primary)] to-transparent rounded-full" />

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="mb-6 text-lg text-[var(--text-secondary)] leading-relaxed"
            >
              We are a performance-driven digital marketing agency helping
              brands grow visibility, traffic, and revenue in one of the world’s
              most competitive business landscapes — Dubai.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className="mb-8 text-[var(--text-secondary)] leading-relaxed"
            >
              From SEO and paid media to content and conversion optimization, we
              combine strategy, creativity, and data to deliver measurable
              results — not vanity metrics.
            </p>

            {/* CTA */}
            <div data-aos="flip-left" data-aos-delay="700">
              <Button text="Learn More About Us" href="/about" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
