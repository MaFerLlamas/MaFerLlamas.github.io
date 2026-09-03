var miBoton = document.querySelector('button');
var btnIngresa = document.querySelector('#btnNombre');
var btnPegar = document.querySelector('#btnJuntos');
var btnComprobar = document.querySelector('#btnComprobar');
var btnEncriptar = document.querySelector('#btnEncriptar');
var btnDesencriptar = document.querySelector('#btnDesencriptar')

function diHola(){
    window.alert("Hola");
}

//FORMAS DE AGREGAR FUNCION A UN EVENTO

//Guardar funcion Anónima en variable
// Forma #3
let mifuncion = function() {
    let correcta = "changos";
    let ingresada = document.querySelector('#txtPass').value;

    if (correcta === ingresada){
        document.querySelector('#txtComprobacion').value = "Acceso Correcto";
    }else{
        document.querySelector('#txtComprobacion').value = "Acceso Dengado";
    }
}

//agregamos evento
miBoton.addEventListener('click',ingresaNombre);
btnIngresa.addEventListener('click',ingresaNombre);
btnPegar.addEventListener('click',pegarCadenas);
// Forma #1 funcion
btnComprobar.addEventListener('click',comprobarContrasenia);
btnEncriptar.addEventListener('click',encriptar);
btnDesencriptar.addEventListener('click',desencriptar);

// Forma #2 funcion anonima aqui mismo
// btnComprobar.addEventListener('click',function(){
//     let correcta = "changos";
//     let ingresada = document.querySelector('#txtPass').value;

//     if (correcta === ingresada){
//         document.querySelector('#txtComprobacion').value = "Acceso Correcto";
//     }else{
//         document.querySelector('#txtComprobacion').value = "Acceso Dengado";
//     }
// });

//Forma #3 funcion anónima que esta en una variable
// btnComprobar.addEventListener('click',mifuncion);

//Ejercio 1
//Asgnarle un evento al boton que pida nombre por medio
// de input, una vez que lo ingrese el usuario mostrarlo con alert

function ingresaNombre(){
    let nombre = document.querySelector("#txtNombre").value;
    if (nombre === ""){
        nombre = "Hola gracias por presionarme ";
    }
    window.alert(nombre);
}

//Ejercio 2
//Recibir  2 cadenas en 2 input y pegarlas con
//la accion de presionar un boton
// mostrar el resultado en un alert
function pegarCadenas(){
    let cadenaFinal = "";
    let cadenas = document.querySelectorAll('.juntos');
    for(let i = 0; i < cadenas.length; i++){
        cadenaFinal += cadenas[i].value;
    }
    window.alert("tu cadena pegada: " + cadenaFinal);
}

//Ejercicio 3
// Tienen que hacer una aplicacion que se
// usara para proteger una boveda, con un Input 
// pediran la clave al usuario y cuando el usuario
// presione un boton checara si la contraseña es correcta
// mostrar resultado en otro input

//Ejercicio 4
// editar el ejercicio anterior para que solo te
//  deje intentarlo 3 veces

// Forma #1 se llama esta funcion
function comprobarContrasenia(){
    let correcta = "changos";
    let ingresada = document.querySelector('#txtPass').value;

    if (correcta === ingresada){
        document.querySelector('#txtComprobacion').value = "Acceso Correcto";
    }else{
        document.querySelector('#txtComprobacion').value = "Acceso Dengado";
    }
}

//Ejercicio 5
// tomar lo de un input y "Enciptarlo
// usando la funcion replace para cambiar las letras
// y despues desencriptarlo con otro boton
function encriptar(){
    let palabra = document.querySelector('#txtEncriptar').value;
    palabra = palabra.replace(/a/g,'e');
    palabra = palabra.replace(/u/g,'i');
    document.querySelector('#respEncriptado').value = palabra;
}

// desencriptar lo anterior

function desencriptar(){
    let palabra = document.querySelector('#respEncriptado').value;
    palabra = palabra.replace(/e/g,'a');
    palabra = palabra.replace(/i/g,'u');
    document.querySelector('#respDesencriptado').value = palabra;
}