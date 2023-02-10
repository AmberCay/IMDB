import { Imdb } from "./Imdb/imdb";
import { Movies } from "./movies/movies";
import * as fs from "fs";



let ESA = new Movies('El Senyor de los Anillos', 1993, 'EEUU', 'Fantasia');
let AG = new Movies('los AristoGatos', 1992, 'EEUU', 'Animacion');

let listaPelis = new Imdb([ESA, AG]);
fs.writeFileSync('imdbBBDD.json',JSON.stringify(listaPelis));

let text = fs.readFileSync("./BBDD.json")
let myJsonObject = JSON.parse(text)
let peliculas2 = new Imdb(myJsonObject)
console.log(listaPelis);
console.log(myJsonObject);

