/*
Dati i file nella cartella 01-hello-world, scrivere
il codice Javascript in modo che:
– Venga stampato in console la stringa «Hello
World»
– Venga inserita la stringa «Hello World» all’interno
dello span con id ciao.
– Venga inserita la stringa «2021» all’interno del
paragrafo con classe anno.
*/

// beginning

console.log("Hello Console!");

// const tagHello = document.getElementById("ciao");
const tagHello = document.querySelector("#ciao");
tagHello.innerHTML = "Hello World!";

// const tagYear = document.getElementsByClassName("anno");
// const tagYear = document.querySelectorAll(".anno");
// const tagYear = document.querySelectorAll("body .anno");
const tagYear = document.querySelectorAll("body p.anno");
tagYear[0].innerHTML = "2023";
// const tagYear = document.querySelector(".anno");
// tagYear.innerHTML = "2023";

// doesn't work
// tagYear.forEach(element => {
//     element.innerHTML = "2023-2";
// });
