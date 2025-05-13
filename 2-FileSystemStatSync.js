const fs = require('node:fs')

//  read a file
const data = fs.statSync('./README.md');    //es un método sincrónico que obtiene estadísticas de un archivo o directorio.
console.log(
    data.isFile(),        // ¿Es un archivo común?
    data.isDirectory(),   // ¿Es un directorio?
    data.isSymbolicLink(),// ¿Es un enlace simbólico?
    data.size             // Tamaño del archivo en bytes
);
