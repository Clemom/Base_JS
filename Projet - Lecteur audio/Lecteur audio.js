const titre = document.querySelector('.titre');
const suivant = document.querySelector('.suivant');
const retour = document.querySelector('.retour');
const play = document.querySelector('.play-pause');
const audio = document.querySelector('audio');

const liste = [
    {
        src: "./src/audio-1.mp3",
        nom: "The Shire",
    },
    {
        src: "./src/audio-2.mp3",
        nom: "One Ring Theme",
    },
    {
        src: "./src/audio-3.mp3",
        nom: "Au dela des montagnes embrumées",
    },
    {
        src: "./src/audio-4.mp3",
        nom: "Rohan / Rohirrim",
    },
];

let musiquePlay = false;

function playMusique(){
    musiquePlay = true;
    audio.play();
    play.classList.add('active');
    play.innerHTML =  `<ion-icon name="pause-outline"></ion-icon>`;
}

function pauseMusique(){
    musiquePlay = false;
    audio.pause();
    play.classList.remove('active');
    play.innerHTML = `<ion-icon name="play-outline"></ion-icon>`;
}

play.addEventListener('click', () => (musiquePlay ?
pauseMusique() : playMusique()))

function loadMusique (liste){
    titre.textContent = liste.nom;
    audio.src = liste.src;
}

let i = 1;

loadMusique(liste[i])

function retourMusique(){
    i--;
    if(i<0){
        i = liste.length - 1;
    }
    loadMusique(liste[i]);
    playMusique();
}

retour.addEventListener('click', retourMusique)

function suivantMusique() {
    i++;
    if(i>liste.length -1){
        i = 0;
    }
    loadMusique(liste[i]);
    playMusique();   
}

suivant.addEventListener('click', suivantMusique)