"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ================= TYPES ================= */

interface BlogType {
  title: string;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  author: string;
  datePublished: string;
  content: string;
  slug: string;
  category?: string;
  schemaMarkup?: string[];
}

/* ================= COMPONENT ================= */

export default function BlogSection() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH BLOGS ================= */
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`,
        );
        const data: BlogType[] = await res.json();

        if (Array.isArray(data)) {
          setBlogs(data);
        }
      } catch (err) {
        console.error("Failed to fetch blogs", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  /* ================= SKELETON ================= */
  if (loading) {
    return (
      <section className="relative bg-black overflow-hidden">
        <div className="relative z-10 mx-auto w-11/12 md:w-5/6 py-16">
          <BlogSkeleton />
        </div>
      </section>
    );
  }

  if (!blogs.length) return null;

  const featuredBlog = blogs[0];
  const sideBlogs = blogs.slice(1, 4);

  return (
    <section className="relative bg-black overflow-hidden">
      {/* GLOW */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[var(--accent-primary)]/10 blur-[120px]" />
      <div className="absolute bottom-0 -right-40 h-[400px] w-[400px] rounded-full bg-[var(--accent-primary)]/10 blur-[120px]" />

      {/* DOT PATTERN */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 mx-auto w-11/12 md:w-5/6 py-16">
        {/* ================= HEADING ================= */}
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)] backdrop-blur">
            Insights & Articles
          </p>

          <h2 className="mb-6 text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
            Latest Insights on <br />
            <span className="bg-gradient-to-r from-[var(--accent-primary)] via-[#FFD88A] to-[var(--accent-glow)] bg-clip-text text-transparent">
              Growth & Digital Strategy
            </span>
          </h2>
        </div>

        {/* ================= BLOG GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FEATURED BLOG */}
          <article className="group relative lg:col-span-2 lg:row-span-3 overflow-hidden rounded-2xl border border-[var(--border-light)] bg-black">
            <Link href={`/blog/${featuredBlog.slug}`}>
              <div className="absolute inset-0">
                <Image
                  src={featuredBlog.coverImage}
                  alt={featuredBlog.coverImageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <span className="mb-3 text-sm text-[var(--accent-primary)]">
                  By {featuredBlog.author}
                </span>

                <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-[var(--accent-primary)] transition">
                  {featuredBlog.title}
                </h3>
              </div>
            </Link>
          </article>

          {/* SIDE BLOGS */}
          {sideBlogs.map((blog, i) => (
            <article
              key={i}
              className="group flex gap-5 rounded-xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-5 backdrop-blur-md"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={blog.coverImage}
                  alt={blog.coverImageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div>
                <Link href={`/blog/${blog.slug}`}>
                  <h4 className="mb-2 line-clamp-3 text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition">
                    {blog.title}
                  </h4>
                  <p className="text-sm text-[var(--text-muted)]">
                    By {blog.author}
                  </p>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= SKELETON UI ================= */

function BlogSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* BIG CARD */}
        <div className="lg:col-span-2 lg:row-span-3 h-[420px] rounded-2xl bg-white/10" />

        {/* SMALL CARDS */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex gap-5 rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <div className="h-24 w-24 rounded-lg bg-white/10" />
            <div className="flex-1">
              <div className="mb-3 h-4 w-full rounded bg-white/10" />
              <div className="h-3 w-24 rounded bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
