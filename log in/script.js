const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const iconClose = document.querySelector('.icon-close');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});


loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=> {
    wrapper.classList.remove('active-popup');
});

let storedUsername="";
let storedEmail="";
let storedPassword="";

function register(){
    let username2 = document.getElementById("username").value;
    let email2 = document.getElementById("email").value;
    let password2 = document.getElementById("password").value;

    //stored data
    localStorage.setItem("username",username2);
    localStorage.setItem("email",email2);
    localStorage.setItem("password",password2);

    alert("account created!");
}

function login(){
    let webEmail = document.getElementById("email1").value;
    let webPass = document.getElementById("password1").value;

    //retrieve your data
    let storedUsername = localStorage.getItem("username");
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if(webEmail === storedEmail && webPass === storedPassword){
        window.location = "home.html";
        alert("log in successfull!");
    }else{
        alert("log in failed!, incorrect email or password.");
    }

}
