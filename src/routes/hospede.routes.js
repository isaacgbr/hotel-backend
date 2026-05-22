const express = require('express');
const router = express.Router();

// GET teste
router.get('/', (req, res) => {
    res.json({ mensagem: 'GET funcionando!' });
});

// POST teste
router.post('/', (req, res) => {
    res.json({ mensagem: 'POST funcionando!' });
});

module.exports = router;