import PortalLayout from "@/components/PortalLayout";

const links = [
  { label: "Dashboard", href: "/admin" },
  { label: "All Orders", href: "/admin/orders" },
  { label: "Staff", href: "/admin/staff" },
  { label: "Payments", href: "/admin/payments" },
];

export default function AdminLayout({ children }) {
  return <PortalLayout title="Admin" links={links}>{children}</PortalLayout>;
}