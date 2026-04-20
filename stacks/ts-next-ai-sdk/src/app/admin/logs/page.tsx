const logs = [
  { event: "User login", actor: "admin@example.com", time: "2026-04-10 14:05" },
  {
    event: "Profile updated",
    actor: "user@example.com",
    time: "2026-04-10 13:42",
  },
];

export default function AdminLogsPage() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-900">Audit Logs</h1>
      <p className="text-zinc-600">Recent system and user actions.</p>
      <ul className="space-y-2">
        {logs.map((log) => (
          <li
            key={`${log.event}-${log.time}`}
            className="rounded-lg border border-zinc-200 bg-white p-4"
          >
            <p className="font-medium text-zinc-900">{log.event}</p>
            <p className="text-sm text-zinc-600">
              {log.actor} at {log.time}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
