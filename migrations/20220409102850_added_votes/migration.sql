-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Idea" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "votes" INTEGER NOT NULL DEFAULT 0,
    "link" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Idea" ("createdAt", "description", "id", "isApproved", "link", "updatedAt") SELECT "createdAt", "description", "id", "isApproved", "link", "updatedAt" FROM "Idea";
DROP TABLE "Idea";
ALTER TABLE "new_Idea" RENAME TO "Idea";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
