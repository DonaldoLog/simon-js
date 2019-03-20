function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
    console.log(`${this.nombre}${(this.altura > 1.8)? 'no': ''} es alto`);
}

Persona.prototype.soyAlto = () => this.altura > 1.8

var donaldo = new Persona('Donaldo', 'Lopez', 1.81)
// donaldo.saludar()
donaldo.soyAlto()
