// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.


const { ask } = require('../helpers/input.js');

function contarAprobados(alumnos) {
    let aprobados = 0;
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].calificacion >= 70) {
            aprobados++;
        }
    }
    return aprobados;
}

function puedenVotar(alumnos) {
    let puedenVotar = 0;
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].edad >= 18) {
            puedenVotar++;
        }


    }
    return puedenVotar;
}

function promedioCalificaciones(alumnos) {
    if (alumnos.length === 0) {
        return 0;
    }   

      let total = 0;
    for (let i = 0; i < alumnos.length; i++) {
        total = total + alumnos[i].calificacion;
    }

    return total / alumnos.length;
}

function calificacionMayor(alumnos) {
    if (alumnos.length === 0) {
        return 0;
    }
    let mayor = alumnos[0].calificacion;
    for (let i = 1; i < alumnos.length; i++) {
        if (alumnos[i].calificacion > mayor) {
            mayor = alumnos[i].calificacion;
        }
    }
    return mayor;
}

function calificacionMenor(alumnos) {
    if (alumnos.length === 0) {
        return 0;
    }
    let menor = alumnos[0].calificacion;
    for (let i = 1; i < alumnos.length; i++) {
        if (alumnos[i].calificacion < menor) {
            menor = alumnos[i].calificacion;
        }
    }
    return menor;
}



async function main() {

    const alumnos = [];

    let opcion = "0";
    

    while (opcion !== '3') {
        opcion = await ask('¿Que deseas hacer?\n1.Ingresa el nombre, edad y calificación del alumno\n2. mostrar la lista de alumnos\n3. salir\n');
        if (opcion === '1') {
            //Agregar
            let nombre = await ask('¿Cuál es el nombre del alumno que deseas agregar?')
            let edad = Number(await ask('¿Cuál es la edad del alumno que deseas agregar?'));
            let calificacion = Number(await ask('¿Cuál es la calificación del alumno que deseas agregar?'));
            alumnos.push({ nombre, edad, calificacion });
            console.log(`Alumno agregado: ${nombre}`);
            console.log('Alumnos disponibles: ', alumnos);
        } else if (opcion === '2') {
            //Mostrar lista de alumnos
            if (alumnos.length === 0) {
                console.log('No hay alumnos disponibles');
            
            } else {
                console.log('Alumnos disponibles: ', alumnos);
            }
        } else if (opcion === '3') {
            //Salir
            console.log('¡Hasta luego!');
        } else {
            console.log('Opción no válida');
        }

    }



    if (alumnos.length > 0) {
        console.log(`Los aprobados son: ${contarAprobados(alumnos)}`);
        console.log(`Los alumnos que pueden votar son: ${puedenVotar(alumnos)}`);
        console.log(`El promedio de calificaciones es: ${promedioCalificaciones(alumnos)}`);
        console.log(`La calificación mayor es: ${calificacionMayor(alumnos)}`);
        console.log(`La calificación menor es: ${calificacionMenor(alumnos)}`);
    } else {
        console.log('No se ingresaron alumnos.');

    }

}
main();
202






