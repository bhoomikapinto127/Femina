"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // one function updates whichever field the user is typing in
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // basic checks (the real checks will happen on the server later)
    if (!form.name || !form.email || !form.phone || !form.password) {
      setError("Please fill in all the fields.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    // TODO: connect to the backend later, e.g.
    // await fetch("/api/register", { method: "POST", body: JSON.stringify({...}) })
    console.log("Register attempt for:", form.email);

    setLoading(false);
  }

  const inputClass =
    "w-full rounded-lg border border-line bg-white px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20";
  const labelClass = "mb-1 block text-sm font-medium text-primary";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-surface px-6 py-12">
      {/* Brand, links back to home */}
      <Link href="/" className="mb-8 text-center leading-none">
        <span className="block font-serif text-4xl font-bold text-accent">
          Femina
        </span>
        <span className="mt-1 block text-xs font-semibold uppercase tracking-widest text-primary">
          Ladies Tailors
        </span>
      </Link>

      {/* Register card */}
      <div className="w-full max-w-md rounded-2xl border border-line bg-white p-8 shadow-sm">
        <h1 className="font-serif text-2xl font-semibold text-primary">
          Create your account
        </h1>
        <p className="mt-1 text-sm text-ink/70">
          Sign up to place and track your orders.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="name" className={labelClass}>Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="name"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>Mobile number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              autoComplete="tel"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="password" className={labelClass}>Password</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
                autoComplete="new-password"
                className={`${inputClass} pr-16`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-primary hover:text-accent"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className={labelClass}>
              Confirm password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              autoComplete="new-password"
              className={inputClass}
            />
          </div>

          {/* Error message */}
          {error && (
            <p className="rounded-lg bg-accent/10 px-4 py-2 text-sm text-accent">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-accent px-4 py-2.5 font-medium text-white shadow-sm hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink/70">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:text-accent">
            Log in
          </Link>
        </p>
      </div>

      <Link href="/" className="mt-6 text-sm text-primary hover:text-accent">
        ← Back to home
      </Link>
    </main>
  );
}