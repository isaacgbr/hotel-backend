const prisma = require('../../prisma/client');

// CREATE
const criarPagamento = (data) => {
    return prisma.pagamento.create({
        data
    });
};

// READ ALL
const listarPagamentos = () => {
    return prisma.pagamento.findMany({
        include: {
            reserva: true
        }
    });
};

// READ BY ID
const buscarPorId = (id) => {
    return prisma.pagamento.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            reserva: true
        }
    });
};

// UPDATE
const atualizarPagamento = (id, data) => {
    return prisma.pagamento.update({
        where: {
            id: Number(id)
        },
        data
    });
};

// DELETE
const deletarPagamento = (id) => {
    return prisma.pagamento.delete({
        where: {
            id: Number(id)
        }
    });
};

module.exports = {
    criarPagamento,
    listarPagamentos,
    buscarPorId,
    atualizarPagamento,
    deletarPagamento
};