const express = require('express');
const router = express.Router();

// TESTE GET
router.get('/', (req, res) => {
    res.json({ mensagem: 'GET funcionando!' });
});

// TESTE POST
router.post('/', (req, res) => {
    res.json({ mensagem: 'POST funcionando!' });
});

module.exports = router;