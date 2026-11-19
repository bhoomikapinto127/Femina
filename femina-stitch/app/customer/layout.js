import Link from "next/link";

export default function CustomerLayout({ children }) {
  return (
    <div className="min-h-screen bg-surface">
      {/* Top bar: logo, notifications, profile */}
      <header className="sticky top-0 z-10 border-b border-line bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
          <Link href="/customer" className="leading-none">
            <span className="block font-serif text-2xl font-bold text-accent">Femina</span>
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-primary">
              Ladies Tailors
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/customer/notifications"
              aria-label="Notifications"
              className="flex h-10 w-10 items-center justify-center rounded-full text-lg hover:bg-surface"
            >
              🔔
            </Link>
            <Link
              href="/customer/profile"
              aria-label="Profile"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg text-white hover:opacity-90"
            >
              👤
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-8">{children}</main>
    </div>
  );
}