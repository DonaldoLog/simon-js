const donaldo = {
    nombre: 'Donaldo',
    apellido: 'Lopez',
    edad: 24
}

// const cumpleanos = persona => persona.edad++

const cumpleanosInmu = persona => ({
    ...persona,
    edad: persona.edad + 1
})
