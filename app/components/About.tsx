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

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-11/12 md:w-5/6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT: IMAGE */}
          <div className="relative">
            {/* Image glow */}
            <div className="absolute -inset-6 rounded-3xl bg-[var(--accent-primary)]/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-[var(--border-light)]">
              <Image
                src="/about.png"
                alt="Digital marketing team in Dubai"
                width={600}
                height={700}
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="text-[var(--text-primary)]">
            <p className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur">
              About Us
            </p>

            <h2 className="mb-6 text-3xl md:text-5xl font-bold leading-tight">
              A Digital Marketing Agency <br />
              Built for{" "}
              <span className="text-[var(--accent-primary)]">
                Dubai’s Competitive Market
              </span>
            </h2>

            <p className="mb-6 text-lg text-[var(--text-secondary)] leading-relaxed">
              We are a performance-driven digital marketing agency helping
              brands grow visibility, traffic, and revenue in one of the world’s
              most competitive business landscapes — Dubai.
            </p>

            <p className="mb-8 text-[var(--text-secondary)] leading-relaxed">
              From SEO and paid media to content and conversion optimization, we
              combine strategy, creativity, and data to deliver measurable
              results — not vanity metrics.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { value: "250+", label: "Projects Delivered" },
                { value: "4.9★", label: "Client Satisfaction" },
                { value: "8+", label: "Years Experience" },
                { value: "Global", label: "Clients Served" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-bold text-[var(--accent-primary)]">
                    {item.value}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button text="Learn More About Us" href="#services" />
          </div>
        </div>
      </div>
    </section>
  );
}
