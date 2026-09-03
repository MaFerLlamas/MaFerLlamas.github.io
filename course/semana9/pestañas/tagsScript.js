
let tabs = document.querySelectorAll('.tabs');
let cards = document.querySelectorAll('.cards');

for (let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click',choose);
}

function choose(){
    let choice = this.innerText;
    
    for (let i = 0; i < tabs.length; i++){
        tabs[i].classList.remove('actual-Tab');
    }
    this.classList.add('actual-Tab');

    choice = document.querySelector('#' + choice);
    for (let i = 0; i < cards.length; i++){
        cards[i].classList.remove('actual');
    }
    choice.classList.add('actual');
}