const express = require('express'); 
const router = express.Router();
const empleadoController = require('../controllers/empleadoController');

// Route to get all 'empleados' 
router.get('/', empleadoController.getAllEmpleados);

// Route to create a new 'empleado'
router.post('/', empleadoController.createEmpleado);

// Route to get an 'empleado' by his ID
router.get('/:id', empleadoController.getEmpleadoById);

// Route to update an 'empleado' by their ID
router.put('/:id', empleadoController.updateEmpleadoById);

// Route to delete an 'empleado' by their ID
router.delete('/:id', empleadoController.deleteEmpleadoById);

module.exports = router;
