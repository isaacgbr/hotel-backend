const prisma = require('../../prisma/client');

const criarHospede = (data) => {
    return prisma.hospede.create({ data });
};

const listarHospedes = () => {
    return prisma.hospede.findMany();
};

const buscarPorId = (id) => {
    return prisma.hospede.findUnique({
        where: { id: Number(id) }
    });
};

const atualizarHospede = (id, data) => {
    return prisma.hospede.update({
        where: { id: Number(id) },
        data
    });
};

const deletarHospede = (id) => {
    return prisma.hospede.delete({
        where: { id: Number(id) }
    });
};

module.exports = {
    criarHospede,
    listarHospedes,
    buscarPorId,
    atualizarHospede,
    deletarHospede
};