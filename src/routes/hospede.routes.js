const express = require('express');
const router = express.Router();

const hospedeController = require('../controllers/hospede.controller');

router.post('/', hospedeController.criar);
router.get('/', hospedeController.listar);
router.get('/:id', hospedeController.buscar);
router.put('/:id', hospedeController.atualizar);
router.delete('/:id', hospedeController.deletar);

module.exports = router;