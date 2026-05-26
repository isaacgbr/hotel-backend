const hospedeRepository = require('../repositories/hospede.repository');

// CREATE
const criarHospede = async (dados) => {
    if (!dados.nome) throw new Error('Nome é obrigatório');
    if (!dados.cpf) throw new Error('CPF é obrigatório');
    if (!dados.telefone) throw new Error('Telefone é obrigatório');

    const cpfExiste = await hospedeRepository.buscarPorCpf(dados.cpf);
    if (cpfExiste) {
        throw new Error('CPF já cadastrado');
    }

    return await hospedeRepository.criarHospede(dados);
};

// READ
const listarHospedes = async () => {
    return await hospedeRepository.listarHospedes();
};

// READ BY ID
const buscarHospedePorId = async (id) => {
    return await hospedeRepository.buscarPorId(id);
};

// UPDATE
const atualizarHospede = async (id, dados) => {
    const existe = await hospedeRepository.buscarPorId(id);
    if (!existe) return null;

    return await hospedeRepository.atualizarHospede(id, dados);
};

// DELETE
const deletarHospede = async (id) => {
    const existe = await hospedeRepository.buscarPorId(id);
    if (!existe) return null;

    return await hospedeRepository.deletarHospede(id);
};

module.exports = {
    criarHospede,
    listarHospedes,
    buscarHospedePorId,
    atualizarHospede,
    deletarHospede
};