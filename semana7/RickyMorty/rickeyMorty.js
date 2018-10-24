/*
  Fetch te permite solicitar recursos por medio
  de la red, generalmente hacia otros servidores

  Se utiliza el protocolo HTTP

  A traves de una URL se obtendrá una respuesta

  la respuesta puede ser un objeto de javascript
  o puede ser texto plano
*/

// Fetch aplicado al API de rick and morty

let respuesta = function(info) {
  console.log(info);
  let personajes = document.querySelector('#personajes');
  let contColor=0;
  let color;
    for(let i=0;i<20;i++){
      if (contColor===0){
        color="tarjetaRoja";
      }else if(contColor===1){
        color="tarjetaAzul";
      }else if (contColor===2){
        color="tarjetaVerde";
        contColor = -1;
      }
      personajes.innerHTML += 
      `<div class="tarjeta ${color}">
          <div class="content-img">
            <img class="imgPersona" src="${info.results[i].image}" />
          </div>
          <div class="content-info">
            <p>
              <label class="atributo">name:</label>
              <label>${info.results[i].name}</label>
            </p>
            <p>
              <label class="atributo">gender:</label>
              <label>${info.results[i].gender}</label>
            </p>
            <p>
                <label class="atributo">origin:</label>
                <label>${info.results[i].origin.name}</label>
            </p>
            <p>
                <label class="atributo">species:</label>
                <label>${info.results[i].species}</label>
            </p>
            <p>
                <label class="atributo">status:</label>
                <label>${info.results[i].status}</label>
            </p>
          </div>
      </div>`
      contColor++;
  }
}
// `
// <div>
//   <img src="${a.image}">
//   <div>${a.name}</div>
//   <div>${a.status}</div>
//   <div>${a.species}</div>
//   <div>${a.type}</div>
//   <div>${a.gender}</div>
// </div>
// `
// <div>
//     <img src="${info.results[10].image}">
//     <div>${info.results[10].name}</div>
//     <div>${info.results[10].status}</div>
//     <div>${info.results[10].species}</div>
//     <div>${info.results[10].type}</div>
//     <div>${info.results[10].gender}</div>
//   </div>
fetch("https://rickandmortyapi.com/api/character/").then(info => info.json()).then(respuesta)