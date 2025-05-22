//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');

async function main() {

    const calificaciones = [60, 80, 70, 50, 100, 90];

    function analizarCalificaciones(calificaciones) {
        let aprobados = 0;
        let reprobados = 0;
        let total = 0;
        let mayor = calificaciones[0];
        let menor = calificaciones[0];


        for (let i = 0; i < calificaciones.length; i++) {
            total = total + calificaciones[i];

            if (calificaciones[i] >= 70) {
                aprobados++
            } else {
                reprobados++;
            }
            if (calificaciones[i] > mayor)
                mayor = calificaciones[i];
            if (calificaciones[i] < menor)
                menor = calificaciones[i];

        }


        const promedio = total / calificaciones.length;
        return { aprobados, reprobados, promedio, mayor, menor };

        
    }
    
    const resultado = analizarCalificaciones(calificaciones);
    console.log(`La cantidad de personas aprobadas son: ${resultado.aprobados}`);
    console.log(`La catidad de reprobados son: ${resultado.reprobados}`);
    console.log(`El promedio de calificaciones general de los alumnos es: ${resultado.promedio}`);
    console.log(`La calificación más alta es: ${resultado.mayor}`);
    console.log(`La calificación más baja es: ${resultado.menor}`);



}
main()



function obtenerPromedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  const promedio = total / numeros.length;

  return promedio;
}

function obtenerMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

function obtenerMenor(numeros) {
  let menor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

function obtenerAprobados(numeros) {
  let aprobados = 0;
  let reprobados = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 70) {
      aprobados++;
    } else {
      reprobados++;
    }
  }
  return { aprobados, reprobados };
}

function analizarCalificaciones(calificaciones) {
  const res = obtenerAprobados(calificaciones);
  let aprobados = res.aprobados;
  let reprobados = res.reprobados;
  let promedio = obtenerPromedio(calificaciones);
  let califAlta = obtenerMayor(calificaciones);
  let califBaja = obtenerMenor(calificaciones);

  return { aprobados, reprobados, promedio, califAlta, califBaja };
}

async function main() {
  const calificaciones = [90, 89, 34, 45, 67, 89, 23, 12, 45, 89, 8, 90]
  const resultado = analizarCalificaciones(calificaciones);
  console.log(resultado);

}

main();