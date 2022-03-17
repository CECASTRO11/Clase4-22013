import Persona from './persona.js';
import Animal from './animal.js';

let myPerson = new Persona('Juan', 'Perez', 23, 1.8);
let Dogi = new Animal('Cafu', 'perro', 2);
let Cat = new Animal('Fifi', 'gato', 3);


myPerson.saludar();
Dogi.saludar();
Cat.saludar();

