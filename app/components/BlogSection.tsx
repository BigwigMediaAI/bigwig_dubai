"use client";

import Image from "next/image";

/* ================= BLOG DATA ================= */

const blogs = [
  {
    id: 1,
    title: "How Brands Can Dominate Dubai’s Digital Market in 2025",
    excerpt:
      "A deep dive into proven strategies that help brands grow faster, convert smarter, and scale profitably in competitive markets.",
    image: "/footer.png",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "SEO Trends Every Dubai Business Should Know",
    image: "/footer.png",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Paid Ads Strategies That Actually Convert",
    image: "/footer.png",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Content Marketing Mistakes Brands Still Make",
    image: "/footer.png",
    readTime: "6 min read",
  },
];

/* ================= COMPONENT ================= */

export default function BlogSection() {
  const featuredBlog = blogs.find((b) => b.featured);
  const sideBlogs = blogs.filter((b) => !b.featured);

  return (
    <section className="relative bg-black overflow-hidden">
      {/* MAZE / GRID BACKGROUND */}
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
      <div className="relative z-10 mx-auto w-11/12 md:w-5/6 py-16">
        {/* ================= HEADING ================= */}
        <div className="mb-20 max-w-3xl">
          <p
            data-aos="zoom-in"
            data-aos-delay="150"
            className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur"
          >
            Insights & Articles
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="250"
            className="mb-6 text-3xl md:text-5xl font-bold leading-tight text-[var(--text-primary)]"
          >
            Latest Insights on <br />
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
              Growth & Digital Strategy
            </span>
          </h2>
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FEATURED BLOG (BIG – 3 ROWS) */}
          {featuredBlog && (
            <article
              data-aos="zoom-in"
              data-aos-delay="250"
              className="group relative lg:col-span-2 lg:row-span-3 overflow-hidden rounded-2xl border border-[var(--border-light)] bg-black"
            >
              {/* IMAGE */}
              <div className="absolute inset-0">
                <Image
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* DARK GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              </div>

              {/* CONTENT OVER IMAGE */}
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <span className="mb-3 inline-block text-sm text-[var(--accent-primary)]">
                  Featured Article · {featuredBlog.readTime}
                </span>

                <h3 className="mb-4 max-w-xl text-2xl md:text-3xl font-semibold text-white group-hover:text-[var(--accent-primary)] transition">
                  {featuredBlog.title}
                </h3>

                <p className="mb-6 max-w-xl text-sm md:text-base text-white/80 leading-relaxed">
                  {featuredBlog.excerpt}
                </p>

                <button className="w-fit text-sm font-medium text-[var(--accent-primary)]">
                  Read Article →
                </button>
              </div>
            </article>
          )}

          {/* SIDE BLOGS */}
          {sideBlogs.map((blog) => (
            <article
              key={blog.id}
              data-aos="flip-left"
              data-aos-delay={blog.id * 200}
              className="group flex gap-5 rounded-xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-5 backdrop-blur-md"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div>
                <h4 className="mb-2 text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition">
                  {blog.title}
                </h4>

                <p className="text-sm text-[var(--text-muted)]">
                  {blog.readTime}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
