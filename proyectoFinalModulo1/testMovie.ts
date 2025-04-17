import { Movie } from "./movie";
import { Imdb } from "./imdb";
import { Professional } from "./professional";


const professional1 = new Professional("Tilda Swinton", 63, 58, 1.79, false, "British", 1, "Actress");
const professional2 = new Professional("Emma Stone", 35, 53, 1.68, false, "American", 1, "Actress");
const professional3 = new Professional("Wes Anderson", 54, 72, 1.85, false, "American", 0, "Director");
const professional4 = new Professional("Noah Baumbach", 55, 70, 1.78, false, "American", 0, "Writer");
const professional5 = new Professional("Greta Gerwig", 40, 60, 1.73, false, "American", 0, "Director");
const professional6 = new Professional("Scott Derrickson", 57, 76, 1.82, false, "American", 0, "Director");
const professional7 = new Professional("Jon Spaihts", 54, 75, 1.80, false, "American", 0, "Writer");

const movie1 = new Movie("The French Dispatch", 2021, "USA", "Comedy/Drama");
movie1.director = professional3; 
movie1.writer = professional4;  
movie1.actors.push(professional1, professional2); 
movie1.language = "English";
movie1.platform = "Disney+";
movie1.isMCU = false;
movie1.mainCharacterName = "Lucinda Krementz";
movie1.producer = "Wes Anderson";
movie1.distributor = "Searchlight Pictures";


const movie2 = new Movie("Barbie", 2023, "USA", "Fantasy/Comedy");
movie2.director = professional5; 
movie2.writer = professional4;  
movie2.actors.push(professional2); 
movie2.language = "English";
movie2.platform = "HBO Max";
movie2.isMCU = false;
movie2.mainCharacterName = "Barbie";
movie2.producer = "Margot Robbie";
movie2.distributor = "Warner Bros";


const movie3 = new Movie("Doctor Strange", 2016, "USA", "Action/Fantasy");
movie3.director = professional6; 
movie3.writer = professional7; 
movie3.actors.push(professional1); 
movie3.language = "English";
movie3.platform = "Disney+";
movie3.isMCU = true;
movie3.mainCharacterName = "Dr. Stephen Strange";
movie3.producer = "Kevin Feige";
movie3.distributor = "Marvel Studios";


console.log("\n--- The French Dispatch ---");
movie1.printAttributes();

console.log("\n--- Barbie ---");
movie2.printAttributes();

console.log("\n--- Doctor Strange ---");
movie3.printAttributes();


export { movie1, movie2, movie3 };