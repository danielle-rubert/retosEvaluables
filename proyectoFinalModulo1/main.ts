import { Imdb } from "./imdb";
import { movie1, movie2, movie3 } from "./testMovie";

const imdb = new Imdb([movie1, movie2, movie3]);

imdb.escribirEnFicheroJSON("imdbBBDD.json");

