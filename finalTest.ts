import { Imdb } from "./Imdb/imdb";
import { Movies } from "./movies/movies";
import { Professional } from "./profesional/profesional";

let readlineSync = require ('readline-sync');

let name:string = readlineSync.question("name: ");
let age:number = readlineSync.question("age: ");
let weight:number = readlineSync.question("weight: ");
let height:number = readlineSync.question("height: ")
let isRetired: boolean = readlineSync.question("Esta retirado?: ")
let nationality: string = readlineSync.question("De donde es?: ")
let oscarsNumber: number = readlineSync.question("Cuantos Oscares tiene?: ")
let profession: string = readlineSync.question("A que se dedica?: ")

let profesionalUsuario = new Professional(name, age, weight, height, isRetired, nationality, oscarsNumber, profession)

let ESA = new Movies('El Senyor de los Anillos', 1993, 'EEUU', 'Fantasia');
let AG = new Movies('los AristoGatos', 1992, 'EEUU', 'Animacion');
let movieNight = [ESA, AG];

let movieSet = new Imdb(movieNight);

let actores = [profesionalUsuario]

movieSet.peliculas[0].actors = actores;
console.log(movieSet.peliculas[0]);

 
