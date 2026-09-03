// autentification type in this case google
var provider = new firebase.auth.GoogleAuthProvider();


btnLogin = document.querySelector('#btnLogin');
btnLogout = document.querySelector('#btnLogout');

let login = function(){
    firebase.auth().signInWithPopup(provider)
    .then(successLogin)
    .catch(failLogin);
}

let logout = function(){
    firebase.auth().signOut();
}

btnLogin.addEventListener('click',login);

btnLogout.addEventListener('click',logout);


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

