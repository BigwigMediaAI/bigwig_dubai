"use client";

import { X, ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";

interface TestimonialData {
  _id?: string;
  name: string;
  message: string;
  image?: string;
  designation?: string;
  rating?: number;
  isActive: boolean;
}

interface Props {
  initialData?: TestimonialData | null;
  onClose: () => void;
  onSuccess: () => void;
}

const TestimonialModal = ({ initialData, onClose, onSuccess }: Props) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [designation, setDesignation] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [isActive, setIsActive] = useState(true);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [existingImage, setExistingImage] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  // PREFILL (EDIT MODE)
  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setMessage(initialData.message);
      setDesignation(initialData.designation || "");
      setRating(initialData.rating ?? 5);
      setIsActive(initialData.isActive);
      setExistingImage(initialData.image || null);
    }
  }, [initialData]);

  // SUBMIT
  const handleSubmit = async () => {
    if (!name || !message) {
      alert("Name and message are required");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("message", message);
      formData.append("designation", designation);
      formData.append("rating", String(rating));
      formData.append("isActive", String(isActive));

      if (imageFile) formData.append("image", imageFile);

      const url = initialData
        ? `${process.env.NEXT_PUBLIC_API_BASE}/testimonial/${initialData._id}`
        : `${process.env.NEXT_PUBLIC_API_BASE}/testimonial`;

      const res = await fetch(url, {
        method: initialData ? "PUT" : "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      onSuccess();
      onClose();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to save testimonial");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-[#111] text-white w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-700 flex flex-col max-h-[95vh] overflow-hidden">
        {/* ================= HEADER ================= */}
        <div className="flex items-start justify-between px-6 py-4 border-b border-gray-700">
          <div>
            <h2 className="text-lg font-semibold">
              {initialData ? "Edit Testimonial" : "Create Testimonial"}
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              Client feedback displayed on your website
            </p>
          </div>

          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* ================= BODY ================= */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-8 scrollbar-hide">
          {/* BASIC INFO */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase text-gray-400 tracking-wide">
              Client Details
            </h3>

            <input
              placeholder="Client name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3"
            />

            <input
              placeholder="Designation (optional)"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3"
            />
          </section>

          {/* MESSAGE */}
          <section className="space-y-3">
            <h3 className="text-xs uppercase text-gray-400 tracking-wide">
              Testimonial Message
            </h3>

            <textarea
              rows={4}
              placeholder="Write the testimonial message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 resize-none"
            />
          </section>

          {/* META */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase text-gray-400 tracking-wide mb-1 block">
                Rating
              </label>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3"
              >
                {[1, 2, 3, 4, 5].map((r) => (
                  <option key={r} value={r}>
                    {r} Star{r > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>

            <label className="flex items-center gap-3 text-sm mt-6">
              <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              />
              Active (visible on website)
            </label>
          </section>

          {/* IMAGE UPLOAD */}
          <section>
            <label className="text-xs uppercase text-gray-400 tracking-wide mb-2 block">
              Client Image
            </label>

            <label
              htmlFor="testimonial-image"
              className="
                flex flex-col items-center justify-center
                w-full h-40
                border-2 border-dashed border-gray-700
                rounded-xl cursor-pointer
                bg-black hover:border-gray-500 transition
              "
            >
              {imageFile ? (
                <img
                  src={URL.createObjectURL(imageFile)}
                  className="w-20 h-20 rounded-full object-cover"
                />
              ) : existingImage ? (
                <img
                  src={existingImage}
                  className="w-20 h-20 rounded-full object-cover"
                />
              ) : (
                <>
                  <ImageIcon className="text-gray-500 mb-2" />
                  <p className="text-sm text-gray-400">
                    Click to upload client image
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    JPG or PNG • Square works best
                  </p>
                </>
              )}

              <input
                id="testimonial-image"
                type="file"
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>
          </section>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="border-t border-gray-700 px-6 py-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500"
          >
            Cancel
          </button>

          <Button
            onClick={handleSubmit}
            text={
              loading
                ? "Saving..."
                : initialData
                  ? "Update Testimonial"
                  : "Create Testimonial"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialModal;
