"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre) {
        this.actors = [];
        this.director = null;
        this.writer = null;
        this.language = "";
        this.platform = "";
        this.isMCU = false;
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
    }
    Movie.prototype.printAttributes = function () {
        console.log("Title: ".concat(this.title));
        console.log("Release Year: ".concat(this.releaseYear));
        console.log("Nationality: ".concat(this.nationality));
        console.log("Genre: ".concat(this.genre));
        console.log("Language: ".concat(this.language));
        console.log("Platform: ".concat(this.platform));
        console.log("Is part of MCU: ".concat(this.isMCU));
        console.log("Main Character Name: ".concat(this.mainCharacterName));
        console.log("Producer: ".concat(this.producer));
        console.log("Distributor: ".concat(this.distributor));
        console.log("Director: ".concat(this.director ? this.director.name : "Not assigned"));
        console.log("Writer: ".concat(this.writer ? this.writer.name : "Not assigned"));
        console.log("Actors:");
        if (this.actors.length > 0) {
            this.actors.forEach(function (actor, index) {
                console.log("  Actor ".concat(index + 1, ": ").concat(actor.name));
            });
        }
        else {
            console.log("  No actors assigned.");
        }
    };
    return Movie;
}());
exports.Movie = Movie;
