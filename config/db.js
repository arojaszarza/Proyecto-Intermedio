//Requerimos la funcionalidad de la libreria mysql
var mysql      = require('mysql');
//Configurar la conexión con nuestra base de datos
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database: "shop",
});
 //Conectar con la base de datos
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log("Conexión correcta");
});
module.exports = connection;