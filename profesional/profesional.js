"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(nombre, anyo, peso, altura, retirado, nacionalidad, numerosOscar, profesion) {
        this.name = nombre;
        this.age = anyo;
        this.weight = peso;
        this.height = altura;
        this.isRetired = retirado;
        this.nationality = nacionalidad;
        this.oscarsNumber = numerosOscar;
        this.profession = profesion;
    }
    Professional.prototype.valorTodos = function () {
        return "Nombre - ".concat(this.name, " \n anyo - ").concat(this.age, " \n Peso - ").concat(this.weight, " \n Altura - ").concat(this.height, " \n Retirado - ").concat(this.isRetired, " \n Nacionalidad - ").concat(this.nationality, " \n NumerosOscar - ").concat(this.oscarsNumber, " \n Profesion - ").concat(this.profession);
    };
    return Professional;
}());
exports.Professional = Professional;
