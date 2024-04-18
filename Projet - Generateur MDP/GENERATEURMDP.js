const bouton = document.querySelector('.btn')
const input = document.querySelector('.inp')

function genererMotDePasse(longueur) {
    const caracteres = 'AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn123456789^$ù*,;:!&é"è_çà'
    let motDePasse = '';
    for (let i = 0; i<longueur; i++){
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        motDePasse += caracteres[randomIndex];
    }
    return motDePasse;
}


bouton.addEventListener('click', function(){
    const nouveauMotDePasse = genererMotDePasse(20);
    input.value = nouveauMotDePasse;
});