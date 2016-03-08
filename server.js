var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs("iqrar:haider@ds047612.mlab.com:47612/mean-notes-app",['Notes'],{ authMechanism : 'ScramSHA1' });
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
var api = require('./server/api.js')(app, mongojs,db);
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/public/app/views/index.html');
});
app.listen(3000);
console.log('Server is running on port 3000...');