var _this = this;
var daniel = {
    nombre: 'Daniel',
    apellido: 'Taco',
    casado: false,
    estado: "IN",
    sueldo: 1200,
    imprimirUsuario: function (mensaje) {
        return "El mensaje es: " + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return _this.sueldo + _this.sueldo * impuesto;
    },
    estadoActual: function () {
        switch (_this.estado) {
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
var f1 = function () {
    return 'ok';
};
var f2 = function () {
    return 'ok';
};
var objeto = {
    f2: function () {
    },
    f4: function () {
    }
};
var a = [];
a.forEach(function () {
});
a.forEach(function () {
});
