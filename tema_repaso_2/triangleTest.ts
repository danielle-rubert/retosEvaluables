import { Triangle } from "./triangle";
import { Point } from "./point";

const pointA = new Point(0, 0);
const pointB = new Point(3, 0);
const pointC = new Point(0, 4);

const myTriangle = new Triangle(pointA, pointB, pointC);
console.log("Lados del triángulo: ", myTriangle.calculateLengthSides());