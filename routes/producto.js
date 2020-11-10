var express = require('express');
var router = express.Router();
var controller = require('../controllers/productoController');

router.get('/', function(req,res,next){
    controller.show(req,res);
});

router.post('/', function(req,res,next){
    controller.create(req,res);
});

router.get('/show/:id', function(req,res,next){
    controller.detail(req,res);
});

router.post('/update', function(req,res,next){
    controller.update(req,res);
});

router.get('/delete/:id', function(req,res,next){
    controller.delete(req,res);
});

module.exports = router;