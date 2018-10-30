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
let isSearching = false;
let word;
let first;
let last;

//btn forward and rewind
let rewind = document.querySelector("img[src='rewind.png']");
let forward = document.querySelector("img[src='forward.png']");
let back = document.querySelector("img[src='back.png']");
let next = document.querySelector("img[src='next.png']");

// for the search
let search = document.querySelector("#txtBusca");
let searchType = document.querySelector('select');


function searchActivate(){
  word = searchType.value;
  word += "=" + search.value;
  if (search.value == ""){
    isSearching = false;
    word = "";
    fetch(url+actual).then(objData => objData.json()).then(generate);
  }else{
    isSearching = true;
    actual = 1;
    fetch("https://rickandmortyapi.com/api/character/?"+word)
    .then(objData => objData.json())
    .then(generate);
  }
}

searchType.addEventListener('change',searchActivate)
search.addEventListener('input', searchActivate);

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
  actual = first;
  if  (isSearching){
    fetch(url+first+"&"+word).then(objData => objData.json()).then(generate);
  }else{
    fetch(url+first).then(objData => objData.json()).then(generate);
  }
});

forward.addEventListener('click',function(){
  actual = last;
  if  (isSearching){
    fetch(url+last+"&"+word).then(objData => objData.json()).then(generate);
  }else{
    fetch(url+last).then(objData => objData.json()).then(generate);
  }
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
  if (last<10){
    inicio = first;
    fin = last;
  }else{
    if (actual<5){
      inicio = 1;
      fin = 9;
    } else if (actual>(last-9)){
      inicio = last-9;
      fin = last;
    }else{
      inicio = parseInt(actual) - 4;
      fin = parseInt(actual) + 4;
    }

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
  if (isSearching){
    fetch(url+page+"&"+word).then(objData => objData.json()).then(generate);
  }else{
    fetch(url+page).then(objData => objData.json()).then(generate);
  }
}

let generate = function(objData) {
  console.log(objData);
  first = 1;
  last = objData.info.pages;
  generatePages();
  personajes.innerHTML = "";
  urlNext = objData.info.next;
  urlPrev = objData.info.prev;
  for(let i = 0; i < objData.results.length; i++){
    addCard(objData.results[i]);
  }
}

fetch("https://rickandmortyapi.com/api/character/").then(objData => objData.json()).then(generate);
