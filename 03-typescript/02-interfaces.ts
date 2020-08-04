interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number;
    sueldo?: number;
    casado: boolean;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string;
    calcularImpuesto: (impuesto: number) => number;
    estadoActual: () => string;
}

const daniel: Usuario = {
    nombre: 'Daniel',
    apellido: 'Taco',
    casado: false,
    estado: "IN",
    sueldo: 1200,
    imprimirUsuario: (mensaje)=> {
        return "El mensaje es: " + mensaje;
    },
    calcularImpuesto: (impuesto) => {
        return this.sueldo + this.sueldo*impuesto;
    },
    estadoActual: () => {
        switch (this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};

daniel.imprimirUsuario('fgdgfdf');
daniel.calcularImpuesto(12);

let f1 = function () {
    return 'ok'
}
let f2 = () => {
    return 'ok'
}
let objeto = {
    f2: function () {

    },
    f4: () => {

    }
}

let a = [];
a.forEach(
    function () {

    }
)
a.forEach(
    () => {

    }
)
