const burger = document.querySelector('.burger')
const menu = document.querySelector('.navigation')
const navLien = document.querySelector('.navigation li')

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active')
})

navLien.forEach(lien => {
    lien.addEventListener('click', ()=>{
        menu.classList.remove("active");
        burger.classList.remove("active");
    })
})