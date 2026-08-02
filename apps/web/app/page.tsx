import { prisma } from "@repo/db/client";

export default async function Home() {
  const user = await prisma.user.findFirst();

  return (
    <>
      <div>
        <div>Welcome, {user?.username}!</div>
        <div>Username:</div>
        {user?.username}
        <div>Password:</div>
        {user?.password}
      </div>
    </>
  );
}
