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

  // socket.emit from Admin text Welcome to chat app
  // socket.broadcast.emit from Admin text New user joined
    socket.emit('newMessage', {
      from: 'Admin',
      text: 'Welcome to the chat app',
      createdAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
      from: 'Admin',
      text: 'New user joined',
      createdAt: new Date().getTime()
    });
  // original emit callls, replaced by io.emit
  // socket.emit('newMessage', {
  //   from: 'mike',
  //   text: 'hey',
  //   createAt: 12345
  // });

  // custom event listener
  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    // io.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

// change app to server
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
}); 