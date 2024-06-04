-- AlterTable
ALTER TABLE "pfa_users" ADD COLUMN     "username" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "pfa_users_username_key" ON "pfa_users"("username");
