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
    imgURL: "../client/public/assets/images/flavorTags/fruit-plate_925x.jpg"
  },{
    tagName: "cherry",
    bucket: "fruit",
    imgURL: "../client/public/assets/images/flavorTags/fruit-plate_925x.jpg"
  },{
    tagName: "tropical fruity",
    bucket: "fruit",
    imgURL: "../client/public/assets/images/flavorTags/fruit-plate_925x.jpg"
  },{
    tagName: "strawberry",
    bucket: "fruit",
    imgURL: "../client/public/assets/images/flavorTags/fruit-plate_925x.jpg"
  },{
    tagName: "blackberry",
    bucket: "fruit",
    imgURL: "../client/public/assets/images/flavorTags/fruit-plate_925x.jpg"
  },{
    tagName: "poached pear",
    bucket: "fruit",
    imgURL: "../client/public/assets/images/flavorTags/fruit-plate_925x.jpg"
  },{
    tagName: "caramel apple",
    bucket: "fruit",
    imgURL: "../client/public/assets/images/flavorTags/fruit-plate_925x.jpg"
  },{
    tagName: "date",
    bucket: "fruit",
    imgURL: "../client/public/assets/images/flavorTags/fruit-plate_925x.jpg"
  },{
    tagName: "cranberry",
    bucket: "fruit",
    imgURL: "../client/public/assets/images/flavorTags/fruit-plate_925x.jpg"
  },{
    tagName: "blackberry",
    bucket: "fruit",
    imgURL: "../client/public/assets/images/flavorTags/fruit-plate_925x.jpg"
  },{
    tagName: "milk chocolate",
    bucket: "chocolate",
    imgURL: "../client/public/assets/images/flavorTags/milk-chocolate-texture_925x.jpg"
  },{
    tagName: "chocolate",
    bucket: "chocolate",
    imgURL: "../client/public/assets/images/flavorTags/milk-chocolate-texture_925x.jpg"
  },{
    tagName: "roasted cacao nib",
    bucket: "chocolate",
    imgURL: "../client/public/assets/images/flavorTags/milk-chocolate-texture_925x.jpg"
  },{
    tagName: "baker's chocolate",
    bucket: "chocolate",
    imgURL: "../client/public/assets/images/flavorTags/milk-chocolate-texture_925x.jpg"
  },{
    tagName: "dark chocolate",
    bucket: "chocolate",
    imgURL: "../client/public/assets/images/flavorTags/milk-chocolate-texture_925x.jpg"
  },{
    tagName: "graham",
    bucket: "baked goodies",
    imgURL: "../client/public/assets/images/flavorTags/farmers-market-bakery_925x.jpg"
  },{
    tagName: "gingerbread",
    bucket: "baked goodies",
    imgURL: "../client/public/assets/images/flavorTags/farmers-market-bakery_925x.jpg"
  },{
    tagName: "cinnamon toast",
    bucket: "baked goodies",
    imgURL: "../client/public/assets/images/flavorTags/farmers-market-bakery_925x.jpg"
  },{
    tagName: "floral",
    bucket: "floral",
    imgURL: "../client/public/assets/images/flavorTags/flowers-in-mason-jars_925x.jpg"
  },{
    tagName: "sweetly herbaceous",
    bucket: "floral",
    imgURL: "../client/public/assets/images/flavorTags/flowers-in-mason-jars_925x.jpg"
  },{
    tagName: "lemon verbena",
    bucket: "floral",
    imgURL: "../client/public/assets/images/flavorTags/flowers-in-mason-jars_925x.jpg"
  },{
    tagName: "freesia-like flowers",
    bucket: "floral",
    imgURL: "../client/public/assets/images/flavorTags/flowers-in-mason-jars_925x.jpg"
  },{
    tagName: "nutty",
    bucket: "nutty",
    imgURL: "../client/public/assets/images/flavorTags/candied-pecans-pralines_925x.jpg"
  },{
    tagName: "macadamia nut",
    bucket: "nutty",
    imgURL: "../client/public/assets/images/flavorTags/candied-pecans-pralines_925x.jpg"
  },{
    tagName: "hazelnut butter",
    bucket: "nutty",
    imgURL: "../client/public/assets/images/flavorTags/candied-pecans-pralines_925x.jpg"
  },{
    tagName: "almond brittle",
    bucket: "nutty",
    imgURL: "../client/public/assets/images/flavorTags/candied-pecans-pralines_925x.jpg"
  },{
    tagName: "molasses",
    bucket: "syrup",
    imgURL: "../client/public/assets/images/flavorTags/Canva - Honey, Sweet, Syrup, Organic, Golden, Teaspoon, Pouring.jpg"
  },{
    tagName: "honey",
    bucket: "syrup",
    imgURL: "../client/public/assets/images/flavorTags/Canva - Honey, Sweet, Syrup, Organic, Golden, Teaspoon, Pouring.jpg"
  },{
    tagName: "milk chocolate",
    bucket: "candy",
    imgURL: "../client/public/assets/images/flavorTags/Canva - Chocolate Bar, Snack, Candy, Chocolate, Energy Bar.jpg"
  },{
    tagName: "chocolate",
    bucket: "candy",
    imgURL: "../client/public/assets/images/flavorTags/Canva - Chocolate Bar, Snack, Candy, Chocolate, Energy Bar.jpg"
  },{
    tagName: "baker's chocolate",
    bucket: "candy",
    imgURL: "../client/public/assets/images/flavorTags/Canva - Chocolate Bar, Snack, Candy, Chocolate, Energy Bar.jpg"
  },{
    tagName: "dark chocolate",
    bucket: "candy",
    imgURL: "../client/public/assets/images/flavorTags/Canva - Chocolate Bar, Snack, Candy, Chocolate, Energy Bar.jpg"
  },{
    tagName: "caramel apple",
    bucket: "candy",
    imgURL: "../client/public/assets/images/flavorTags/Canva - Chocolate Bar, Snack, Candy, Chocolate, Energy Bar.jpg"
  },{
    tagName: "almond brittle",
    bucket: "candy",
    imgURL: "../client/public/assets/images/flavorTags/Canva - Chocolate Bar, Snack, Candy, Chocolate, Energy Bar.jpg"
  },{
    tagName: "gingerbread",
    bucket: "spice",
    imgURL: "../client/public/assets/images/flavorTags/Canva - Coffee, Spices, Star Anise, Anise, Cinnamon.jpg"
  },{
    tagName: "cinnamon toast",
    bucket: "spice",
    imgURL: "../client/public/assets/images/flavorTags/Canva - Coffee, Spices, Star Anise, Anise, Cinnamon.jpg"
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