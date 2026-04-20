import Link from "next/link";
import { LogoutButton } from "@/components/logout-button";
import { getSessionRole } from "@/lib/session";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/users", label: "Users" },
  { href: "/admin/logs", label: "Logs" },
  { href: "/admin/settings", label: "Settings" },
];

export default async function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const role = await getSessionRole();

  return (
    <div className="flex min-h-screen bg-zinc-100">
      <aside className="w-64 border-r border-zinc-200 bg-white p-5">
        <h2 className="text-lg font-semibold text-zinc-900">Admin Console</h2>
        <p className="mt-1 text-xs text-zinc-500">Role: {role ?? "unknown"}</p>
        <nav className="mt-6 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <section className="flex-1 p-6">
        <header className="mb-6 flex items-center justify-between rounded-lg border border-zinc-200 bg-white px-4 py-3">
          <p className="text-sm text-zinc-600">Basic admin management starter</p>
          <LogoutButton />
        </header>
        {children}
      </section>
    </div>
  );
}
