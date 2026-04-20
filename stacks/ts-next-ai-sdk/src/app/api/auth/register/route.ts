import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createSessionToken, SESSION_COOKIE } from "@/lib/session";
import { prisma } from "@/lib/prisma";

type RegisterBody = {
  name?: string;
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as RegisterBody;
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const password = body.password?.trim() ?? "";

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Name, email and password are required." },
      { status: 400 },
    );
  }

  if (password.length < 6) {
    return NextResponse.json(
      { error: "Password must be at least 6 characters." },
      { status: 400 },
    );
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "Email is already registered." }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
      role: "user",
    },
  });

  const token = createSessionToken({ userId: user.id, role: user.role });
  const response = NextResponse.json({ ok: true, role: user.role });
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
