/*
  Fetch te permite solicitar recursos por medio
  de la red, generalmente hacia otros servidores

  Se utiliza el protocolo HTTP

  A traves de una URL se obtendrá una respuesta

  la respuesta puede ser un objeto de javascript
  o puede ser texto plano
*/

// Globals
let url = "https://rickandmortyapi.com/api/character/?page="
let urlNext;
let urlPrev;
let actual = 1;

//btn forward and rewind
let rewind = document.querySelector("img[src='rewind.png']");
let forward = document.querySelector("img[src='forward.png']");
let back = document.querySelector("img[src='back.png']");
let next = document.querySelector("img[src='next.png']");

let buscar = document.querySelector("#txtBusca");

buscar.addEventListener('input',function(){
  fetch("https://rickandmortyapi.com/documentation/#filter-characters?name=rick")
  .then(objData => objDta.json())
  .then(generate);
});

back.addEventListener('click',function(){
  if (urlPrev != ""){
    fetch(urlPrev).then(objData => objData.json()).then(generate);
    actual --;
  }
});

next.addEventListener('click',function(){
  if (urlNext != ""){
    fetch(urlNext).then(objData => objData.json()).then(generate);
    actual ++;
  }
});

rewind.addEventListener('click',function(){
  actual = 1;
  fetch(url+'1').then(objData => objData.json()).then(generate);
});

forward.addEventListener('click',function(){
  actual = 25;
  fetch(url+'25').then(objData => objData.json()).then(generate);
})

let personajes = document.querySelector('#personajes');


// Fetch aplicado al API de rick and morty
let addCard = function (character){
  let cardTemplate = 
  `<div class="tarjeta">
  <div class="content-img">
  <img class="imgPersona" src="${character.image}" />
  
  </div>
  <div class="content-info">
  <p>
  <label class="atributo">name:</label>
  <label>${character.name}</label>
  </p>
  <p>
  <label class="atributo">gender:</label>
  <label>${character.gender}</label>
  </p>
  <p>
  <label class="atributo">origin:</label>
  <label>${character.origin.name}</label>
  </p>
  <p>
  <label class="atributo">species:</label>
  <label>${character.species}</label>
  </p>
  <p>
  <label class="atributo">status:</label>
  <label>${character.status}</label>
  </p>
  </div>
  </div>`
  ;
  personajes.innerHTML += cardTemplate;
}

function generatePages(){
  let inicio;
  let fin;
  if (actual<5){
    inicio = 1;
    fin = 9;
  } else if (actual>16){
    inicio = 17;
    fin = 25;
  }else{
    inicio = parseInt(actual) - 4;
    fin = parseInt(actual) + 4;
  }
  
  
  let numeros = document.querySelector('#pages');
  numeros.innerHTML = "";
  for (let i = inicio; i <= fin ; i++){
    let numTemplate = `<a class="num-page">${i}</a>`;
    numeros.innerHTML += numTemplate;
  }
  
  let arrNum = document.querySelectorAll('.num-page');
  for (let i = 0; i < arrNum.length; i++){
    arrNum[i].addEventListener('click',changePage);
    if (arrNum[i].text == actual){
      arrNum[i].style.color = "blue";
    }
  }
}

function changePage(){
  let page = this.text;
  actual = page;
  fetch(url+page).then(objData => objData.json()).then(generate);
}

let generate = function(objData) {
  console.log(objData);
  generatePages();
  personajes.innerHTML = "";
  urlNext = objData.info.next;
  urlPrev = objData.info.prev;
  for(let i = 0; i < objData.results.length; i++){
    addCard(objData.results[i]);
  }
}

fetch("https://rickandmortyapi.com/api/character/").then(objData => objData.json()).then(generate);
