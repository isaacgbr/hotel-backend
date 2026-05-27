const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reserva.controller');

// CREATE
router.post('/', reservaController.criar);

// READ ALL
router.get('/', reservaController.listar);

// READ ONE
router.get('/:id', reservaController.buscar);

// UPDATE
router.put('/:id', reservaController.atualizar);

// DELETE
router.delete('/:id', reservaController.deletar);

module.exports = router;