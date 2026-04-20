"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function onLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={onLogout}
      className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700"
    >
      Logout
    </button>
  );
}
