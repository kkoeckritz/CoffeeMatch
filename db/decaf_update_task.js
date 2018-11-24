const mongoose = require("mongoose");

var shopify = require('../shopify');
var db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/coffeematch"
);

var handleGetCollectsErrors = (resolve, reject, error) => {
  if (error.includes("No collects found!")) { // ignore no collects found
    resolve(error);
  } else { 
    reject(error)
  }
};

var anyProductsDecaf = (products) => {
  return products.filter(product => (
    product.tags.toLowerCase().includes('decaf')
  )).length > 0;
};

var enqueueAsyncCollectionDecafUpdates = (collections) => (
  collections.map(collection => {
    return new Promise((resolve, reject) => {
      shopify.getCollectionIdFromName(collection.handle).then(id => {
        shopify.getCollectsInCollection(id).then(collects => {
          shopify.getProductsFromCollects(collects).then(products => {
            console.log(products);
            collection.has_decaf = anyProductsDecaf(products);
            console.log(collection.has_decaf);
            db.Collection
              .findOneAndUpdate({ _id: collection._id }, collection)
              .then(response => resolve(response))
              .catch(error => reject(error));
          }).catch(error => reject(error)); // products lookup
        }).catch(error =>  handleGetCollectsErrors(resolve, reject, error)); // collects lookup
      }).catch(error => reject(error)); // collection lookup
    }); // promises
  }) // collections
)

db.Collection.find({})
  .then(collections => {
    let promises = collections.map(collection => {
      return new Promise((resolve, reject) => {
        shopify.getCollectionIdFromName(collection.handle).then(id => {
          shopify.getCollectsInCollection(id).then(collects => {
            shopify.getProductsFromCollects(collects).then(products => {
              console.log(products.map(p => `${p.title}: ${p.tags}`));
              collection.has_decaf = anyProductsDecaf(products);
              console.log(collection.has_decaf);
              db.Collection
                .findOneAndUpdate({ _id: collection._id }, collection)
                .then(response => resolve(response))
                .catch(error => reject(error));
            }).catch(error => reject(error)); // products lookup
          }).catch(error =>  handleGetCollectsErrors(resolve, reject, error)); // collects lookup
        }).catch(error => reject(error)); // collection lookup
      }); // promises
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
  }) // db.Collection.find({}), find all collections
  .catch(err => {
    console.error(err);
    process.exit(1);
  });