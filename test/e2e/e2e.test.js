const request = require('supertest');
const { Sequelize } = require('sequelize');
const app = require('../../src/app.js');
const  Empleado  = require('../../src/models/empleadoModel.js'); 

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'admin',
    password: 'admin',
    database: 'empleado',
    port: 5000
});

beforeAll(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente');
    } catch (err) {
        console.error(`Error durante la autenticación: ${err.message}`);
    };
});

afterAll(async () => {
    await sequelize.close();
});

describe('Pruebas de extremo a extremo para la API', () => {
    it('Debería obtener datos de la API y verificar en la base de datos', async () => {
        const response = await request(app).get('/api/empleados'); //Request to API
        const empleados = await Empleado.findAll();
        const apiData = response.body;
        const dbData = empleados.map(empleado => empleado.toJSON());

        expect(response.status).toBe(200);
        
        expect(apiData).toEqual(dbData);
        //Verificar si coisiden los datos de la API y la base de datos
        if (apiData.length === dbData.length && apiData.every((item, index) => JSON.stringify(dbData[index]))) {
            console.log('Los daros de la API coinsiden con los datos de la base de datos');
        } else {
            console.log('Los datos de la API son diferentes a los de la base de datos');
        }
        // Muestra los datos 
        console.log('Datos de la API ', response.body);
        console.log('Datos de la base de datos' ,empleados.map(empleado => empleado.toJSON()));
    });
});
