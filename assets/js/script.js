const input = document.querySelector("input")
const lista = document.querySelector("ul")


//funções
function soltou(e) {
    if (e.key === "Enter") {
        const newLi = document.createElement('li');

        newLi.innerHTML = input.value

        lista.appendChild(newLi)
        input.value = ""
    }
}

//eventos
input.addEventListener("keyup", soltou)