const argv = require('./config/yargs').argv; //Asignamos la constante argv que esta en './config/yargs' a mi constante argv
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.green(`${ archivo }`)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido'.red);
}

// let argv2 = process.argv;

// console.log('limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1]; //separar un string por el =
//console.log(base);

/*
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(err => console.log(err));
*/
// node app --base=5