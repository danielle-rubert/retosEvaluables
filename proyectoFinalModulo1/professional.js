"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Professional.prototype.printAttributes = function () {
        console.log("Name: ".concat(this.name));
        console.log("Age: ".concat(this.age));
        console.log("Weight: ".concat(this.weight));
        console.log("Height: ".concat(this.height));
        console.log("Is Retired: ".concat(this.isRetired));
        console.log("Nationality: ".concat(this.nationality));
        console.log("Oscars Number: ".concat(this.oscarsNumber));
        console.log("Profession: ".concat(this.profession));
    };
    return Professional;
}());
exports.Professional = Professional;
