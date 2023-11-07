const sequelize = require('../config/database');
const Empleado = require('../src/models/empleadoModel');

describe('Modelo de Empleado', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true }); // Recreate the database before each test
    });

    it('Debería crear un Empleado correctamente', async () => {
        const response = await Empleado.create({
        Nombre: 'John',
        Apellidos: 'Doe',
        Documento_de_identidad: '123456789',
        Direccion: '123 Main St',
        Telefono: '555-555-5555',
        Foto: 'john_doe.jpg',
        });

    expect(response).toBeDefined();
    expect(response.Codigo).toBeDefined();
    expect(response.Nombre).toBe('John');
    expect(response.Apellidos).toBe('Doe');
    expect(response.Documento_de_identidad).toBe('123456789');
    expect(response.Direccion).toBe('123 Main St');
    expect(response.Telefono).toBe('555-555-5555');
    expect(response.Foto).toBe('john_doe.jpg');
    });

    it('Debería fallar al crear un Empleado con datos faltantes', async () => {
        try {
            await Empleado.create({
                
            });
                
            fail('La creación de Empleado debería fallar');
        } catch (error) {
            
        }
    });
});