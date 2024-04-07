let bouton = document.getElementById('Button_Color');

function genererCouleurAleatoire() {
    const couleurAleatoire = Math.floor(Math.random() * 16777215).toString(16);
    return `#${couleurAleatoire}`;
  }
  
  bouton.addEventListener('click', function() {
    document.body.style.backgroundColor = genererCouleurAleatoire();
  });
  