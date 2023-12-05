const request = require('supertest');
const app = require('../../src/app');



describe('Pruebas de Integración', () => {
    it('debería obtener un mensaje de la ruta de integración', async () => {
        try {
            const response = await request(app).get('/api/empleados');
            // Verificar el código de estado
            expect(response.statusCode).toBe(200);
            // Verificar el formato de la respuesta
            expect(response.body).toHaveProperty('mensaje', 'Esta es la ruta de integración');
            // Verificar la existencia de la propiedad 'empleados'
            expect(response.body).toHaveProperty('empleados');
        } catch (error) {
            console.error(`Error: ${error}`);
        }
    });
});