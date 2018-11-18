// if true is Lukes's Turn
// if false is Darth Turn
let isLukeTurn = true;
let luke = document.querySelector('.luke');

function initialize(){
    // create the letters
    let letters = document.querySelector('.content-letters');
    letter = '';
    let c;
    for (let i = 0; i < 26; i++){
        c = String.fromCharCode(i + 65);
        letters.innerHTML += `<div class="letter">${c}</div>`;
    }  
    // add eventlisteners for all the letters
    let btnsLetters = document.querySelectorAll('.letter');
    for (let i = 0; i < btnsLetters.length; i++){

        btnsLetters[i].addEventListener('click', function(e){
            console.log(e.target);
            luke.classList.remove('alert');
            setTimeout(function(){
                luke.classList.add('alert');
            },300);
        });
    }

}



initialize();