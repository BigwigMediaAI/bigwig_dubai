"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Cookies from "js-cookie";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ButtonFill from "../components/Button";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER;
  const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (email === ADMIN_USER && password === ADMIN_PASS) {
        Cookies.set("adminAuth", "true", {
          expires: 1,
          sameSite: "strict",
        });
        router.push("/admin");
      } else {
        setError("Invalid email or password");
      }

      setLoading(false);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navbar />

      {/* TOP STRIP */}
      <section className="relative h-[16vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/85" />

        {/* Gold glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[520px] w-[520px]
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-[var(--accent-primary)]/20 blur-[220px]"
        />
      </section>

      {/* LOGIN SECTION */}
      <section className="relative bg-[var(--bg-primary)]">
        {/* Decorative glow */}
        <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[var(--accent-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-[var(--accent-secondary)]/10 rounded-full blur-3xl" />

        <div className="relative z-10 py-14 flex items-center justify-center px-4">
          <div
            className="
            w-full max-w-5xl
            grid grid-cols-1 md:grid-cols-2
            bg-[var(--bg-glass)]
            backdrop-blur-2xl
            border border-[var(--border-light)]
            rounded-3xl
            shadow-[0_0_60px_rgba(0,0,0,0.85)]
            overflow-hidden
          "
          >
            {/* LEFT PANEL */}
            <div className="hidden md:flex flex-col justify-center p-12">
              <h2 className="text-3xl font-bold text-[var(--accent-primary)] mb-4">
                Admin Control Panel
              </h2>

              <p className="text-[var(--text-secondary)] leading-relaxed max-w-sm">
                Restricted administrative access to manage content, users, and
                system-level configurations.
              </p>

              <div className="mt-10 space-y-3 text-sm text-[var(--text-muted)]">
                <p>• Secure admin-only access</p>
                <p>• Centralized management</p>
                <p>• Protected dashboard</p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-[var(--accent-primary)]">
                  Admin Login
                </h1>
                <p className="text-[var(--text-muted)] text-sm mt-2">
                  Sign in to continue to the dashboard
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email */}
                <div>
                  <label className="text-sm text-[var(--text-muted)] mb-1 block">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@company.com"
                      className="
                      w-full pl-11 pr-4 py-3 rounded-xl
                      bg-[var(--bg-secondary)]
                      border border-[var(--border-light)]
                      text-[var(--text-primary)]
                      placeholder-[var(--text-muted)]
                      focus:ring-2 focus:ring-[var(--accent-primary)]
                      focus:outline-none
                    "
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="text-sm text-[var(--text-muted)] mb-1 block">
                    Password
                  </label>
                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="
                      w-full pl-11 pr-12 py-3 rounded-xl
                      bg-[var(--bg-secondary)]
                      border border-[var(--border-light)]
                      text-[var(--text-primary)]
                      placeholder-[var(--text-muted)]
                      focus:ring-2 focus:ring-[var(--accent-primary)]
                      focus:outline-none
                    "
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((p) => !p)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-white"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-[var(--error)] text-center">
                    {error}
                  </p>
                )}

                <ButtonFill
                  type="submit"
                  className="w-full"
                  text={loading ? "Authenticating..." : "Login"}
                />
              </form>

              <p className="text-xs text-[var(--text-muted)] text-center mt-10">
                © {new Date().getFullYear()} • Secure Admin Access
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
