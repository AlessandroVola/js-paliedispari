console.log(`JS OK!`)


// PALINDROMA 
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const parolaUtente = prompt(`Inserisci una parola`)

function palindroma(parola) {
    let parolaDivisa = parola.split(``);
    parolaDivisa = parolaDivisa.reverse();
    let parolaContrario = parolaDivisa.joim(``);
    return parolaContrario;
}







// PARI E DISPARI




// Dichiariamo chi ha vinto

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// const pariDispari = prompt(`pari o dispari?`);
// const numberUser = parseInt(prompt("inserisci un numero da 1 a 5"));

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomGenerator(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1));
    return random;
};

const numberPc = randomGenerator(1, 5);
console.log(numberPc);

// // Sommiamo i due numeri
const somma = numberPc + numberUser;
console.log(somma);

// // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function pari(numero) {
    if (numero % 2 == 0) {
        return true;
    } else {
        return false
    }
};
