import * as readlineSync from 'readline-sync';
import { Imdb } from './imdb';
import { Professional } from './professional';
import { Movie } from './movie';
import { movie1, movie2, movie3 } from "./testMovie";

const imdbInicial = new Imdb([movie1, movie2, movie3]);
imdbInicial.escribirEnFicheroJSON("imdbBBDD.json");

const imdb = Imdb.obtenerInstanciaIMDB("imdbBBDD.json");

console.log("\nPelículas disponibles:");
imdb.peliculas.forEach((peli, index) => {
    console.log(`${index}: ${peli.title}`);
});

const index = readlineSync.questionInt("\n¿A qué película querés añadir el profesional? Escribe el número: ");
const pelicula = imdb.peliculas[index];

console.log("\nIntroduce los datos del nuevo profesional:");

const name = readlineSync.question("Nombre: ");
const age = readlineSync.questionInt("Edad: ");
const weight = readlineSync.questionFloat("Peso (kg): ");
const height = readlineSync.questionFloat("Altura (cm): ");
const isRetired = readlineSync.keyInYNStrict("¿Está retirado? ");
const nationality = readlineSync.question("Nacionalidad: ");
const oscarsNumber = readlineSync.questionInt("Número de Oscars: ");
const profession = readlineSync.question("Profesión (Actor/Director/etc.): ");

const nuevoProfesional = new Professional(
    name,
    age,
    weight,
    height,
    isRetired,
    nationality,
    oscarsNumber,
    profession
);