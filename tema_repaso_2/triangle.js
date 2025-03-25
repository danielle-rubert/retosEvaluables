"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var point_1 = require("./point");
var Triangle = /** @class */ (function () {
    function Triangle(vertex1, vertex2, vertex3) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }
    Triangle.prototype.calculateLengthSides = function () {
        return [
            this.vertex1.calculateDistance(this.vertex2),
            this.vertex2.calculateDistance(this.vertex3),
            this.vertex3.calculateDistance(this.vertex1)
        ];
    };
    return Triangle;
}());
exports.Triangle = Triangle;
var pointA = new point_1.Point(0, 0);
var pointB = new point_1.Point(3, 0);
var pointC = new point_1.Point(0, 4);
var myTriangle = new Triangle(pointA, pointB, pointC);
console.log("Lados del triángulo: ", myTriangle.calculateLengthSides());
