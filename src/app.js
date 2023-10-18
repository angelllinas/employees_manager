const express = require('express');
const sequelize = require('../config/database'); 
const Empleado = require('./models/empleadoModel');
const app = express();
const port = 3000;

//Middleware
app.use(express.json());

//Routes
const empleadoRoutes = require('./routes/empleado'); // Impor route 'empleado'
app.use('/empleados', empleadoRoutes);


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

app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});
