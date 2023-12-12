import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'juanbini',
  database: 'tienda',
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;
  }
  console.log('Conexión exitosa a la base de datos');
});

export default connection;
