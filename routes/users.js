const express = require('express');
const router = express.Router();
const User = require('../models/user')


    router.get('/login', function(req, res) {
    res.render('login');
    });

    router.get('/register', function(req, res) {
      res.render('register');
    });

    router.post('/register', function(req, res) {
      var err = new Error("sorry something went wrong...");
      res.render('error', {errormessage: err})

      /*
      if(req.body.email && req.body.name && req.body.password && req.body.password2){
          if(req.body.password !== req.body.password2){
            var err = new Error("Passwords do not match, slow down...");
            //err.status = 400;
            res.render('error', {errormessage: err})
            //console.log(err)
            //return next(err);
          }//end of second 1f

        }//end of 1st else
        var user = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });//end of var user

        user.save(function(err) {
          if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
            err = "An account with that email already exists. Login instead!"
              res.render('error', {errormessage: err})
            }//end of err.name === mongoerror
            else{
             res.render('error', {errormessage: "Username already exists, please be more creative!"})
           }
        }//if 1st err

        else{
        res.render( 'dashboard', {message: user.name})
        console.log("working")
        }
      });//end of user.save */

    });
    module.exports = router;
