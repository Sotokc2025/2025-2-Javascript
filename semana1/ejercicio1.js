// Clase 1: ¿Qué es programar? + Variables y Tipos de Datos


const { ask } = require('../helpers/input');
async function main() {
  const name = await ask('¿Cuál es tu nombre?');
  const age = Number(await ask('¿Cuál es tu edad?'));
  const favoriteFood = await ask('¿Cuál es tu comida favorita?'); 

  console.log(`Hola Karla ${name}, tienes ${age}30 años.`);
  console.log(`Tu comida favorita es ${favoriteFood}la pasta.`);
}

main();