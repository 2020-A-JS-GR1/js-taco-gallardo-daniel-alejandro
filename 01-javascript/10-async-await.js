const promesaLeerArchivo = () => {
    return new Promise(
        (res, rej) => {
            res('Contenido leer archivo');
        }
    );
};
const promesaEscribirArchivo = () => {
    return new Promise(
        (res, rej) => {
            //res('Contenido escribir archivo');
            rej('Error :c');
        }
    );
};
// ASYN AWAIT -> DENTRO DE UNA FUNCION
async function ejercicio(){
    console.log('1');
    try{
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log('3');
        console.log(contenidoArchivoActual);
        await promesaEscribirArchivo();
        console.log('4');
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    }
    catch (e) {
        console.error(e)
    }
    console.log('6');
    console.log('7');
}
const respuestaEjercicio = ejercicio();
//console.log('respuestaEjercicio',respuestaEjercicio);
//console.log('promesaLeerArchivo',promesaLeerArchivo());
//console.log('promesaEscribirArchivo',promesaEscribirArchivo());
