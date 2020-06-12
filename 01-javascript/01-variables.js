//Mutables e Inmutables

//Variables Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

//Variables Inmutables
const configuracionArchivos = 'PDF';
//configuracionArchivos = 'XML'

// Tipos de variables
const numero = 1; //number
const sueldo = 1.2; //number
const texto = 'Adrian'; //string
const booleano = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);

const apellido = 'Taco';
console.log(typeof apellido);

//TRUTH'ies AND FALS'ies
if(true == true){
    console.log('Es verdadero');
}else{
    console.log('Es falso');
}

if(""){
    console.log('Es verdadero');
}else{
    console.log('Es falso');
}


if("Daniel"){
    console.log('Es verdadero');
}else{
    console.log('Es falso');
}


if(-1){
    console.log('Es verdadero');
}else{
    console.log('Es falso');
}


if(0){
    console.log('Es verdadero');
}else{
    console.log('Es falso');
}


if(1){
    console.log('Es verdadero');
}else{
    console.log('Es falso');
}

if(null){
    console.log('Es verdadero');
}else{
    console.log('Es falso');
}


if(undefined){
    console.log('Es verdadero');
}else{
    console.log('Es falso');
}

//Orden de IMPORTANCIA
// 1) const
// 2) let
// 3) var -> jamas vamos a utilizar

//Objetos Js (JSON) - Arreglos

const daniel = {
    nombre: 'Daniel',
    apellido: 'Taco',
    edad: 23,
    hijos: null,
    zapatos: undefined,
    ropa:{
        color:'negro',
        talla: '40',
    },
    mascotas: ['gato','perro','conejo']
}//object
daniel.nombre;
daniel.apellido;

const arregloNumeros = [];//object
console.log(daniel);
console.log(arregloNumeros);
