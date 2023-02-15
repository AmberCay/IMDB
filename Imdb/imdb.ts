import { Movies } from "../movies/movies";

export class Imdb {

    // set up propiedades

    public peliculas:Movies[];

    // constructor
    
    constructor(peliculas:Movies[]) {
        this.peliculas = peliculas;
    }

    // methods

    public escribirEnFicheroJSON(nombreFichero:string) {
        fs.writeFileSync(`${nombreFichero}.json`, JSON.stringify(this)
    }

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb {
        let text:string = fs.readFileSync(`${nombreFichero}.json`);

        let myJsonObject = JSON.parse(text);
        
        let newIMDB = Object.assign(new Imdb(), myJsonObject)

        return newIMDB
    }
}