"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./Button";

interface ClientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => Promise<void>;
  initialData?: {
    name: string;
    active: boolean;
    image?: string;
  };
}

const ClientModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: ClientModalProps) => {
  const [name, setName] = useState("");
  const [active, setActive] = useState(true);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setActive(initialData.active);
    } else {
      setName("");
      setActive(true);
    }
    setImage(null);
    setError("");
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // 🔴 Require image only on CREATE
    if (!initialData && !image) {
      setError("Client logo is required");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("active", String(active));

      // ✅ Append image ONLY if user selected a new one
      if (image) {
        formData.append("image", image);
      }

      await onSubmit(formData);

      // ✅ Close modal ONLY after success
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-[#111] border border-gray-700 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        {/* ================= HEADER ================= */}
        <div className="flex items-start justify-between px-6 py-4 border-b border-gray-700">
          <div>
            <h2 className="text-lg font-semibold text-white">
              {initialData ? "Edit Client" : "Create Client"}
            </h2>
            <p className="text-xs text-gray-400 mt-1">
              {initialData
                ? "Update client details and logo"
                : "Add a new client to your portfolio"}
            </p>
          </div>

          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* ================= BODY ================= */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-5">
          {/* ERROR */}
          {error && (
            <p className="text-sm text-red-400 bg-red-400/10 px-3 py-2 rounded">
              {error}
            </p>
          )}

          <div>
            <label className="text-sm text-gray-400">Client Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter client name"
              className="w-full mt-1 bg-black border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 mb-1 block">
              Client Logo
            </label>

            <label
              htmlFor="client-logo"
              className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-700 rounded-xl cursor-pointer bg-black hover:border-gray-500 transition"
            >
              {image || initialData?.image ? (
                <img
                  src={image ? URL.createObjectURL(image) : initialData?.image}
                  alt="Preview"
                  className="h-16 object-contain"
                />
              ) : (
                <>
                  <p className="text-sm text-gray-400">
                    Click to upload client logo
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG, SVG up to 5MB
                  </p>
                </>
              )}

              <input
                id="client-logo"
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
            />
            <span className="text-sm text-gray-400">Mark client as active</span>
          </div>

          {/* ================= FOOTER ================= */}
          <div className="pt-4 border-t border-gray-700 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500"
            >
              Cancel
            </button>

            <Button
              text={loading ? "Saving..." : "Save Client"}
              className="px-6"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientModal;
