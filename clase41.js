const donaldo = {
    nombre: 'Donaldo',
    apellido: 'Lopez'
}

const chumel = {
    nombre: 'chumel',
    apellido: 'torres'
}


function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// const saludarADonald = saludar.bind(donaldo)
// const saludarAChumel = saludar.bind(chumel)
// bind('quien va ser this', 'el parametro')
// setTimeout(saludar.bind(chumel, 'hola che'), 1000);

// saludar.call(donaldo, 'hola bro')

saludar.apply(donaldo, ['Hola brow'])

