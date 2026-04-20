import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const adminPasswordHash = await bcrypt.hash("Admin123456", 10);
  const userPasswordHash = await bcrypt.hash("User123456", 10);

  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {
      name: "Admin",
      role: "admin",
      passwordHash: adminPasswordHash,
    },
    create: {
      name: "Admin",
      email: "admin@example.com",
      role: "admin",
      passwordHash: adminPasswordHash,
    },
  });

  await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {
      name: "Demo User",
      role: "user",
      passwordHash: userPasswordHash,
    },
    create: {
      name: "Demo User",
      email: "user@example.com",
      role: "user",
      passwordHash: userPasswordHash,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
