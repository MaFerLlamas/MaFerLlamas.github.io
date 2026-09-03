// autentification type in this case google
let provider = new firebase.auth.GoogleAuthProvider();
let db = firebase.database();
let value;

btnLogin = document.querySelector('#btnLogin');
btnLogout = document.querySelector('#btnLogout');
btnCounter = document.querySelector('#btnCounter');

let login = function(){
    firebase.auth().signInWithPopup(provider)
    .then(successLogin)
    .catch(failLogin);
}

let logout = function(){
    firebase.auth().signOut();
}

let updateCounter = function(valor){
    db.ref('/contador').set(valor);
}

let plusCounter = function(){
     let num = document.querySelector('#txtCounter').value;
    // let num = Math.floor((Math.random())*10 + 1);
    if (num!=""){
      updateCounter(num)  
    }else{
        updateCounter(parseInt(value)+1);
        // updateCounter()
    }
}

let theCounterChange = function(result){
    value = result.val();
    document.querySelector('#content-counter').innerText = value;
}

btnLogin.addEventListener('click',login);
btnLogout.addEventListener('click',logout);
btnCounter.addEventListener('click',plusCounter);

let userChange = function(user){
    if (user){
        menssage =" Bienvenido " + user.displayName;
        //there are
        document.querySelector('h1') .innerText += menssage;
        btnLogin.removeEventListener('click',login);
        btnLogin.classList.add('btn-disabled');
    }else{
        //not there are
        document.querySelector('h1') .innerText = "Firebase";
        btnLogin.disabled = false;
        btnLogin.addEventListener('click',login);
        btnLogin.classList.remove('btn-disabled');
    }
    console.log('el usuario cambio');
    console.log(user);
}

let successLogin = function(result){
    console.log('login success' + result);
}

let failLogin = function(error){
    console.log('error in the login' + error);
}

firebase.auth().onAuthStateChanged(userChange);
// el evento value se efectua cada que cambia la bd
db.ref('/contador').on('value', theCounterChange);
