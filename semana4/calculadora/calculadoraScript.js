// Ejercicio para el día 3 Calculadora

// Utilizar css para darle una
// mejor presentación al html

// Generar funciones para las acciones
// de sumar, restar, multiplicar y dividir
// (Aún no se escribirá la funcionalidad)

// Generar variables que obtengan la
// referencia a los elementos de html
// (3 inputs y 4 botones)

var btnSumar = document.querySelector('.botonMas');
var btnRestar = document.querySelector('.botonMenos');
var btnMultiplicar = document.querySelector('.botonPor');
var btnDividir = document.querySelector('.botonEntre');
var btnPotenciar = document.querySelector('.botonPotencia');
var btnLimpiar = document.querySelector('.botonLimpiar');

var resultado = document.querySelector('.resultado');
var num1 = document.querySelector('.num1');
var num2 = document.querySelector('.num2');
// Asignar eventos a los botones para que
// ejecuten las funciones correspondientes
btnSumar.addEventListener('click',sumar);
btnRestar.addEventListener('click',restar);
btnMultiplicar.addEventListener('click',multiplicar);
btnDividir.addEventListener('click',dividir);
btnPotenciar.addEventListener('click',potenciar);
btnLimpiar.addEventListener('click',limpiar);

num1.addEventListener('keyup',eventoTeclado);
num2.addEventListener('keyup',eventoTeclado);

num1.addEventListener('focus',function (){
    console.log('hola');
});

// Escribir la funcionalidad de las 4
// posibles operaciones de la calculadora

function eventoTeclado(e){
    // console.log(e);
    if (e.key === "Enter"){
        sumar();
    }
}

function sumar(){
    resultado.value = parseInt(num1.value)+parseInt(num2.value);
}

function restar(){
    resultado.value = parseInt(num1.value)-parseInt(num2.value);
}

function  multiplicar(){
    resultado.value = parseInt(num1.value)*parseInt(num2.value);
}

function dividir(){
    
    resultado.value = parseInt(num1.value)/parseInt(num2.value);
}

function potenciar(){
   
    resultado.value = parseInt(num1.value)**parseInt(num2.value);
}

function limpiar(){
    num1.value = "";
    num2.value = "";
    resultado.value = "";
}