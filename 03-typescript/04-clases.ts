// 04-clases.ts
class Persona {
    public nombre: string;
    public apellido: string
    static nombreReferencial: string = 'Humano';
    protected nombreYApellido: string = ''

    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = this.nombre + ' ' + this.apellido;
    }

    private mostrarNombreApellido(): string {
        return this.nombreYApellido;
    }

}

class Usuario extends Persona {
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string,
        public estadoCivil: string,
    ) {
        super(nombreParametro, apellidoParametro);
    }
}

const adrian = new Usuario(
    'Adriam',
    'Eguez',
    '1718137159',
    'soltero'
);
console.log(adrian.nombre);
console.log(adrian.apellido);
console.log(adrian.cedula);
console.log(adrian.estadoCivil);
console.log(adrian);
