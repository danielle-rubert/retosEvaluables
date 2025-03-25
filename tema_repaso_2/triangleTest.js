"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
var point_1 = require("./point");
var pointA = new point_1.Point(0, 0);
var pointB = new point_1.Point(3, 0);
var pointC = new point_1.Point(0, 4);
var myTriangle = new triangle_1.Triangle(pointA, pointB, pointC);
console.log("Lados del triángulo: ", myTriangle.calculateLengthSides());
