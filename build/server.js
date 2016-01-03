//Add express for simplified http server
var express = require('express');
//Initiate http server
var app = express();


//Include static HTML in the 'html' directory
app.use(express.static('public'));

//Start the http server on port 8080 
var server = app.listen(8080);
server.listen(8080, function() {
    console.log('Server listening at http://localhost:8080/');
});
