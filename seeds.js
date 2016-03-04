//REQUIRE
var mongoose = require("mongoose");


//CONNECT
mongoose.connect("mongodb://localhost/blubber_app");

var User    = require("./models/User"),
    Thread  = require("./models/Thread");

Thread.remove({}, function(err, results) {
  User.remove({}, function(err, results) {

    if (err) console.log(err);

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
        if (err) console.log(err);
        // console.log(users);

        var john = users[0];
        var thur = users[1];


          // CREATE THREADS
          Thread.create([
              {
                name: "YOLO",
                creator: john,
                creatorName: john.name
              },
              {
                name: "Think Different",
                creator: thur,
                creatorName: thur.name
              }
            ],
            function(err, threads) {
              if (err) console.log(err);
              // console.log(thread);

              //add some posts... for an ARRAY of threads
              var yolo = threads[0];

              yolo.posts.push({
                author:  john,
                title:   "Marbury vs. Madison",
                body:    "Ya diiiiiig?"
              });
              yolo.posts.push({
                author:  thur,
                title:   "Brown vs BoE",
                body:    "Right? Yeah."
              });

              yolo.save(function(err, yolo) {
                // console.log(err);
                // console.log(yolo);

                var post = yolo.posts[0];

                post.comments.push({
                  author: thur,
                  body: "Pics or it didn't happen."
                });

                yolo.save(function(err, results) {
                  // console.log(err);
                  // console.log(results);
                  mongoose.connection.close(); //DONT FORGET, TO CLOSE CONNECTION, HAS TO BE INSIDE A CALLBACK
                });

              });

          });
      });
    });
});





