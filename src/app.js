const express = require('express');
const app = express();

app.use(express.json());

const hospedeRoutes = require('./routes/hospede.routes');

app.use('/hospedes', hospedeRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando');
});