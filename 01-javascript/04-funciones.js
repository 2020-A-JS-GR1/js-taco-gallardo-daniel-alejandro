// 04-funciones
function soloNumeros(a,b,c){
    return a - b + c;
}
function soloLetras(a,b,c){//undefined
    console.log(a,b,c);
}

soloNumeros('v',true,[1,2,3]);
soloNumeros();
soloNumeros(1,2,3,4,5,6,78,9);
soloLetras();

//funciones Nombradas

function  funcionNombrada() {}
funcionNombrada();

// funciones ANONIMAS
const funcionNombradaDos = function () {};
const funcionNombradaTres = function () {};
const funcionNombradaCuatro = function () {};
funcionNombradaDos();
funcionNombradaTres();
funcionNombradaCuatro();

const funcionNombradaCinco = () => {};
const funcionNombradaSeis = (x) => {
  return x + 1;
};
const funcionNombradaSiete = (x) => x+1;
//una sola linea, omito return, omito llaves,
// omito parentesis, tengo solo un parametrp,
const funcionNombradaOcho = x => x+1;
const funcionNombradaNueve = (x,y,z) => x+y+z;

//PARAMETROS INFINITOS
function sumarNumeros(numeroInicial, // 1
                      ...otrosNumeros) { // Parametros Inf [2,3,4,5,...]
    numeroInicial; // 1
    otrosNumeros; // [2, 3, 4, 5, 6, 7, 8, 9, 10]
    let total = 0;
    otrosNumeros.forEach(
        (valorActual) => {
            total = total + valorActual;
        }
    );
    return numeroInicial + total;
    // return numeroInicial + otrosNumeros.reduce((a, v) => a + v, 0);
}

// sumarNumeros(1,2,3,4,5,6,7,8,9,10);
sumarNumeros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const arreglo = [0, 1, 2];

function sumarArreglo(arregloParametro) {
    const clonArreglo = Object.assign([],arregloParametro);
    clonArreglo[0] = 100;
    return clonArreglo;
}

console.log(sumarArreglo(arreglo));
console.log('arreglo', arreglo);
