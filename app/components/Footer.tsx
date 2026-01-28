import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Send,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footer.png" // <-- your generated image
          alt="Dubai skyline at night"
          fill
          className="object-cover"
          priority
        />
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/75" />
        {/* SOFT GOLD TINT */}
        <div className="absolute inset-0 bg-[var(--bg-primary)]/60" />
      </div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-4">
          {/* BRAND */}
          <div className="space-y-6">
            <Image
              src="/bigwig-logo.png"
              alt="Bigwig"
              width={150}
              height={40}
            />

            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <p>
                <span className="text-[var(--text-primary)] font-medium">
                  Call:
                </span>{" "}
                +971 55 456 7592
              </p>
              <p>
                <span className="text-[var(--text-primary)] font-medium">
                  Email:
                </span>{" "}
                info@bigwig.com
              </p>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map(
                (Icon, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full
                    border border-[var(--border-light)]
                    text-[var(--text-secondary)]
                    hover:border-[var(--accent-primary)]
                    hover:text-[var(--accent-primary)]
                    transition"
                  >
                    <Icon size={16} />
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[var(--text-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              {[
                { label: "About Us", href: "/about" },
                { label: "Clients", href: "/clients" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center gap-2 text-[var(--text-secondary)] transition hover:text-[var(--accent-primary)]"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[var(--accent-primary)] opacity-70 transition-transform duration-300 group-hover:translate-x-1"
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[var(--text-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
              Services
            </h4>

            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              {[
                "SEO Optimization",
                "Performance Marketing",
                "Social Media Marketing",
                "Content Marketing",
                "Web Development",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-[var(--text-secondary)] transition hover:text-[var(--accent-primary)]"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[var(--accent-primary)] opacity-70 transition-transform duration-300 group-hover:translate-x-1"
                    />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="mb-6 flex items-center gap-2 text-lg font-semibold text-[var(--text-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent-primary)]" />
              Get Updates
            </h4>

            <p className="mb-5 text-sm text-[var(--text-secondary)]">
              Get growth tips, insights & latest updates. No spam.
            </p>

            <form className="flex items-center overflow-hidden rounded-full border border-[var(--border-light)] bg-black/30 backdrop-blur">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)]"
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-[var(--accent-primary)] px-4 py-3 text-black hover:opacity-90 transition"
              >
                <Send size={16} />
              </button>
            </form>

            <p className="mt-4 text-xs text-[var(--text-secondary)]">
              🏆 Award-winning digital agency
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-5 backdrop-blur">
        <p className="text-center text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()}{" "}
          <span className="text-[var(--accent-primary)] font-medium">
            Bigwig
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
