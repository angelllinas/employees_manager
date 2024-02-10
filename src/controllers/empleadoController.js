const Empleado = require('../models/empleadoModel'); // Import 'Empleado' model

const getAllEmpleados = async (req, res) => {
    console.log('req');
    try {
        const empleados = await Empleado.findAll();
        res.json(empleados);
    } catch (err) {
        console.error('Error al obtener empleados: ', error);
        res.status(500).json({ error: 'Error al obtener empleados', details: error.message });
    }
};

const createEmpleado = async (req, res) => {
    try {
        const nuevoEmpleado = req.body;
        const empleadoCreado = await Empleado.create(nuevoEmpleado);
        res.json(empleadoCreado);
    } catch (error) {
        console.error('Error al crear empleado: ', error);
        res.status(500).json({ error: 'Error al crear empleado', details: error.message });
    }
};

const getEmpleadoById = async (req, res) => {
    try {
        const empleadoId = req.params.id;
        const empleado = await Empleado.findByPk(empleadoId);
        if (!empleado) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }
        res.json(empleado);
    } catch (error) {
        console.error('Error al obtener empleado por ID: ', error);
        res.status(500).json({ error: 'Error al obtener empleado', details: error.message });
    }
};

const updateEmpleadoById = async (req, res) => {
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
};

const deleteEmpleadoById = async (req, res) => {
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
};

module.exports = {
    getAllEmpleados,
    createEmpleado,
    getEmpleadoById,
    updateEmpleadoById,
    deleteEmpleadoById,
};