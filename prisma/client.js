const { PrismaClient } = require('@prisma/client');

// Cria conexão com o banco
const prisma = new PrismaClient();

module.exports = prisma;