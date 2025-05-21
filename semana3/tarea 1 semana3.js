const {ask} = require('../helpers/input.js');

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
async function main() {
    
}


        
    
