import { Movies } from "../movies/movies";

class Imdb {

    // set up propiedades

    public peliculas:Movies[];

    // constructor
    
    constructor(peliculas:Movies[]) {
        this.peliculas = peliculas;
    }
}