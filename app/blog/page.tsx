"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import GlobalCTA from "../components/Cta";
import Button from "../components/Button";
import ServicePopup from "../components/Popup";
import ContactFormCard from "../components/ContactFormCard";

interface Blog {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  createdAt: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
const BLOGS_PER_PAGE = 10;

export default function BlogPage() {
  const [open, setOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  /* ================= FETCH BLOGS ================= */
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${API_BASE}/blog/viewblog`, {
          cache: "no-store",
        });
        const data = await res.json();
        if (res.ok) setBlogs(data);
      } catch (error) {
        console.error("Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * BLOGS_PER_PAGE,
    currentPage * BLOGS_PER_PAGE,
  );

  return (
    <div className="relative bg-black">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <Image
          src="/aboutpage.png"
          alt="Insights & digital growth stories"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/20 blur-[200px]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Link href="/" className="hover:text-[var(--accent-primary)]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[var(--text-secondary)]">Blog</span>
            </div>

            <h1 className="mb-6 text-4xl md:text-6xl font-bold text-[var(--text-primary)]">
              Insights, Ideas & <br />
              <span className="text-[var(--accent-primary)]">
                Digital Growth Stories
              </span>
            </h1>

            <p className="max-w-xl text-lg text-[var(--text-secondary)]">
              Expert perspectives on digital marketing, branding, SEO and
              performance-driven growth.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative py-20 overflow-hidden">
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-primary)]/15 blur-[200px]" />
        </div>

        {/* ================= NO BLOGS ================= */}
        {!loading && blogs.length === 0 && (
          <div className="mx-auto max-w-5xl px-6">
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-12 text-center backdrop-blur-xl shadow-2xl">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[var(--accent-primary)]/25 blur-[120px]" />

              <h2 className="mb-4 text-2xl md:text-4xl font-bold text-[var(--text-primary)]">
                Insights Are On the Way
              </h2>

              <p className="mx-auto mb-8 max-w-xl text-lg text-[var(--text-secondary)]">
                We’re crafting high-quality articles and growth-focused
                insights. Stay tuned — quality takes time.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => setOpen(true)}
                  text="Start a Conversation"
                />

                <Link href="/services">
                  <button className="rounded-full border border-white/20 px-8 py-3 text-sm text-white/80 transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]">
                    Explore Our Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* ================= BLOGS + CONTACT FORM ================= */}
        {blogs.length > 0 && (
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* ================= LEFT : BLOGS ================= */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {paginatedBlogs.map((blog) => (
                  <Link
                    key={blog._id}
                    href={`/blog/${blog.slug}`}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-[var(--accent-primary)] transition"
                  >
                    <div className="relative h-48">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-[var(--accent-primary)]">
                        {blog.title}
                      </h3>

                      <p className="text-sm text-[var(--text-secondary)] line-clamp-3">
                        {blog.excerpt}
                      </p>

                      <span className="mt-4 block text-xs text-[var(--text-muted)]">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* ================= PAGINATION ================= */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center gap-4">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                    className="px-4 py-2 rounded-full border border-white/20 text-white/70 transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] disabled:opacity-40"
                  >
                    Prev
                  </button>

                  <span className="px-4 py-2 text-sm text-white/70">
                    Page {currentPage} of {totalPages}
                  </span>

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((p) => p + 1)}
                    className="px-4 py-2 rounded-full border border-white/20 text-white/70 transition hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>

            {/* ================= RIGHT : STICKY FORM ================= */}
            <div className="lg:col-span-2 lg:sticky lg:top-28 self-start">
              <ContactFormCard />
            </div>
          </div>
        )}
      </section>

      <GlobalCTA />
      <Footer />
      <ServicePopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}
