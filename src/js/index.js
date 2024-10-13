const listaSelecaoOni = document.querySelectorAll(".oni")



listaSelecaoOni.forEach(oni => {
    oni.addEventListener("click", () => {

        esconderCardOni();

        const idOniSelecionado = mostrarCardOni(oni);

        desativarOniNaLista();

        ativarOniNaLista(idOniSelecionado);
    })
})

function ativarOniNaLista(idOniSelecionado) {
    const oniSelecionadoNaLista = document.getElementById(idOniSelecionado);
    oniSelecionadoNaLista.classList.add("ativo");
}

function desativarOniNaLista() {
    const oniAtivoNaLista = document.querySelector(".ativo");
    oniAtivoNaLista.classList.remove("ativo");
}

function mostrarCardOni(oni) {
    const idOniSelecionado = oni.attributes.id.value;
    const idDoCardOniParaAbrir = "card-" + idOniSelecionado;
    const cardOniParaAbrir = document.getElementById(idDoCardOniParaAbrir);
    cardOniParaAbrir.classList.add("aberto");
    return idOniSelecionado;
}

function esconderCardOni() {
    const oniCardAberto = document.querySelector(".aberto");
    oniCardAberto.classList.remove("aberto");
}
