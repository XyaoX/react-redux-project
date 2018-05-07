'use strict'

const mongoose = require('mongoose'),
    path= require("path"),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    config = require('../../config.json'),
    Person = mongoose.model('Person');


exports.auth_user =async (req,res)=>{
    let token = req.headers.authorization;
    if (!token) return res.status(401).send({ isAuthenticated: false, message: 'No token provided.' });
    
    await jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ isAuthenticated: false, message: 'Failed to authenticate token.' });
      
     Person.findOne({_id:decoded.id}, function(err,user){
      if (err) return res.status(500).send("Server Error");
      if (!user) return res.status(404).send('No user found');
      res.status(200).send({isAuthenticated:true,token:token,username:user.firstName});
    })
    });
  };



exports.login_user = (req,res)=>{
    Person.findOne({email:req.body.email}, function (err, user) {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordIsValid) return res.status(401).send({ isAuthenticated: false, token: null,message:"Password is invalid" });
        var token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: '1m' // expires in 24 hours
        });
        res.status(200).send({ isAuthenticated: true, token: token, username: user.firstName});
      })
}