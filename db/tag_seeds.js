var db = require("../models");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/coffeematch"
);

var tagSeed = [
  {
    tagName: "orange",
    bucket: "fruit",
  },{
    tagName: "cherry",
    bucket: "fruit",
  },{
    tagName: "tropical fruity",
    bucket: "fruit",
  },{
    tagName: "strawberry",
    bucket: "fruit",
  },{
    tagName: "blackberry",
    bucket: "fruit",
  },{
    tagName: "poached pear",
    bucket: "fruit",
  },{
    tagName: "caramel apple",
    bucket: "fruit",
  },{
    tagName: "date",
    bucket: "fruit",
  },{
    tagName: "cranberry",
    bucket: "fruit",
  },{
    tagName: "blackberry",
    bucket: "fruit",
  },{
    tagName: "milk chocolate",
    bucket: "chocolate",
  },{
    tagName: "chocolate",
    bucket: "chocolate",
  },{
    tagName: "roasted cacao nib",
    bucket: "chocolate",
  },{
    tagName: "baker's chocolate",
    bucket: "chocolate",
  },{
    tagName: "dark chocolate",
    bucket: "chocolate",
  },{
    tagName: "graham",
    bucket: "baked goodies",
  },{
    tagName: "gingerbread",
    bucket: "baked goodies",
  },{
    tagName: "cinnamon toast",
    bucket: "baked goodies",
  },{
    tagName: "floral",
    bucket: "floral",
  },{
    tagName: "sweetly herbaceous",
    bucket: "floral",
  },{
    tagName: "lemon verbena",
    bucket: "floral",
  },{
    tagName: "freesia-like flowers",
    bucket: "floral",
  },{
    tagName: "nutty",
    bucket: "nutty",
  },{
    tagName: "macadamia nut",
    bucket: "nutty",
  },{
    tagName: "hazelnut butter",
    bucket: "nutty",
  },{
    tagName: "almond brittle",
    bucket: "nutty",
  },{
    tagName: "molasses",
    bucket: "syrup",
  },{
    tagName: "honey",
    bucket: "syrup",
  },{
    tagName: "milk chocolate",
    bucket: "candy",
  },{
    tagName: "chocolate",
    bucket: "candy",
  },{
    tagName: "roasted cacao nib",
    bucket: "candy",
  },{
    tagName: "baker's chocolate",
    bucket: "candy",
  },{
    tagName: "dark chocolate",
    bucket: "candy",
  },{
    tagName: "caramel apple",
    bucket: "candy",
  },{
    tagName: "almond brittle",
    bucket: "candy",
  },{
    tagName: "gingerbread",
    bucket: "spice",
  },{
    tagName: "cinnamon toast",
    bucket: "spice",
  },
]

db.Tags
  .remove({})
  .then(() => db.Tags.collection.insertMany(tagSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });