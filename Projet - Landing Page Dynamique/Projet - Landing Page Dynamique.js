function slider(changePhone) {
    const phoneElement = document.querySelector('.phone');
    phoneElement.src = changePhone;
}

//function slider (changePhone){
//    document.querySelector('.phone').src = changePhone;          **La function aurait pu être écrite comme ça**
//}

function couleur (changeCouleur){
    document.querySelector('.global').style.background = changeCouleur;
}

//function couleur (changeCouleur){
//    const sec = document.querySelector('.global');
//    sec.style.background = changeCouleur;
//}