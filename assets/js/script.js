
function soltou (e) {
    console.log("tecla apertada " + e.code);
    console.log("SHIFT? " + e.shiftKey);
    console.log("CTRL? " + e.ctrlKey);
    console.log("ALT? " + e.altKey);
    console.log("--");
}

const input = document.querySelector("input")
input.addEventListener("keyup", soltou)


//adiciona evento á tela (isso usando document)
//document.addEventListener("keyup", soltou) 


//Evento de teclado
/*function apertou () {
    console.log("APERTOU")
}

function segurou () {
    console.log("SEGUROU")
}*/