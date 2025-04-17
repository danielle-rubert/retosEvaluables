import { Professional } from "./professional";

export class Movie {

    public title: string;
    public releaseYear: number;
    public actors: Professional[] = [];
    public nationality: string;
    public director: Professional | null = null;
    public writer: Professional | null = null;
    public language: string = "";
    public platform: string = "";
    public isMCU: boolean = false;
    public mainCharacterName: string = "";
    public producer: string = "";
    public distributor: string = "";
    public genre: string;
  

    constructor(title: string, releaseYear: number, nationality: string, genre: string) {
      this.title = title;
      this.releaseYear = releaseYear;
      this.nationality = nationality;
      this.genre = genre;
    }
  
    public printAttributes(): void {
      console.log(`Title: ${this.title}`);
      console.log(`Release Year: ${this.releaseYear}`);
      console.log(`Nationality: ${this.nationality}`);
      console.log(`Genre: ${this.genre}`);
      console.log(`Language: ${this.language}`);
      console.log(`Platform: ${this.platform}`);
      console.log(`Is part of MCU: ${this.isMCU}`);
      console.log(`Main Character Name: ${this.mainCharacterName}`);
      console.log(`Producer: ${this.producer}`);
      console.log(`Distributor: ${this.distributor}`);
  
      console.log(`Director: ${this.director ? this.director.name : "Not assigned"}`);
      console.log(`Writer: ${this.writer ? this.writer.name : "Not assigned"}`);
  
      console.log("Actors:");
      if (this.actors.length > 0) {
        this.actors.forEach((actor, index) => {
          console.log(`  Actor ${index + 1}: ${actor.name}`);
        });
      } else {
        console.log("  No actors assigned.");
      }
    }
  }
  