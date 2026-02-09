"use client";

import { X, ImageIcon } from "lucide-react";
import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import Button from "./Button";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface Props {
  onClose: () => void;
  onSuccess: () => void;
}

const CreateNewsletterModal = ({ onClose, onSuccess }: Props) => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!subject || !content) {
      alert("Subject and content are required");
      return;
    }

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("content", content);
    files.forEach((f) => formData.append("attachments", f));

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/newsletter`,
        { method: "POST", body: formData },
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      onSuccess();
      onClose();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to send newsletter");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
      <div className="bg-[#111] text-white w-full max-w-3xl rounded-2xl shadow-2xl border border-gray-700 flex flex-col max-h-[95vh] overflow-hidden">
        {/* ================= HEADER ================= */}
        <div className="flex items-start justify-between px-6 py-4 border-b border-gray-700">
          <div>
            <h2 className="text-lg font-semibold">Create Newsletter</h2>
            <p className="text-xs text-gray-400 mt-1">
              Write and send an email to all subscribers
            </p>
          </div>

          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* ================= BODY ================= */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-8">
          {/* SUBJECT */}
          <section className="space-y-2">
            <h3 className="text-xs uppercase text-gray-400 tracking-wide">
              Subject
            </h3>
            <input
              type="text"
              placeholder="Newsletter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3"
            />
          </section>

          {/* CONTENT */}
          <section className="space-y-3">
            <h3 className="text-xs uppercase text-gray-400 tracking-wide">
              Newsletter Content
            </h3>

            <div className="border border-gray-700 rounded-xl bg-black overflow-hidden">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                placeholder="Write newsletter content here..."
                className=" newsletter-editor"
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    [{ color: [] }, { background: [] }],
                    ["link"],
                    ["clean"],
                  ],
                }}
              />
            </div>
          </section>

          {/* ATTACHMENTS */}
          <section>
            <label className="text-xs uppercase text-gray-400 tracking-wide mb-2 block">
              Attachments (optional)
            </label>

            <label
              htmlFor="newsletter-files"
              className="
                flex flex-col items-center justify-center
                w-full h-40
                border-2 border-dashed border-gray-700
                rounded-xl cursor-pointer
                bg-black hover:border-gray-500 transition
              "
            >
              <ImageIcon className="text-gray-500 mb-2" />
              <p className="text-sm text-gray-400">Click to upload files</p>
              <p className="text-xs text-gray-500 mt-1">Images or documents</p>

              <input
                id="newsletter-files"
                type="file"
                multiple
                onChange={(e) =>
                  setFiles(e.target.files ? Array.from(e.target.files) : [])
                }
                className="hidden"
              />
            </label>

            {files.length > 0 && (
              <ul className="mt-3 text-sm text-gray-400 space-y-1">
                {files.map((f, i) => (
                  <li key={i}>• {f.name}</li>
                ))}
              </ul>
            )}
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
            text={loading ? "Sending..." : "Send Newsletter"}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNewsletterModal;
