
const { ask } = require('../helpers/input');

async function main() {

  const personas = [
    {
<<<<<<< HEAD
      nombre: "Rodrigo",
      edad: 36,
      profesion: "Desarrollador",
      hobbies: ["nadar", "futbol", "leer"],
      birthDate: "1988-08-08",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre} `);

      }
    },
    {
=======
>>>>>>> upstream/main
      nombre: "Claudia",
      edad: 34,
      ocupacion: "Desarrollador",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre}`);
      }
    },

    {
      nombre: "Carlos",
      edad: 28,
      ocupacion: "Estudiante",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre}`);
      }
    }
  ];
  personas.saludar[0].saludar();
  personas.saludar[1].saludar();
  for (let i = 0; i < personas.length; i++) {
    personas[i].saludar();
    console.log();
  }
}

<<<<<<< HEAD
const alumno = {
  nombre: "Yei Yei",
  ocupacion: "Estudiante",
  edad: 18,
  esMayorDeEdad: function () {
    if (this.edad >= 18) { return true;}
    else { return false;}
  },
  mostrarInfo: function () {
    console.log(`Hola soy: ${this.nombre}, me dedico: ${this.ocupacion} tengo: ${this.edad} años`);
    if (this.esMayorDeEdad()) {
      console.log("Yo soy mayor de edad");
    } else {
      console.log("No puedo votar");
    }
  }
}
const alumno1 = {
  nombre: "Yei Yei",
  matricula: "AL089778",
  promedio: 90,
  edad: 18,
  mostrarInfo: function () {
    console.log(`Nombre: ${this.nombre}| \nMatricula: ${this.matricula}| \nPromedio: ${this.promedio}|`);
    if (this.edad >= 18) {
      console.log("Es mayor de edad");
    } else {
      console.log("No es mayor de edad");
    }
  }
}

const alumno2 = {
  nombre: "Frank",
  matricula: "AL089790",
  promedio: 95,
  edad: 17,
  mostrarInfo: function () {
    console.log(`Nombre: ${this.nombre}| \nMatricula: ${this.matricula}| \nPromedio: ${this.promedio}|`);
    if (this.edad >= 18) {
      console.log("Es mayor de edad");
    } else {
      console.log("No es mayor de edad");
=======
  // personas[0].saludar();
  // personas[1].saludar();

  for (let i = 0; i < personas.length; i++) {
    personas[i].saludar();
  }

  const alumno = {
    nombre: "Yei Yei",
    edad: 18,
    ocupacion: "Estudiante",
    esMayorDeEdad: function () {
      if (this.edad >= 18) { return true; }
      else { return false; }
    },
    mostrarInfo: function () {
      console.log(`Hola soy: ${this.nombre}, tengo ${this.edad}, me dedico a ser: ${this.ocupacion} `);
      if (this.esMayorDeEdad()) {
        console.log("Y SOY MAYOR DE EDAD");
      } else {
        console.log("no puedo votar");
      }
>>>>>>> upstream/main
    }
  }
}

<<<<<<< HEAD
const alumno3 = {
  nombre: "Cris",
  matricula: "AL089767",
  promedio: 98,
  edad: 21,
  mayorDeEdad: false,
  mostrarInfo: function () {
    console.log(`Nombre: ${this.nombre}| \nMatricula: ${this.matricula}| \nPromedio: ${this.promedio}|`);
    if (this.edad >= 18) {
      console.log("Es mayor de edad");
    } else {
      console.log("No es mayor de edad");
    }
  },
  setMayorEdad: function () {
    if (this.edad >= 18) {
      this.mayorDeEdad = true;
    } else {
      this.mayorDeEdad = false;
    }
  }
}

const alumnos = [alumno1, alumno2, alumno3];

for (let i = 0; i < alumnos.length; i++) {
  alumnos[i].mostrarInfo();
}




const persona1 = {
  nombre: "Claudia",
  edad: 36,
  profesion: "Desarrollador",
  hobbies: ["nadar", "futbol", "leer"],
  birthDate: "1988-08-08",
  saludar: function () {
    console.log(`Hola mi nombre es ${this.nombre} `);
    console.log(persona.nombre);
    console.log(persona["edad"]);
  }
},
  persona1.saludar();

const persona2 = {
  nombre: "Claudia",
  edad: 36,
  profesion: "Desarrollador",
  hobbies: ["nadar", "futbol", "leer"],
  birthDate: "1988-08-08",
  saludar: function () {
    console.log(`Hola mi nombre es ${this.nombre} `);
  }
},
  persona2.saludar();
  // alumno1.mostrarInfo();
  // alumno2.mostrarInfo();
  // alumno3.mostrarInfo();
}

main();

=======
  alumno.mostrarInfo();

}



main();
>>>>>>> upstream/main
