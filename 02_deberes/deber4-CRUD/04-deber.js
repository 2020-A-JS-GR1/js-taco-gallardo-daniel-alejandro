const fs = require('fs');
const inquirer = require('inquirer');


async function main (){
    try{
        console.log('______________________________');
        console.log('Museo del Louvre - PINTURAS');
        console.log('______________________________');
        console.log('1. Agregar pintura');
        console.log('______________________________');
        console.log('2. Buscar pintura');
        console.log('______________________________');
        console.log('3. Actualizar pintura');
        console.log('______________________________');
        console.log('4. Eliminar pintura');
        console.log('______________________________');
        console.log('5. Listar pintura');
        console.log('______________________________');
        console.log('6. Salir');
        console.log('______________________________');
        console.log('');
        const option = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'op',
                    message: 'Ingrese la opción deseada: '
                }
            ]);
        await crud_menu(option);
        if(option.op !== 6){
            main();
        }
    }catch (e) {
        console.log(e);
    }
}

async function crud_menu(opcion){
    let pinturaslist = undefined;
    let pintObject = undefined;
    switch (opcion.op) {
        case 1:
            const pintura = await insertar_inquirer();
            let jsonObject = JSON.stringify(pintura);
            await agregar_pintura('pinturas.txt', jsonObject);
            break;
        case 2:
            pinturaslist = await ReadFile('pinturas.txt');
            pintObject = await JSON.parse(pinturaslist);
            const pintBusc = await buscar_inquirer();
            await search(pintObject, pintBusc);
            break;
        case 3:
            pinturaslist = await ReadFile('pinturas.txt');
            pintObject = await JSON.parse(pinturaslist);
            const pintAct = await actualizar_inquirer();
            await update(pintObject, pintAct);
            break;
        case 4:
            await eliminarPintura();
            break;
        case 5:
            await listar_pintura('pinturas.txt');
            break;
        case 6:
            break;
        default:
            return opcion;
    }

}

async function insertar_inquirer() {
    try{
        return  pintura = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'codigo',
                    message: 'Ingrese el codigo unico de la pintura: '
                },
                {
                    type: 'number',
                    name: 'codigoArtista',
                    message: 'Lista de autores registrados en la base de datos: \n ' +
                        '1. Pablo Picasso \n' +
                        '2. Vincent Van Gogh \n' +
                        '3. Leonardo da Vinci \n' +
                        '4. Miguel Angel \n' +
                        'Seleccione el autor de la pintura: '
                },
                {
                    type: 'text',
                    name: 'nombre',
                    message: 'Ingrese el nombre de la pintura: '
                },
                {
                    type: 'number',
                    name: 'precio',
                    message: 'Ingrese el precio de la pintura: '
                },
                {
                    type: 'confirm',
                    name: 'restaurado',
                    message: 'La pintura ha sido restaurada?'
                }
        ]);
    }
    catch (e) {
        console.log(e);
    }
};

async function eliminar_inquirer () {
    try{
        return opcion = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'codigo',
                    message: 'Ingrese el codigo de la pintura a eliminar: '
                }
            ]);
    }catch (e) {
        console.error(e);
    }
}
async function buscar_inquirer() {
    try{
        return opcion = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'codigo',
                    message: 'Ingrese el codigo de la pintura a buscar: '
                }
            ]);
    }catch (e) {
        console.error(e);
    }
}

async function actualizar_inquirer() {
    try{
        return opcion = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'codigo',
                    message: 'Ingrese el codigo a actualizar: '
                }
            ]);
    }catch (e) {
        console.error(e);
    }
}

async function inquirer_actualizarNombre() {
    try{
        return  atributo = await inquirer
            .prompt([
                {
                    type: 'text',
                    name: 'nombre',
                    message: 'Ingrese el nombre de la pintura: '
                }
            ]);
    }
    catch (e) {
        console.log(e);
    }
};

async function inquirer_actualizarPrecio() {
    try{
        return  atributo = await inquirer
            .prompt([
                {
                    type: 'number',
                    name: 'precio',
                    message: 'Ingrese el precio de la pintura:'
                }
            ]);
    }
    catch (e) {
        console.log(e);
    }
};

async function inquirer_actualizarEstadoRestauracion() {
    try{
        return  atributo = await inquirer
            .prompt([
                {
                    type: 'confirm',
                    name: 'restaurado',
                    message: 'La pintura ha sido restaurada?'
                }
            ]);
    }
    catch (e) {
        console.log(e);
    }
};


async function agregar_pintura(path, nuevoContenido) {
    try {
        const contenidoArchivoActual = await ReadFile(path);
        await WriteFile(path, contenidoArchivoActual, nuevoContenido);
    }catch (e) {
        console.log(e);
    }

}

async function listar_pintura(path) {
    try {
        const contenidoArchivoActual = await ReadFile(path);
        console.table(JSON.parse(contenidoArchivoActual));
    }catch (e) {
        console.log(e);
    }

}



async function eliminarPintura() {
    const picRead = await ReadFile('pinturas.txt');
    const inquirer = await eliminar_inquirer();
    const instObject = await JSON.parse(picRead);
    const valorOb = inquirer.codigo;

    const respuestaMapNuevo = instObject.map(
        (valorActual,indiceActual,arregloCompleto) =>{
            if(valorActual.codigo === valorOb){
                arregloCompleto.splice(indiceActual, 1);
                let jsonData = JSON.stringify(arregloCompleto);
                WriteFileTotal('pinturas.txt',jsonData);
            }
        });
};


async function search(arreglo, index) {
    const indice = index.codigo;
    const resp = arreglo.find(
        (v)=>{
            return v.codigo === indice;
        });
    if (resp!==undefined){
        console.log(resp);
    }else{
        console.log("No hay ningun registro que corresponda a ese codigo de pintura ");
    }
};


async function update(arreglo, index) {
    const indice = index.codigo;
    const resp = arreglo.find(
        (v)=>{
            return v.codigo === indice;
        });

    if (resp!==undefined){
        console.log("Pintura a ser actualizada: ",resp);
        try{
            const opcionEditar = await inquirer
                .prompt([
                    {
                        type: 'number',
                        name: 'opciones',
                        message: 'Lista de atributos que pueden ser actualizados: \n' +
                            '1. Nombre \n' +
                            '2. Precio \n' +
                            '3. Restaurada \n' +
                            'Seleccione el atributo de la pintura que desea actualizar: '
                    }
                ]);
            await opcionesActualizar(opcionEditar, indice, arreglo);
        }catch (e) {
            console.log(e);
        }

    }else{
        console.log("No hay ningun registro que corresponda a ese codigo de pintura ");
    }
};

async function opcionesActualizar(opcion, codigoActualizar, arreglo){
    switch (opcion.opciones) {
        case 1:
            const nombre = await inquirer_actualizarNombre();
             arreglo.map(
                (v, i, a) => {
                    if(v.codigo === codigoActualizar){
                        v.nombre = nombre.nombre;
                        console.log(a);
                        let jsonData = JSON.stringify(a);
                        WriteFileTotal('pinturas.txt',jsonData);
                    }
                }
            );
            break;
        case 2:
            const precio = await inquirer_actualizarPrecio();
             arreglo.map(
                (v, i, a) => {
                    if(v.codigo === codigoActualizar){
                        v.precio = precio.precio;
                        console.log(a);
                        let jsonData = JSON.stringify(a);
                        WriteFileTotal('pinturas.txt',jsonData);
                    }
                }
            );
            break;
        case 3:
            const restaurada = await inquirer_actualizarEstadoRestauracion();
             arreglo.map(
                (v, i, a) => {
                    if(v.codigo === codigoActualizar){
                        v.restaurado = restaurada.restaurado;
                        console.log(a);
                        let jsonData = JSON.stringify(a);
                        WriteFileTotal('pinturas.txt',jsonData);
                    }
                }
            );
            break;
        default:
            return  opcion;

    }
}


const ReadFile = (path) =>{
    return new Promise(
        (res, rej)=>{
            fs.readFile(
                path,
                'utf-8',
                (error, contenido)=>{
                    if(error){
                        console.log('Hubo error');
                        rej(error);
                    }else{
                        res(contenido);
                    }
                }
            )
        }
    );
};

const WriteFile = (path, contenidoActual, contenidoNuevo ) =>{
    return new Promise(
        (res, rej)=>{
            if(contenidoActual===""){
                fs.writeFile(path,"["+contenidoNuevo+']',"utf-8",
                    (error)=>{
                        if (error) {
                            console.log('Hubo error');
                            rej(error);
                        }else{
                            res(contenidoNuevo);
                            console.log('Operación realizada con exito');
                        }
                    }
                )
            }else{
                fs.writeFile(path,contenidoActual.replace("]","")+",\n"+contenidoNuevo+']',"utf-8",
                    (error)=>{
                        if (error) {
                            console.log('Hubo error');
                            rej(error);
                        }else{
                            res(contenidoNuevo);
                            console.log('Operación realizada con exito');
                        }
                    }
                )
            }

        }
    );
};

const WriteFileTotal = (path, contenidoNuevo) =>{
    return new Promise(
        (res, rej)=>{
            fs.writeFile(path,contenidoNuevo+'\n',{
                    encoding: "utf-8",
                    flag: "w"
                },
                (error)=>{
                    if (error) {
                        console.log('Hubo error');
                        rej(error);
                    }else{
                        res(contenidoNuevo);
                        console.log('Operación realizada con exito');
                    }
                }
            )
        }
    );
}


main();
