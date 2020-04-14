// // Llamamos al módulo de MySQL e importamos los datos que vamos a usar para la conexión
// const mysql = require('mysql');
// import { mysqlHost, mysqlUser, mysqlPass, mysqlDbName } from './config'

// // Hacemos la variable de la conexión
// var sql = mysql.createConnection({
//     host: mysqlHost,
//     user: mysqlUser,
//     password: mysqlPass,
//     database: mysqlDbName
// });

// // Creamos la conexión, si existe algún error lo lanzamos y si no, hacemos el mensaje de que está conectado correctamente
// sql.connect(err => {
//     if(err) throw err;
// });

// // Esto más adelante hará la exportación de la variable "con" para poder usarla en otros archivos.
// module.exports = sql;