export class Pais {
    id: number;
    nombre: string;
    idioma: string;
    capital: number;
    año_conformacion: number;

    constructor(id: number, nombre: string, idioma: string, capital: number, año_conformacion: number) {
        this.id = id;
        this.nombre = nombre;
        this.idioma = idioma;
        this.capital = capital;
        this.año_conformacion = año_conformacion;
    }
}
