const repo = require('../repositories/pagamento.repository');

const create = async (data) => {
  if (!data.valor || data.valor <= 0) throw new Error('Valor inválido');
  if (!data.reservaId) throw new Error('reservaId é obrigatório');
  data.statusPagamento = data.statusPagamento || 'PENDENTE';
  return repo.create(data);
};

const findAll = () => repo.findAll();

const findById = async (id) => {
  const pagamento = await repo.findById(id);
  if (!pagamento) throw new Error('Pagamento não encontrado');
  return pagamento;
};

const update = async (id, data) => {
  await findById(id);
  return repo.update(id, data);
};

const remove = async (id) => {
  await findById(id);
  return repo.remove(id);
};

module.exports = { create, findAll, findById, update, remove };