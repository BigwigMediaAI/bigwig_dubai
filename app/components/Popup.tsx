"use client";

import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import Button from "./Button";

const servicesList = [
  "SEO",
  "SMM (Social Media Marketing)",
  "Performance Marketing",
  "Content Marketing",
  "Website Development",
  "Email Marketing",
  "SMO (Social Media Optimization)",
  "Graphic & Video Design",
  "Affiliate Marketing",
  "Influencer Marketing",
  "Online Reputation Management (ORM)",
];

export default function ServicePopup({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  /* ================= FORM STATE ================= */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [services, setServices] = useState<string[]>([]);
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"FORM" | "OTP">("FORM");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => setMounted(false), 350);
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen && !mounted) return null;

  /* ================= HANDLERS ================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  /* ================= SEND OTP ================= */
  const handleSendOTP = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/lead/send-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            services,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setStep("OTP");
    } catch (err: any) {
      setError(err.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  /* ================= VERIFY OTP ================= */
  const handleVerifyOTP = async () => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/lead/verify-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: form.email,
            otp,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      onClose(); // success → close popup
      setStep("FORM");
      setForm({ name: "", email: "", phone: "", message: "" });
      setServices([]);
      setOtp("");
    } catch (err: any) {
      setError(err.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* MODAL */}
      <div
        className={`relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]/95 shadow-2xl backdrop-blur-xl transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-[var(--accent-primary)]" size={18} />
            <h2 className="text-lg font-semibold text-white">
              {step === "FORM" ? "Start Your Project" : "Verify OTP"}
            </h2>
          </div>
          <button className="text-[var(--accent-primary)]" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-5 space-y-4">
          {error && (
            <p className="text-sm text-red-500 bg-red-500/10 px-3 py-2 rounded">
              {error}
            </p>
          )}

          {/* ================= FORM STEP ================= */}
          {step === "FORM" && (
            <>
              <div className="flex gap-4">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[var(--accent-primary)] focus:outline-none"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[var(--accent-primary)] focus:outline-none"
                />
              </div>

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[var(--accent-primary)] focus:outline-none"
              />

              <div className="flex flex-wrap gap-2">
                {servicesList.map((service) => (
                  <label
                    key={service}
                    className={`px-4 py-2 text-xs rounded-full cursor-pointer border ${
                      services.includes(service)
                        ? "border-[var(--accent-primary)] text-[var(--accent-primary)]"
                        : "border-white/10 text-white/70"
                    }`}
                  >
                    <input
                      type="checkbox"
                      hidden
                      onChange={() => toggleService(service)}
                    />
                    {service}
                  </label>
                ))}
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[var(--accent-primary)] focus:outline-none"
              />

              <Button
                text={loading ? "Sending OTP..." : "Send OTP"}
                onClick={handleSendOTP}
              />
            </>
          )}

          {/* ================= OTP STEP ================= */}
          {step === "OTP" && (
            <>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                className="w-full tracking-widest rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-[var(--accent-primary)] focus:outline-none"
              />

              <Button
                text={loading ? "Verifying..." : "Verify OTP"}
                onClick={handleVerifyOTP}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
