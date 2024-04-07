function calculerNoteFinale (scoreExam, scoreProjet, scoreDevoirs){
    let NoteFinale = (scoreExam * 0.5) + (scoreProjet * 0.3) + (scoreDevoirs * 0.2);
    if (NoteFinale >= 90){
        return "Tres Bien";
    } else if (NoteFinale >= 75 && NoteFinale <= 90){
        return "Bien";
    } else if (NoteFinale >= 60 && NoteFinale <= 75){
        return "Assez Bien";
    } else {
        return "Insuffisant"
    }
}







console.log(calculerNoteFinale(80, 75, 65));
console.log(calculerNoteFinale(90, 80, 85));
console.log(calculerNoteFinale(60, 60, 60));
console.log(calculerNoteFinale(50, 45, 55));