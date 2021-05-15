const Server = require("./models/server");

const server = new Server();

server.execute();


// io.on('connection', (socket) => { 

//     socket.on('mensaje-to-server', (data) => {
//         io.emit('mensaje-from-server', data);
//     });
// });

