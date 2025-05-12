// @ts-check

const ab = require("node:os");

console.log("Informacion del sistema operativo: ");

console.log("-----------------------------------");

console.log("Nombre del SO: ", ab.platform());
console.log("Version del SO: ", ab.release());
console.log("Arquitectura SO: ", ab.arch());
console.log(
  "Memoria libre: ",
  (ab.freemem() / 1024 / 1024 / 1024).toFixed(2),
  " Gb Ram"
);
console.log(
  "Memoria total: ",
  (ab.totalmem() / 1024 / 1024 / 1024).toFixed(2),
  "Gb Ram"
);
console.log("Total cpus : ", ab.cpus().length);
console.log("tiempo activo: ", (ab.uptime() / 3600).toFixed(2), " horas");
