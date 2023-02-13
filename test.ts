import { Imdb } from "./Imdb/imdb";
import { Movies } from "./movies/movies";
import * as fs from './node_modules';
import * as path from 'path';


let ESA = new Movies('El Senyor de los Anillos', 1993, 'EEUU', 'Fantasia');
let AG = new Movies('los AristoGatos', 1992, 'EEUU', 'Animacion');

let listaPelis = new Imdb([ESA, AG]);
fs.writeFileSync('imdbBBDD.json',JSON.stringify(listaPelis));

let text:string = fs.readFileSync("./imdbBBDD.json")
let myJsonObject = JSON.parse(text)

let movieList:Movies[] = []
for (let i = 0; i < myJsonObject.length; i++) {
    movieList.push(myJsonObject.peliculas[i])
}

let peliculas2 = new Imdb(movieList)
console.log(listaPelis);
console.log(peliculas2);

