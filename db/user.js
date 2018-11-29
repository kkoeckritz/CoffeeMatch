var db = require("../models");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/coffeematch", {useNewUrlParser: true}
);


var adminSeed = [
    {
      first_name: "Nguyen",
      last_name: "Le",
      email: "ucnguyenle@gmail.com",
      password: "test",
      admin: true
    
    }
]

db.User
  .remove({})
  .then(() => db.User.insertMany(adminSeed))
  .then(data => {
    console.log(data.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });