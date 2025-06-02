async function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    const resposta = await fetch('http://localhost:3000/telalogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
    });

    const dados = await resposta.json();
    alert(dados.mensagem);

    if (resposta.ok) {
      window.location.href = '../telainicio/inicio.html'; // ou outra página
    }

  } catch (erro) {
    console.error("Erro ao logar:", erro);
    alert("Erro ao fazer login.");
  }
}
