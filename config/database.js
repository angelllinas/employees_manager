const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('empleado', 'root', '', {
    host: 'mysql', 
    dialect: 'mysql',
    port: 3306
});



module.exports = sequelize;
