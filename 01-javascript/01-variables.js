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
    mascotas: ['gato','perro','conejo'],
}
//object
//Acceder  a las propiedades de un objeto
daniel.nombre; //"Adrian"
daniel.apellido; //"Taco"
daniel["nombre"]; //"Adrian"
console.log(daniel);
daniel.nombre = "Vicente";
console.log(daniel);
daniel["nombre"] = "Daniel";
console.log(daniel.sueldo);

daniel.sueldo = 1.2;
console.log("El sueldo es "+ daniel.sueldo);
daniel['gastos'] = 0.8;
console.log(daniel.gastos);
daniel.nombre = undefined;
console.log(daniel);
delete daniel.nombre;
console.log(daniel);

//keys
console.log(Object.keys(daniel));
//values
console.log(Object.values(daniel));


//Lista de variables por valor JS
//number
//string
//boolean
//undefined
let edadDaniel = 23;
let edadAlejandro = edadDaniel;
console.log(edadDaniel);
console.log(edadAlejandro);
edadDaniel = edadDaniel + 1;
console.log(edadDaniel);
console.log(edadAlejandro);

//Lista de variables por REFERENCIA en JS
let rafael ={
    nombre:"Rafael",
};
let lenin = Object.assign( {},rafael );
console.log(rafael);
console.log(lenin);
lenin.nombre = 'Lenin';
delete rafael.nombre;
console.log(rafael);
console.log(lenin);






// const arregloNumeros = [];//object
// console.log(daniel);
// console.log(arregloNumeros);
