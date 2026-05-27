const prisma = require('../../prisma/client');

const quartoRepository = {
  async criar(dados) {
    return await prisma.quarto.create({ data: dados });
  },

  async listar() {
    return await prisma.quarto.findMany();
  },

  async buscarPorId(id) {
    return await prisma.quarto.findUnique({ where: { id } });
  },

  async buscarPorNumero(numero) {
  return await prisma.quarto.findFirst({
    where: { numero: String(numero) }
  });
},

  async atualizar(id, dados) {
    return await prisma.quarto.update({ where: { id }, data: dados });
  },

  async deletar(id) {
    return await prisma.quarto.delete({ where: { id } });
  }
};

module.exports = { quartoRepository };