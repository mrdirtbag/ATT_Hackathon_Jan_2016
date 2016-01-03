# Video javascript

window.onerror = function(errorMsg, url, lineNumber){
     console.log(errorMsg);
     return true;
   };

// setResolution call has to be made in the head section!
if(!!navigator.setResolution)
	navigator.setResolution(1280,720);
