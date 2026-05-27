function clicou() {
    const input = document.querySelector("input")
    const botao = document.querySelector(".botao")

    
    if (input.getAttribute("type") === "text") {
        input.setAttribute("type", "password")
        botao.innerText = "Mostra senha"
    } else {
        input.setAttribute("type", "text")
        botao.innerText = "Ocultar senha"
    }
}

/*const input = document.querySelector("input")

    console.log( input.getAttribute("placeholder"))

    if (input.hasAttribute("placeholder")) {
        console.log("tem place sim!")
    } else {
        console.log ("tem place nao!")
    }*/

//input.setAttribute("placeholder", "placeholder alterado")
//alterar atributo (ex: placeholder)