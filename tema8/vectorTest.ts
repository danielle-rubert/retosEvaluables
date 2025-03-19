import { Vector } from "./vector";

const v1 = new Vector(5, 10);

const v2 = new Vector(5, 20); 
console.log("Vector elements antes de las operaciones:");
v1.print();

v1.add(v2);
console.log ("Suma:");
v1.print();

// v1.subs(v2);
// console.log ("Resta:");
// v1.print();

// v1.mult(v2);
// console.log ("Multiplicado");
// v1.print();

// v1.multNumber(v2);
// console.log ("Multiplicado por 2:");
// v1.print();
