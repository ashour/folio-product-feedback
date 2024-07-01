import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.feedback.deleteMany();
  await prisma.userProfile.deleteMany();

  await prisma.userProfile.create({
    data: {
      id: "52d49603-7cc7-4ade-9a8d-83257322aa90",
      firstName: "Elijah",
      lastName: "Moss",
      username: "hexagon.bestagon",
      feedbacks: {
        create: [
          {
            title: "Add tags for habits",
            details:
              "It would be great to add tags to habits so I can group them together.",
            category: "Enhancement",
          },
          {
            title: "Ability to follow others",
            details:
              "I would like to follow my friends and see their habits and progress.",
            category: "Feature",
          },
        ],
      },
    },
  });
  await prisma.userProfile.create({
    data: {
      id: "c021298d-bb84-4a17-a2c3-ed58990218fa",
      firstName: "Jamie",
      lastName: "Skinner",
      username: "hummingbird1",
      feedbacks: {
        create: [
          {
            title: "Add a habit search bar",
            details: "It would make it easier to find habits. I have a lot!",
            category: "Enhancement",
          },
        ],
      },
    },
  });
  await prisma.userProfile.create({
    data: {
      id: "c4dc1be3-6df6-439b-8ad7-67f30d5e8c26",
      firstName: "Anne",
      lastName: "Valentine",
      username: "annev1990",
      feedbacks: {
        create: [
          {
            title: "Add dark theme options",
            details:
              "It would help people with light sensitivities and who prefer dark mode.",
            category: "Feature",
          },
          {
            title: "Habit icons not loading",
            details:
              "The daily and weekly image icons are not loading on the monthly summary page.",
            category: "Bug",
          },
        ],
      },
    },
  });
  await prisma.userProfile.create({
    data: {
      id: "536bfd32-f0e3-4aad-b0bf-6f846974dacb",
      firstName: "Ryan",
      lastName: "Welles",
      username: "voyager.344",
    },
  });
  await prisma.userProfile.create({
    data: {
      id: "66df3fd6-1b7b-4fc2-9b1e-d1618111e7c4",
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
