import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.feedback.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.create({
    data: {
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
  await prisma.user.create({
    data: {
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
  await prisma.user.create({
    data: {
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
