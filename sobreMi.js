const img = document.getElementById("marco");
const img1 = "imagenes/marcos/marco1.png";
const img2 = "imagenes/marcos/marco2.png";
let usandoPrimero = true;

function alternarImagen(){
    img.src = usandoPrimero ? img2 : img1;
    usandoPrimero = !usandoPrimero;

}

setInterval(alternarImagen, 300);