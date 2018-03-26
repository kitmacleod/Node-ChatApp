const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
//const hbs = require('hbs');

const publicPath = path.join(__dirname, '../public');
// Heroku 
const port = process.env.PORT || 3000; 
var app = express();
// use this than app
var server = http.createServer(app);
// can do anything from here
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', {
    from: 'mike',
    text: 'hey',
    createAt: 12345
  });

  // custom event listener
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

// change app to server
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
}); 