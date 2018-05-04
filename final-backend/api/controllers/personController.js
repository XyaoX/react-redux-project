'use strict';

var mongoose = require('mongoose'),
    path= require("path"),
    Person = mongoose.model('Person');



    exports.list_all_person = function(req,res) {
        Person.find({}, function(err,task){
            if(err)
                res.send(err);
            console.log(req.method+"on "+ req.url+" at " + new Date().toISOString())
            res.json(task);
        })
    }

    exports.create_a_person = function(req, res) {
        var new_person = new Person(req.body);
        new_person.save(function(err, task) {
          if (err)
            res.send(err);
          res.json(task);
        });
      };