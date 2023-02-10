import { Imdb } from "./Imdb/imdb";
import { Movies } from "./movies/movies";
module "File-system" {}
import * as fs from "./node_modules/file-system"



let ESA = new Movies('El Senyor de los Anillos', 1993, 'EEUU', 'Fantasia');
let AG = new Movies('los AristoGatos', 1992, 'EEUU', 'Animacion');

let listaPelis = new Imdb([ESA, AG])
fs.writeFil