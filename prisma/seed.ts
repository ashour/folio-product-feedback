import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();

  await prisma.user.create({
    data: {
      firstName: "Elijah",
      lastName: "Moss",
      username: "hexagon.bestagon",
    },
  });
  await prisma.user.create({
    data: {
      firstName: "Jamie",
      lastName: "Skinner",
      username: "hummingbird1",
    },
  });
  await prisma.user.create({
    data: {
      firstName: "Anne",
      lastName: "Valentine",
      username: "annev1990",
    },
  });
  await prisma.user.create({
    data: {
      firstName: "Ryan",
      lastName: "Welles",
      username: "voyager.344",
    },
  });
  await prisma.user.create({
    data: {
      firstName: "The",
      lastName: "Big You",
      username: "thebigyou",
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
