import { Imdb } from "./Imdb/imdb";
import { Movies } from "./movies/movies";



let ESA = new Movies('El Senyor de los Anillos', 1993, 'EEUU', 'Fantasia');
let AG = new Movies('los AristoGatos', 1992, 'EEUU', 'Animacion');
let peliculas = [ESA,AG];

let collection = new Imdb(peliculas)

collection.escribirEnFicheroJSON("bbddIMDB.json")
collection.obtenerInstanciaIMDB("bbddIMDB.json");
