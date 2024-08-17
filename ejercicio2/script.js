// A partir de un selector de colores, cambia el
// color del cuadro principal al hacer clic sobre
// uno de los colores.

let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let btn5 = document.getElementById("btn-5");
let btn6 = document.getElementById("btn-6");

btn1.addEventListener("click", function () {
    document.getElementById("caja").style.backgroundColor = "#e53e3e";
});

btn2.addEventListener("click", function () {
    document.getElementById("caja").style.backgroundColor = "#dd6b20";
});

btn3.addEventListener("click", function () {    
    document.getElementById("caja").style.backgroundColor = "#faf089";
});

btn4.addEventListener("click", function () {
    document.getElementById("caja").style.backgroundColor = "#48bb78";
});

btn5.addEventListener("click", function () {
    document.getElementById("caja").style.backgroundColor = "#81e6d9";
});

btn6.addEventListener("click", function () {
    document.getElementById("caja").style.backgroundColor = "#d53f8c";
});

// boton que refresce el color de la caja

let refrescar = document.getElementById("refrescar");
refrescar.addEventListener("click", function () {
    document.getElementById("caja").style.backgroundColor = "white";
})