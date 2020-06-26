const arreglo = [
    {
        id:1,
        nombre: 'Roger',
        nota: 5
    },
    {
        id:2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id:3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id:4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id:5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id:6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id:7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id:8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id:9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id:10,
        nombre: 'Ramiro',
        nota: 12
    }
];

const vocales= ['a','e','i','o','u'];

const listaEstudiantes = arreglo
    .map(valor => {
        const estudiante = {
            id: valor.id,
            nombre: valor.nombre,
            nota: valor.nota,
        };
        valor.nombre.split("").forEach(value =>{
            vocales.includes(value)
                ? estudiante.nota += 0.1
                : estudiante.nota +=0.05;
        }
        );
        return estudiante;
    }).filter(value => value.nota > 10);

console.log(listaEstudiantes);
