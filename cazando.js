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
function graficarGato(){
    ctx.fillStyle="#808080";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}
 function graficarComida(){
    ctx.fillStyle="green";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
 }