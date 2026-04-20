import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-16 font-sans">
      <main className="w-full max-w-2xl rounded-2xl border border-zinc-200 bg-white p-10 shadow-sm">
        <h1 className="text-3xl font-semibold text-zinc-900">AI Stack Demo Starter</h1>
        <p className="mt-3 text-zinc-600">
          Basic web pages are ready: login, register, and admin dashboard pages.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Link
            href="/login"
            className="rounded-lg bg-zinc-900 px-4 py-2 text-center text-sm font-medium text-white"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-center text-sm font-medium text-zinc-800"
          >
            Register
          </Link>
          <Link
            href="/admin/dashboard"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-center text-sm font-medium text-zinc-800"
          >
            Admin
          </Link>
        </div>
      </main>
    </div>
  );
}
