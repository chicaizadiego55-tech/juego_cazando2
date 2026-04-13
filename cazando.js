let canvas=document.getElementById('areaJuego');
let ctx=canvas.getContext('2d');

function graficarGato(){
    ctx.fillStyle="#808080";
    ctx.fillRect((canvas.width / 2) - (100/ 2),(canvas.height / 2) - (80 / 2),100,80);
}