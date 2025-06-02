document.addEventListener("DOMContentLoaded", function () {
    const ajudaIcon = document.getElementById("ajuda-icon");
    const ajudaModal = document.getElementById("ajuda-modal");
    const fecharAjuda = document.querySelector(".fechar-ajuda");

    ajudaIcon.addEventListener("click", function () {
        ajudaModal.classList.add("active");
    });

    fecharAjuda.addEventListener("click", function () {
        ajudaModal.classList.remove("active");
    });

    ajudaModal.addEventListener("click", function (e) {
        if (e.target === ajudaModal) {
            ajudaModal.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const ajudaIcon = document.getElementById("ajuda-icon");
    const ajudaModal = document.getElementById("ajuda-modal");
    const fecharAjuda = document.querySelector(".fechar-ajuda");

    // Modal Ajuda
    ajudaIcon.addEventListener("click", () => ajudaModal.classList.add("active"));
    fecharAjuda.addEventListener("click", () => ajudaModal.classList.remove("active"));
    ajudaModal.addEventListener("click", e => {
        if (e.target === ajudaModal) ajudaModal.classList.remove("active");
    });

    // Dificuldade
    const btnDificuldade = document.getElementById("dificuldade-btn");
    const listaDificuldades = document.getElementById("lista-dificuldades");
    const opcoes = document.querySelectorAll(".dificuldade-opcao");

    btnDificuldade.addEventListener("click", () => {
        listaDificuldades.classList.toggle("active");

    });

    opcoes.forEach(opcao => {
        opcao.addEventListener("click", () => {
            const dificuldade = opcao.dataset.nivel;
            btnDificuldade.textContent = `Dificuldade: ${dificuldade}`;
            listaDificuldades.classList.remove("active");

        });
    });
});
