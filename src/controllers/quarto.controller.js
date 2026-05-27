const { quartoService } = require('../services/quarto.service');

const quartoController = {
  async criar(req, res) {
    try {
      const quarto = await quartoService.criarQuarto(req.body);
      return res.status(201).json(quarto);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },

  async listar(req, res) {
    try {
      const quartos = await quartoService.listarQuartos();
      return res.json(quartos);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  async buscar(req, res) {
    try {
      const quarto = await quartoService.buscarQuartoPorId(Number(req.params.id));
      return res.json(quarto);
    } catch (error) {
      return res.status(404).json({ erro: error.message });
    }
  },

  async atualizar(req, res) {
    try {
      const quarto = await quartoService.atualizarQuarto(Number(req.params.id), req.body);
      return res.json(quarto);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },

  async deletar(req, res) {
    try {
      await quartoService.deletarQuarto(Number(req.params.id));
      return res.status(204).send();
    } catch (error) {
      return res.status(404).json({ erro: error.message });
    }
  }
};

module.exports = { quartoController };