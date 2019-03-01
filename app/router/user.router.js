let express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

//POST endpoint to handle user signup/register
router.post('/signup', function(req, res){
  User.findOne({ email: req.body.email }, function(err, user) {
     if(err) {
        return res.status(500).json({
           error: err
        });
     }
     if (user) {
       return res.status(400).json({
         error: 'A user with that email has already registered. Please use a different email..'
       });
     } else {
         bcrypt.hash(req.body.password, 10, function(err, hash){
           if(err) {
             return res.status(500).json({
               error: err
             });
           }
           else {
             const newUser = new User({
               _id: new  mongoose.Types.ObjectId(),
               email: req.body.email,
               password: hash
             })
             newUser.save().then(function(result){
               console.log(result);
               res.status(200).json({
                 success: 'New user has been created'
               });
             }).catch(error => {
               res.status(500).json({
                 error: err
               });
             });
           }
        })
     }
  });
})

//POST endpoint to handle user login/jwt
router.post('/login', function(req, res){
  User.findOne({email: req.body.email})
  .exec()
  .then(function(user){
    bcrypt.compare(req.body.password, user.password, function(err, result){
         if(err) {
            return res.status(401).json({
               failed: 'Unauthorized Access'
            });
         }
         if(result) {
           const JWTToken = jwt.sign({
             email: user.email,
             _id: user._id
           },
           'secret',
          {
            expiresIn: '2h'
          });
          return res.status(200).json({
            success: 'Login successful',
            token: JWTToken
          });
         }
         return res.status(401).json({
            failed: 'Unauthorized Access'
         });
      });
  })
  .catch(error => {
      res.status(500).json({
         error: 'No user with this email-id found. Please register first'
      });
   });
})


module.exports = router;
