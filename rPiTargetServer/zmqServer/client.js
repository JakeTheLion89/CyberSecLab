var zmq = require('zmq');
var requester = zmq.socket('req');

var keepGoing = true;
var messageToSend = {
    message1 : "This is coming from the client",
    message2 : "See if you can tamper this"
};

console.log("This script is running");

requester.connect('tcp://localhost:9000');

requester.on('message',function(msg){
    var parsedMessage = JSON.parse(msg);
    console.log(parsedMessage);
});

console.log('sending\n', messageToSend);
requester.send(JSON.stringify(messageToSend));
