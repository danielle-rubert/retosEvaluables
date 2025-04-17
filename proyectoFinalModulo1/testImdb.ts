import { Imdb } from "./imdb";
import { Movie } from "./movie";
import { movie1, movie2, movie3 } from './testMovie';

const moviesArray = [movie1, movie2, movie3];

const imdb = new Imdb([movie1, movie2, movie3]);

console.log("\n=== Catálogo IMDb ===");
imdb.printAllMovies();

const peliculas = [movie1, movie2, movie3];
const myImdb = new Imdb(peliculas);
myImdb.saveToJson("imdbBBDD.json");

const imdbCargada = Imdb.loadFromJson("imdbBBDD.json");


imdbCargada.printAllMovies();

