/*
Dati i file nella cartella 04-articoli, scrivere il
codice Javascript in modo che:
– Vengano correttamente inseriti gli articoli
all’interno della pagina, secondo la struttura
generata nelle lezioni precedenti.
*/

const datiArticoli = [{
    "Autore": "Gino Pino",
    "Data": "2 Ottobre 2019",
    "Titolo": "Intro alle Tecnologie Web Client Side",
    "Immagine": "./img/html5-js-css3.png",
    "Testo": '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
},
{
    "Autore": "Cippa Lippa",
    "Data": "2 Ottobre 2019",
    "Titolo": "Intro alle Tecnologie Web Server Side",
    "Immagine": "./img/php.png",
    "Testo": '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
}]

// beginning

const main = document.querySelector("main");

function prepareArticle(autore, data, titolo, immagine, testo) {
    return `
    <article>
        <header>
            <div>
                <img src=${immagine} alt="" />
            </div>
            <h2>${titolo}</h2>
            <p>${data} - ${autore}</p>
        </header>
        <section>
            <p>${testo}</p>
        </section>
        <footer>
            <a href="#">Leggi tutto</a>
        </footer>
    </article>
    `;
}

datiArticoli.forEach(e => {
    // could be improved
    main.innerHTML += prepareArticle(e.Autore, e.Data, e.Titolo, e.Immagine, e.Testo);
});
