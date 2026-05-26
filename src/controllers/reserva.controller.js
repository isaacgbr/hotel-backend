const ReservaService = require('../services/reserva.service');

module.exports = {

    create(req, res) {
        try {
            const reserva = ReservaService.create(req.body);
            return res.status(201).json(reserva);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    },

    getAll(req, res) {
        const reservas = ReservaService.getAll();
        return res.json(reservas);
    },

    update(req, res) {
        try {
            const reserva = ReservaService.update(req.params.id, req.body);
            return res.json(reserva);
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    },

    delete(req, res) {
        try {
            ReservaService.delete(req.params.id);
            return res.json({ mensagem: 'Reserva deletada com sucesso' });
        } catch (error) {
            return res.status(400).json({ erro: error.message });
        }
    }
};