import { Movies } from "../movies/movies";
let fs = require('fs')

export class Imdb {

    // set up propiedades

    public peliculas:Movies[];

    // constructor
    
    constructor(peliculas:Movies[]) {
        this.peliculas = peliculas;
    }

    // methods

    private printMovies(Imdb) {
        for (let i = 0; i < Imdb.peliculas.length; i++) {
            console.log(Imdb.peliculas[i].printMovies());
        }
    }
    public escribirEnFicheroJSON(nombreFichero:string) {
        let jsObj  = JSON.stringify(this);
        fs.writeFileSync(nombreFichero, jsObj)
        
    }

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb {

        let myJsonObject = JSON.parse(fs.readFileSync(nombreFichero));
        console.log(myJsonObject);
        
        let newIMDB = Object.assign(new Imdb(myJsonObject))
        this.printMovies(newIMDB)
        return newIMDB
    }
}