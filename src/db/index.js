const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri = "mongodb+srv://arthuralj13:Alj157799@admmemorix.sur4ipl.mongodb.net/memorix"

mongoose.connect(mongoUri)
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("Erro ao conectar ao MongoDB:", err));

const Usuario = require('./models/Usuario');
const bcrypt = require('bcrypt');

const rotasAuth = require('./routes/auth');
app.use(rotasAuth);

app.get('/', (req, res) => {
  res.send('API Memorix funcionando!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});


