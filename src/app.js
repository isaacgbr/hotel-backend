const express = require('express');
const app = express();

app.use(express.json());

const hospedeRoutes = require('./routes/hospede.routes');
const reservaRoutes = require('./routes/reserva.routes');

app.use('/hospedes', hospedeRoutes);
app.use('/reservas', reservaRoutes);

// Health check
app.get('/', (req, res) => {
    res.json({ status: 'API online' });
});

// Middleware de erro global
app.use((err, req, res, next) => {
    res.status(500).json({
        erro: err.message || 'Erro interno'
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});