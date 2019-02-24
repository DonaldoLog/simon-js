var donaldo = {
  nombre: 'Donaldo',
  apellido: 'Lopez',
  edad: 24
}

var dario = {
  nombre: 'Dario',
  apellido: 'Frndz',
  edad: 28
}

function imprimirNombreEnMayus(persona) {
  var { nombre, edad } = persona
  console.log(`Hola me llamo ${nombre} y tengo ${edad}`)
}

imprimirNombreEnMayus(donaldo)
imprimirNombreEnMayus(dario)

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}
