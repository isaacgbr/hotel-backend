const reservaRepository = require('../repositories/reserva.repository');

// CREATE
const criarReserva = async (dados) => {
    const { dataEntrada, dataSaida, hospedeId, quartoId } = dados;

    if (!dataEntrada || !dataSaida || !hospedeId || !quartoId) {
        throw new Error('Dados obrigatórios faltando');
    }

    const entrada = new Date(dataEntrada);
    const saida = new Date(dataSaida);

    if (isNaN(entrada.getTime()) || isNaN(saida.getTime())) {
        throw new Error('Datas inválidas');
    }

    if (entrada >= saida) {
        throw new Error('Data de entrada deve ser menor que a de saída');
    }

    const conflito = await reservaRepository.verificarConflito(
        quartoId,
        entrada,
        saida
    );

    if (conflito) {
        throw new Error('Quarto já reservado nesse período');
    }

    return await reservaRepository.criarReserva({
        hospedeId,
        quartoId,
        dataEntrada: entrada,
        dataSaida: saida
    });
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

    const entrada = dados.dataEntrada
        ? new Date(dados.dataEntrada)
        : existe.dataEntrada;

    const saida = dados.dataSaida
        ? new Date(dados.dataSaida)
        : existe.dataSaida;

    if (isNaN(entrada.getTime()) || isNaN(saida.getTime())) {
        throw new Error('Datas inválidas');
    }

    if (entrada >= saida) {
        throw new Error('Data de entrada deve ser menor que a de saída');
    }

    const conflito = await reservaRepository.verificarConflito(
        dados.quartoId || existe.quartoId,
        entrada,
        saida,
        id
    );

    if (conflito) {
        throw new Error('Quarto já reservado nesse período');
    }

    return await reservaRepository.atualizarReserva(id, {
        ...dados,
        dataEntrada: entrada,
        dataSaida: saida
    });
};

// DELETE
const deletarReserva = async (id) => {
    const existe = await reservaRepository.buscarPorId(id);
    if (!existe) return null;

    await reservaRepository.deletarReserva(id);
    return true;
};

module.exports = {
    criarReserva,
    listarReservas,
    buscarReservaPorId,
    atualizarReserva,
    deletarReserva
};