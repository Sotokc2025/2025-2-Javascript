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

