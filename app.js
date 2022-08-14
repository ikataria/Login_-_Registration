'use strict';
let login = document.getElementById('login');
let register = document.getElementById('register');
let btn = document.getElementById('btn');

function register(){
    login.style.left = "-400px";
    register.style.left = "50px";
    btn.style.left = "110px";
}

function login(){
    login.style.left = "50px";
    register.style.left = "550px";
    btn.style.left = "0px";
}






