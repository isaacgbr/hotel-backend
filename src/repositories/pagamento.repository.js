const prisma = require('./cliente');

const create = (data) => prisma.pagamento.create({ data });

const findAll = () => prisma.pagamento.findMany({ include: { reserva: true } });

const findById = (id) => prisma.pagamento.findUnique({
  where: { id },
  include: { reserva: true }
});

const update = (id, data) => prisma.pagamento.update({ where: { id }, data });

const remove = (id) => prisma.pagamento.delete({ where: { id } });

module.exports = { create, findAll, findById, update, remove };