let express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user.model');
var VerifyToken = require('./VerifyToken');

// GET endpoint to test
router.get('/me', VerifyToken, function(req, res, next){
  User.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) {
      return res.status(500).send("There was a problem finding the user.");
    }
    if (!user) {
      return res.status(404).send("No user found.");
    }
    res.status(200).send(user);
  });
});

// POST add new dishes to a particular user
router.post('/add', VerifyToken, function(req, res, next){
  const body = req.body;
  if(!body.description){
    return res.json({error: "Must provide dish description"})
  }
  // Make new dish doc
  const dish = {
    "description" : body.description,
  };
  // execute the update query
  User.findOneAndUpdate({_id: req.userId}, {"$push": {"dish": dish}}, {new: true}, (err, doc)=> {
    if (err) {
      return res.status(500).send(err, "There was a problem updating dish details");
    }
    res.json({
      "dish": doc.dish
    })
  })
})

// GET all dishes from all users
router.get('/list', VerifyToken, function(req, res, next) {
  User.find({}, function(err, users) {
    var userMap = {};

    users.forEach(function(user) {
      userMap[user._id] = user.dish;
    });

    res.send(userMap);
  });
});

module.exports = router;
