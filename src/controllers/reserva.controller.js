const ReservaService = require('../services/reserva.service');

module.exports = {

    async criar(req, res) {
        try {
            const reserva = await ReservaService.criarReserva(req.body);
            return res.status(201).json(reserva);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    },

    async listar(req, res) {
        const reservas = await ReservaService.listarReservas();
        return res.json(reservas);
    },

    async atualizar(req, res) {
        try {
            const reserva = await ReservaService.atualizarReserva(req.params.id, req.body);

            if (!reserva) {
                return res.status(404).json({ erro: 'Não encontrada' });
            }

            return res.json(reserva);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    },

    async deletar(req, res) {
        try {
            const resultado = await ReservaService.deletarReserva(req.params.id);

            if (!resultado) {
                return res.status(404).json({ erro: 'Não encontrada' });
            }

            return res.json({ mensagem: 'Reserva deletada com sucesso' });
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
};