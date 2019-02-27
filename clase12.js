var signo = prompt('¿cual es tu signo')
console.log(signo)

switch (signo) {
    case 'acuario':
        console.log('frase pro de tu signo acurio')
        break
    case 'piscis':
        console.log('frase pro de piscis')
        break
    case 'sagitario':
    case 'sagitarioo':
        console.log('frase pro de sagitario')
    default:
        console.log('signo no encontrado')
        break
}
