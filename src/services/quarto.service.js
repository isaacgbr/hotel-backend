const { quartoRepository } = require('../repositories/quarto.repository');

const quartoService = {
  async criarQuarto(dados) {
    const { numero, tipo, precoPorDiaria } = dados;

if (!numero || !tipo || !precoPorDiaria) {
  throw new Error('Número, tipo e preço por diária são obrigatórios.');
}

    const jaExiste = await quartoRepository.buscarPorNumero(String(numero));
    if (jaExiste) {
      throw new Error('Já existe um quarto com esse número.');
    }

    return await quartoRepository.criar(dados);
  },

  async listarQuartos() {
    return await quartoRepository.listar();
  },

  async buscarQuartoPorId(id) {
    const quarto = await quartoRepository.buscarPorId(id);
    if (!quarto) throw new Error('Quarto não encontrado.');
    return quarto;
  },

  async atualizarQuarto(id, dados) {
    const quarto = await quartoRepository.buscarPorId(id);
    if (!quarto) throw new Error('Quarto não encontrado.');
    return await quartoRepository.atualizar(id, dados);
  },

  async deletarQuarto(id) {
    const quarto = await quartoRepository.buscarPorId(id);
    if (!quarto) throw new Error('Quarto não encontrado.');
    return await quartoRepository.deletar(id);
  }
};

module.exports = { quartoService };