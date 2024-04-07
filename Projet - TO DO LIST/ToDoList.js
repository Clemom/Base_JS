document.getElementById('Ajouter_Btn').addEventListener('click', function () {
    const tache = document.getElementById('Tache_Input').value;

    if (tache.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = tache;
    document.getElementById('Ajouter_Tache').appendChild(li);
    document.getElementById('Tache_Input').value ='';
} else {
    alert("Veuillez entrer une tâche !");
}
});


document.getElementById('Ajouter_Tache').addEventListener('mousedown', function(){
    
})