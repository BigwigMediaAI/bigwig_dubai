"use client";

import { useState, useEffect } from "react";
import { X, Plus, Trash2 } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
  isActive: boolean;
}

interface FaqData extends FaqItem {
  _id?: string;
}

interface Props {
  initialData?: FaqData | null;
  onClose: () => void;
  onSuccess: () => void;
}

const FaqModal: React.FC<Props> = ({ initialData, onClose, onSuccess }) => {
  const [faqList, setFaqList] = useState<FaqItem[]>([
    { question: "", answer: "", isActive: true },
  ]);
  const [loading, setLoading] = useState(false);

  // 🔹 If editing → only one FAQ
  useEffect(() => {
    if (initialData) {
      setFaqList([
        {
          question: initialData.question,
          answer: initialData.answer,
          isActive: initialData.isActive,
        },
      ]);
    }
  }, [initialData]);

  // 🔹 Handle change
  const handleChange = (
    index: number,
    field: keyof FaqItem,
    value: string | boolean,
  ) => {
    const updated = [...faqList];
    (updated[index] as any)[field] = value;
    setFaqList(updated);
  };

  // 🔹 Add new FAQ row
  const addFaqRow = () => {
    setFaqList([...faqList, { question: "", answer: "", isActive: true }]);
  };

  // 🔹 Remove FAQ row
  const removeFaqRow = (index: number) => {
    const updated = faqList.filter((_, i) => i !== index);
    setFaqList(updated);
  };

  // 🔹 Submit
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const filteredFaqs = faqList.filter(
        (f) => f.question.trim() && f.answer.trim(),
      );

      if (filteredFaqs.length === 0) {
        alert("At least one FAQ is required");
        return;
      }

      const method = initialData ? "PUT" : "POST";

      const url = initialData
        ? `${process.env.NEXT_PUBLIC_API_BASE}/faq/${initialData._id}`
        : `${process.env.NEXT_PUBLIC_API_BASE}/faq`;

      await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(initialData ? filteredFaqs[0] : filteredFaqs),
      });

      onSuccess();
      onClose();
    } catch (error) {
      console.error("Failed to save FAQ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-[#111] w-full max-w-2xl rounded-xl border border-gray-800 my-10">
        {/* HEADER */}
        <div className="flex justify-between p-5 border-b border-gray-700">
          <h2 className="text-xl font-semibold">
            {initialData ? "Edit FAQ" : "Create FAQs"}
          </h2>
          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {faqList.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg p-4 space-y-3 relative"
            >
              {!initialData && faqList.length > 1 && (
                <button
                  onClick={() => removeFaqRow(index)}
                  className="absolute top-3 right-3 text-red-400"
                >
                  <Trash2 size={16} />
                </button>
              )}

              <input
                type="text"
                placeholder="Question"
                value={faq.question}
                onChange={(e) =>
                  handleChange(index, "question", e.target.value)
                }
                className="w-full bg-black border border-gray-700 rounded px-4 py-2"
              />

              <textarea
                placeholder="Answer"
                value={faq.answer}
                onChange={(e) => handleChange(index, "answer", e.target.value)}
                rows={3}
                className="w-full bg-black border border-gray-700 rounded px-4 py-2"
              />

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={faq.isActive}
                  onChange={() =>
                    handleChange(index, "isActive", !faq.isActive)
                  }
                />
                <span className="text-sm">Active</span>
              </div>
            </div>
          ))}

          {/* ADD MORE BUTTON (Only in Create Mode) */}
          {!initialData && (
            <button
              onClick={addFaqRow}
              className="flex items-center gap-2 text-[var(--accent-primary)] font-semibold"
            >
              <Plus size={18} /> Add Another FAQ
            </button>
          )}
        </div>

        {/* FOOTER */}
        <div className="p-6 border-t border-gray-700">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-[var(--accent-primary)] hover:opacity-90 py-2 rounded font-semibold"
          >
            {loading ? "Saving..." : initialData ? "Update FAQ" : "Create FAQs"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqModal;
