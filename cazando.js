let canvas=document.getElementById('areaJuego');
let ctx=canvas.getContext('2d');

const ALTO_GATO=80;
const ANCHO_GATO=100;
const ALTO_COMIDA=50;
const ANCHO_COMIDA=50;

let gatoX=(canvas.width / 2) - (ANCHO_GATO/ 2);
let gatoY=(canvas.height / 2) - (ALTO_GATO / 2);
let comidaX = canvas.width - ALTO_COMIDA;
let comidaY = canvas.height - ANCHO_COMIDA;

let puntos=0;
let tiempoMax=15;
let tiempo=tiempoMax;
let intervaloTiempo = setInterval(restarTiempo, 1000);
let 

function iniciarJuego(){
    limpiarCanva();
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


function moverIzquierda(){
    gatoX=gatoX-10;
    iniciarJuego();
    detectarColision();
}

function moverDerecha(){
    gatoX=gatoX+10;
    iniciarJuego();
    detectarColision();
}

function moverArriba(){
    gatoY=gatoY-10;
    iniciarJuego();
    detectarColision();
}

function moverAbajo(){
    gatoY=gatoY+10;
    iniciarJuego();
    detectarColision();
}

function detectarColision(){
    if(gatoX < comidaX + ANCHO_COMIDA &&
       gatoX + ANCHO_GATO > comidaX &&
       gatoY < comidaY + ALTO_COMIDA &&
       gatoY + ALTO_GATO > comidaY){

        aparecerComida();
        puntos = puntos + 1;

        mostrarEnSpan("txtPuntos", puntos);

    
        tiempoMax = tiempoMax - 1;
        tiempo = tiempoMax;

        mostrarEnSpan("txtTiempo", tiempo);
    }

    if(puntos == 6){
        alert("¡GANASTE!");
        clearInterval(intervaloTiempo);
    }
}

function aparecerComida(){
    comidaX=generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY=generarAleatorio(0, canvas.height - ALTO_COMIDA);
    if(
        comidaX < gatoX + ANCHO_GATO &&
        comidaX + ANCHO_COMIDA > gatoX &&
        comidaY < gatoY + ALTO_GATO &&
        comidaY + ALTO_COMIDA > gatoY
    ){
        
        aparecerComida();
    }
}



function restarTiempo(){
    tiempo=tiempo - 1;

    mostrarEnSpan("txtTiempo", tiempo);

    if(tiempo == 0){
        alert("GAME OVER");
        clearInterval(intervaloTiempo);
    }
} 

function reiniciar(){
    tiempoMax = 15;
    tiempo = tiempoMax;
    puntos = 0;

    mostrarEnSpan("txtTiempo", tiempo);
    mostrarEnSpan("txtPuntos", puntos);

    gatoX=(canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY=(canvas.height / 2) - (ALTO_GATO / 2);

    aparecerComida();

    clearInterval(intervaloTiempo);
    intervaloTiempo = setInterval(restarTiempo, 1000);

    iniciarJuego();
}