// esecizio parola maggiore

// prima parola
const parola1 = prompt ("")

// seconda parola
const parola2 = prompt ("")

// Determina la più lunga
if (parola1.length > parola2.length) {
  console.log(parola2);
  console.log(parola1);

}else if (parola1.length < parola2.length) {
  console.log(parola1);
  console.log(parola2);
  
} else {
  console.log("le parole sono lunghe uguali");
  console.log(parola1);
  console.log(parola2);
}