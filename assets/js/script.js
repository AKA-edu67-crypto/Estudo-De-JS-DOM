function clicou() {
    const button = document.querySelector("button")

    //remove e add = remove e adiciona
    if (button.classList.contains("azul")) {
        button.classList.remove("azul")
        button.classList.add("verde")
    } else {
        button.classList.remove("verde")
        button.classList.add("azul")
    }
}

//replace = substitui
//toggle = apenas tira e adiciona tal elemento (tipo azul)
//se tiver, ele remove. se nao tiver, ele coloca

/* subtitui e coloca.
if (button.classList.contains("azul")) {
   button.classList.replace("azul", "verde")
} else {
    utton.classList.replace("verde", "azul")
} */