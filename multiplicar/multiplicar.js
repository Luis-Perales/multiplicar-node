// requireds
const fs = require('fs');
const colors = require('colors');

// hay 3 tipos de require
// const fs = require('expres'); paquetes que no son nativos de node
// const fs = require('./fs'); archivos que nosotros mismo escribimos

let listarTabla = (base, limite = 10) => {

    console.log('====================='.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('====================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } X ${ i } = ${ base * i }`);
    }


}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } X ${ i } = ${ base * i }\n`);
        }


        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`);
        });

    });

}

//Exportacion de funciones para poder trabajarlo en otras partes del proyecto
module.exports = {
    crearArchivo,
    listarTabla
}