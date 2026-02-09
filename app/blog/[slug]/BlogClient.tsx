"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import ContactFormCard from "@/app/components/ContactFormCard";
import Footer from "@/app/components/Footer";
import ServicePopup from "@/app/components/Popup";
import GlobalCTA from "@/app/components/Cta";

export default function BlogClient({
  blog,
  relatedBlogs,
}: {
  blog: any;
  relatedBlogs: any[];
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // ✅ Listen for popup buttons inside blog HTML
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-open-popup='true']")) {
        setIsPopupOpen(true);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* GRID BACKGROUND */}
      <div className="relative pt-[90px] md:pt-[120px] pb-20">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "120px 120px",
          }}
        />

        <div className="relative w-11/12 md:w-5/6 max-w-7xl mx-auto">
          {/* BLOG HEADER (GLASS) */}
          <section className=" rounded-3xl mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              {blog.title}
            </h1>

            <p className="text-gray-400 mt-4 text-sm md:text-base">
              By <span className="text-white font-semibold">{blog.author}</span>{" "}
              • {new Date(blog.datePublished).toLocaleDateString()}
            </p>
          </section>

          {/* COVER IMAGE */}
          {blog.coverImage && (
            <div className="relative w-full h-[260px] sm:h-[380px] md:h-[520px] lg:h-[650px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={blog.coverImage}
                alt={blog.coverImageAlt || blog.title}
                fill
                className="object-cover"
                priority
              />

              {/* DARK OVERLAY FOR PREMIUM LOOK */}
              <div className="absolute inset-0 bg-black/30" />
            </div>
          )}

          {/* BLOG CONTENT + SIDEBAR */}
          <section className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* LEFT – BLOG CONTENT */}
            <article className="lg:col-span-3">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-xl">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </article>

            {/* RIGHT – SIDEBAR */}
            <aside className="lg:col-span-2">
              <ContactFormCard />
            </aside>
          </section>
        </div>
      </div>

      {/* =========================
              CTA FINAL
          ========================== */}
      <GlobalCTA />

      <Footer />
      <ServicePopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
}
