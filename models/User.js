//REQUIRE
var mongoose = require("mongoose");


//MAKE SCHEMA
var userSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  // password:  String,
  moderator: { type: Boolean, default: false}
});


//MAKE MODEL
var User = mongoose.model("User", userSchema);

module.exports = User;
