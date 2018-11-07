
let images = document.querySelectorAll('img');
document.querySelector('#close').addEventListener('click',close);

addEventListener('keyup',function(e){
    if (e.key === 'Escape'){
        close();
    }
});

for (let i=0; i<images.length; i++){
    images[i].addEventListener('click',displayImage);
}

function close(){
    let modal = document.querySelector('#modal');
    modal.classList.remove('display-modal');
}

function displayImage(){
    let img = "url('" + this.src + "')";
    let modal = document.querySelector('#modal');
    modal.classList.add('display-modal');
    let imgModal = document.querySelector('#img-modal')
    imgModal.style.backgroundImage = img;
}

