// esercizio nuomero maggiore

//primo numero 
const numero1 = parseFloat(prompt("Inserisci il primo numero:"));

//secondo numero
const numero2 = parseFloat(prompt("Inserisci il secondo numero:"));

// Determina il maggiore 
if (numero1 > numero2) {
  console.log("Il maggiore è:", numero1 );
}else if (numero2 > numero1) {
  console.log("Il maggiore è:", numero2);
} else {
  console.log("I numeri sono uguali:");
}

