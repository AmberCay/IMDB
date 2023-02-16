import { Professional } from "../profesional/profesional";

export class Movies {

    //set up propiedades
    
    public title:string;
    public releaseYear:number;
    public actors:Professional[];
    public nacionality:string;
    public director:Professional;
    public writer:Professional;
    public language:string;
    public plataforma:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;

    // constructor

    constructor(title:string,
                releaseYear:number,
                nacionality:string,
                genre:string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nacionality = nacionality;
        this.genre = genre;
    }

    private getActors():string {
        let actores:string[] = [];
        for (const actor of this.actors) {
            actores.push(actor.name)
        }
        return actores.join(' ')
    }

    public printMovies():string {
        return `Titulo: ${this.title}\n
                Anyo de estreno: ${this.releaseYear}\n
                actores: ${this.getActors()}\n
                Nacionalidad: ${this.nacionality}\n
                Director: ${this.director}\n
                Escritor: ${this.writer}\n
                Lengua: ${this.language}\n
                Plataforma ${this.plataforma}\n
                Esta en el Universo Cinematico de Marvel?: ${this.isMCU}\n
                Quien es el protagonista?: ${this.mainCharacterName}\n
                Productor: ${this.producer}\n
                Distribuidor: ${this.distributor}\n
                Genero: ${this.genre}\n`
    }
}