function crearSaludo(finalDeFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}


const saludoArgentido = crearSaludo('che')
const saludoMexicano = crearSaludo('bro')
const saludoColombiano = crearSaludo('parcee')

saludoArgentido('Donaldo')
saludoMexicano('Donaldo')
saludoColombiano('Donaldo')