var db = require("../models");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/coffeematch", 
  { useNewUrlParser: true }
);

var collectionSeed = [
  {
    name: "Rare & Reserve",
    collection_handle: "rarereserve",
  },
  {
    name: "Roaster's Selection",
    handle: "roastersselection",
  },
  {
    name: "Casual Coffee",
    handle: "casualcoffee",
  }
]

db.Collection
  .remove({})
  .then(() => db.Collection.collection.insertMany(collectionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });