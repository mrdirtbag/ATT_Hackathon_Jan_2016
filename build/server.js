//Add express for simplified http server
var express = require('express');
//Let socket.io handle WebSockets
var sio = require('socket.io');
//Initiate http server
var app = express();


//Include static HTML in the 'public' directory
app.use(express.static( 'public'));

//Add hamerjs for touch events on phones
//app.use(express.static( 'node_modules/hammerjs/'));

//Add jquery for simplicity
app.use(express.static( 'node_modules/jquery/dist/'));


//Start the http server on port 8080 
var server = app.listen(8080);
server.listen(8080, function() {
    console.log('Server listening at http://localhost:8080/');
});


// Attach the socket.io server to the http server
var io = sio.listen(server);

// Define a message handler
io.on('connection', function(socket) {
    //If any clients move the image through touch or keypress, broadcast the
    //updated position
    socket.on('headMove', function(data) {
        socket.broadcast.emit('headPosition', {
            "update": data
        });
    });
});


