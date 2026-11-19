import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ----------shop(photo background) ---------- */}
      <section
        className="relative flex min-h-screen flex-col bg-primary bg-cover bg-center"
        style={{ backgroundImage: "url('/shop.jpg')" }}
      >
        {/* dark navy fade so the text is readable */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/75 via-primary/40 to-primary/0" />

        {/* Header: brand only, centered */}
        <header className="relative z-10 border-b border-white/15 py-4 text-center leading-none">
          <span className="block font-serif text-3xl font-bold text-white">
            Femina
          </span>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
            Ladies Tailors
          </span>
        </header>

        {/* Content on the left */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F4A3B8]">
              Ladies Tailors, Mangalore
            </p>
            <div className="mt-2 h-px w-20 bg-[#F4A3B8]/60" />

            <h1 className="mt-6 font-serif text-5xl font-medium leading-tight text-white md:text-7xl">
              Every stitch,
              <br />
              made for{" "}
              <span className="italic text-[#F4A3B8]">you</span>
            </h1>

            <Link
              href="/login"
              className="mt-10 inline-block rounded-lg bg-accent px-8 py-3 font-medium text-white shadow-lg hover:opacity-90"
            >
              Start Stitching →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER / CONTACT ---------- */}
      <footer id="contact" className="bg-primary text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold">Femina Ladies Tailors</h2>
            <p className="mt-2 text-white/70">Blouses, suits, gowns, bridal wear and alterations. Tailored with care, delivered with love.</p>
          </div>
          <div className="space-y-1 text-white/80">
            <p>Dwaraka Complex, 1st Floor</p>
            <p>Opp. Smart City, Thokkottu, P.O. Permannur</p>
            <p>Mangalore - 575017</p>
            <p className="pt-2">Ph: 0824-2468860</p>
            <p>Mob: 9343208065</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-sm text-white/50">
          © 2026 Femina Stitch. All rights reserved.
        </div>
      </footer>
    </div>
  );
}