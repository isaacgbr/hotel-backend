const service = require('../services/pagamento.service');

const create = async (req, res) => {
  try {
    const pagamento = await service.create(req.body);
    res.status(201).json(pagamento);
  } catch (e) { res.status(400).json({ error: e.message }); }
};

const findAll = async (req, res) => {
  try { res.json(await service.findAll()); }
  catch (e) { res.status(500).json({ error: e.message }); }
};

const findById = async (req, res) => {
  try { res.json(await service.findById(Number(req.params.id))); }
  catch (e) { res.status(404).json({ error: e.message }); }
};

const update = async (req, res) => {
  try { res.json(await service.update(Number(req.params.id), req.body)); }
  catch (e) { res.status(400).json({ error: e.message }); }
};

const remove = async (req, res) => {
  try { res.status(204).send(await service.remove(Number(req.params.id))); }
  catch (e) { res.status(404).json({ error: e.message }); }
};

module.exports = { create, findAll, findById, update, remove };