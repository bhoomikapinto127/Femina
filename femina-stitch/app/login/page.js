"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault(); // stops the page from reloading
    setError("");

    // basic checks (the real checks will happen on the server later)
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    // TODO: connect to NextAuth later, e.g. signIn("credentials", { email, password })
    console.log("Login attempt for:", email);

    setLoading(false);
  }

  return (
   <main
  className="relative flex min-h-screen flex-col items-center justify-center bg-primary bg-cover bg-center px-6 py-12"
  style={{ backgroundImage: "url('/bgshop.jpeg')" }}
>
  {/* navy fade so the card and text stand out */}
  <div className="absolute inset-0 bg-primary/35" />

  {/* everything below sits above the fade */}
  <div className="relative z-10 flex w-full flex-col items-center">
      {/* Brand, links back to home */}
      <Link href="/" className="mb-8 text-center leading-none">
        <span className="block font-serif text-4xl font-bold text-accent">
          Femina
        </span>
        <span className="mt-1 block text-xs font-semibold uppercase tracking-widest text-primary">
          Ladies Tailors
        </span>
      </Link>

      {/* Login card */}
      <div className="w-full max-w-md rounded-2xl border border-line bg-white p-8 shadow-sm">
        <h1 className="font-serif text-2xl font-semibold text-primary">
          Welcome back!
        </h1>
       

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-primary">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full rounded-lg border border-line bg-white px-4 py-2.5 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-primary">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                className="w-full rounded-lg border border-line bg-white px-4 py-2.5 pr-16 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
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

          {/* Error message */}
          {error && (
            <p className="rounded-lg bg-accent/10 px-4 py-2 text-sm text-accent">
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-accent px-4 py-2.5 font-medium text-white shadow-sm hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-ink/70">
          New here?{" "}
          <Link href="/register" className="font-medium text-primary hover:text-accent">
            Create an account
          </Link>
        </p>
        {/* Divider */}
<div className="my-6 flex items-center gap-3">
  <div className="h-px flex-1 bg-line" />
  <span className="text-xs uppercase tracking-widest text-ink/50">or</span>
  <div className="h-px flex-1 bg-line" />
</div>

{/* Guest option */}
<Link
  href="/customer?guest=true"
  className="block w-full rounded-lg border border-primary px-4 py-2.5 text-center font-medium text-primary hover:bg-surface"
>
  Continue as guest
</Link>
<p className="mt-2 text-center text-xs text-ink/60">
  Browse freely. You'll only need an account to book or place an order.
</p>
      </div>

      <Link href="/" className="mt-6 text-sm text-primary hover:text-accent">
        ← Back to home
      </Link>
      </div>
    </main>
  );
}