"use client";

import FaqModal from "@/app/components/FaqModal";
import { Eye, Trash2, Plus, X, Pencil, HelpCircle } from "lucide-react";
import { useEffect, useState } from "react";

interface Faq {
  _id: string;
  question: string;
  answer: string;
  isActive: boolean;
  createdAt: string;
}

const ITEMS_PER_PAGE = 10;

const AdminFaqs = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [selected, setSelected] = useState<Faq | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState<Faq | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // ================= FETCH =================
  const fetchFaqs = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/faq`, {
        cache: "no-store",
      });

      const result = await res.json();

      // 🔥 FIX HERE
      setFaqs(result.data || []);
    } catch (err) {
      console.error("Failed to fetch FAQs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  // ================= DELETE =================
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this FAQ permanently?")) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/faq/${id}`, {
      method: "DELETE",
    });

    setFaqs((prev) => prev.filter((f) => f._id !== id));
  };

  // ================= PAGINATION =================
  const totalPages = Math.ceil(faqs.length / ITEMS_PER_PAGE);
  const visibleItems = faqs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="h-screen bg-black text-white flex flex-col">
      {/* HEADER */}
      <div className="sticky top-0 z-20 bg-black border-b border-gray-700">
        <div className="p-6 flex justify-between">
          <h1 className="text-3xl font-bold">FAQs</h1>

          <button
            onClick={() => {
              setEditData(null);
              setShowModal(true);
            }}
            className="border hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold"
          >
            <Plus size={18} /> Add FAQ
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 p-6 overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="flex flex-col items-center gap-3 text-gray-400">
              <div className="w-8 h-8 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
              <p className="text-sm">Loading FAQs...</p>
            </div>
          </div>
        ) : visibleItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-14 h-14 rounded-full bg-[#1e1e1e] flex items-center justify-center mb-4">
              <HelpCircle className="text-gray-400" size={24} />
            </div>

            <h3 className="text-lg font-semibold text-white">No FAQs found</h3>

            <p className="text-sm text-gray-400 max-w-md mt-2">
              Add your first FAQ to help your users.
            </p>
          </div>
        ) : (
          <>
            <table className="w-full border border-gray-700 text-sm">
              <thead className="bg-[#1e1e1e]">
                <tr>
                  <th className="px-4 py-3 text-left w-2/4">Question</th>
                  <th className="px-4 py-3 text-left w-2/4">Answer</th>
                  <th className="px-4 py-3 text-center w-1/8">Status</th>
                  <th className="px-4 py-3 text-center w-1/8">Actions</th>
                </tr>
              </thead>

              <tbody>
                {visibleItems.map((f) => (
                  <tr key={f._id} className="even:bg-[#111] hover:bg-[#222]">
                    <td className="px-4 py-3 font-medium">{f.question}</td>

                    <td className="px-4 py-3 text-gray-300">
                      <div className="line-clamp-2 break-words">{f.answer}</div>
                    </td>

                    <td className="px-4 py-3 text-center">
                      <span
                        className={`px-3 py-1 rounded text-xs ${
                          f.isActive ? "bg-green-600" : "bg-gray-600"
                        }`}
                      >
                        {f.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td className="px-4 py-3 flex justify-center gap-3">
                      <button
                        onClick={() => setSelected(f)}
                        className="text-cyan-400"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        onClick={() => {
                          setEditData(f);
                          setShowModal(true);
                        }}
                        className="text-yellow-400"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => handleDelete(f._id)}
                        className="text-red-400"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>

      {/* VIEW MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="bg-[#111] w-full max-w-xl rounded-xl border border-gray-800">
            <div className="flex justify-between p-5 border-b border-gray-700">
              <h2 className="text-xl font-semibold">FAQ Details</h2>
              <button onClick={() => setSelected(null)}>
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <p className="font-semibold">{selected.question}</p>
              <p className="text-gray-300">{selected.answer}</p>
              <p className="text-sm text-gray-400">
                Status: {selected.isActive ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CREATE / EDIT MODAL */}
      {showModal && (
        <FaqModal
          initialData={editData}
          onClose={() => setShowModal(false)}
          onSuccess={fetchFaqs}
        />
      )}
    </div>
  );
};

export default AdminFaqs;
