const mdp = "mdp12345";
let mdpvalide;

if (mdp.length >=8) {
mdpvalide = true;
console.log("Le mot de passe est valide");
} else {
    mdpvalide = false;
    console.log("Le mot de passe est invalide");
}