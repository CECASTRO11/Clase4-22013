import Persona from './persona.js';
import Animal from './animal.js';
import Perro from './perro.js';

let myPerson = new Persona('Juan', 'Perez', 23, 1.8);
let Dogi = new Perro('puka', 'chihuahua', 2);


console.log(myPerson.saludar());
console.log(Dogi.ladrar());
console.log(Dogi.speak());

