function clicou () {
    console.log("clicou no botão")
}

//listener é um escutado de evento (como o evento "click")
//essa é outra forma de fazer eventos
let botao = document.querySelector(".botao")
botao.addEventListener("click", clicou)