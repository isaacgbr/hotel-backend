let reservas = [];
let idAtual = 1;

module.exports = {

    create({ nome, quarto, data }) {
        if (!nome || !quarto || !data) {
            throw new Error('Nome, quarto e data são obrigatórios');
        }

        const conflito = reservas.find(r =>
            r.quarto === quarto &&
            r.data === data
        );

        if (conflito) {
            throw new Error('Quarto já reservado nessa data');
        }

        const novaReserva = {
            id: idAtual++,
            nome,
            quarto,
            data
        };

        reservas.push(novaReserva);
        return novaReserva;
    },

    getAll() {
        return reservas;
    },

    update(id, { nome, quarto, data }) {
        const reserva = reservas.find(r => r.id == id);

        if (!reserva) {
            throw new Error('Reserva não encontrada');
        }

        const conflito = reservas.find(r =>
            r.id != id &&
            r.quarto === (quarto || reserva.quarto) &&
            r.data === (data || reserva.data)
        );

        if (conflito) {
            throw new Error('Quarto já reservado nessa data');
        }

        reserva.nome = nome || reserva.nome;
        reserva.quarto = quarto || reserva.quarto;
        reserva.data = data || reserva.data;

        return reserva;
    },

    delete(id) {
        const existe = reservas.some(r => r.id == id);

        if (!existe) {
            throw new Error('Reserva não encontrada');
        }

        reservas = reservas.filter(r => r.id != id);
    }
};