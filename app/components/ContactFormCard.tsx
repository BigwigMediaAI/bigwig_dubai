"use client";

import { useState } from "react";
import Button from "./Button";

const servicesList = [
  "SEO",
  "Performance Marketing",
  "SMM",
  "Content Marketing",
  "Website Development",
  "Email Marketing",
  "SMO",
  "Graphic & Video Design",
  "Affiliate Marketing",
  "Influencer Marketing",
  "ORM",
];

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

const ContactFormCard = () => {
  /* ================= STATE ================= */
  const [step, setStep] = useState<"FORM" | "OTP">("FORM");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [otp, setOtp] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [services, setServices] = useState<string[]>([]);

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
  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.phone) {
      setError("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE}/lead/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          services,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setStep("OTP");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  /* ================= VERIFY OTP ================= */
  const handleVerifyOTP = async () => {
    setError("");

    if (otp.length !== 6) {
      setError("Enter valid 6-digit OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE}/lead/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          otp,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // ✅ SUCCESS
      setStep("FORM");
      setForm({ name: "", email: "", phone: "", message: "" });
      setServices([]);
      setOtp("");
      alert("✅ Thank you! Your query has been submitted.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="100"
      className="relative rounded-3xl border border-[var(--border-light)] bg-[var(--bg-glass)] p-8 md:p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-[var(--accent-primary)]/10" />

      {/* HEADER */}
      <div className="mb-10">
        <p className="mb-4 inline-block rounded-full border border-[var(--border-light)] px-4 py-1 text-sm text-[var(--text-secondary)]">
          Start a Conversation
        </p>

        <h3 className="mb-3 text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
          Tell us about your project
        </h3>

        <p className="max-w-md text-[var(--text-secondary)]">
          Share a few details and our team will get back to you with clear next
          steps.
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <p className="mb-4 text-sm text-red-400 bg-red-400/10 px-3 py-2 rounded">
          {error}
        </p>
      )}

      {/* ================= FORM STEP ================= */}
      {step === "FORM" && (
        <form onSubmit={handleSendOTP} className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
            <Input
              label="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+971 50 123 4567"
            />
          </div>

          <Input
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
          />

          <div>
            <label className="mb-3 block text-sm text-[var(--text-secondary)]">
              Services you’re interested in
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {servicesList.map((service) => (
                <label
                  key={service}
                  className="group flex items-center gap-3 rounded-lg border border-[var(--border-light)] bg-black/40 px-4 py-3 text-sm text-[var(--text-secondary)]"
                >
                  <input
                    type="checkbox"
                    checked={services.includes(service)}
                    onChange={() => toggleService(service)}
                    className="accent-[var(--accent-primary)]"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>

          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your goals, timeline, or challenges..."
            className="w-full rounded-xl border border-[var(--border-light)] bg-black/40 px-4 py-4 text-sm text-[var(--text-primary)]"
          />

          <Button
            type="submit"
            text={loading ? "Sending OTP..." : "Submit Your Query"}
          />
        </form>
      )}

      {/* ================= OTP STEP ================= */}
      {step === "OTP" && (
        <div className="space-y-4">
          <Input
            label="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="******"
          />

          <Button
            text={loading ? "Verifying..." : "Verify OTP"}
            onClick={handleVerifyOTP}
          />
        </div>
      )}
    </div>
  );
};

export default ContactFormCard;

/* ================= INPUT ================= */

interface InputProps {
  label: string;
  name?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  name,
  value,
  placeholder,
  type = "text",
  onChange,
}: InputProps) => {
  return (
    <div>
      <label className="mb-2 block text-sm text-[var(--text-secondary)]">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[var(--border-light)] bg-black/40 px-4 py-3 text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/40"
      />
    </div>
  );
};
