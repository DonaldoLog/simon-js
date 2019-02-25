var donaldo = {
  nombre: 'Donaldo',
  apellido: 'Lopez',
  edad: 24,
  ingeniero: true,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: true
}

var otro   = {
  nombre: 'Donaldo',
  apellido: 'Lopez',
  edad: 17
}


function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)
  if (persona.ingeniero) {
    console.log('Ingeniero')
  }
  if (persona.cocinero) {
    console.log('Cocinero')
  }
  if (persona.cantante) {
    console.log('Cantante')
  }
  if (persona.dj) {
    console.log('Dj')
  }
  if (persona.guitarrista) {
    console.log('Guitarrista')
  }
  if (persona.drone) {
    console.log('Drone')
  }
}

imprimirProfesiones(donaldo)

const MAYoRIA_DE_EDAD = 18

// const esMayorDeEdad = persona => {
//   return persona.edad >= MAYoRIA_DE_EDAD
// }

const esMayorDeEdad = persona => persona.edad >= MAYoRIA_DE_EDAD

function imprimirSiEsMayor(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

function permitirAceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log('Denegado prro');
  }
}
