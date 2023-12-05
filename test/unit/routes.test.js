const request = require('supertest');
const app = require('../../src/app'); 

describe('Routes', () => {
    describe('GET /api/empleados', () => {
        it('debería obtener todos los empleados', async () => {
            const response = await request(app).get('/api/empleados');
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    describe('POST /api/empleados', () => {
        it('debería crear un nuevo empleado', async () => {
            const nuevoEmpleado = {
                Nombre: 'Laura',
                Apellidos: 'Torre',
                Documento_de_identidad: '123457777',
                Direccion: '22 wolf St',
                Telefono: '567-222-2349',
                Foto: 'laura_torre.jpg',
            };
            const response = await request(app).post('/api/empleados').send(nuevoEmpleado);
            expect(response.status).toBe(200);
            // Verificar que el empleado se haya creado correctamente
            expect(typeof response.body).toBe('object');
            expect(response.body.Nombre).toBe(nuevoEmpleado.Nombre);
            expect(response.body.Apellidos).toBe(nuevoEmpleado.Apellidos);
            expect(response.body.Documento_de_identidad).toBe(nuevoEmpleado.Documento_de_identidad);
            expect(response.body.Direccion).toBe(nuevoEmpleado.Direccion);
            expect(response.body.Telefono).toBe(nuevoEmpleado.Telefono);
            expect(response.body.Foto).toBe(nuevoEmpleado.Foto);
            expect(typeof response.body).toBe('object');
            
        });
    });

    describe('GET /api/empleados/:id', () => {
        it('debería obtener un empleado por su ID', async () => {
            const empleadoId = 1; //Id del empleado a verificar (debe existir en la base de datos)
            const response = await request(app).get(`/api/empleados/${empleadoId}`);
            expect(response.status).toBe(200);
            expect(typeof response.body).toBe('object');
            expect(response.body).toHaveProperty('Codigo', empleadoId); // Verifica que el ID coincida
            expect(response.body).toHaveProperty('Nombre'); // Verifica que exista la propiedad 'Nombre'
            expect(response.body).toHaveProperty('Apellidos'); // Verifica que exista la propiedad 'Apellidos'
            expect(response.body).toHaveProperty('Documento_de_identidad'); // Verifica que exista la propiedad 'Documento_de_identidad'
            expect(response.body).toHaveProperty('Direccion'); // Verifica que exista la propiedad 'Direccion'
            expect(response.body).toHaveProperty('Telefono'); // Verifica que exista la propiedad 'Telefono'
            expect(response.body).toHaveProperty('Foto'); // Verifica que exista la propiedad 'Foto'
        });
    });

    describe('PUT /api/empleados/:id', () => {
        it('debería actualizar un empleado por su ID', async () => {
            const empleadoId = 1;
            const empleadoActualizado = {
                Nombre: 'Jane',
                Apellidos: 'Doe',
                Documento_de_identidad: '987654321',
                Direccion: '456 Elm St',
                Telefono: '555-123-4567',
                Foto: 'jane_doe.jpg',
            };
            const response = await request(app).put(`/api/empleados/${empleadoId}`).send(empleadoActualizado);
            expect(response.status).toBe(200);
            // Verificar que el empleado se haya actualizado correctamente
            expect(typeof response.body).toBe('object');
            expect(response.body.Codigo).toBe(empleadoId); // Verifica que el ID coincida con el empleado actualizado
            expect(response.body.Nombre).toBe(empleadoActualizado.Nombre); // Verifica que el Nombre se haya actualizado
            expect(response.body.Apellidos).toBe(empleadoActualizado.Apellidos); // Verifica que los Apellidos se hayan actualizado
            expect(response.body.Documento_de_identidad).toBe(empleadoActualizado.Documento_de_identidad); // Verifica que el Documento_de_identidad se haya actualizado
            expect(response.body.Direccion).toBe(empleadoActualizado.Direccion); // Verifica que la Direccion se haya actualizado
            expect(response.body.Telefono).toBe(empleadoActualizado.Telefono); // Verifica que el Telefono se haya actualizado
            expect(response.body.Foto).toBe(empleadoActualizado.Foto); // Verifica que la Foto se haya actualizado
        });
    });

    describe('DELETE /api/empleados/:id', () => {
        it('debería eliminar un empleado por su ID', async () => {
            const empleadoId = 2;
            const response = await request(app).delete(`/api/empleados/${empleadoId}`);
            expect(response.status).toBe(200);
        });
    });
});
