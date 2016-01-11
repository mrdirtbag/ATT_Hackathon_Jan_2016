//Initiate the WebSocket connection through socket.io
var socket = io.connect();
//Assume we're not a stb
// var stb = false;
// //If we are a stb, set the resolution
// if (!!navigator.setResolution) {
//   navigator.setResolution(1920, 1080);
//   stb = true;
// }
//Initate the position and scale of the onscreen image
var viewStatus = {
  code: 0
}

//Startup function
function init() {

  console.log("init called.")
  //Find the image in the DOM
  //If any client updates the position or scale of the image, change our
  //local version, too
  socket.on("headPosition", function(data) {

    console.log("headPosition: called on client: " + data.update.code);

    if(viewStatus.code != data.update.code) {
      viewStatus.code = data.update.code;
    
      codeCalled(viewStatus.code); // infinite loop - fix it.
    }
  });

}

//Update the image location on screen
function updateOtherViews() {

  //Don't shrink too much!
  //Broadcast the head position to all clients
  socket.emit("headMove", viewStatus);

}
