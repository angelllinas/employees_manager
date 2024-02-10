const { setup: setupDevServer } = require('jest-dev-server');

module.exports = async () => {
    await setupDevServer({
    command: 'node src/app.js',
    port: 3001,
    });

    await teardownDevServer();
};