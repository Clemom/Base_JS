let nombre1 = 10;
let nombre2 = 15;

const additionner = (a, b) => a + b;
const soustraire = (a, b) => a - b;
const multpiplier = (a, b) => a * b;
const diviser = (a, b) => a / b;

let resultatAddition = additionner(nombre1, nombre2);
let resultatSoustraction = soustraire(nombre1, nombre2);
let resultatMultiplication = multpiplier(nombre1, nombre2);
let resultatDivision = diviser(nombre1, nombre2);

console.log("le résultat de l'addition est : " + resultatAddition);
console.log("le résultat de la multiplication est : " + resultatSoustraction);
console.log("le résultat de la soustraction est : " + resultatMultiplication);
console.log("le résultat de la division est : " + resultatDivision);