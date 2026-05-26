const service = require('../services/hospede.service');

const criar = async (req, res) => {
    const hospede = await service.criarHospede(req.body);
    res.status(201).json(hospede);
};

const listar = async (req, res) => {
    const hospedes = await service.listarHospedes();
    res.json(hospedes);
};

const buscar = async (req, res) => {
    const id = parseInt(req.params.id);
    const hospede = await service.buscarHospedePorId(id);

    if (!hospede) {
        return res.status(404).json({ erro: "Não encontrado" });
    }

    res.json(hospede);
};

const atualizar = async (req, res) => {
    const id = parseInt(req.params.id);
    const hospede = await service.atualizarHospede(id, req.body);
    res.json(hospede);
};

const deletar = async (req, res) => {
    const id = parseInt(req.params.id);
    await service.deletarHospede(id);
    res.json({ mensagem: "Deletado com sucesso" });
};

module.exports = {
    criar,
    listar,
    buscar,
    atualizar,
    deletar
};