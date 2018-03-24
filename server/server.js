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

  socket.on('disconnect', () => {
    console.log('User was disconnected')
  })

});

// change app to server
server.listen(port, () => {
  console.log(`Server is up on port ${port}`);
}); 