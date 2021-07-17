const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
    type: String, 
    required: true,
  },
  friends: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model('userinfo', UserSchema);

module.exports = User;