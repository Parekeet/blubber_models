//REQUIRE
var mongoose = require("mongoose");


//CONNECT
mongoose.connect("mongodb://localhost/blubber_app");


//MAKE SCHEMA
var userSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  // password:  String,
  moderator: { type: Boolean, default: false}
});


//MAKE MODEL
var User = mongoose.model("User", userSchema);

User.remove({}, function(err, res) {

  console.log("Creating users!");

  User.create([
     { name: "John Marshall",
       email: "jm@us.courts.gov",
       moderator: true
     },
     { name: "Oliver Wendell Holmes Jr.",
       email: "owh2@us.courts.gov"
     },
     { name: "Thurgood Marshall",
       email: "tm@us.courts.gov"
     },
     { name: "Sandra Day O'Connor",
       email: "sdo@us.courts.gov"
     }
   ], function(err, users) {
      if (err) {
        console.log(err);
      } else {
        console.log(users)
      }
        mongoose.connection.close();
    });
  });





