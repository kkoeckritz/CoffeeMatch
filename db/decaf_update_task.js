const mongoose = require("mongoose");

var shopify = require('../shopify');
var db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/coffeematch"
);

db.Collection.find({})
  .then(collections => {
    let promises = [];
    console.log(collections);
    collections.map(collection => {
      promises.push(new Promise((resolve, reject) => {
        shopify.getCollectionIdFromName(collection.handle).then(id => {
          shopify.getCollectsInCollection(id).then(collects => {
            shopify.getProductsFromCollects(collects).then(products => {
              let decafProducts = products.filter(product => {
                return product.tags.toLowerCase().includes('decaf');
              });
              collection.has_decaf = decafProducts.length > 0;

              db.Collection
                .findOneAndUpdate({ _id: collection._id }, collection)
                .then(response => resolve(response))
                .catch(error => reject(error));
            }).catch(error => reject(error));
          })
          .catch(error => {
            if (error.includes("No collects found!")) {
              resolve(error);
            } else {
              reject(error)
            }
          }); // collects lookup
        }).catch(error => reject(error)); // collection lookup
      })); // promises
    }); // collections
    
    Promise.all(promises)
      .then(response => {
        console.log("Tasks completed successfully, exiting.");
        process.exit(0);
      })
      .catch(error => {
        console.log("Tasks completed with errors, exiting.");
        console.log(error);
        process.exit(1);
      });
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });