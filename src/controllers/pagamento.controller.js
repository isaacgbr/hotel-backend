const PagamentoService = require('../services/pagamento.service');

module.exports = {

    async criar(req, res) {
        try {
            const pagamento = await PagamentoService.criarPagamento(req.body);

            return res.status(201).json(pagamento);
        } catch (error) {
            return res.status(400).json({
                erro: error.message
            });
        }
    },

    async listar(req, res) {
        try {
            const pagamentos = await PagamentoService.listarPagamentos();

            return res.json(pagamentos);
        } catch (error) {
            return res.status(500).json({
                erro: error.message
            });
        }
    },

    async buscar(req, res) {
        try {
            const pagamento = await PagamentoService.buscarPagamentoPorId(
                req.params.id
            );

            if (!pagamento) {
                return res.status(404).json({
                    erro: 'Pagamento não encontrado'
                });
            }

            return res.json(pagamento);
        } catch (error) {
            return res.status(400).json({
                erro: error.message
            });
        }
    },

    async atualizar(req, res) {
        try {
            const pagamento = await PagamentoService.atualizarPagamento(
                req.params.id,
                req.body
            );

            if (!pagamento) {
                return res.status(404).json({
                    erro: 'Pagamento não encontrado'
                });
            }

            return res.json(pagamento);
        } catch (error) {
            return res.status(400).json({
                erro: error.message
            });
        }
    },

    async deletar(req, res) {
        try {
            const resultado = await PagamentoService.deletarPagamento(
                req.params.id
            );

            if (!resultado) {
                return res.status(404).json({
                    erro: 'Pagamento não encontrado'
                });
            }

            return res.json({
                mensagem: 'Pagamento deletado com sucesso'
            });
        } catch (error) {
            return res.status(400).json({
                erro: error.message
            });
        }
    }
};