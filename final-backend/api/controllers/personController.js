'use strict';

const mongoose = require('mongoose'),
    path= require("path"),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken'),
    config = require('../../config.json'),
    Person = mongoose.model('Person');



    exports.list_all_person = function(req,res) {
        Person.find({}, function(err,task){
            if(err)
                res.send(err);
            console.log(req.method+"on "+ req.url+" at " + new Date().toISOString())
            res.json(task);
        })
    }


    exports.register_user = (req,res)=>{
        let hashedPassword = bcrypt.hashSync(req.body.password,8);
        Person.create({
            name: req.body.name,
            email:req.body.email,
            password:hashedPassword
        },
        function(err,user){
            if(err) {
                console.log(err);
                return res.status(500).send("Problem registering the user.")
            }
            let token = jwt.sign({id:user._id},config.secret,{
                expiresIn:86400
            });
            console.log(`token: ${token}`);
            res.status(200).send({auth:true, token:token});
        }
    )
        

    }
