// Servidor de Express
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

class Server {

    constructor() {

        this.app = express();
        this.port = 3000;

        // Http Server
        this.server = http.createServer(this.app);

        // Configuracion del Socket Server
        this.io = socketio(this.server, { /* */ });

    }

    execute() {
        this.middlewares();

        // Inicializar Server
        this.server.listen(this.port, () => {
            console.log('Server corriendo en puerto ' + this.port);
        });
    }

    middlewares() {
        // Desplegar el directorio publico
        this.app.use( express.static( path.resolve(__dirname, '../public')) );
    }

};

module.exports = Server;