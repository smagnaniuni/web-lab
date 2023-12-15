/*
Dati i file nella cartella 05-tabella-dinamica,
scrivere il codice Javascript in modo che vengano
correttamente inserite le informazioni relative
agli autori del blog nella tabella. 3 step
incrementali:
– Aggiungere correttamente le informazioni
(l’intestazione della tabella può essere hard-coded).
– Rendere la tabella accessibile.
– Generalizzare la soluzione in modo che se vengono
aggiunti (o rimossi) dei campi relativi agli autori, il
codice non necessiti di modifiche.
*/

const datiTabella = [{
    "Autore": "Gino Pino",
    "Email": "ginopino@blogtw.com",
    "Argomenti": "HTML, CSS, JS"
},
{
    "Autore": "Cippa Lippa",
    "Email": "cippalippa@blogtw.com",
    "Argomenti": "PHP"
}]

function stringaToID(stringa) {
    return stringa.toLowerCase().replace(/[^a-zA-Z]/g, "");
}

// beginning

const tabella = document.querySelector("main > section > table");

function prepareRow(autore, email, argomenti) {
    const id = stringaToID(autore);
    return `
    <tr>
        <th id="${id}">${autore}</th><td headers="email ${id}">${email}</td><td headers="argomenti ${id}">${argomenti}</td>
    </tr>
    `;
}

tabella.innerHTML += `
    <tr>
        <th id="autore">Autore</th><th id="email">Email</th><th id="argomenti">Argomenti</th>
    </tr>
`;

datiTabella.forEach(e => {
    // could be improved
    tabella.innerHTML += prepareRow(e.Autore, e.Email, e.Argomenti);
});
