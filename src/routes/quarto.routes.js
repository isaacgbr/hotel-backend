const { Router } = require('express');
const { quartoController } = require('../controllers/quarto.controller');

const router = Router();

router.post('/', quartoController.criar);
router.get('/', quartoController.listar);
router.get('/:id', quartoController.buscar);
router.put('/:id', quartoController.atualizar);
router.delete('/:id', quartoController.deletar);

module.exports = router;