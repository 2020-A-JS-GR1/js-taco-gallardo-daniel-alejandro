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

