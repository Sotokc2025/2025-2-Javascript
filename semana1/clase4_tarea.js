// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.


const {ask} = require('../helpers/input');

function diffDays(actualDate, birthDate) {
    const diff = actualDate - birthDate;
    const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24 ));
    return edadEnDias;
    
  }

async function main() {
    const actualDate = new Date();

    const birthDateDay = await ask("¿Cuál es el día de tu fecha de nacimiento?");
    const birthMonth = await ask("¿Cuál es el mes de tu fecha de nacimiento?");
    const birthYear = await ask("¿Cuál es el año de tu fecha de nacimiento?");

    // Construcción correcta de la fecha de nacimiento
    const birthDate = new Date(`${birthYear}-${birthMonth}-${birthDateDay}`);

    // Validación de la fecha
    

    // Cálculo de la diferencia en años, dias y meses
    const diffInMilliseconds = actualDate - birthDate;
    const diffInYears = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    const diffInMinutes = Math.floor(diffInMilliseconds /(1000 * 60));
    const diffInWeeks = Math.floor(diffInDays / 7);
    

    console.log("Has vivido aproximadamente:");
    console.log(`${diffDays(actualDate, birthDate)} días`);
    console.log(`${diffInYears} años`);
    console.log(`${diffInMonths} meses`);
    console.log(`${diffInWeeks} semanas`);

    console.log("Fecha actual:", actualDate);
    console.log("Fecha de nacimiento:", birthDate);
    console.log("Diferencia en milisegundos:", diffInMilliseconds);
}

main();




