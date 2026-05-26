const service = require('../services/hospede.service');

const criar = async (req, res) => {
    try {
        const hospede = await service.criarHospede(req.body);
        res.status(201).json(hospede);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao criar hóspede" });
    }
};

const listar = async (req, res) => {
    try {
        const hospedes = await service.listarHospedes();
        res.json(hospedes);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao listar hóspedes" });
    }
};

const buscar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const hospede = await service.buscarHospedePorId(id);

        if (!hospede) {
            return res.status(404).json({ erro: "Não encontrado" });
        }

        res.json(hospede);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao buscar hóspede" });
    }
};

const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const hospede = await service.atualizarHospede(id, req.body);

        if (!hospede) {
            return res.status(404).json({ erro: "Não encontrado" });
        }

        res.json(hospede);
    } catch (error) {
        res.status(500).json({ erro: "Erro ao atualizar hóspede" });
    }
};

const deletar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const resultado = await service.deletarHospede(id);

        if (!resultado) {
            return res.status(404).json({ erro: "Não encontrado" });
        }

        res.json({ mensagem: "Deletado com sucesso" });
    } catch (error) {
        res.status(500).json({ erro: "Erro ao deletar hóspede" });
    }
};

module.exports = {
    criar,
    listar,
    buscar,
    atualizar,
    deletar
};