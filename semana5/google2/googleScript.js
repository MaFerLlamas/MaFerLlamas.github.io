
let buscador = document.querySelector('input');
let btnBuscar = document.querySelector('#btnBuscar');

btnBuscar.addEventListener('click', function(){
    let busqueda = buscador.value;
    window.location.href = "https://www.google.com.mx/search?q=" + busqueda;
});
buscador.addEventListener('keyup',buscar);

function buscar(e){
    let busqueda = buscador.value;
    if (e.key === "Enter"){
        window.location.href = "https://www.google.com.mx/search?q=" + busqueda;
    }
}
//cambiar de pagina