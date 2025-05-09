// Clase 3: Lógica con Condicionales
const { ask } = require('../helpers/input');

async function main() {
  const number = Number(await ask("Ingresa un número:"));

  if (number % 3 !== 0 && number % 5 !== 0) {
    console.log("Múltiplo de 3 y 5");
  } else if (number % 3 === 0 && number % 5 !== 0) {
    console.log("Múltiplo de 3");
  } else if (number % 5 === 0 && number % 3 !== 0) {
    console.log("Múltiplo de 5");
  } else {
    console.log("No es múltiplo de 3 ni de 5");
  }
main();

  //TODO : Convertir a switch
  //const multiplo5 = number % 5 === 0;
  //const multiplo3 = number % 3 === 0;
  switch (true) {
    case number % 3 === 0 && number % 5 === 0:
      console.log("Múltiplo de 3 y 5");
      break;
    case number % 3 === 0:
      console.log("Múltiplo de 3");
      break;
    case number % 5 === 0:
      console.log("Múltiplo de 5");
      break;
    default:
      console.log("No es múltiplo de 3 ni de 5");
      break;
  }
}
  main();

  const multiplo de ambos = number % 3 === 0 && number % 5 === 0;
  const multiplo de 3 = number % 3 === 0;   
  const multiplo de 5 = number % 5 === 0;
  






async function main() {
const number = Number(await ask("Ingresa un número:"));

  if (number % 3 === 0 && number % 5 === 0) {
    console.log("Múltiplo de 3 y 5");
  } else if (number % 3 === 0) {
    console.log("Múltiplo de 3");
  } else if (number % 5 === 0) {
    console.log("Múltiplo de 5");
  } else {
    console.log("No es múltiplo de 3 ni de 5");
  }
}
main();


  