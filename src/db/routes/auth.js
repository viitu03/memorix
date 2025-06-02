const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

// Rota de cadastro
router.post('/telacadastro', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ mensagem: "Email já cadastrado!" });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const novoUsuario = new Usuario({
      nome,
      email,
      senha: senhaCriptografada
    });

    await novoUsuario.save();
    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    res.status(500).json({ mensagem: "Erro no cadastro", erro: err });
  }
});

// Rota de login
router.post('/telalogin', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({ mensagem: "Email não encontrado" });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(400).json({ mensagem: "Senha incorreta" });
    }

    res.status(200).json({ mensagem: "Login bem-sucedido!" });
  } catch (err) {
    res.status(500).json({ mensagem: "Erro no login", erro: err });
  }
});

module.exports = router;
