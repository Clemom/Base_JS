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

const boutonEgal = document.querySelector(".egal");

boutonEgal.addEventListener("mouseover", (event) => {
    const x = event.pageX - boutonEgal.offsetLeft;
    const y = event.pageY - boutonEgal.offsetTop;

    boutonEgal.style.setProperty("--xPos", x + "px");
    boutonEgal.style.setProperty("--yPos", y + "px");
});

const boutonReset = document.querySelector(".reset");

boutonReset.addEventListener("mouseover", (event) => {
    const x = event.pageX - boutonReset.offsetLeft;
    const y = event.pageY - boutonReset.offsetTop;

    boutonReset.style.setProperty("--xPos", x + "px");
    boutonReset.style.setProperty("--yPos", y + "px");
});

const boutonOperation = document.querySelectorAll(".operation");

boutonOperation.addEventListener("mouseover", (event) => {
    const x = event.pageX - boutonOperation.offsetLeft;
    const y = event.pageY - boutonOperation.offsetTop;

    boutonOperation.style.setProperty("--xPos", x + "px");
    boutonOperation.style.setProperty("--yPos", y + "px");
});

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