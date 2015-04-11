var zmq = require('zmq');
var responder = zmq.socket('rep');

console.log("this script is running");

var resMessage = {
    message : "Message received by server",
    message2 : "See if you can tamper this packet!"
};

responder.bind('tcp://*:9000',function(err){
    if(err)
        console.log('server failed', err)
    else
        console.log('its on')
});

responder.on('message',function(msg){
    var parsedMessage = JSON.parse(msg);
    console.log(parsedMessage);
    setTimeout(function(){
        responder.send(JSON.stringify(resMessage));
    },1000);
});
