async function cadastro() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    const resposta = await fetch('http://localhost:3000/telacadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email, senha })
    });

    const dados = await resposta.json();
    alert(dados.mensagem);

    if (resposta.ok) {
      window.location.href = '../telalogin/login.html';
    }

  } catch (erro) {
    console.error("Erro ao cadastrar:", erro);
    alert("Erro ao cadastrar.");
  }
}
