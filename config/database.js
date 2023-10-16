const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('empleado', 'root', '', {
    host: 'mysql', 
    dialect: 'mysql',
});



module.exports = sequelize;
