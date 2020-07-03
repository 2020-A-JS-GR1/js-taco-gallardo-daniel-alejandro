const adrian = {
    nombre: "Adrian"
};
const carolina = {
    nombre: "Carolina",
    apellido: "Eguez"
};


const adrianCarolina = { // Creando una nueva referencia
    ...carolina,
    ...adrian
};
// adrianCarolina.nombre = "Carolina";
console.log('adrianCarolina', adrianCarolina);
console.log('adrian', adrian);

const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [1, 2, 3, 4, 5];
const superArreglo = [
    ...arregloUno,
    ...arregloDos
];
superArreglo[0] = 100;
console.log('superArreglo', superArreglo);
console.log('arregloUno', arregloUno);
