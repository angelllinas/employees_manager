const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('empleado', 'admin', 'admin', {
    host: 'localhost', 
    dialect: 'mysql',
    port: 5000
});

module.exports = sequelize;
