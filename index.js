import Server from './src/server/config.js';
import router from './src/routes/index.routes.js';

//crear una instancia de la clase Server
const server = new Server();

//agregar las rutas del proyecto
server.app.use('/api', router);

//invocar al metodo listen
server.listen();