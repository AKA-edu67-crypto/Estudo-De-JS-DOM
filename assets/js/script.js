let botao = document.querySelector("#meuBotao")
let titulo = document.querySelector("#titulo")
let lista = document.querySelector("ul")


botao.addEventListener("click", () => {
    titulo.innerHTML = "O DOM È SENSACIONAL!"


    let novoItem = document.createElement("li")
    novoItem.innerHTML = "Novo Item Adicionado!"
    lista.append(novoItem)
    titulo.style.color = "blue"
    lista.style.backgroundColor = "gold"
})


/* Capturou os elementos com o querySelector.

Criou um sensor de clique com o addEventListener.

Alterou textos dinamicamente com o innerHTML.

Criou elementos HTML do zero com o createElement e injetou na tela com o append.

Controlou o CSS da página diretamente pelo JavaScript com o .style*/