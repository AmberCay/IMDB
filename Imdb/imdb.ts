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
        fs.writeFileSync(`${nombreFichero}.json`, this.peliculas)
    }

    public obtenerInstanciaIMDB(nombreFichero:string):Imdb {
        let text:string = fs.readFileSync("./imdbBBDD.json");
        let myJsonObject = JSON.parse(text);

        let movieList:Movies[] = [];
        for (let i = 0; i < myJsonObject.length; i++) {
            movieList.push(myJsonObject.peliculas[i])
        };

        let nuevoImdb:Imdb = new Imdb(movieList)
    }
}