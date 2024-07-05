## Config

Create a Supabase project.

Make sure to create a role in the database called rls_user.

```sql
CREATE USER rls_user
WITH
  PASSWORD 'your_password';
```

Add the database connection string for the rls_user in the .env file.

```env
DATABASE_URL="postgres://your-supabase-postgres-row-level-security-url?pgbouncer=true&connection_limit=1"
```

### .env file

### Add some mock users

Under the Authentication section of your Supabase project, add a few users for
testing.

<!-- TODO: script for this -->

### Run migrations

After you migrate the database, copy the SQL in `prisma/post_migration.sql`
and run them in the SQL Editor of your Supabase project.

### Seed the database

In the `src/db/lib/prisma/seed.ts` file, replace all the user ids with ids from the users
you added in the Authentication section of your Supabase project.

<!-- TODO: Provide a SQL script for this -->

### Enable Realtime

# Next.js README.md

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
