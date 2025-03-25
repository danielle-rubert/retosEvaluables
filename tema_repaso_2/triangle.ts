import { Point } from "./point";

export class Triangle {
    constructor(
        private vertex1: Point,
        private vertex2: Point,
        private vertex3: Point
    ) {}

    public calculateLengthSides(): number[] {
        return [
            this.vertex1.calculateDistance(this.vertex2),
            this.vertex2.calculateDistance(this.vertex3),
            this.vertex3.calculateDistance(this.vertex1)
        ];
    }
}

const pointA = new Point(0, 0);
const pointB = new Point(3, 0);
const pointC = new Point(0, 4);

const myTriangle = new Triangle(pointA, pointB, pointC);
console.log("Lados del triángulo: ", myTriangle.calculateLengthSides());