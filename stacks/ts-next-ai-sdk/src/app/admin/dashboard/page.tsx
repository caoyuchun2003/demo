export default function AdminDashboardPage() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>
      <p className="text-zinc-600">
        Overview metrics for users, AI requests, and system health can be placed
        here.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {["Active users", "Requests today", "Error rate"].map((label) => (
          <div
            key={label}
            className="rounded-lg border border-zinc-200 bg-white p-4"
          >
            <p className="text-sm text-zinc-500">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-zinc-900">--</p>
          </div>
        ))}
      </div>
    </main>
  );
}
