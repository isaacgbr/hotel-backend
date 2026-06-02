const pagamentoRepository = require('../repositories/pagamento.repository');
const reservaRepository = require('../repositories/reserva.repository');

// CREATE
const criarPagamento = async (dados) => {
    const { valor, statusPagamento, reservaId } = dados;

    if (!valor || !statusPagamento || !reservaId) {
        throw new Error('Valor, statusPagamento e reservaId são obrigatórios');
    }

    const reserva = await reservaRepository.buscarPorId(reservaId);

    if (!reserva) {
        throw new Error('Reserva não encontrada');
    }

    return await pagamentoRepository.criarPagamento({
        valor,
        statusPagamento,
        reservaId
    });
};

// READ
const listarPagamentos = async () => {
    return await pagamentoRepository.listarPagamentos();
};

// READ BY ID
const buscarPagamentoPorId = async (id) => {
    return await pagamentoRepository.buscarPorId(id);
};

// UPDATE
const atualizarPagamento = async (id, dados) => {
    const existe = await pagamentoRepository.buscarPorId(id);

    if (!existe) {
        return null;
    }

    return await pagamentoRepository.atualizarPagamento(id, dados);
};

// DELETE
const deletarPagamento = async (id) => {
    const existe = await pagamentoRepository.buscarPorId(id);

    if (!existe) {
        return null;
    }

    await pagamentoRepository.deletarPagamento(id);

    return true;
};

module.exports = {
    criarPagamento,
    listarPagamentos,
    buscarPagamentoPorId,
    atualizarPagamento,
    deletarPagamento
};