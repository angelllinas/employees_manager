const express = require('express');

const app = express();
const port = 3000;

//Routes
const empleadoRoutes = require('./routes/empleado'); // Impor route 'empleado'
app.use('/empleados', empleadoRoutes);

app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});
