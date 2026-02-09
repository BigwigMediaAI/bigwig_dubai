"use client";

import { useEffect, useState } from "react";
import { Edit, Trash2, Code, ImageIcon, Plus, FileText } from "lucide-react";
import Fuse from "fuse.js";
import dynamic from "next/dynamic";
import { formatHtml } from "../utils/formatHtml";
import AddBlog from "@/app/components/AddBlog";
import Button from "@/app/components/Button";

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  datePublished: string;
  slug: string;
  coverImage?: string;
}

export default function AdminBlogsPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Modals
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [htmlContent, setHtmlContent] = useState("");
  const [showHtmlEditor, setShowHtmlEditor] = useState(false);

  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/blog/viewblog`,
      );
      const data = await res.json();
      setBlogs(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleUpdateImage = async () => {
    if (!selectedImage || !editingSlug) return;

    const formData = new FormData();
    formData.append("coverImage", selectedImage);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/blog/${editingSlug}/image`,
        {
          method: "PATCH",
          body: formData,
        },
      );

      if (!res.ok) throw new Error("Failed to update image");

      alert("Image updated successfully!");
      setShowImageModal(false);
      setSelectedImage(null);
      fetchBlogs();
    } catch (err) {
      console.error(err);
      alert("Failed to update image");
    }
  };

  const handleModalClose = () => {
    setShowAddModal(false);
    setEditingBlog(null);
  };

  const fuse = new Fuse(blogs, {
    keys: ["title", "author"],
    threshold: 0.3,
    ignoreLocation: true,
  });

  const filteredBlogs =
    searchQuery.trim() === ""
      ? blogs
      : fuse.search(searchQuery).map((result) => result.item);

  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* ================= STICKY HEADER ================= */}
      <div className="sticky top-0 z-20 bg-black border-b border-gray-700 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Blogs</h1>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 text-sm w-full sm:w-64"
          />

          <button
            onClick={() => {
              setEditingBlog(null);
              setShowAddModal(true);
            }}
            className="border hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold"
          >
            <Plus size={16} />
            Add Blog
          </button>
        </div>
      </div>

      {/* ================= SCROLL AREA ================= */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <div className="w-8 h-8 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
              <p className="text-sm">Loading blogs...</p>
            </div>
          </div>
        ) : filteredBlogs.length === 0 ? (
          /* ================= EMPTY STATE ================= */
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-14 h-14 rounded-full bg-[#1e1e1e] flex items-center justify-center mb-4">
              <FileText className="text-gray-400" size={24} />
            </div>

            <h3 className="text-lg font-semibold text-white">No blogs found</h3>

            <p className="text-sm text-gray-400 max-w-md mt-2">
              Get started by creating your first blog post or adjust your
              filters.
            </p>

            <Button
              onClick={() => {
                setEditingBlog(null);
                setShowAddModal(true);
              }}
              text="+ Create Blog"
              className="mt-6"
            />
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-700 text-sm">
                <thead className="bg-[#1e1e1e] text-left">
                  <tr>
                    <th className="px-4 py-3 border-b border-gray-700">
                      Title
                    </th>
                    <th className="px-4 py-3 border-b border-gray-700">
                      Content
                    </th>
                    <th className="px-4 py-3 border-b border-gray-700">
                      Author
                    </th>
                    <th className="px-4 py-3 border-b border-gray-700">
                      Created
                    </th>
                    <th className="px-4 py-3 border-b border-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedBlogs.map((blog) => (
                    <tr
                      key={blog._id}
                      className="even:bg-[#111] hover:bg-[#222]"
                    >
                      <td className="px-4 py-3">{blog.title}</td>

                      <td className="px-4 py-3 max-w-[250px]">
                        <div
                          className="line-clamp-3 text-gray-300"
                          dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                      </td>

                      <td className="px-4 py-3">{blog.author}</td>

                      <td className="px-4 py-3">
                        {new Date(blog.datePublished).toLocaleDateString()}
                      </td>

                      <td className="px-4 py-3 flex gap-3">
                        <button
                          onClick={() => {
                            setEditingBlog(blog);
                            setShowAddModal(true);
                          }}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          <Edit size={16} />
                        </button>

                        <button
                          onClick={() => {
                            setEditingSlug(blog.slug);
                            setShowImageModal(true);
                          }}
                          className="text-purple-500 hover:text-purple-700"
                        >
                          <ImageIcon size={16} />
                        </button>

                        <button
                          onClick={async () => {
                            setEditingSlug(blog.slug);
                            setHtmlContent(await formatHtml(blog.content));
                            setShowHtmlEditor(true);
                          }}
                          className="text-yellow-500 hover:text-yellow-700"
                        >
                          <Code size={16} />
                        </button>

                        <button
                          onClick={async () => {
                            if (
                              !confirm(
                                "Are you sure you want to delete this blog?",
                              )
                            )
                              return;

                            await fetch(
                              `${process.env.NEXT_PUBLIC_API_BASE}/blog/${blog.slug}`,
                              { method: "DELETE" },
                            );
                            fetchBlogs();
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ================= PAGINATION ================= */}
            {totalPages > 1 && (
              <div className="flex justify-end mt-6 gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
                >
                  Prev
                </button>

                <span className="px-3 py-1 bg-[var(--primary-color)] rounded">
                  {currentPage}
                </span>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-3 py-1 bg-gray-700 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
      {showAddModal && (
        <AddBlog
          onClose={handleModalClose}
          onSuccess={fetchBlogs}
          existingBlog={editingBlog}
        />
      )}

      {/* HTML Editor Modal */}
      {showHtmlEditor && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-[#111] text-white w-full max-w-3xl rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold">Edit Blog HTML</h2>
              <p className="text-xs text-gray-400 mt-1">
                Advanced users can directly modify the blog HTML
              </p>
            </div>

            {/* Body */}
            <div className="p-6">
              <textarea
                value={htmlContent}
                onChange={(e) => setHtmlContent(e.target.value)}
                className="
            w-full h-72
            bg-black text-white
            border border-gray-700 rounded-xl
            p-4 font-mono text-sm
            focus:outline-none focus:ring-1 focus:ring-blue-600
          "
              />
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-700 flex justify-end gap-3">
              <button
                onClick={() => setShowHtmlEditor(false)}
                className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
              >
                Cancel
              </button>

              <Button
                onClick={async () => {
                  if (!editingSlug) return;
                  try {
                    const res = await fetch(
                      `${process.env.NEXT_PUBLIC_API_BASE}/blog/${editingSlug}`,
                      {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ content: htmlContent }),
                      },
                    );
                    if (!res.ok) throw new Error("Failed");
                    alert("Blog updated successfully");
                    setShowHtmlEditor(false);
                    fetchBlogs();
                  } catch {
                    alert("Failed to update blog");
                  }
                }}
                text={loading ? "Saving..." : "Save Changes"}
              />
            </div>
          </div>
        </div>
      )}

      {/* Image Upload Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="bg-[#111] text-white w-full max-w-md rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold">Update Cover Image</h2>
              <p className="text-xs text-gray-400 mt-1">
                Upload a new image for this blog post
              </p>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files?.length
                    ? setSelectedImage(e.target.files[0])
                    : null
                }
                className="
            block w-full text-sm text-gray-300
            file:bg-black file:border file:border-gray-700
            file:rounded-lg file:px-4 file:py-2
            file:text-white file:cursor-pointer
            hover:file:border-gray-500
          "
              />
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-700 flex justify-end gap-3">
              <button
                onClick={() => setShowImageModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdateImage}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
              >
                Update Image
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
