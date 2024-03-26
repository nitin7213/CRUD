const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Email: {
    type: String,
    unique: true,
  },
  Age: {
    type: Number,
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
