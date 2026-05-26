const express = require('express');
const router = express.Router();

const hospedeController = require('../controllers/hospede.controller');

// CREATE
router.post('/', hospedeController.criar);

// READ ALL
router.get('/', hospedeController.listar);

// READ BY ID
router.get('/:id', hospedeController.buscarPorId);

// UPDATE
router.put('/:id', hospedeController.atualizar);

// DELETE
router.delete('/:id', hospedeController.deletar);

module.exports = router;