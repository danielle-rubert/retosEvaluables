"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = [];
        for (var i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * (k + 1)));
        }
    }
    Vector.prototype.print = function () {
        console.log("[".concat(this.elements.join(", "), "]"));
    };
    Vector.prototype.add = function (v1) {
        var minLength = Math.min(this.elements.length, v1.elements.length);
        for (var i = 0; i < minLength; i++) {
            this.elements[i] += v1.elements[i];
        }
    };
    Vector.prototype.subs = function (v1) {
        var minLength = Math.min(this.elements.length, v1.elements.length);
        for (var i = 0; i < minLength; i++) {
            this.elements[i] - v1.elements[i];
        }
    };
    Vector.prototype.mult = function (v1) {
        var minLength = Math.min(this.elements.length, v1.elements.length);
        for (var i = 0; i < minLength; i++) {
            this.elements[i] * v1.elements[i];
        }
    };
    Vector.prototype.multNumber = function (n) {
        this.elements = this.elements.map(function (val) { return val * n; });
    };
    return Vector;
}());
exports.Vector = Vector;
