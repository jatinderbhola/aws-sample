var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');
var s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'AWS FUNCTION!' });
});
router.post('/createbucket', function(req, res, next) {

});
module.exports = router;