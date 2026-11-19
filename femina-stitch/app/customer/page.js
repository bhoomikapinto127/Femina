import Link from "next/link";
import Image from "next/image";

// Fake data for now. Later this comes from the database.
const customer = { name: "Priya" };
const activeOrder = {
  id: 1101,
  item: "Blue kurti",
  status: "Stitching in progress",
  expectedDelivery: "20 Nov 2026",
};

const quickAccess = [
  { label: "Measure", href: "/customer/measure", image: "/quick/measure.jpeg" },
  { label: "Design Gallery", href: "/customer/gallery", image: "/quick/gallery.jpeg" },
  { label: "Book an Appointment", href: "/customer/book", image: "/quick/book.jpeg" },
  { label: "My Orders", href: "/customer/orders", image: "/quick/order.jpeg" },
  { label: "Bill & Payment", href: "/customer/billing", image: "/quick/bill.jpeg" },
  { label: "Feedback", href: "/customer/feedback", image: "/quick/feedback.jpeg" },
];

export default async function CustomerHome({ searchParams }) {
  const params = await searchParams;
  const isGuest = params.guest === "true";

  return (
    <div>
     <h1 className="font-serif text-3xl font-semibold text-primary">
  {isGuest ? "Hello, Guest!" : `Hello, ${customer.name}!`}
</h1>
<p className="mt-1 text-ink/70">
  {isGuest
    ? "Browse around. Log in to place and track orders."
    : "Welcome to your personal tailoring space."}
</p>

           {/* Active order card (hidden for guests) */}
      {!isGuest && (
      <section className="mt-8 rounded-2xl bg-primary p-6 text-white shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
          Your active order
        </p>
        <h2 className="mt-2 font-serif text-2xl font-semibold">
          Order #{activeOrder.id} · {activeOrder.item}
        </h2>

        <div className="mt-4 space-y-1 text-sm text-white/80">
          <p>
            Status:{" "}
            <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-white">
              {activeOrder.status}
            </span>
          </p>
          <p>Expected delivery: {activeOrder.expectedDelivery}</p>
        </div>

        <Link
          href={`/customer/orders/${activeOrder.id}`}
          className="mt-6 inline-block rounded-lg bg-white px-5 py-2 text-sm font-medium text-primary hover:bg-surface"
        >
          Track order →
        </Link>
            </section>
      )}

      {/* Quick access */}
      <h2 className="mt-10 font-serif text-xl font-semibold text-primary">Quick access</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
  {quickAccess.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-primary shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <Image
        src={item.image}
        alt=""
        fill
        sizes="(max-width: 640px) 50vw, 33vw"
        className="object-cover transition duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent" />
      <span className="absolute bottom-3 left-4 right-4 text-sm font-medium text-white">
        {item.label}
      </span>
    </Link>
  ))}
</div>
    </div>
  );
}