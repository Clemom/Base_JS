let bouton = document.getElementById('BoutonCompteur');
let affichage = document.getElementById('AffichageCompteur');

let compteur = 0;

bouton.addEventListener('click', function(){
    compteur++;
    affichage.textContent = 'Nombre de clics : ' + compteur;
});