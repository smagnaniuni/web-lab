/*
Dati i file nella cartella 02-stringhe, scrivere il
codice Javascript in modo che:
– Al click sul bottone «Testo uppercase» il testo
contenuto all’interno del div con id risultato diventi
tutto maiuscolo.
– Al click sul bottone «Testo lowercase» il testo
contenuto all’interno del div con id risultato diventi
tutto minuscolo.
– Al click sul bottone «Testo substring» i primi 5
caratteri dovranno essere spostati in fondo al testo.
*/

// beginning

const result = document.querySelector("body > div");
result.innerHTML = result.innerHTML.trimStart();

function testoUpper() {
    result.innerHTML = result.innerHTML.toUpperCase();
}
function testoLower() {
    result.innerHTML = result.innerHTML.toLowerCase();
}
function testoSubstring() {
    // result.innerHTML = result.innerHTML.substring(6) + result.innerHTML.substring(0, 6);
    result.innerHTML = result.innerHTML.substring(6) + result.innerHTML.slice(0, 6);
}

document.querySelectorAll("body > input").forEach(element => {
    switch (element.value) {
        case "Testo uppercase":
            element.addEventListener("click", testoUpper);
            break;
        case "Testo lowercase":
            element.addEventListener("click", testoLower);
            break;
        case "Testo substring":
            element.addEventListener("click", testoSubstring);
            break;
        default:
            break;
    }
});
