const fs = require('fs');
const promesaLeerArchivo = (path) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile( // ASINCRONA
                path,
                'utf-8',
                (error, contenido) => { // CALLBACK (readFile)
                    if (error) {
                        reject("Error de lectura")
                    } else {
                        resolve(contenido);
                    }
                }
            );
        }
    );
};
const promesaEscribirArchivo = (path,contenidoActual ,contenidoNuevo) => {
    return new Promise(
        (reject) => {
            fs.writeFile(
                path,
                contenidoActual+ '\n' + contenidoNuevo,
                'utf-8',
                (error) => {
                    if(error){
                        reject('Error leyendo archivo', error);
                    }else{
                        console.log('Operacion terminada con exito')
                    }
                });
        }
    );
};
async function ejercicio(path, contenidoaInsertar){
    try{
        let contenidoArchivoActual = await promesaLeerArchivo(path);
        console.log("Contenido archivo actual",contenidoArchivoActual);
        await promesaEscribirArchivo(path,contenidoArchivoActual,contenidoaInsertar);
        console.log("Nuevo contenido",contenidoArchivoActual);
        contenidoArchivoActual = await promesaLeerArchivo(path);
        return contenidoArchivoActual;
    }
    catch (e) {
        console.error(e)
    }
}
console.log(ejercicio('03-ejemplo.txt',"Esto es una prueba del deber"));
