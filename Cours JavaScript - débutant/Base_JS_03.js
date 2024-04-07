function calculerFraisLivraison(montantCommande, distance){
    if (montantCommande >= 50){
        return 0;
}else{
    if (distance <= 5){
        return 5;
    } else if (distance >=5 && distance <=20){
        return 10;
    }else{
    return 15;
    }
}
}

console.log(calculerFraisLivraison(60, 2)); // Devrait afficher 0 (livraison gratuite)
console.log(calculerFraisLivraison(40, 3)); // Devrait afficher 5
console.log(calculerFraisLivraison(30, 10)); // Devrait afficher 10
console.log(calculerFraisLivraison(20, 25)); // Devrait afficher 15