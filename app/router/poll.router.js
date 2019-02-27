let express = require('express');
let router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user.model');
var VerifyToken = require('./VerifyToken');

// POST poll to choose best 3 dishes
router.post('/poll', VerifyToken, function(req, res, next){
  const body = req.body;
  if(body.UserId1 && body.DishId1){
    User.findOneAndUpdate(
      {
        _id: body.UserId1,
        'dish._id': body.DishId1
      },
      {
        $set: {
          'dish.$.dishPollCount': 30
        }
      }, null,
      (err, doc)=> {
        if (err) {
          return res.status(500).send(err, "There was a problem updating dish poll - 1st ");
        }

      })
  }
  if(body.UserId2 && body.DishId2){

    User.findOneAndUpdate(
      {
        _id: body.UserId2,
        'dish._id': body.DishId2
      },
      {
        $set: {
          'dish.$.dishPollCount': 20
        }
      }, null,
      (err, doc)=> {
        if (err) {
          return res.status(500).send(err, "There was a problem updating dish poll - 2md ");
        }

      })
  }
  if(body.UserId3 && body.DishId3){

    User.findOneAndUpdate(
      {
        _id: body.UserId3,
        'dish._id': body.DishId3
      },
      {
        $set: {
          'dish.$.dishPollCount': 10
        }
      }, null,
      (err, doc)=> {
        if (err) {
          return res.status(500).send(err, "There was a problem updating dish poll - 3rd ");
        }

      })
  }

    res.json({
      "dish": "fo"
    })
})

module.exports = router;
