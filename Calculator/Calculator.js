const boutonsE1 = document.querySelectorAll("button");

const champValeur = document.getElementById("resultat");

for (let i = 0; i < boutonsE1.length; i++) {
    boutonsE1[i].addEventListener ("click", () => {
        const boutonValeur = boutonsE1[i].textContent;
        if (boutonValeur === "C"){
            resetResultat ();
        }else if (boutonValeur === "=") {
            calculeResultat ();
        }else if (boutonValeur === "❮") {
            effaceResultat ();
        } else {
            saisiValeur(boutonValeur);
        }
    });
}

function effaceResultat () {
    const texteAffiche = champValeur.value;
    champValeur.value = texteAffiche.slice(0, -1);
}

function resetResultat () {
    champValeur.value = " ";
}

function calculeResultat () {
    champValeur.value = eval(champValeur.value);
}

function saisiValeur (boutonValeur) {
    champValeur.value += boutonValeur;
}