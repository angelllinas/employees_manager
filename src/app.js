const express = require('express');
const sequelize = require('../config/database'); 
const empleadoRoutes = require('./routes/empleadoRoute'); // Impor route 'empleado'
require('dotenv').config();
const PORT = process.env.PORT || 3001;

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use('/api/empleados', empleadoRoutes);

// Verifica la conexión a la base de datos
sequelize
.authenticate()
    .then(() => {
    console.log('Conexión a la base de datos establecida con éxito');
    // Sincroniza modelos con la base de datos
    return sequelize.sync({ force: false }); // Set 'force' to 'true' for table recreation (use with caution)
    })
    .then(() => {
    console.log('Modelo sincronizado con la base de datos');
    })
    .catch((error) => {
    console.error('Error al conectar o sincronizar con la base de datos', error);
    });

app.listen(PORT, () => {
    console.log(`La aplicación está escuchando en el puerto ${PORT}`);
});

module.exports = app;