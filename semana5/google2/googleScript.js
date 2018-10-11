
let buscador = document.querySelector('input');
let btnBuscar = document.querySelector('#btnBuscar');

buscador.addEventListener('keyup',buscar);
btnBuscar.addEventListener('click', function(){
    let busqueda = quitarEspacios(buscador.value);
    window.location.href = "https://www.google.com.mx/search?q=" + busqueda;
});

function quitarEspacios(){
    let busqueda = buscador.value;
    let final = busqueda.replace(" ","+");
    return final;
}

function buscar(e){
    let busqueda = quitarEspacios(buscador.value);
    if (e.key === "Enter"){
        //cambiar de pagina
        window.location.href = "https://www.google.com.mx/search?q=" + busqueda;
    }
}