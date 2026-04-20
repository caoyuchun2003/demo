export default function AdminSettingsPage() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold text-zinc-900">Settings</h1>
      <p className="text-zinc-600">
        Configure environment variables, model provider and feature flags.
      </p>
      <form className="space-y-4 rounded-lg border border-zinc-200 bg-white p-5">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-zinc-700">
            App name
          </span>
          <input
            defaultValue="AI Stack Demo"
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-zinc-700">
            Default model
          </span>
          <input
            defaultValue="gpt-4.1-mini"
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>
        <button
          type="button"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white"
        >
          Save
        </button>
      </form>
    </main>
  );
}
