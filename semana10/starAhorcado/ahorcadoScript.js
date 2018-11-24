
// if true is Lukes's Turn
// if false is Darth Turn

let luke = document.querySelector('.luke');
let darth = document.querySelector('.darth');
let laser = document.querySelector('.laser');
let btnsLetters;
let pos = 0;
let offset = 0;
let attemps = 0;
let word;
let wordSize;
const midScreen = 43;
const fullScreen = 86;

console.log("eeidth" + window.innerWidth);
// every time that the user select
function userAttempt(e){
    //disbled pushed letter
    
    e.target.removeEventListener('click',userAttempt);
    let selected = e.target.innerText;
    let isCorrect = false;
    let value;
    let isEnd = false;
    let mns = document.querySelector('message:nth-child(1)');
    // for to review if the letter is in the word
    for(let i = 0; i < word.length; i++){
        value = word[i];
    // filter o void apostrophe
        if (value === 'Á'){
            value = 'A';
        }else if (value ==='É'){
            value = 'E';
        }else if (value === 'Í'){
            value = 'I';
        }else if (value === 'Ó'){
            value = 'O';
        }else if (value === 'Ú'){
            value = 'U';
        }
        
        // the letter is the same
        if (value === selected){
            offset = parseFloat((fullScreen-(midScreen+pos))/wordSize);
            console.log(offset);
            isCorrect = true;
            let space = 
                document.querySelector
                ('.piece-word:nth-child('+ (i+1) +')')
                .innerText = selected;
                pos = pos + offset; 
                wordSize --;

                
        }
    }
    // LUKE WON
    if (wordSize == 80){
        mns.innerText = "¡GANASTE!";
        mns.classList.add('win');
        mns.style.display = "block";
        isEnd = true;

    }else{

        if (isCorrect){
            e.target.style.color = "white";
            // alert to the lord
            darth.classList.remove('alertDarth');
            // add animation
            setTimeout(function(){
                darth.classList.add('alertDarth');
            },200); 
        }else{

            
            offset = parseFloat((midScreen+pos)/attemps);
            console.log(offset);
            e.target.style.color = "grey";
            console.log("desplazamiento" + offset);
            // remove class to avoid over class
            luke.classList.remove('alertLuke');
            // add animation
            setTimeout(function(){
                luke.classList.add('alertLuke');
            },200);
            pos = pos - offset;
            attemps--;
            // DARTH WON
            if (attemps == 0){
                laser.style.transform = `translateX(${pos}vw)`;
                luke.classList.add('lukeLoses');
                luke.classList.remove('luke');

                document.querySelector('message');
                mns.innerText = "¡PERDISTE!";
                mns.classList.add('lose');
                mns.style.display = "block";
                isEnd = true;
                
            }
        }
        
        laser.style.transform = `translateX(${pos}vw)`;
        if (isEnd){
            
        }
    }
}

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
    btnsLetters = document.querySelectorAll('.letter');
    for (let i = 0; i < btnsLetters.length; i++){

        btnsLetters[i].addEventListener('click',userAttempt);
    }
    // generate the word in a array
    word = generateWord().split('');
    wordSize = word.length;
    let contentWord = document.querySelector('.content-word');
    for(let i = 0; i < wordSize; i++){
        console.log(word[i]);
        word[i] = word[i].toUpperCase();
        contentWord.innerHTML += `<div class="piece-word"></div>`;
    }

    //Set variables
    pos = 0;
    attemps = parseInt(wordSize/2);
    offset = parseFloat(midScreen/wordSize);

    console.log("desplazamiento" + offset);
    console.log("attemps" + attemps);
}

initialize();

