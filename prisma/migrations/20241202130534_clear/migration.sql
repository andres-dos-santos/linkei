/*
  Warnings:

  - You are about to drop the `Url` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Url";

-- CreateTable
CREATE TABLE "groups" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refreshTokens" (
    "id" TEXT NOT NULL,
    "expiresIn" INTEGER NOT NULL,
    "groupId" TEXT NOT NULL,

    CONSTRAINT "refreshTokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "groups_email_key" ON "groups"("email");

-- CreateIndex
CREATE UNIQUE INDEX "refreshTokens_groupId_key" ON "refreshTokens"("groupId");

-- AddForeignKey
ALTER TABLE "refreshTokens" ADD CONSTRAINT "refreshTokens_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
