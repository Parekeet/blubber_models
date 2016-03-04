var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blubber_app");

var User    = require("./models/User"),
    Thread  = require("./models/Thread");


//FIND ALL THREADS
Thread.find({}, function(err, threads) {

  threads.forEach(function(thread) {
    console.log(thread);
  });

    mongoose.connection.close();
});

//MESS AROUND IN SPIKE, IF IT WORKS TRANSFER CODE INTO ACTUAL FILE
//LIKE WERE DOING NOW!
