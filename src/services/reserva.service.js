const reservaRepository = require('../repositories/reserva.repository');

// CREATE
const criarReserva = async (dados) => {
    const { dataEntrada, dataSaida, hospedeId, quartoId } = dados;

    if (!dataEntrada || !dataSaida || !hospedeId || !quartoId) {
        throw new Error('Dados obrigatórios faltando');
    }

    const conflito = await reservaRepository.verificarConflito(
        quartoId,
        dataEntrada,
        dataSaida
    );

    if (conflito) {
        throw new Error('Quarto já reservado nesse período');
    }

    return await reservaRepository.criarReserva(dados);
};

// READ
const listarReservas = async () => {
    return await reservaRepository.listarReservas();
};

// READ BY ID
const buscarReservaPorId = async (id) => {
    return await reservaRepository.buscarPorId(id);
};

// UPDATE
const atualizarReserva = async (id, dados) => {
    const existe = await reservaRepository.buscarPorId(id);
    if (!existe) return null;

    const { dataEntrada, dataSaida, quartoId } = dados;

    if (quartoId || dataEntrada || dataSaida) {
        const conflito = await reservaRepository.verificarConflito(
            quartoId || existe.quartoId,
            dataEntrada || existe.dataEntrada,
            dataSaida || existe.dataSaida
        );

        if (conflito) {
            throw new Error('Quarto já reservado nesse período');
        }
    }

    return await reservaRepository.atualizarReserva(id, dados);
};

// DELETE
const deletarReserva = async (id) => {
    const existe = await reservaRepository.buscarPorId(id);
    if (!existe) return null;

    return await reservaRepository.deletarReserva(id);
};

module.exports = {
    criarReserva,
    listarReservas,
    buscarReservaPorId,
    atualizarReserva,
    deletarReserva
};