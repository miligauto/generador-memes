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
});

// Funcion de modo claro-oscuro 

const modoOscuro = document.querySelector ('.body-oscuro');
const modoClaro = document.querySelector ('.body-claro');
const body = document.getElementById ('body');
const botonModoOscuro = document.getElementById ('boton-oscuro');
const botonModoClaro = document.getElementById ('boton-claro');

function modoClaroOn () {
    body.classList.add ('body-claro');
    body.classList.remove ('body-oscuro');
    botonModoClaro.classList.add ('hidden');
    botonModoOscuro.classList.remove ('hidden');
}
botonModoClaro.addEventListener('click', modoClaroOn);

function modoOscuroOn () {
    body.classList.remove ('body-claro');
    body.classList.add ('body-oscuro');
    botonModoClaro.classList.remove ('hidden');
    botonModoOscuro.classList.add ('hidden');
}
botonModoOscuro.addEventListener('click', modoOscuroOn);


// URL

const seccionUrl = document.getElementById ('url-img');
const imagenMeme = document.getElementById ('img-meme');

seccionUrl.addEventListener ('change', function() {
    imagenMeme.setAttribute ('src', seccionUrl.value);
    imagenMeme.setAttribute ('alt', 'image.png');
})


// FONDO
const panelColor = document.getElementById ('color-input');
const cambioColor = document.getElementById ('meme-img');

panelColor.addEventListener ('input', function() {
    const colorSelect = panelColor.value;
    cambioColor.style.backgroundColor = colorSelect;
});


// FONDO OPCIONES


const panelClaroOscuro = document.getElementById ('select-option');

panelClaroOscuro.addEventListener ('change', function () {
    const selected = panelClaroOscuro.value; 

    if (selected === 'aclarar') {
        imagenMeme.style.mixBlendMode = 'lighten';
    } else if (selected === 'oscurecer') {
        imagenMeme.style.mixBlendMode = 'darken';
    } else if (selected === 'diferencia') {
        imagenMeme.style.mixBlendMode === 'difference';
    } else if (selected === 'luminosidad') {
        imagenMeme.style.mixBlendMode = 'luminosity';
    } else if (selected.mixBlendMode === 'multiplicar') {
        imagenMeme.style.mixBlendMode = 'multiply';
    } else if (selected === 'ninguno') {
        imagenMeme.style.mixBlendMode = 'normal';
    }
});


// FILTROS

let brillo = document.getElementById ('brillo');
let opaco = document.getElementById ('opacidad');
let contraste = document.getElementById ('contraste');
let desenfoque = document.getElementById ('desenfoque');
let grises = document.getElementById ('grises');
let sepia = document.getElementById ('sepia');
let hue = document.getElementById ('hue');
let saturacion = document.getElementById ('saturacion');
let negativo = document.getElementById ('negativo');

function generarBrillo(event) {
    let filtroBrillo = event.target.value
    imagenMeme.style.filter = `brightness(${filtroBrillo})`
}
brillo.addEventListener("input", generarBrillo);

function generarOpacidad(event) {
    let filtroOpacidad = event.target.value
    imagenMeme.style.filter = `opacity(${filtroOpacidad})`
}
opaco.addEventListener ("input", generarOpacidad);

function generarContraste(event) {
    let filtroContraste = event.target.value
    imagenMeme.style.filter = `contrast(${filtroContraste})`
}
contraste.addEventListener ("input", generarContraste);

function generarDesenfoque(event) {
    let filtroDesenfoque = event.target.value
    imagenMeme.style.filter = `blur(${filtroDesenfoque}px)`
}
desenfoque.addEventListener("input", generarDesenfoque);

function generarGrises(event) {
    let filtroGrises = event.target.value
    imagenMeme.style.filter = `grayscale(${filtroGrises})`
}
grises.addEventListener ("input", generarGrises);

function generarSepia(event) {
    let filtroSepia = event.target.value
    imagenMeme.style.filter = `sepia(${filtroSepia})`
}
sepia.addEventListener ("input", generarSepia);

function generarHue(event) {
    let filtroHue = event.target.value
    imagenMeme.style.filter = `hue-rotate(${filtroHue})`
}
hue.addEventListener ("input", generarHue)

function generarSaturacion (event) {
    let filtroSaturacion = event.target.value
    imagenMeme.style.filter = `saturate(${filtroSaturacion})`
}
saturacion.addEventListener ("input", generarSaturacion);

function generarNegativo(event) {
    let filtroNegativo = event.target.value
    imagenMeme.style.filter = `negativo(${filtroNegativo})`
}
negativo.addEventListener("input", generarNegativo);


// RESTABLECER FILTROS

const restablecerBoton = document.getElementById ('restablecer_filtros');

function restablecerFiltros () {    
    brillo.value = "1"
    opaco.value = "1"
    contraste.value = "1"
    desenfoque.value = "0"
    grises.value = "0"
    sepia.value = "0"
    hue.value = "1"
    saturacion.value = "1"
    negativo.value = "0"
}

restablecerBoton.addEventListener("click", restablecerFiltros);


// TEXTO

// CAMBIAR TEXTOS SUP - INF

const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const inputTopText = document.getElementById('input-top-text');
const sinTextoSuperior = document.getElementById('sin-texto-superior');
const bottomTextoInf = document.getElementById('bottom-text-inf');
const sinTextoInferior = document.getElementById('sin-texto-inferior');

inputTopText.addEventListener('input', function(){
    topText.innerText = inputTopText.value;
});

sinTextoSuperior.addEventListener('change', function(){
    if (sinTextoSuperior.checked){
        topText.style.display = 'none';
    } else {
        topText.style.display = 'flex';
        topText.style.textAling = 'center';
    }
});

bottomTextoInf.addEventListener('input', function(){
    bottomText.innerText = bottomTextoInf.value;
});

sinTextoInferior.addEventListener('change', function(){
    if (sinTextoInferior.checked){
        bottomText.style.display = 'none';
    } else {
        bottomText.style.display = 'flex';
        bottomText.style.textAling = 'center';
    }
});


// FUENTE

const opcionesFuente = document.getElementById('opciones-fondo');

opcionesFuente.addEventListener('change', opcionesFuenteCambia);

    opcionesFuente.addEventListener ('change', () => {
        opcionesFuenteCambia();
    });

    function opcionesFuenteCambia(){
    if (opcionesFuente.value === 'Arial'){
        topText.style.fontFamily = 'arial';
        bottomText.style.fontFamily = 'arial';
    } else if (opcionesFuente.value === 'Arial Black'){
        topText.style.fontFamily = 'arial black';
        bottomText.style.fontFamily = 'arial black';
    } else if (opcionesFuente.value === 'American typewriter'){
        topText.style.fontFamily = 'American typewriter';
        bottomText.style.fontFamily = 'American Typewriter';
    } else if (opcionesFuente.value === 'Andale Mono'){
        topText.style.fontFamily = 'Andale Mono';
        bottomText.style.fontFamily = 'Andale Mono';
    } else if (opcionesFuente.value === 'Comic Sans MS'){
        topText.style.fontFamily = 'comic sans ms';
        bottomText.style.fontFamily = 'comic sans ms';
    } else if (opcionesFuente.value === 'Helvetica'){
        topText.style.fontFamily = 'Helvetica';
        bottomText.style.fontFamily = 'Helvetica';
    } else if (opcionesFuente.value === 'Impact'){
        topText.style.fontFamily = 'impact';
        bottomText.style.fontFamily = 'impact';
    } else if (opcionesFuente.value === 'Verdana'){
        topText.style.fontFamily = 'verdana';
        bottomText.style.fontFamily = 'verdana';
    } else if (opcionesFuente.value === 'Times New Roman'){
        topText.style.fontFamily = 'times new roman';
        bottomText.style.fontFamily = 'times new roman';
    }
};


// TAMAÑO FUENTE

tamañoFuente = document.getElementById('tamaño-fuente');

tamañoFuente.addEventListener('input', function(){
    tamañoSeleccionado = tamañoFuente.value;
    topText.style.fontSize = `${tamañoSeleccionado}px`;
    bottomText.style.fontSize = `${tamañoSeleccionado}px`;
});

//ALINEACIÓN TEXTO

const textoIzquierda = document.getElementById('texto-izquierda');
const textoCentrado = document.getElementById('texto-centro');
const textoDerecha = document.getElementById('texto-derecha');

textoIzquierda.addEventListener('click', function() {
    topText.style.justifyContent = 'left';
    bottomText.style.justifyContent = 'left';
});

textoCentrado.addEventListener ('click', function() {
    topText.style.justifyContent = 'center';
    bottomText.style.justifyContent = 'center';
});

textoDerecha.addEventListener ('click', function() {
    topText.style.justifyContent = 'rigth';
    bottomText.style.justifyContent = 'rigth';
});


// COLOR TEXTO

colorTexto = document.getElementById ('color-texto');
colorTextoOpcion = document.getElementById ('color-texto-opcion');

colorTexto.addEventListener('input', function(){
    const textoColor = colorTexto.value;
    topText.style.color = textoColor;
    bottomText.style.color = textoColor;
    colorTextoOpcion.innerText = textoColor;
})


// FONDO TEXTO

const colorFondoTexto = document.getElementById ('color-fondo-texto');
const fondoTextoOpcion = document.getElementById ('color-texto-opcion');

colorFondoTexto.addEventListener ('input', function(){
    const fondoTexto = colorFondoTexto.value;
    topText.style.backgroundColor = fondoTexto;
    bottomText.style.backgroundColor = fondoTexto;
    fondoTextoOpcion.innerText = fondoTexto;
});


// FONDO TRANSPARENTE

const fondoTransparente = document.getElementById ('opcion-fondo-transparente');

fondoTransparente.addEventListener ('change', function(){
    if (fondoTransparente.checked){
        topText.style.backgroundColor = 'transparent';
        topText.style.position = 'absolute';
        topText.style.top = '0';
        bottomText.style.backgroundColor = 'transparent';
        bottomText.style.position = 'absolute';
        bottomText.style.bottom = '0';
    } else {
        const fondoTexto = colorFondoTexto.value;
        topText.style.backgroundColor = fondoTexto;
        topText.style.position = 'relative';
        bottomText.style.backgroundColor = fondoTexto;
        bottomText.style.position = 'relative';
    }
})


// CONTORNO

const contornoNinguno = document.getElementById('contorno-ninguno');
const contornoClaro = document.getElementById('contorno-claro');
const contornoOscuro = document.getElementById ('contorno-oscuro');

contornoNinguno.addEventListener ('click', function(){
    topText.style.textShadow = 'none';
    bottomText.style.textShadow = 'none';
});

contornoClaro.addEventListener ('click', function(){
    topText.style.textShadow = '2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF';
    bottomText.style.textShadow = '2px 2px #FFF, -2px 2px #FFF, 2px -2px #FFF, -2px -2px #FFF';
});

contornoOscuro.addEventListener ('click', function(){
    topText.style.textShadow = '2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000';
    bottomText.style.textShadow = '2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000';
});


// ESPACIADO 

const textoEspaciado = document.getElementById('espaciado');

textoEspaciado.addEventListener ('input', function(){
    const seleccionEspaciado = textoEspaciado.value;
    topText.style.padding = `${seleccionEspaciado}px 10px`;
     bottomText.style.padding = `${seleccionEspaciado}px 10px`;
})


// INTERLINEADO

const textoInterlineado = document.getElementById('interlineado');

textoInterlineado.addEventListener ('change', function(){
    const seleccionInterlineado = textoInterlineado.value;
    topText.style.lineHeight = seleccionInterlineado;
    bottomText.style.lineHeight = seleccionInterlineado;
});


// DESCARGAR MEME

const botonDescarga = document.getElementById('descargar-meme');
const memeGenerado = document.getElementById ('meme-generado');

function descargarMeme () {
    domtoimage.toBlob(memeGenerado).then(function (blob){
        saveAs(blob, 'mi-meme-png')
    })
}

botonDescarga.addEventListener('click', descargarMeme); 