import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import addUser from "./actions/addUser";

const prisma = new PrismaClient();

export default async function DbTest() {
  const users = await prisma.user.findMany();

  return (
    <main className="mx-auto mt-4 max-w-[540px]">
      <h1 className="mb-3 text-h1">Database test</h1>

      <form action={addUser}>
        <input
          type="input"
          name="firstName"
          className="border border-slate-600"
        />
        <input
          type="input"
          name="lastName"
          className="border border-slate-600"
        />
        <button type="submit" className="rounded-md bg-blue-400 p-2 text-white">
          Add user
        </button>
      </form>

      <h2 className="mb-1 text-h2">Users</h2>
      <ul className="flex flex-col gap-1">
        {users.map((user) => (
          <li key={user.id} className="flex gap-1">
            <Image
              src={`/users/${user.username}.jpg`}
              alt={`Profile pic for user ${user.username}`}
              width={40}
              height={40}
            />
            {user.firstName} {user.lastName}{" "}
            <span className="text-slate-500">({user.username})</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
