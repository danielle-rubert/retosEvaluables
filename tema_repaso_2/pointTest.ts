import { Point } from "./point";

const myPoint = new Point(3, 7);

console.log("Coordenadas iniciales: ", myPoint.toString());
console.log("Punto X: ", myPoint.getX());
console.log("Punto Y: ", myPoint.getY());

myPoint.setX(10);
myPoint.setY(15);
console.log("Coordenadas actualizadas: ", myPoint.toString());