const nav = document.querySelector('nav')

let hauteur = nav.offsetTop;

console.log(hauteur)

let hauteurScroll = scrollY;

console.log(hauteurScroll)


window.addEventListener('scroll', ()=> {
    if(scrollY >= hauteur + 150) {
        nav.classList.add('fixed')
    }else{
        nav.classList.remove('fixed')
    }
})

console.log(scrollY)