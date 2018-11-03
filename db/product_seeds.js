var db = require("../models");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/coffeematch"
);

var productSeed = [
  {
    name: "BRAZIL, NELSON RIBEIRO & LUCA ALLEGRO, NATURAL PROCESS",
    collection_name: "Rare & Reserve",
    url: "https://www.soulworkcoffee.com/collection_names/all-day-every-day/products/brazil-fazenda-floresta-chapada-diamantina",
    tags: [
      "chocolate",
      "floral",
      "berry",
      "fruit",
      "toffee"
    ]
  },
  {
    name: "COLOMBIA, LA ILUSION, ROSEVAL ORTIZ, NATURAL PROCESS",
    collection_name: "Rare & Reserve",
    url: "https://www.soulworkcoffee.com/collection_names/all-day-every-day/products/colombia-la-ilusion",
    tags: [
      "chocolate",
      "berry",
      "hazelnut",
      "honey",
      "oak"
    ]
  },
  {
    name: "GUATEMALA, EL LIMONAR, HUGO CHÁVEZ MENDEZ, WASHED PROCESS",
    collection_name: "Roaster's Selection",
    url: "https://www.soulworkcoffee.com/collection_names/all-day-every-day/products/guatemala-el-limonar-hugo-chavez-mendez-washed-process",
    tags: [
      "fruit",
      "floral",
    ]
  },
  {
    name: "DECAF, ETHIOPIA, GUJI, NATURAL PROCESS",
    collection_name: "Roaster's Selection",
    url: "https://www.soulworkcoffee.com/collection_names/all-day-every-day/products/decaf-ethiopia-guji-natural-process",
    tags: [
      "fruit",
      "chocolate",
      "honey",
      "decaf"
    ]
  },
  {
    name: "SUMATRA BENER MERIAH",
    collection_name: "Casual Coffee",
    url: "https://www.soulworkcoffee.com/collection_names/all-day-every-day/products/sumatra-bener-meriah",
    tags: [
      "chocolate",
      "fruit",
      "cedar",
    ]
  },
  {
    name: "COSTA RICA, EL DIAMANTE, CARLOS FERNANDEZ MORERA, ANAEROBIC PROCESS",
    collection_name: "Casual Coffee",
    url: "https://www.soulworkcoffee.com/collection_names/all-day-every-day/products/costa-rica-san-rafael-carlos-fernandez-morera-anaerobically-washed",
    tags: [
      "spice",
      "fruit",
      "caramel",
    ]
  }
]

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });