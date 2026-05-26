const prisma = require('../../prisma/client');

// CREATE
const criarReserva = (data) => {
    return prisma.reserva.create({
        data
    });
};

// READ ALL
const listarReservas = () => {
    return prisma.reserva.findMany({
        include: {
            hospede: true,
            quarto: true
        }
    });
};

// READ BY ID
const buscarPorId = (id) => {
    return prisma.reserva.findUnique({
        where: { id: Number(id) },
        include: {
            hospede: true,
            quarto: true
        }
    });
};

// UPDATE
const atualizarReserva = (id, data) => {
    return prisma.reserva.update({
        where: { id: Number(id) },
        data
    });
};

// DELETE
const deletarReserva = (id) => {
    return prisma.reserva.delete({
        where: { id: Number(id) }
    });
};

// CHECK CONFLICT (CORRIGIDO)
const verificarConflito = (quartoId, dataEntrada, dataSaida, reservaId = null) => {
    return prisma.reserva.findFirst({
        where: {
            quartoId: Number(quartoId),
            id: reservaId ? { not: Number(reservaId) } : undefined,
            OR: [
                {
                    dataEntrada: { lte: new Date(dataSaida) },
                    dataSaida: { gte: new Date(dataEntrada) }
                }
            ]
        }
    });
};

module.exports = {
    criarReserva,
    listarReservas,
    buscarPorId,
    atualizarReserva,
    deletarReserva,
    verificarConflito
};