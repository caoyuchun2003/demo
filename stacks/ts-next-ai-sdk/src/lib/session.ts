import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const SESSION_COOKIE = "demo-session";
const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret-change-me";

export type SessionRole = "admin" | "user";
type SessionPayload = {
  userId: string;
  role: SessionRole;
};

function verifySessionToken(token: string): SessionPayload | null {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    if (
      typeof payload === "object" &&
      payload &&
      "userId" in payload &&
      "role" in payload
    ) {
      const role = payload.role;
      const userId = payload.userId;
      if ((role === "admin" || role === "user") && typeof userId === "string") {
        return { userId, role };
      }
    }
    return null;
  } catch {
    return null;
  }
}

export function createSessionToken(payload: SessionPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export async function getSession(): Promise<SessionPayload | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

export async function getSessionRole(): Promise<SessionRole | null> {
  const session = await getSession();
  return session?.role ?? null;
}
