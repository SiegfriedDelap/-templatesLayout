'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
    const parts = document.getElementById('parts');
    const bg = document.getElementById('oceanBehind');
    const left = document.getElementById('oceanLeft');
    const right = document.getElementById('oceanRight');
    const text = document.querySelector('.ocean__title');
    const btn = document.querySelector('.ocean__btn');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', ()=>{
        let value = window.scrollY;
        parts.style.left = value * 0.25 + 'px';
        bg.style.top = value * 0.5 + 'px';
        left.style.top = value * 0 + 'px';
        right.style.top = value * 0 + 'px';
        text.style.marginRight = value * 3 + 'px';
        text.style.marginTop = value * 0.25 + 'px';
        btn.style.marginTop = value * 0.5 + 'px';
        header.style.top = value * 0.6 + 'px';

    });


});