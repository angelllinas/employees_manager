const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database'); 

const Empleado = sequelize.define('Empleado', {
    Codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Documento_de_identidad: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Foto: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    }, {
        timestamps: false,
});

sequelize.sync()
    .then(() => {
        console.log('Modelo Empleado sincronizado con la base de datos');
    })
    .catch((err) => {
        console.error('Error al sincronizar el modelo Empleado', err);
    });

module.exports = Empleado;
