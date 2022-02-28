//Menu
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onClick = () => {
    navbar.classList.toggle('active');
}