var express = require('express');
var router = express.Router();

var AWS = require('aws-sdk');
var s3 = new AWS.S3({
    //signatureVersion: 'v4'
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_TOKEN
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.post('/auth', function(req, res, next) {
    console.log(req.body);
    var temp_s3 = new AWS.S3({
        //signatureVersion: 'v4'
        accessKeyId: req.body.apiKey,
        secretAccessKey: req.body.apiToken
    });

    var params = {};
    temp_s3.listBuckets(params, function(err, data) {
        if (err) {
            console.log(err, err.stack);
            res.status(500).send(err.message);
        } // an error occurred
        else {
            console.log(data); // successful response
            res.json(data);
        }
    });
});


module.exports = router;