// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main() {
    let edades = [];
    let cantidades = Number(await ask('¿Cuántas edades van a ingresar? '));
    for (let i = 0; i < cantidades; i++) {
        let edad = Number(await ask(`Ingresa la edad # ${i+1}: `));
        edades.push(edad);

    }
    let puedenVotar = 0;
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] >= 18) {
            puedenVotar++;
        }
    }

    console.log(`De las ${edades.length} personas, ${puedenVotar} pueden votar (porque tienen 18 años o más).`);
}

main();

