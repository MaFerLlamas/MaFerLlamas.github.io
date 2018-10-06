// Crear una app que te diga cual es tu
// indice de masa corporal

// Utilizar css para que se vea presentable

// Usar inputs para pedir los datos

// La formula es  peso(kg) / altura(m) ^ 2


let btnCalcular = document.querySelector("#btnCalcular");
let resultado = document.querySelector("#resMasa");

btnCalcular.addEventListener('click',calcularMasa);

function calcularMasa(){
    let altura = parseFloat(document.querySelector("#txtAltura").value);
    let peso = parseFloat(document.querySelector("#txtPeso").value);
    
    let masa = (peso/altura**2);
    masa = masa.toFixed(2);

    if (masa>30){//obesidad
        document.body.style.background = 'rgba(255, 0, 0, 0.8)';
    }else if (masa >= 25 && masa <= 30){//sobrepeso
        document.body.style.background = 'rgba(239, 127, 26, 0.8)';
    }else if (masa >= 18.5 && masa < 25){//normal
        document.body.style.background = 'rgba(0, 200, 0, 0.8)';
    }else if (masa < 18.5){//falta de peso
        document.body.style.background = 'rgba(255, 0, 0, 0.8)';
    }
    resultado.value = masa;
}