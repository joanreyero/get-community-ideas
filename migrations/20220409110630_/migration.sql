/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Idea` table. All the data in the column will be lost.
  - You are about to drop the column `isApproved` on the `Idea` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `Idea` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Idea` table. All the data in the column will be lost.
  - You are about to drop the column `votes` on the `Idea` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Idea" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Idea" ("description", "id") SELECT "description", "id" FROM "Idea";
DROP TABLE "Idea";
ALTER TABLE "new_Idea" RENAME TO "Idea";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
