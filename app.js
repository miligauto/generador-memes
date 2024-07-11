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


const panelClaroOscuro = document.getElementById ('select-option');

panelClaroOscuro.addEventListener ('change', function () {
    const seleccion = panelClaroOscuro.value; 

    if (seleccion === 'aclarar') {
        imagenMeme.style.mixBlendMode = 'lighten';
    } else if (seleccion === 'oscurecer') {
        imagenMeme.style.mixBlendMode = 'darken';
    } else if (seleccion === 'diferencia') {
        imagenMeme.style.mixBlendMode === 'difference';
    } else if (seleccion === 'luminosidad') {
        imagenMeme.style.mixBlendMode = 'luminosity';
    } else if (seleccion.mixBlendMode === 'multiplicar') {
        imagenMeme.style.mixBlendMode = 'multiply';
    } else if (seleccion === 'ninguno') {
        imagenMeme.style.mixBlendMode = 'normal';
    }
});


// FILTROS

const filtroBrillo = document.getElementById ('brillo');
const filtroOpaco = document.getElementById ('opacidad');
const filtroContraste = document.getElementById ('contraste');
const filtroDesenfoque = document.getElementById ('desenfoque');
const filtroGrises = document.getElementById ('grises');
const filtroSepia = document.getElementById ('sepia');
const filtroHue = document.getElementById ('hue');
const filtroSaturacion = document.getElementById ('saturacion');
const filtroNegativo = document.getElementById ('negativo');

function cambiarFiltros () {
    const brillo = 'filbrillos (${filtroBrillo.value})';
    const contraste = 'filcontraste (${filtroContraste.value}%)';
    const desenfoque = 'fildesenfocar (${filtroDesenfoque.value})';
    const grises = 'filescalagrises (${filtroGrises.value}%)';
    const sepia = 'filsepia (${filtroSepia.value}%)';
    const hue = 'filhue (${filtroHue.value})';
    const saturado = 'filsaturado (${filtroSaturacion.value}%)';
    const negativo = 'filnegativo (%{filtroNegativo.value})';

    const filtros = '${brillo} ${contraste} ${desenfoque} ${grises} ${sepia} ${hue} ${hue} ${saturado} ${negativo}';
    
    if (imagenMeme != null) {
        imagenMeme.style.filter = filtros;
        imagenMeme.style.opacity = filtroBrillo.value;
    }
}

filtroBrillo.addEventListener ('input', cambiarFiltros);
filtroOpaco.addEventListener ('input', cambiarFiltros);
filtroContraste.addEventListener ('input', cambiarFiltros);
filtroDesenfoque.addEventListener ('input', cambiarFiltros);
filtroGrises.addEventListener ('input', cambiarFiltros);
filtroSepia.addEventListener ('input', cambiarFiltros);
filtroHue.addEventListener ('input', cambiarFiltros);
filtroSaturacion.addEventListener ('input', cambiarFiltros);
filtroNegativo.addEventListener ('input', cambiarFiltros);


const restablecerFiltros = document.getElementById ('restablecer-filtros');

restablecerFiltros.addEventListener ('click', function() {
    imagenMeme.style.filter = 'none';

    filtroBrillo.value = 1;
    filtroOpaco.value = 1;
    filtroContraste.value = 0;
    filtroDesenfoque.value = 0;
    filtroGrises.value = 0;
    filtroSepia.value = 0;
    filtroHue.value = 0;
    filtroSaturacion.value = 100;
    filtroNegativo.value = 0;

    restablecerFiltros ();
})