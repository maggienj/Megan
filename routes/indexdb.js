var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/get-data', function (req, res, next) {
    mongo.connect(url, function (err,db) {
        assert.equal(null, err);
        var cursor = db.collection('user-data').find();
        cursor.forEach(function (doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close();
            res.render('index', items);
        });
    })
});

router.get('/insert', function (req, res, next) {
    var item = {
        title: req.body.title,
        content:req.body.content,
        author: req.body.author
    };
    mongo.connect(url, function (err, db) {
        assert.equal(null,err);
        db.collection('user-data').insertOne(item, function (err, result) {
            assert.equal(null,error);
            console.log('item inserted');
            db.close();
        })
    });


    router.get('/update', function (req, res, next) {

    });


    router.get('/del', function (req, res, next) {

    });



    module.exports = router;
