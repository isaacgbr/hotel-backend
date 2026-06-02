const express = require('express');
const router = express.Router();

const pagamentoController = require('../controllers/pagamento.controller');

// CREATE
router.post('/', pagamentoController.criar);

// READ ALL
router.get('/', pagamentoController.listar);

// READ BY ID
router.get('/:id', pagamentoController.buscar);

// UPDATE
router.put('/:id', pagamentoController.atualizar);

// DELETE
router.delete('/:id', pagamentoController.deletar);

module.exports = router;