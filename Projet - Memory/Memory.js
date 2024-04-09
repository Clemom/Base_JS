const cartes = document.querySelectorAll('.carte');
let carteRetourner = false;
let premierCarte, secondCarte;
let verrouillage = false;


cartes.forEach(carte => {
    carte.addEventListener('click', retourneCarte)
})

function retourneCarte(){

    this.childNodes[1].classList.toggle('active')
    if( ! carteRetourner){
        carteRetourner = true;
        premierCarte = this;
        return;
    }
    carteRetourner = false;
    secondCarte = this;

    correspondance();
}

function correspondance(){
    if(premierCarte.getAttribute('data-attr') === secondCarte.getAttribute('data-attr')){
        premierCarte.removeEventListener('click', retourneCarte)
        secondCarte.removeEventListener('click', retourneCarte)
    }else {
        verrouillage = true;
        setTimeout(()=> {
            premierCarte.childNodes[1].classList.remove('active');
            secondCarte.childNodes[1].classList.remove('active');
            verrouillage = false;
        }, 900)
    }
}

function aleatoire (){
    cartes.forEach(card =>{
        let randomPos = Math.floor(Math.random()*12)
        card.style.order = randomPos;
    })
}

aleatoire();