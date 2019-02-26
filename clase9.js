var donaldo = {
  nombre: 'Donaldo',
  apellido: 'Lopez',
  edad: 24,
  peso: 60
}

console.log(`Al inicio de año ${donaldo.nombre} pesa ${donaldo.peso} kg`);
const INCREMENTo_PESo = 0.2
const DIAS_DEL_AÑo = 365

const aumentarDePeso = persona => persona.peso += INCREMENTo_PESo
const adelgazar = persona => persona.peso -= INCREMENTo_PESo

for (let i = 1; i <= DIAS_DEL_AÑo; i++) {
  let random = Math.random()

  if (random < 0.25) {
    //aumenta peso
    aumentarDePeso(donaldo)
  } else if (random < 0.50){
    //adelgazar
    adelgazar(donaldo)
  }
}

console.log(`Al final del año ${donaldo.nombre} pesa ${donaldo.peso.toFixed(1)} kg`);

