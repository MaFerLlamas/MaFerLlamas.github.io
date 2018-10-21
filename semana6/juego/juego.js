/*
    Objetivo de hoy lunes:

    1. Planeación de su juego, decidir que
    tema llevará y obtener imagenes 
    representativas de las opciones que
    se usarán

    2. Crear layout de su juego con las
    siguientes características:
      - Encabezado con nombre de juego
      - Colores personalizados de fondo
        y textos
      - Botones grandes con las 3 opciones
        del juego (piedra, papel, tijera)
      - Cuadro de texto que muestre los 
        resultados del juego (estilos)

    Recuerden utilizar flexbox para su
    estructura de elementos.

    Ideas de temas alternos:
    
    En ciertos paises asiaticos juegan con:
        pajaro, agua y piedra

    Versión difícil (ver alt.png):
    piedra, papel, tijera, lagartija, spock
*/

// 
let fin = false;
// true Player vs. CPU
// false Player vs. Player
let modoJuego = true;
let mostrarInfo = false;

// bool par saber si los 2 ya eligieron
let j1Listo = false;
let j2Listo = false;

// cadena con la ocpion seleccionada
let select1;
let select2;

// objeto de las reglas de aquien le gana
let ObjRegla = { 
  metal: ["aire","tierra"], 
  aire: ["fuego","agua"],
  tierra: ["aire","agua"],
  agua: ["metal","fuego"],
  fuego: ["metal","tierra"]
};


// img elementos [metal,aire,tierra,agua,fuego]
let elementos=[5];
elementos[0] = document.querySelector("#metal");
elementos[1]= document.querySelector("#aire");
elementos[2] = document.querySelector("#tierra");
elementos[3] = document.querySelector("#agua");
elementos[4] = document.querySelector("#fuego");

//btn 
let btn1 = document.querySelector("#btnListo1");
let btn2 = document.querySelector("#btnListo2");
let btnJugar = document.querySelector("#btnJugar");
let btnModo1 = document.querySelector("#btnModo1");
let btnModo2 = document.querySelector("#btnModo2");
let btnMenu = document.querySelector("#btnMenu");
let btnInfo = document.querySelector("#btnInfo");

//  Inicio
window.onload = function(){
  for (let i=0;i<elementos.length;i++){
    elementos[i].addEventListener('click',seleccionar);
  }
  btnInfo.addEventListener("click",mostrarInformacion);
  btnMenu.addEventListener("click",mostrarMenu);
  btnModo1.addEventListener("click",setModo);
  btnModo2.addEventListener("click",setModo);
  btnJugar.addEventListener('click',jugar);
  btn1.addEventListener('click',listo);
  
 
}

function inicializar(){
  // eqtiquetas a inicio
  document.querySelector("#lblj1").innerText = "Jugador 1:";
  document.querySelector("#ganador").innerText = "";
  // botones a incio
  btn1.style.background = "#3369ff";
  btn2.style.background = "rgba(15, 14, 14, 0.349)";

  
  if (modoJuego){
    btn2.innerText = "random";
    document.querySelector("#lblj2").innerText = "CPU:";

  }else{
    btn2.innerText = "listo";
    document.querySelector("#lblj2").innerText = "Jugador 2:";
  }
  btnJugar.innerText = "jugar";
  btnJugar.style.background = "rgba(15, 14, 14, 0.349)"; 
  //iniciar imagenes
  document.querySelector("#j1").style.visibility = "visible";
  document.querySelector("#j2").style.visibility = "visible";
  document.querySelector("#j1").src = "";
  document.querySelector("#j2").src = "";

  // reiniciar variables
  fin = false;
  j1Listo = false;
  j2Listo = false;
  select1 = null;
  select2 = null;
  mostrarInfo = false;
}

function setModo(event){
  if (event.target.getAttribute("id") === "btnModo1"){
    modoJuego = true;
  }else{
    modoJuego = false;
  }
  document.querySelector('#modoJuego').style.visibility = "hidden";
  document.querySelector('#config').style.visibility = "visible";
  btn2.removeEventListener('click',randomCPU);
  btn2.removeEventListener('click',listo2);
  if (modoJuego){
    btn2.addEventListener('click',randomCPU);
  }else{
    btn2.addEventListener('click',listo2);
    btn2.innerText = "Listo";
    document.querySelector("#lblj2").innerText = "Jugador 2:";
  }
  inicializar();
}
// Evento seleccion
function seleccionar(event){

  if (!j1Listo){
    select1 = event.target.getAttribute('id');
    document.querySelector("#j1").src = event.target.src;
    document.querySelector("#lblj1").innerText = select1;
  }else if (!j2Listo && !modoJuego){
    select2 = event.target.getAttribute('id');
    document.querySelector("#j2").src = event.target.src;
    document.querySelector("#lblj2").innerText = select2;
  }
}

// btn Listo
function listo(){ 
  // si ya se presiono el random ya no se puede modificar
  if(!j2Listo){
    if (!j1Listo && select1!=null){
      j1Listo = true;
      btn1.style.background = "#e91212";
      btn2.style.background = "#3369ff";
      if (!modoJuego){
        document.querySelector("#j1").style.visibility = "hidden";
        document.querySelector("#j1").style.background = "#3369ff";
        document.querySelector("#lblj1").innerText = "Jugador 1:";
      }
    }else if(j1Listo){
      document.querySelector("#j1").style.visibility = "visible";
      document.querySelector("#j1").src = "";
      document.querySelector("#lblj1").innerText = "Jugador 1:";
      btn1.style.background = "#3369ff";
      btn2.style.background = "rgba(15, 14, 14, 0.349)";
      select1 = null;
      j1Listo = false;
    }    
  }
  
}

// btn Listo2
function listo2(){
  //hasta que el j1 este listo se puede presionar el 2
  if (j1Listo && !j2Listo){
    if (select2!=null){
      j2Listo = true;
      document.querySelector("#lblj2").innerText = select2;
      btn2.style.background = "#e91212";
      btn2.innerText = "listo";
      if (!modoJuego){
        document.querySelector("#j2").style.visibility = "hidden";
        document.querySelector("#lblj2").innerText = "Jugador 2:";
      }
    }
  }
  
  if (j1Listo && j2Listo){
    btnJugar.style.background = "#3369ff";
  }
}

// btn Random
function randomCPU(){
  //hasta que el j1 este listo se puede presionar el 2
  if (j1Listo && !j2Listo){
    let rnd = Math.floor((Math.random() * 5) + 1);
    document.querySelector("#j2").src = elementos[rnd].src;
    select2 = elementos[rnd].getAttribute('id');
    document.querySelector("#lblj2").innerText = select2;
    btn2.innerText = "listo";
    btn2.style.background = "#e91212";
    j2Listo = true;
  }
  
  if (j1Listo && j2Listo){
    btnJugar.style.background = "#3369ff";
  }
}

//btn Jugar
function jugar(){
  if (!fin){
    let ganador;
    // que esten los 2 elegidos
    if (j1Listo && j2Listo){
      //empate
      if (select1 === select2){
        ganador = "EMPATE";
      }else{
        let gana = ObjRegla[select1];
        if (gana.indexOf(select2) !== -1){
          ganador = "jugador 1 gana \n" + select1 +" vence a " + select2;
        }else{
          ganador = "jugador 2 gana \n" + select2 +" vence a " + select1;
        }
  
      }
      document.querySelector("#j1").style.visibility = "visible";
      document.querySelector("#j2").style.visibility = "visible";
      document.querySelector("#ganador").style.width = "95%";
      document.querySelector("#ganador").innerText = ganador;
      btnJugar.innerText = "volver a jugar";
      fin = true;
    }
  }else{
    inicializar();
  }
}

function mostrarInformacion(){
  if (mostrarInfo){
    document.querySelector('#imgReglas').style.visibility = "hidden";
    btnInfo.style.background = "#3369ff";
    mostrarInfo = false;
    
  }else{
    document.querySelector('#imgReglas').style.visibility = "visible";
    btnInfo.style.background = "#e91212";
    mostrarInfo = true;
  }
}

function mostrarMenu(){
  document.querySelector('#config').style.visibility = "hidden";
  document.querySelector('#imgReglas').style.visibility = "hidden";
  document.querySelector('#modoJuego').style.visibility = "visible";
}