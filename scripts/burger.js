window.addEventListener('DOMContentLoaded', ()=>{
    const headerBurger = document.querySelector('.header__burger');
    const body = document.querySelector('body');
    const menu = document.querySelector('.header__menu');

    headerBurger.addEventListener('click', ()=>{
        headerBurger.classList.toggle('header__burger_active');
        menu.classList.toggle('header__menu_active');
        body.classList.toggle('lock');
    });

})