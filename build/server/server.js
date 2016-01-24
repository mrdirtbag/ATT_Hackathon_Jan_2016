var express 		= require('express'),
	app 			= express(),
	http			= require('http').Server(app),
	io				= require('socket.io')(http),
	port			= process.env.PORT || 8080


//Include static HTML in the 'public' directory
app.use(express.static(__dirname + '/public'));


//Add jquery for simplicity
app.use(express.static( 'node_modules/jquery/dist/'));

http.listen(port)

console.log("http server listening on %d", port)

//checking for socket io connection
// functionality in video.js file
io.on('connection', function(socket){
	console.log('user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});


