-- CreateTable
CREATE TABLE "Idea" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false
);
