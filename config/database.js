const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('empleado', 'root', 12345, {
    host: '192.168.3.3', 
    dialect: 'mysql',
    port: 8000
});



module.exports = sequelize;
