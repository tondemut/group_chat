var express = require('express');
var socket = require('socket.io');


// App Setup
var app = express();
var server = app.listen(5000, function(){
    console.log('listening to requests');
});

// Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data)
    });
});
 
