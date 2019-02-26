var donaldo = {
  nombre: 'Donaldo',
  apellido: 'Lopez',
  edad: 24,
  peso: 60
}

console.log(`Al inicio de año ${donaldo.nombre} pesa ${donaldo.peso} kg`);
const INCREMENTo_PESo = 0.3
const DIAS_DEL_AÑo = 365

const aumentarDePeso = persona => persona.peso += INCREMENTo_PESo
const adelgazar = persona => persona.peso -= INCREMENTo_PESo

const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const META = donaldo.peso - 3
var dias = 0
while (donaldo.peso > META) {
  debugger
  if (comeMucho()) {
    aumentarDePeso(donaldo)
  }
  if (realizaDeporte()) {
    adelgazar(donaldo)
  }
  dias += 1
}

console.log(`Pasaron ${dias} hasta que ${donaldo.nombre} adelgazo 3kg`);

