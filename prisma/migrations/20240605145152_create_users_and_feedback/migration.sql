-- CreateTable
CREATE TABLE "pfa_users" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "pfa_users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pfa_feedbacks" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "status" TEXT DEFAULT 'suggestion',
    "title" TEXT NOT NULL,
    "details" TEXT NOT NULL,

    CONSTRAINT "pfa_feedbacks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pfa_users_username_key" ON "pfa_users"("username");

-- AddForeignKey
ALTER TABLE "pfa_feedbacks" ADD CONSTRAINT "pfa_feedbacks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "pfa_users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
