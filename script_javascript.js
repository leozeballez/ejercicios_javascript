var boton = document.querySelector("boton")
var parrafo = document.createElement('p')
parrafo.appendChild("BEEP")

function agregarParrafo() {
    document.body.insertAdjacentHTML("beforeend", parrafo)
}
boton.addEventListener("click", agregarParrafo)