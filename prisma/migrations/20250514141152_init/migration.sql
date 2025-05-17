/*
  Warnings:

  - You are about to drop the `LiveEvent` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `questionScore` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "QuizType" AS ENUM ('PUBLIC', 'PRIVATE');

-- DropForeignKey
ALTER TABLE "LiveEvent" DROP CONSTRAINT "LiveEvent_sessionId_fkey";

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "questionScore" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Quiz" ADD COLUMN     "type" "QuizType" NOT NULL DEFAULT 'PRIVATE';

-- DropTable
DROP TABLE "LiveEvent";
