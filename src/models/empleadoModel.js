const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Empleado = sequelize.define('Empleado', {
    Codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    Nombre: {
        type: DataTypes.STRING,
    },
    Apellidos: {
        type: DataTypes.STRING,
    },
    Documento_de_identidad: {
        type: DataTypes.STRING,
    },
    Direccion: {
        type: DataTypes.STRING,
    },
    Telefono: {
        type: DataTypes.STRING,
    },
    Foto: {
        type: DataTypes.TEXT,
    },
});

module.exports = Empleado;
