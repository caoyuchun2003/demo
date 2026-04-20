import { prisma } from "@/lib/prisma";

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: { name: true, email: true, role: true },
  });

  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-900">Users</h1>
      <p className="text-zinc-600">User management list placeholder.</p>
      <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 text-zinc-600">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email} className="border-t border-zinc-200">
                <td className="px-4 py-3 text-zinc-900">{user.name}</td>
                <td className="px-4 py-3 text-zinc-700">{user.email}</td>
                <td className="px-4 py-3 text-zinc-700">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
