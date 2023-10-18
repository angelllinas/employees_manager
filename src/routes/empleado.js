const express = require('express');
const Empleado = require('../models/empleadoModel'); // Import 'Empleado' model 
const router = express.Router();

// Route to get all 'empleados' 
router.get('/', async (req, res) => {
    console.log("req")
    try {
        const empleados = await Empleado.findAll(); // View all 'empleados' records
        res.json(empleados);
    } catch (error) {
        console.error('Error al obtener empleados: ', error);
        res.status(500).json({ error: 'Error al obtener empleados', details: error.message });
    }
});

// Route to create a new 'empleado'
router.post('/', async (req, res) => {
    try {
        const nuevoEmpleado = req.body; // Get 'empleado' data from the application
        // Create a new 'empleado' record in the database
        const empleadoCreado = await Empleado.create(nuevoEmpleado);
        res.json(empleadoCreado);
    } catch (error) {
        console.error('Error al crear empleado: ', error);
        res.status(500).json({ error: 'Error al crear empleado', details: error.message });
    }
});

// Route to get an 'empleado' by his ID
router.get('/:id', async (req, res) => {
    try {
        const empleadoId = req.params.id;
        const empleado = await Empleado.findByPk(empleadoId); // Search 'empleado' for ID
        if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }
        res.json(empleado);
    } catch (error) {
        console.error('Error al obtener empleado por ID: ', error);
        res.status(500).json({ error: 'Error al obtener empleado', details: error.message  });
    }
});

// Route to update an 'empleado' by their ID
router.put('/:id', async (req, res) => {
    try {
        const empleadoId = req.params.id;
        const empleadoActualizado = req.body; // Get the new 'empleado' data from the request
        const empleado = await Empleado.findByPk(empleadoId);
        if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }
        // Update the 'empleado' fields with the new data
        await empleado.update(empleadoActualizado);
        res.json(empleado);
    } catch (error) {
        console.error('Error al actualizar empleado: ', error);
        res.status(500).json({ error: 'Error al actualizar empleado', details: error.message });
    }
});

// Route to delete an 'empleado' by their ID
router.delete('/:id', async (req, res) => {
    try {
        const empleadoId = req.params.id;
        // Search 'empleado' for ID
        const empleado = await Empleado.findByPk(empleadoId);
        if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado', details: error.message });
        }
        // Delete the 'empleado' from the database
        await empleado.destroy();
        res.json({ message: 'Empleado eliminado con éxito' });
    } catch (error) {
        console.error('Error al eliminar empleado: ', error);
        res.status(500).json({ error: 'Error al eliminar empleado', details: error.message });
    }
});
module.exports = router;
