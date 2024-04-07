let txt = document.querySelector('.txt-taille');
let plus = document.querySelector('.plus');
let moins = document.querySelector('.moins');
let infos = document.querySelector('.infos');

let i = 14;
let agrandir = ()=> {
    i += 1;
    txt.style.fontSize = i + `px`;
    infos.innerText = `Taille actuelle:${i}px`
}

let reduire =()=> {
    i -= 1;
    txt.style.fontSize = i + `px`;
    infos.innerText = `Taille actuelle:${i}px`
}



plus.addEventListener('click', () => {
    agrandir ();
})

moins.addEventListener('click', () => {
    reduire ();
})