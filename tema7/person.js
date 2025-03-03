export class Persona {
    constructor(nombre, anyoNacimiento, altura, peso, hobbies = []) {
      this.nombre = nombre;
      this.anyoNacimiento = anyoNacimiento; 
      this.altura = altura; 
      this.peso = peso; 
      this.hobbies = hobbies;
    }

    calcularIMC() {
        return (this.peso / (this.altura ** 2)).toFixed(2); 
      }

      mostrarIMC() {
        console.log(`${this.nombre}, su IMC es: ${this.calcularIMC()}`);
      }

      calcularEdad(anioActual) {
        return anioActual - this.anyoNacimiento;
      }

      mostrarEdad(anioActual) {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.calcularEdad(anioActual)} años}`);
      }

      agregarHobby(...nuevosHobbies) {
        this.hobbies.push(...nuevosHobbies);
      }

      printAll(anioActual) {
        const atributos = {
          Nombre: this.nombre,
          "Año de Nacimiento": this.anyoNacimiento,
          Altura: this.altura + "m",
          Peso: this.peso + "kg",
          Edad: this.calcularEdad(anioActual) + " años",
          IMC: this.calcularIMC(),
        };
    
        for (const key in atributos) {
          console.log(`${key} - ${atributos[key]}`);
        }
        console.log("----------------------");
    }

    printHobbies() {
      return this.hobbies.join(", ");
    }
}

const persona1 = new Persona("Dani", 1996, 1.56, 59,);
persona1.agregarHobby("Leer", "Comer", "Ir de compras");
const persona2 = new Persona("Chris", 1999, 1.80, 90);
persona2.agregarHobby("Jugar", "Comer", "Bailar");
const persona3 = new Persona("Ana", 1989, 1.67, 60);
persona3.agregarHobby("Leer", "Pintar");

const anioActual = new Date().getFullYear();

persona1.printAll(anioActual);
persona2.printAll(anioActual);
persona3.printAll(anioActual);

console.log(persona1.printHobbies());
console.log(persona2.printHobbies());
console.log(persona3.printHobbies());

