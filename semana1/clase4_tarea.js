const {ask} = require('../helpers/input');

function diffDays(birthDate, actualDate) {
    const diff = actualDate - birthDate;
    const edadEnDias = Math.floor(diff / (1000 * 60 * 60 * 24));
    return edadEnDias;
    
  }

async function main() {
    const actualDate = new Date();

  const birthDateDay = await ask( "¿cual es el día de tu fecha de nacimiento?");
  const birthMonth = await ask( "¿cual es el mes de tu fecha de nacimiento?");
  const birthYear = await ask( "¿cual es el año de tu fecha de nacimiento?");
 // const birthDate = await ask( "¿cual es tu fecha de nacimiento? (formato yyyy-mm-dd)");
  const birthDate =new Date(`$birthDateDay}-${birthMonth}-${birthYear}`);
  console.log("Haz vivido aproximadamente: ");
  console.log(`${diffDays(birthDate, actualDate)} días`);

  const diff = actualDate - birthDate;
  console.log(actualDate);
    console.log(birthDate);
    console.log(diff);
}
  main();

  
  

