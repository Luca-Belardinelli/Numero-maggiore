
let numeriDispari = [];

// Ciclo 
for (let i = 0; i < 6; i++) {

    //inserire un numero
    let numero = parseInt(prompt("Inserisci un numero:"));

    // Controlla se il numero è dispari
    if (numero % 2 !== 0) {
        // Inserisci il numero dispari all'array
        numeriDispari.push(numero);
    }
}


console.log( numeriDispari);
