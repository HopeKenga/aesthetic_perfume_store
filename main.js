//Menu
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move')
    cart.classList.remove('active');
}
let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () => {

    cart.classList.toggle('active');
    navbar.classList.remove('active');
    menu.classList.remove('move')
}
let login = document.querySelector('.login-form');

document.querySelector('#user-icon').onclick = () => {

    login.classList.toggle('active');
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
}