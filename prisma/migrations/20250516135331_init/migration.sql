/*
  Warnings:

  - A unique constraint covering the columns `[sessionId,email]` on the table `SessionInvitation` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "SessionInvitation" ADD COLUMN     "userId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "SessionInvitation_sessionId_email_key" ON "SessionInvitation"("sessionId", "email");

-- AddForeignKey
ALTER TABLE "SessionInvitation" ADD CONSTRAINT "SessionInvitation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
