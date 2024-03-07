function calculerCoutCafe (type, nombre) {
    let prixUnitaire;
    
    if (type === "expresso") {
        prixUnitaire = 2;
      } else if (type === "latte") {
        prixUnitaire = 3;
    } else if (type === "cappucino"){
        prixUnitaire = 3.5;
    } else {
        return "Type de café non reconnu"
    }
    let coutTotal = prixUnitaire * nombre;
    if (nombre > 10){
        coutTotal *= 0.9;
    }
    return coutTotal
}


console.log(calculerCoutCafe("expresso", 5));
console.log(calculerCoutCafe("latte", 11));
console.log(calculerCoutCafe("cappuccino", 20)); 