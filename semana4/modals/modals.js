//      MODALS

//variable global dentro de exploradores
window

// Alert
window.alert("esta es una alerta");

// Confirm
if (window.confirm("Estas Seguro ?"))
{
    window.alert("si")
}
else
{
    window.alert("no")
}

//ejercicio 1
console.log("Ejercicio 1");
// declarar 2 variables con numeros
// preguntar con un confiirm si desea sumar,
// en caso de que setImmediate, mostrar la suma de los 2
// con alerten caso de No, mostrar la resta
let a = 7;
let b = 3;
if (window.confirm("Ok para Sumar"))
{
    window.alert("a+b=" + (a+b));
}
else
{
    window.alert("a-b=" + (a-b));
}

//Prompt
// modal que te pide 
let nombre;
nombre = window.prompt("ingresa tu nombre");
window.alert('mi nombre es: ' + nombre);

//prompt devuelve todo como cadena por lo que
// para hacerlo operaciones tenemos que convertirlo

parseInt("6.2");//6
parseInt("102");//102
parseFloat("6.2");//6.2

// Ejercicio 2
console.log("Ejercicio 2");
// pedir 2 valores con prompt
// y mostrar con alert la suma de los 2

let num1;
let num2;
num1 = parseFloat(window.prompt("ingresa numero 1: "));
num2 = parseFloat(window.prompt("ahora ingresa numero 2: "));

window.alert(" el resultado de " +  num1 + " + " + num2  + " =  " + (num1+num2));


// Ejercicio 3
console.log("Ejercicio 3");
// comiste en un restaurant y el mesero 
// trae una terminal para que pagues, 
// debes ingresar cuanto pagaras, una vez
// ingresado te pregunta si deseas agregar propina, 
// imprime el total que te cobraron a tu tarjeta 

let pago = parseFloat(window.prompt("Ingresa la cantidad"));
if (window.confirm("¿Deseas Agregar Propina?"))
{
    pago = pago + pago * 0.10;
}
window.alert("el total es: " + pago);
 
// Ejercicio 4
console.log("Ejercicio 4");
// un propmt que pida el numero de numeros
//  que desea sumar, pedirlos y sumarlos
// todos con un ciclo

let num = parseInt(window.prompt("dame cantidad de numeros a sumar: "));
let total = 0;
for(let i = 0; i < num; i++)
{
    total += parseFloat(window.prompt("hasta ahora " + total + " Ingresa numero " + (i+1)));
}
window.alert("Total de la suma " + total);