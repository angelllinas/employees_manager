const sequelize = require('../config/database');
const Empleado = require('../src/models/empleadoModel');

describe('Modelo de Empleado', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true }); // Recreate the database before each test
    });

    it('Debería crear un Empleado correctamente (Empleado#1)', async () => {
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

    it('Debería crear un Empleado correctamente (Empleado#2)', async () => {
        const response = await Empleado.create({
        Nombre: 'Artur',
        Apellidos: 'Paster',
        Documento_de_identidad: '113556769',
        Direccion: '22 Srt St',
        Telefono: '222-222-2222',
        Foto: 'artur_paster.jpg',
        });

    expect(response).toBeDefined();
    expect(response.Codigo).toBeDefined();
    expect(response.Nombre).toBe('Artur');
    expect(response.Apellidos).toBe('Paster');
    expect(response.Documento_de_identidad).toBe('113556769');
    expect(response.Direccion).toBe('22 Srt St');
    expect(response.Telefono).toBe('222-222-2222');
    expect(response.Foto).toBe('artur_paster.jpg');
    });

    it('Debería fallar al crear un Empleado con datos faltantes', async () => {
        try {
            await Empleado.create({
                Nombre: 'Ana',
                Apellidos: 'Ramos',
                Direccion: '211 west St',
            });
                
            fail('La creación de Empleado debería fallar');
        } catch (error) {
            expect(error.name).toBe('SequelizeValidationError');
            expect(error.message).toContain('Empleado.Documento_de_identidad cannot be null');
            expect(error.message).toContain('Empleado.Telefono cannot be null');
            expect(error.message).toContain('Empleado.Foto cannot be null');
        }
    });
});