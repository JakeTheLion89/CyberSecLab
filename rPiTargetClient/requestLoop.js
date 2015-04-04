var requestify = require("requestify");

// create a loop that just sends out HTTP POST requests to the server.
// there must be an attribute in the body object of the request called "status"
// if status == true, the server is not attacked
// if status != true, the server is attacked

// attack by tampering with the packet

var targetUrl = "http://localhost:9800/postRequests";

var formData = {
    status : true,
    message : "See if you can change the status by tampering with the packet"
};

var keepGoing = true;

console.log("This is running!!!")

requestLoop = function(url){
    requestify.post(url,formData)
    .then(function(res){
        console.log("sent request",res);
        setTimeout(function(){
            requestLoop(url); // <--recursive loop
            },5000);
    });
}

requestLoop(targetUrl);
