export class Movies {

    //set up propiedades
    
    public title:string;
    public releaseYear:number;
    // public actors:Professional[];
    public nacionality:string;
    // public director:Professional;
    // public writer:Professional;
    language:string;
    plataforma:string;
    isMCU:boolean;
    mainCharacterName:string;
    producer:string;
    distributor:string;
    genre:string;

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

    public printMovies():void {
        for (const key in this) {
            console.log(`${key}: ${this[key]}`);
            // No se como funciones con los array's de Professional
        }
    }
}