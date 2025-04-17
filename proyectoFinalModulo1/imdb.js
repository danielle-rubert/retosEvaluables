"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Imdb = void 0;
var movie_1 = require("./movie");
var fs = require("fs");
var Imdb = /** @class */ (function () {
    function Imdb(peliculas) {
        this.peliculas = peliculas;
    }
    Imdb.prototype.printAllMovies = function () {
        this.peliculas.forEach(function (pelicula, index) {
            console.log("\n--- Pel\u00EDcula ".concat(index + 1, " ---"));
            pelicula.printAttributes();
        });
    };
    Imdb.prototype.escribirEnFicheroJSON = function (nombreFichero) {
        var contenido = JSON.stringify(this, null, 2);
        fs.writeFileSync(nombreFichero, contenido);
    };
    Imdb.prototype.saveToJson = function (filename) {
        var data = JSON.stringify(this, null, 2);
        fs.writeFileSync(filename, data, 'utf-8');
    };
    Imdb.loadFromJson = function (filename) {
        var data = fs.readFileSync(filename, 'utf-8');
        var parsed = JSON.parse(data);
        var movies = parsed.peliculas.map(function (p) {
            var movie = new movie_1.Movie(p.title, p.releaseYear, p.nationality, p.genre);
            movie.language = p.language;
            movie.platform = p.platform;
            movie.isMCU = p.isMCU;
            movie.mainCharacterName = p.mainCharacterName;
            movie.producer = p.producer;
            movie.distributor = p.distributor;
            return movie;
        });
        return new Imdb(movies);
    };
    Imdb.obtenerInstanciaIMDB = function (nombreFichero) {
        var contenido = fs.readFileSync(nombreFichero, 'utf-8');
        var objeto = JSON.parse(contenido);
        return new Imdb(objeto.peliculas);
    };
    return Imdb;
}());
exports.Imdb = Imdb;
