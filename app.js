var express 		= require('express'),
	app 			= express(),
	http			= require('http').Server(app),
	io				= require('socket.io')(http),
	port			= process.env.PORT || 8080,
	bodyParser 		= require('body-parser');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


//Include static HTML in the 'public' directory
app.use(express.static(__dirname + '/build/public'));
app.set('views', __dirname + '/build/public/views');

//Add jquery for simplicity
app.use(express.static( 'node_modules/jquery/dist/'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//////////////// START SERVER //////////////////////

require('./build/server/routes.js')(app);

http.listen(port);

console.log("http server listening on %d", port);


//checking for socket io connection
// functionality in video.js file
io.on('connection', function(socket){
	console.log('user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
});