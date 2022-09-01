console.log(`JS OK!`);


// PALINDROMA 

// Chiedere all’utente di inserire una parola
const parolaUtente = prompt(`Inserisci una parola`);

// Creare una funzione per capire se la parola inserita è palindroma
const isPalindroma = palindroma(parolaUtente);

function palindroma(parola) {
    // divido la parola con .split, split ha bisogno di stringa vuota per dividere
    let parolaDivisa = parola.split('');
    // reverso le lettere della parola dentro l'array
    parolaDivisa = parolaDivisa.reverse();
    // ricongiungo le lettere per ricreare parola con .join, anche lui ha bisogno di stringa vuota
    let parolaContrario = parolaDivisa.join('');
    // ritorno parola intera
    return parolaContrario;
}

// Controllo per sapere se la parola è palindroma o no
if (parolaUtente == palindroma(parolaUtente)) {
    console.log(`è palindroma`);
} else {
    console.log(`non è palindroma`);
}



// PARI E DISPARI


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userChoice = prompt(`pari o dispari?`);
const numberUser = parseInt(prompt("inserisci un numero da 1 a 5"));

// // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomGenerator(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
};

const numberPc = randomGenerator(1, 5);
console.log(numberPc);

// Sommiamo i due numeri
const somma = numberPc + numberUser;
console.log(somma);

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function isEven(numero) {
    return (numero % 2 === 0);
}

// verifichiamo se la somma è pari o dispari
const pariOdispari = isEven(somma) ? `pari` : `dispari`;


// Dichiariamo chi ha vinto
if (pariOdispari === userChoice) {
    console.log(`utente ha vinto`);
} else {
    console.log(`pc ha vinto`);
}
