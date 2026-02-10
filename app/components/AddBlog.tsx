"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ImageIcon, X } from "lucide-react";
import "react-quill-new/dist/quill.snow.css";
import Button from "./Button";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface BlogPost {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  tags?: string;
  coverImage?: string;
  coverImageAlt?: string;
}

const AddBlog = ({
  onClose,
  onSuccess,
  existingBlog = null,
}: {
  onClose: () => void;
  onSuccess: () => void;
  existingBlog?: BlogPost | null;
}) => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    author: "",
    tags: "",
    coverImageAlt: "",
    coverImage: null as File | null,
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (existingBlog) {
      setFormData({
        title: existingBlog.title,
        slug: existingBlog.slug,
        excerpt: existingBlog.excerpt,
        content: existingBlog.content,
        author: existingBlog.author,
        tags: existingBlog.tags || "",
        coverImageAlt: existingBlog.coverImageAlt || "",
        coverImage: null,
      });
    }
  }, [existingBlog]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "title" && !existingBlog) {
      const autoSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .trim()
        .replace(/\s+/g, "-");

      setFormData((p) => ({ ...p, title: value, slug: autoSlug }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      setFormData((p) => ({ ...p, coverImage: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const sanitizeHtml = (html: string) => {
    return html
      .replace(/&nbsp;/g, " ")
      .replace(/<wbr\s*\/?>/gi, "")
      .replace(/\s+/g, " ");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const blogData = new FormData();

      const cleanedContent = sanitizeHtml(formData.content);

      Object.entries({
        ...formData,
        content: cleanedContent,
      }).forEach(([key, value]) => {
        if (value) blogData.append(key, value as any);
      });

      const res = await fetch(
        existingBlog
          ? `${process.env.NEXT_PUBLIC_API_BASE}/blog/${existingBlog.slug}`
          : `${process.env.NEXT_PUBLIC_API_BASE}/blog/add`,
        {
          method: existingBlog ? "PUT" : "POST",
          body: blogData,
        },
      );

      if (!res.ok) throw new Error("Failed");

      alert(existingBlog ? "Blog updated" : "Blog added");
      onSuccess();
      onClose();
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "code-block"],
      ["link"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "blockquote",
    "code-block",
    "link",
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.execCommand("enableObjectResizing", false, "false");
      document.execCommand("enableInlineTableEditing", false, "false");
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-[#111] text-white w-full max-w-3xl rounded-2xl shadow-2xl border border-gray-700 flex flex-col max-h-[95vh] overflow-hidden">
        {/* ================= HEADER ================= */}
        <div className="flex items-start justify-between px-6 py-4 border-b border-gray-700">
          <div>
            <h2 className="text-lg font-semibold">
              {existingBlog ? "Edit Blog" : "Create Blog"}
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              {existingBlog
                ? "Update blog content and SEO details"
                : "Write and publish a new blog post"}
            </p>
          </div>

          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* ================= BODY ================= */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto px-6 py-5 space-y-8"
        >
          {/* BASIC INFO */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase text-gray-400 tracking-wide">
              Basic Information
            </h3>

            <input
              name="title"
              placeholder="Blog title"
              value={formData.title}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3"
              required
            />

            <input
              name="slug"
              placeholder="Slug"
              value={formData.slug}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3"
              required
            />

            <textarea
              name="excerpt"
              placeholder="Short description / meta excerpt"
              rows={3}
              value={formData.excerpt}
              onChange={handleChange}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3"
              required
            />
          </section>

          {/* CONTENT */}
          <section className="space-y-3">
            <h3 className="text-xs uppercase text-gray-400 tracking-wide">
              Blog Content
            </h3>

            <div className="border border-gray-700 rounded-xl bg-black overflow-hidden">
              <ReactQuill
                theme="snow"
                value={formData.content}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, content: value }))
                }
                modules={quillModules}
                formats={quillFormats}
                placeholder="Write your blog content here..."
                className="newsletter-editor scrollbar-hide"
              />
            </div>
          </section>

          {/* SEO */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="author"
              placeholder="Author name"
              value={formData.author}
              onChange={handleChange}
              className="bg-black border border-gray-700 rounded-lg px-4 py-3"
              required
            />

            <input
              name="tags"
              placeholder="Tags (comma separated)"
              value={formData.tags}
              onChange={handleChange}
              className="bg-black border border-gray-700 rounded-lg px-4 py-3"
            />

            <input
              name="coverImageAlt"
              placeholder="Cover image alt text (SEO)"
              value={formData.coverImageAlt}
              onChange={handleChange}
              className="bg-black border border-gray-700 rounded-lg px-4 py-3 md:col-span-2"
            />
          </section>

          {/* IMAGE UPLOAD */}
          <section>
            <label className="text-xs uppercase text-gray-400 tracking-wide mb-2 block">
              Cover Image
            </label>

            <label
              htmlFor="cover-image"
              className="
              flex flex-col items-center justify-center
              w-full h-44
              border-2 border-dashed border-gray-700
              rounded-xl
              cursor-pointer
              bg-black
              hover:border-gray-500
              transition
            "
            >
              {preview ? (
                <img
                  src={preview}
                  className="max-h-36 object-cover rounded-lg"
                />
              ) : (
                <>
                  <ImageIcon className="text-gray-500 mb-2" />
                  <p className="text-sm text-gray-400">
                    Click to upload cover image
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    JPG, PNG • Recommended 1200×630
                  </p>
                </>
              )}

              <input
                id="cover-image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                required={!existingBlog}
                className="hidden"
              />
            </label>
          </section>
        </form>

        {/* ================= FOOTER ================= */}
        <div className="border-t border-gray-700 px-6 py-4 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
          >
            Cancel
          </button>

          <Button
            type="submit"
            onClick={handleSubmit}
            text={
              submitting
                ? existingBlog
                  ? "Updating..."
                  : "Publishing..."
                : existingBlog
                  ? "Update Blog"
                  : "Publish Blog"
            }
          />
        </div>
      </div>
    </div>
  );
};
// ABC
export default AddBlog;
