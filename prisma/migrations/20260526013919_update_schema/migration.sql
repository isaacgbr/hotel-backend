/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Hospede` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Hospede_cpf_key" ON "Hospede"("cpf");
