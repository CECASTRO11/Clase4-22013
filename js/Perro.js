import Animal from "./animal.js";

export default class Perro extends Animal{
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }

    Ladrar(){ 
        this.Speak();
    }
}