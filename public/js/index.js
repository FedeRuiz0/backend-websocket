const socket = io();

// Send a message to the server
socket.emit("message", "Hola desde el cliente!");
