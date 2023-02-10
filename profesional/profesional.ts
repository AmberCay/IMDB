
 export class Professional {
    public name: string
    public age: number
    public weight: number
    public height: number
    public isRetired: boolean
    public nationality: string
    public oscarsNumber: number
    public profession: string

    constructor(nombre: string, anyo: number, peso: number, altura: number, retirado: boolean, nacionalidad: string, numerosOscar: number, profesion: string) {
        this.name = nombre;
        this.age = anyo;
        this.weight = peso;
        this.height = altura;
        this.isRetired = retirado;
        this.nationality = nacionalidad;
        this.oscarsNumber = numerosOscar;
        this.profession = profesion;
    }

    valorTodos() {
        return `Nombre - ${this.name} \n anyo - ${this.age} \n Peso - ${this.weight} \n Altura - ${this.height} \n Retirado - ${this.isRetired} \n Nacionalidad - ${this.nationality} \n NumerosOscar - ${this.oscarsNumber} \n Profesion - ${this.profession}`;
    }
}

