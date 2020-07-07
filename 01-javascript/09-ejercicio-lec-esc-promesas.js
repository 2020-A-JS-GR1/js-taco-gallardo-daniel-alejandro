const fs = require('fs');

//09-ejercicio-lec-esc-promesas

function promesaDeLectura(path) {
    const miPrimerPromesa = new Promise( // Definicion de la promesa
        (resolve, reject) => {
            fs.readFile( // ASINCRONA
                path,
                'utf-8',
                (error, contenido) => { // CALLBACK (readFile)
                    if (error) {
                        reject("Error de lectura")
                    } else {
                        resolve();
                    }
                }
            );
        }
    );
    return miPrimerPromesa
}

function promesaDeEscritura(path,contenidoActual ,contenidoNuevo) {
    const miPrimerPromesa = new Promise( // Definicion de la promesa
        (resolve, reject) => {
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
    return miPrimerPromesa
}

function ejercicio(path, nuevoContenido){
    promesaDeLectura(path)
        .then(
            (contenido) => {
                return promesaDeEscritura(path,contenido,nuevoContenido);
            }
        )
        .then(() => promesaDeLectura(path))
        .then(
            (contenido) => {
                console.log('Nuevo Contenido', contenido);
            }
        )
        .catch(
            (error) => {
                console.error(error)
            }
        )
}

ejercicio('./09-ejemplo.txt',"Esto es una prueba");
