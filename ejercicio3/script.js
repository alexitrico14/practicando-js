let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

let btnSumar = document.getElementById("btn-sumar");
let btnRestar = document.getElementById("btn-restar");

btnSumar.addEventListener("click", function () {
    let resultado = parseInt(valor1.value) + parseInt(valor2.value);
    document.querySelector(".resultado").innerHTML = resultado;
});
btnRestar.addEventListener("click", function () {
    let resultado = parseInt(valor1.value) - parseInt(valor2.value);
    document.querySelector(".resultado").innerHTML = resultado;

    if (resultado < 0) {
        document.querySelector(".resultado").innerHTML = "0";
    }

});