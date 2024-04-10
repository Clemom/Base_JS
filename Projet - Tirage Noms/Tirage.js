var tabprenom = new Array ('Clément', 'Thomas', 'Lily', 'Noémie', 'Corine', 'Olaf', 'Christophe', 'Françoise', 'Andre', 'Alicia')

var res = document.getElementById('resultat')

var btn = document.getElementById('btn')
var load = document.querySelector('.chargement div')

btn.addEventListener('click', function(){
    load.classList.add('active')
    

    setTimeout(function aleatoire (){
        load.classList.remove("active");
        res.classList.add('active')
        var rand = Math.floor(Math.random()*10)
        res.innerHTML = `
        <p class ="titre">Bravo ! </p>
        <p class="nom"> ${tabprenom[rand]}</p>`;


    }, 3000)
})