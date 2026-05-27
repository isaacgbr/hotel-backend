/*
  Warnings:

  - Added the required column `precoPorDiaria` to the `Quarto` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Quarto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'disponivel',
    "precoPorDiaria" REAL NOT NULL
);
INSERT INTO "new_Quarto" ("id", "numero", "status", "tipo") SELECT "id", "numero", "status", "tipo" FROM "Quarto";
DROP TABLE "Quarto";
ALTER TABLE "new_Quarto" RENAME TO "Quarto";
CREATE UNIQUE INDEX "Quarto_numero_key" ON "Quarto"("numero");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
