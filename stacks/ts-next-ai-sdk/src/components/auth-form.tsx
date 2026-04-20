"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

type AuthFormProps = {
  mode: "login" | "register";
};

export function AuthForm({ mode }: AuthFormProps) {
  const isLogin = mode === "login";
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [filledHint, setFilledHint] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function fillCredentials(nextEmail: string, nextPassword: string, hint: string) {
    if (emailRef.current) {
      emailRef.current.value = nextEmail;
    }
    if (passwordRef.current) {
      passwordRef.current.value = nextPassword;
    }
    setError("");
    setFilledHint(hint);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
    };

    const response = await fetch(
      isLogin ? "/api/auth/login" : "/api/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );

    const data = (await response.json()) as { error?: string; role?: string };
    if (!response.ok) {
      setError(data.error ?? "Request failed.");
      setLoading(false);
      return;
    }

    router.push("/admin/dashboard");
    router.refresh();
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-semibold text-zinc-900">
        {isLogin ? "Login" : "Create account"}
      </h1>
      <p className="mt-2 text-sm text-zinc-600">
        {isLogin
          ? "Sign in to access the admin console."
          : "Register and start using your dashboard."}
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        {!isLogin ? (
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-zinc-700">
              Name
            </span>
            <input
              name="name"
              required
              className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            />
          </label>
        ) : null}

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-zinc-700">
            Email
          </span>
          <input
            ref={emailRef}
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
            placeholder="admin@example.com"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-zinc-700">
            Password
          </span>
          <input
            ref={passwordRef}
            name="password"
            type="password"
            minLength={6}
            required
            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
        </label>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-70"
        >
          {loading ? "Submitting..." : isLogin ? "Login" : "Register"}
        </button>
      </form>

      <p className="mt-4 text-sm text-zinc-600">
        {isLogin ? "No account yet?" : "Already have an account?"}{" "}
        <Link
          href={isLogin ? "/register" : "/login"}
          className="font-medium text-zinc-900 underline"
        >
          {isLogin ? "Register" : "Login"}
        </Link>
      </p>

      {isLogin ? (
        <div className="mt-4 rounded-md border border-zinc-200 bg-zinc-50 p-3 text-xs text-zinc-700">
          <p className="font-semibold text-zinc-900">Test accounts</p>
          <div className="mt-2 flex gap-2">
            <button
              type="button"
              onClick={() =>
                fillCredentials(
                  "admin@example.com",
                  "Admin123456",
                  "Filled admin test account.",
                )
              }
              className="rounded border border-zinc-300 bg-white px-2 py-1 text-zinc-800"
            >
              Fill Admin
            </button>
            <button
              type="button"
              onClick={() =>
                fillCredentials(
                  "user@example.com",
                  "User123456",
                  "Filled user test account.",
                )
              }
              className="rounded border border-zinc-300 bg-white px-2 py-1 text-zinc-800"
            >
              Fill User
            </button>
          </div>
          {filledHint ? <p className="mt-1 text-emerald-700">{filledHint}</p> : null}
          <p className="mt-1">admin@example.com / Admin123456</p>
          <p>user@example.com / User123456</p>
        </div>
      ) : null}
    </div>
  );
}
