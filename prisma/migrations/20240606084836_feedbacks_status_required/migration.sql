/*
  Warnings:

  - Made the column `status` on table `pfa_feedbacks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "pfa_feedbacks" ALTER COLUMN "status" SET NOT NULL;
