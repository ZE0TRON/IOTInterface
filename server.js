const express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('assets'));
var port = process.env.PORT || 3000;
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });
var mongoose = require('mongoose');
//var mongoDB = 'mongodb://127.0.0.1/my_database';
var mongoDB = 'mongodb://iotUser:15061997s@ds233320.mlab.com:33320/heroku_58n7gc3n';
var mainRoutes = require('./api/routes/mainRoutes');
mainRoutes(app);
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
app.listen(port);
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

