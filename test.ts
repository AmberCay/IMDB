import { Imdb } from "./Imdb/imdb";
import { Movies } from "./movies/movies";
import * as fs from './node_modules';
import * as path from 'path';


let ESA = new Movies('El Senyor de los Anillos', 1993, 'EEUU', 'Fantasia');
let AG = new Movies('los AristoGatos', 1992, 'EEUU', 'Animacion');
let peliculas = [ESA,AG];

let collection = new Imdb(peliculas)

collection.obtenerInstanciaIMDB("bbddIMDB.json")
