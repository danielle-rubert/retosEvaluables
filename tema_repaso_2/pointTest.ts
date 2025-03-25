import { Point } from "./point";

const myPoint = new Point(3, 7);
const anotherPoint = new Point(15, 30);
const point1 = new Point(1, 2);
const point2 = new Point(-3, 5);
const point3 = new Point(7, -4);

console.log("Coordenadas iniciales: ", myPoint.toString());
console.log("Punto X: ", myPoint.getX());
console.log("Punto Y: ", myPoint.getY());
console.log("Distancia al origen: ", myPoint.distanceToOrigin());

myPoint.setX(10);
myPoint.setY(15);
console.log("Coordenadas actualizadas: ", myPoint.toString());
console.log("Nueva distancia al origen: ", myPoint.distanceToOrigin());

console.log("Distancia entre myPoint y anotherPoint: ", myPoint.calculateDistance(anotherPoint));

console.log("Cuadrante de myPoint: ", myPoint.calculateQuadrant());
console.log("Nuevo cuadrante de myPoint: ", myPoint.calculateQuadrant());

const nearestPoint = myPoint.calculateNearest([anotherPoint, point1, point2, point3]);
console.log("El punto más cercano a myPoint es: ", nearestPoint.toString());
