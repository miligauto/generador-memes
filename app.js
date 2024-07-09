const botonPanelImagen = document.getElementById ('boton-imagen');
const botonPanelTexto = document.getElementById ('boton-texto');
const panelImagen = document.getElementById ('panel-img');
const panelTexto = document.getElementById ('panel-texto');
const botonCierre = document.getElementById ('boton-cierre-panel');
const asideContainer = document.getElementById ('panel');


// Panel de imagen, texto y ocultar panel

botonPanelImagen.addEventListener ('click', function() {
    panelImagen.style.display = 'block';
    botonCierre.style.display = 'block';
    panelTexto.style.display = 'none';
    asideContainer.style.display = 'block';
});

botonPanelTexto.addEventListener ('click', function() {
    panelTexto.style.display = 'block';
    botonCierre.style.display = 'block';
    panelImagen.style.display = 'none';
    asideContainer.style.display = 'block';
});

botonCierre.addEventListener ('click', function () {
    asideContainer.style.display = 'none';
    botonCierre.style.display = 'none';
})

// Funcion de modo claro-oscuro 

const modoOscuro = document.querySelector (".body-oscuro");
const modoClaro = document.querySelector (".body-claro");
const body = document.getElementById ("body");
const botonModoOscuro = document.getElementById ("boton-oscuro");
const botonModoClaro = document.getElementById ("boton-claro");

function modoClaroOn () {
    body.classList.add ("body-claro");
    body.classList.remove ("body-oscuro");
    botonModoClaro.classList.add ("hidden");
    botonModoOscuro.classList.remove ("hidden");
}
botonModoClaro.addEventListener("click", modoClaroOn);

function modoOscuroOn () {
    body.classList.remove ("body-claro");
    body.classList.add ("body-oscuro");
    botonModoClaro.classList.remove ("hidden");
    botonModoOscuro.classList.add ("hidden");
}
botonModoOscuro.addEventListener("click", modoOscuroOn);