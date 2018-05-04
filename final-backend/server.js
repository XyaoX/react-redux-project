const express = require('express'),
app=express(),
port = process.env.PORT || 3001,
routes = require('./api/routes/mainRoute.js'),
Person = require('./api/models/mainModel.js'),
secret = require('./config.json'),
mongoose = require('mongoose'),
cors = require('cors'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const myUri = secret.db;
mongoose.connect(myUri);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get("/",(req,res)=>res.send('Hello World'));

app.listen(port,function(){console.log("app is running on port "+port)});