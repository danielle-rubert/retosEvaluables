import { Movie } from "./movie";
import { Professional } from "./professional";
import * as fs from 'fs';


export class Imdb {
    public peliculas: Movie[];
  
    constructor(peliculas: Movie[]) {
      this.peliculas = peliculas;
    }


    public printAllMovies(): void {
        this.peliculas.forEach((pelicula, index) => {
          console.log(`\n--- Película ${index + 1} ---`);
          pelicula.printAttributes();
        });

    }

    public escribirEnFicheroJSON(nombreFichero: string): void {
      const contenido = JSON.stringify(this, null, 2);
      fs.writeFileSync(nombreFichero, contenido);
    }
  
    public saveToJson(filename: string): void {
      const data = JSON.stringify(this, null, 2);
      fs.writeFileSync(filename, data, 'utf-8');
    }

    public static loadFromJson(filename: string): Imdb {
      const data = fs.readFileSync(filename, 'utf-8');
      const parsed = JSON.parse(data);
  
      const movies: Movie[] = parsed.peliculas.map((p: any) => {
        const movie = new Movie(p.title, p.releaseYear, p.nationality, p.genre);
  
      
        movie.language = p.language;
        movie.platform = p.platform;
        movie.isMCU = p.isMCU;
        movie.mainCharacterName = p.mainCharacterName;
        movie.producer = p.producer;
        movie.distributor = p.distributor;
  
        return movie;
      });
  
      return new Imdb(movies);
    }

    public static obtenerInstanciaIMDB(nombreFichero: string): Imdb {
      const contenido = fs.readFileSync(nombreFichero, 'utf-8');
      const objeto = JSON.parse(contenido);
      return new Imdb(objeto.peliculas);
  }

  
}
  