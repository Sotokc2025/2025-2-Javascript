const { ask } = require("../helpers/input");;
function obtenerMayor(a, b) {
    if (a > b) {
    return a;
  } else { 
    return b;
  }
  }
    async function main() {
        const numero1 = Number(await ask("Ingresa el primer número:"));
        const numero2 = Number(await ask("Ingresa el segundo número:"));
        console.log(obtenerMayor(numero1, numero2));
        const resultado = obtenerMayor(numero1, numero2);
    }
    (main);

    const numero1 = Number(await ask("Ingresa el primer número:"));
    const numero2 = Number(await ask("Ingresa el segundo número:"));

    if (numero1 === numero2) {
        console.log( "Los números son iguales");
    }   else {
        const resultado = obtenerMayor(numero1, numero2);
        console.log(`El número mayor es: ", resultado`);
    }

  
