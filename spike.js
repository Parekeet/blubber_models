var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

var User    = require("./models/User"),
    Thread  = require("./models/Thread");


//FIND ALL THREADS
// Thread.findOne({}, function(err, thread) {
//   console.log(thread);

//   User.findById(thread.creator, function(err, user) {
//     console.log(user);
//     mongoose.connection.close();
//   });
// });


//MORE EFFICIENT WAY TO FIND ALL THREADS
//THIS HAPPENS BY DEFAULT ON ACTIVERECORD
//THIS IS WHAT YOU'LL BE USING TO GRAB DATA FROM API'S
//WHAT YOU GET BACK IS ONE RICH OBJECT INSTEAD OF TWO (USER/THREAD)
Thread.find({}).populate("creator").exec(function(err, thread) {
  if (err) console.log(err);
  console.log(thread);
  mongoose.connection.close();
});

