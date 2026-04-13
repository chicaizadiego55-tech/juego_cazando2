let canvas=document.getElementById('areaJuego');
let ctx=canvas.getContext('2d');

const ALTO_GATO=80;
const ANCHO_GATO=100;
const ALTO_COMIDA=50;
const ANCHO_COMIDA=50;

let gatoX=(canvas.width / 2) - (ANCHO_GATO/ 2);
let gatoY=(canvas.height / 2) - (ALTO_GATO / 2);
let comidaX=canvas.width - ALTO_COMIDA;
let comidaY=canvas.height - ANCHO_COMIDA;



function iniciarJuego(){
    graficarGato();
    graficarComida();
}

function graficarRectangulo(x, y, ancho, alto, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarGato(){
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "#808080");
}

 function graficarComida(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "green");
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function actualizarPantalla(){
    limpiarCanva();
    graficarGato();
    graficarComida();
    
}
function moverIzquierda(){
    gatoX=gatoX-10;
    actualizarPantalla();
    detectarColision();
}

function moverDerecha(){
    gatoX=gatoX+10;
    actualizarPantalla();
    detectarColision();
}

function moverArriba(){
    gatoY=gatoY-10;
    actualizarPantalla();
    detectarColision();
}

function moverAbajo(){
    gatoY=gatoY+10;
    actualizarPantalla();
    detectarColision();
}

function detectarColision(){
    if(gatoX < comidaX + ANCHO_COMIDA &&
       gatoX + ANCHO_GATO > comidaX &&
       gatoY < comidaY + ALTO_COMIDA &&
       gatoY + ALTO_GATO > comidaY){

        alert("ÑAMI");
    }
}