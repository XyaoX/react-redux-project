'use strict'

const mongoose = require('mongoose'),
    path= require("path"),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    config = require('../../config.json'),
    Person = mongoose.model('Person');


exports.auth_user = (req,res)=>{
    let token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ isAuthenticated: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ isAuthenticated: false, message: 'Failed to authenticate token.' });
      
      res.status(200).send(decoded);
    });
  };



exports.login_user = (req,res)=>{
    Person.findOne({email:req.body.email}, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ isAuthenticated: false, token: null });
        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ isAuthenticated: true, token: token, username: user.firstName});
      })
}