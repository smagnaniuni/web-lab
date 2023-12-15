/*
Dati i file nella cartella 03-oggetti, scrivere il
codice Javascript in modo che:
– Sia possibile definire una classe Computer con 3
proprietà (processore, disco e ram) e due metodi
(infoComputerConsole e infoComputerDOM).
– infoComputerConsole si occupa di stampare in
console le 3 proprietà.
– infoComputerDOM si occupa di visualizzare le 3
proprietà nel DOM all’interno di paragrafi distinti. Il
metodo accetta in input l’id del tag html all’interno
del quale andranno inseriti i paragrafi.
*/

// beginning

// function Computer(processore, disco, ram) {
//     this.processore = processore;
//     this.disco = disco;
//     this.ram = ram;
// }
// Computer.prototype.infoComputerConsole = function() {
//     console.log("Processore: " + this.processore + " Disco: " + this.disco + " Ram: " + this.ram);
// }
// Computer.prototype.infoComputerDOM = function (id) {
//     document.getElementById(id).innerHTML = 
//     `
//     <p>Processore: ${this.processore}</p>
//     <p>Disco: ${this.disco}</p>
//     <p>Ram: ${this.ram}</p>
//     `.trim();
// }
class Computer {
    constructor(processore, disco, ram) {
        this.processore = processore;
        this.disco = disco;
        this.ram = ram;
    }
    infoComputerConsole() {
        console.log("Processore: " + this.processore + " Disco: " + this.disco + " Ram: " + this.ram);
    }
    infoComputerDOM(id) {
        document.getElementById(id).innerHTML =
            `
            <p>Processore: ${this.processore}</p>
            <p>Disco: ${this.disco}</p>
            <p>Ram: ${this.ram}</p>
            `.trim();
    }
}

const miopc = new Computer("a", "b", "c");
miopc.infoComputerConsole();
miopc.infoComputerDOM("miopc");
const miopc2 = new Computer("d", "e", "f");
miopc2.infoComputerDOM("miopc2");
