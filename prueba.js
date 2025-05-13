
const fs = require("node:fs");

const path = "./README.md";

try {
  if (fs.existsSync(path)) {
    const data = fs.statSync(path);
    if(data.isFile()){
        const content = fs.readFileSync(path,'utf-8');
        console.log('El contenido del archivo es:\n', content);
    } else{
        console.log('No es un archivo');
    }
  } else{
    console.error('El archivo no existe');
  }
} catch (error) {
    console.error('Ocurrio un error ', error.message);
}
