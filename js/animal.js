export default class Animal {
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }
    
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} soy un ${this.raza} y tengo ${this.edad} años`);
    }
}