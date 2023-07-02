require('dotenv').config()

const express = require('express');
const app = express();
//const fs = require('fs');
const cors = require('cors');
//const jwt = require('jsonwebtoken');

//rotas de autenticacao
const authRoutes = require('./router/auth');

app.use(express.json());
app.use(cors());
//rotas de autenticacao
app.use('/auth', authRoutes);

app.listen(4000, () => {
    console.log('Servidor na porta 4000');
});

require('crypto').randomBytes(64).toString('hex');
TOKEN