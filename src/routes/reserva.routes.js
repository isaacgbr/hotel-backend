const express = require('express');
const router = express.Router();
const ReservaController = require('../controllers/reservaController');

router.post('/reservas', ReservaController.create);
router.get('/reservas', ReservaController.getAll);
router.put('/reservas/:id', ReservaController.update);
router.delete('/reservas/:id', ReservaController.delete);

module.exports = router;