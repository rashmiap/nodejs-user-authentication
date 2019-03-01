// user.model.js

const mongoose = require('mongoose');

const user = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   email: {
     type: String,
     required: true
   },
   password: {
     type: String,
     required: true
   },
   dish: [{
    description: {
      required: "dish description is required",
      type: String,
      trim: true
    },
    dishImageUrl: {
      type: String
    },
    dishPollCount: {
      Type: Number
    }
  }]
});

module.exports = mongoose.model('User', user);
