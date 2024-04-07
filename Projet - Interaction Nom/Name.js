//const text = document.querySelector('h1')
//const btn = document.querySelector('button')
//
//function getValue(e){
//    e.preventDefault();
//    const inp = document.querySelector('input').value;
//    text.innerText= `Bienvenue ${inp} !`
//}
//
//btn.addEventListener('click', getValue);




const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const btn = document.querySelector('button');

function getValue(event){
    event.preventDefault();
    h1.innerText= `Bienvenue ${input.value} !`;
    input.value= '';
}




btn.addEventListener('click', getValue);