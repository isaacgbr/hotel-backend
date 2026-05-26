const hospedeRepository = require('../repositories/hospede.repository');

// CREATE
const criarHospede = async (dados) => {

    if (!dados.cpf) {
        throw new Error('CPF é obrigatório');
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

    return await hospedeRepository.atualizarHospede(id, dados);

};

// DELETE
const deletarHospede = async (id) => {

    return await hospedeRepository.deletarHospede(id);

};

module.exports = {
    criarHospede,
    listarHospedes,
    buscarHospedePorId,
    atualizarHospede,
    deletarHospede
};