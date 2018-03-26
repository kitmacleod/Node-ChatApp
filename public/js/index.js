var socket = io();
// emit email, only once connected
socket.on('connect', function () {
  console.log('Connected to server');
  
  socket.emit('createMessage', {
    from: 'bob',
    text: 'Hey ',
  });

});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});