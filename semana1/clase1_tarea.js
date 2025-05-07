// Ejercicio: Crear una calculadora simple que realice operaciones básicas (suma, resta, multiplicación y división) entre dos números.

const { ask } = require('../helpers/input.js');

async function main() {
 
  const num1 = Number(await ask('Dame un número: '));
  const num2 = Number(await ask('Dame un número: '));
  const suma = num1 + num2;
  console.log(`La suma de ${num1} + ${num2} es: ${suma}`);
  
  const resta = num1 - num2;
  console.log(`La resta de ${num1} - ${num2} es: ${resta}`);

  const multiplicacion = num1 * num2;
  console.log(`La multiplicación de ${num1} * ${num2} es: ${multiplicacion}`);

  const división = num1 / num2;
  console.log(`La división de ${num1} / ${num2} es: ${división}`);

}

main();