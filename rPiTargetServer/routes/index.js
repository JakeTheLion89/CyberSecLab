var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/getRequests', function(req,res){
    var targetObject = {
        data:"Look at this",
        moreData: "Packets can be accessed through the network"
    };

    res.type("json");
    res.send(targetObject);
});

router.post('/postRequests', function(req,res){
    if(req.body.status == true){
        var payLoad = {
            data:"You can read this",
            moreData:"See if you can tamper client's packet"
        };
        res.type("json");
        res.send(payLoad);
    }
    else{
        var attackedPayload = {
            data:"Someone tampered with the packet",
            moreData: "You got attacked"
        };

        res.type("json");
        res.send(attackedPayload);
    };

});

module.exports = router;
