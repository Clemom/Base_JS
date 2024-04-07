const rep = ["d", "a", "c", "b", "c", "b", "a", "d", "d", "c"];
const form = document.querySelector('.quizz-form');

form.addEventListener('submit', funcForm);

function funcForm(e){
    e.preventDefault();

    const resultat = [];
    const tousLesBoutonsRadios = document.querySelectorAll ("input[type='radio']:checked");

    tousLesBoutonsRadios.forEach((radioButtons, index)=> {
        if(radioButtons.value === rep[index]){
            resultat.push(true)
        }else{
            resultat.push(false)
        }
}
)
funcResultat(resultat)
}

const resultat = document.querySelector('.resultat');
const titreResultat = document.querySelector('.resultat h2');
const scoreResultat = document.querySelector('.resultat .score');
const infoResultat = document.querySelector('.resultat .info');



function funcResultat(res){
const nombreErreurs = res.filter(el => el === false).length;
console.log(nombreErreurs);

switch(nombreErreurs){

    case 0:
        resultat.style.backgroundColor = "rgb(125, 241, 129)"
        titreResultat.innerText = `Bien joué, c'est un sans faute !`;
        infoResultat.innerText =`👍👍👍👍👍👍👍`;
        scoreResultat.innerHTML = `Score <span>10/10</span>`
        break;
    
    case 1:
        resultat.style.backgroundColor = "rgb(125, 241, 129)"
        titreResultat.innerText = `😮 Il y ${nombreErreurs} erreurs 😮`;
        infoResultat.innerText =`Pas loin du sans faute !`;
        scoreResultat.innerHTML = `Score <span>9/10</span>`
        break;    
    
    case 2:
        resultat.style.backgroundColor = "rgb(125, 241, 129)"
        titreResultat.innerText = `😮 Il y ${nombreErreurs} erreurs 😮`;
        infoResultat.innerText =`Très peu d'erreurs !`;
        scoreResultat.innerHTML = `Score <span>8/10</span>`
        break; 
    
    case 3:
        resultat.style.backgroundColor = "rgb(255, 183, 145)"
        titreResultat.innerText = `😮 Il y ${nombreErreurs} erreurs 😮`;
        infoResultat.innerText =`Bon travail !`;
        scoreResultat.innerHTML = `Score <span>7/10</span>`
        break; 
        
        
    case 4:
        resultat.style.backgroundColor = "rgb(255, 183, 145)"
        titreResultat.innerText = `😮 Il y ${nombreErreurs} erreurs 😮`;
        infoResultat.innerText =`Travail satisfaisant !`;
        scoreResultat.innerHTML = `Score <span>6/10</span>`
        break; 
            
    case 5:
        resultat.style.backgroundColor = "rgb(255, 183, 145)"
        titreResultat.innerText = `😮 Il y ${nombreErreurs} erreurs 😮`;
        infoResultat.innerText =`Tu n'es plus très loin !`;
        scoreResultat.innerHTML = `Score <span>5/10</span>`
        break; 
            
    case 6:
        resultat.style.backgroundColor = "rgb(241,125,125)"
        titreResultat.innerText = `😮 Il y ${nombreErreurs} erreurs 😮`;
        infoResultat.innerText =`C'est déjà mieux !`;
        scoreResultat.innerHTML = `Score <span>4/10</span>`
        break; 
            
    case 7:
        resultat.style.backgroundColor = "rgb(241,125,125)"
        titreResultat.innerText = `😮 Il y ${nombreErreurs} erreurs 😮`;
        infoResultat.innerText =`Travaille encore plus dur !`;
        scoreResultat.innerHTML = `Score <span>3/10</span>`
        break; 
            
    case 8:
        resultat.style.backgroundColor = "rgb(241,125,125)"
        titreResultat.innerText = `😮 Il y ${nombreErreurs} erreurs 😮`;
        infoResultat.innerText =`Ce n'est que le début !`;
        scoreResultat.innerHTML = `Score <span>2/10</span>`
        break; 
            
    case 9:
        resultat.style.backgroundColor = "rgb(241,125,125)"
        titreResultat.innerText = `😮 Il y ${nombreErreurs} erreurs 😮`;
        infoResultat.innerText =`✌️✌️✌️✌️✌️✌️✌️`;
        scoreResultat.innerHTML = `Score <span>1/10</span>`
        break; 
        default:
            titreResultat.innerText = `Il y a eu une erreur`
    }

}