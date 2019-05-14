 var donaldo = {
     nombre: 'Donaldo',
     apellido: 'Lopez',
     edad: 24
 }
 
 
 function esMayorDeEdad(persona) {
     let mensaje
     const MAYORIA_EDAD = 18
     if (persona.edad >= MAYORIA_EDAD) {
        mensaje = 'Es mayor de edad'
     } else {
        mensaje = 'Es menor de edad'
     }
     console.log(mensaje);
     
 }

 esMayorDeEdad(donaldo)
