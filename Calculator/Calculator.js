const boutonsE1 = document.querySelectorAll("button");

const inputChampE1 = document.getElementById("resultat");

for (let i = 0; i < boutonsE1.length; i++) {
    boutonsE1[i].addEventListener ("click", () => {
        const boutonValeur = boutonsE1[i].textContent;
        if (boutonValeur === "C"){
            resetResultat ();
        }else if (boutonValeur === "=") {
            calculeResultat ();
        } else {
            saisiValeur(boutonValeur);
        }
    });
}

function resetResultat () {
    inputChampE1.value = " ";
}

function calculeResultat () {
    inputChampE1.value = eval(inputChampE1.value);
}

function saisiValeur (boutonValeur) {
    inputChampE1.value += boutonValeur;
}