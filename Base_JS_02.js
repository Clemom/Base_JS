function recommanderActivite(meteo) {
    if (meteo === "ensoleillé") {
        console.log("Aller se promener");
    } else if ( meteo === "pluvieux") {
        console.log("Lire un livre");
    } else if (meteo === "neigeux"){
        console.log("Faire du ski");
    } else if (meteo === "orageux"){
        console.log("Regarder une série");
    } else {
        console.log("Météo inconnue");
    }
}


recommanderActivite("ensoleillé"); 
recommanderActivite("pluvieux"); 
recommanderActivite("neigeux"); 
recommanderActivite("orageux");
recommanderActivite("venteux");