import { currentUser } from "@/auth/currentUser";
import { PrismaClient } from "@prisma/client";
import { useSupabaseRowLevelSecurity } from "./useSupabaseRowLevelSecurity";

declare const globalThis: {
  prismaGlobal: ReturnType<typeof createPrismaClient>;
} & typeof global;

export default async function prismaSingleton() {
  if (!globalThis.prismaGlobal) {
    const user = await currentUser();
    globalThis.prismaGlobal = createPrismaClient(user.id);
  }
  return globalThis.prismaGlobal;
}

const createPrismaClient = (userId: string) => {
  const isDev = process.env.NODE_ENV === "development";

  return new PrismaClient({ log: isDev ? ["query"] : [] }).$extends(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useSupabaseRowLevelSecurity({
      claimsFn: () => ({
        sub: userId,
        aud: "authenticated",
        role: "authenticated",
      }),
      logging: isDev,
    }),
  );
};
