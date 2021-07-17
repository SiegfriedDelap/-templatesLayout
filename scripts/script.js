'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
    const parts = document.getElementById('parts');
    const bg = document.getElementById('oceanBehind');
    const left = document.getElementById('oceanLeft');
    const right = document.getElementById('oceanRight');
    const text = document.querySelector('.ocean__title');
    const btn = document.querySelector('.ocean__btn');

    window.addEventListener('scroll', ()=>{
        let value = window.scrollY;
        parts.style.left = value + 'px';
    });


});