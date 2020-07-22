const nav = document.querySelector('[data-nav]');
const menuOpen = document.querySelector('.fa-bars');
const menuClose = document.querySelector('.fa-times');
const servingsMenu = document.querySelector('.servings-meanu');

menuOpen.addEventListener('click', function (){
    nav.classList.toggle('open-nav');
});

menuClose.addEventListener('click', function (){
    nav.classList.toggle('open-nav');
});


// for(let i=1;i<3;i++){
//     const div = document.createElement('div');
//     div.id='nani';
//     servingsMenu.appendChild(div);
// }
