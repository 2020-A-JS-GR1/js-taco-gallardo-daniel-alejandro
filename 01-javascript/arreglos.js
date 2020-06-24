const arreglo = [6, 7, 8, 9, 10];
// arreglo = 1;
/*
let cualquierCosa = "ASD";
cualquierCosa = 1;
cualquierCosa = true;
cualquierCosa = undefined;
cualquierCosa = null;
cualquierCosa = {};
cualquierCosa = [];
console.log(cualquierCosa);
*/
const arregloTodo = [
    true, 1, 1.2, "Adrian", undefined, null, {}, [1, 2, true, "A"]
];
let a = [1, 2, 3];
const b = Object.assign([], a);

// for of
for (let numero of arreglo) { // VALORES
    console.log('numero', numero);
}
// for in
for (let indice in arreglo) { // INDICES
    arreglo[indice];
    console.log('indice', indice);
}

// const arreglo =  [6, 7, 8, 9, 10];

arreglo.push(11); // Anadir al final un elemento
// [6, 7, 8, 9, 10, 11];
arreglo.pop(); // Eliminar al final un elemento
// [6, 7, 8, 9, 10];
// arreglo.unshift(5); //  Anadir al principio del arreglo
arreglo.unshift(5); //  Anadir al principio del arreglo

// arreglo.splice(0,1);
arreglo.splice(0, 1);
// arreglo.splice(0,0,3,4,5);
arreglo.splice(0, 0, 3, 4, 5);

const indice = arreglo.indexOf(9); // VALOR -> POSICION (Indice) : -1
console.log('indice', indice); // 6
arreglo.splice(indice,1);


// arreglo.findIndex();
