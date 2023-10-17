const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('empleado', 'root', '', {
    host: 'localhost', 
    dialect: 'mysql',
    port: 3306
});

// Berific connection to the database
sequelize
    .authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida con exitos');
    })
    .catch((err) => {
        console.error('Error al conectar a la base de datos', err);
    });

module.exports = sequelize;
