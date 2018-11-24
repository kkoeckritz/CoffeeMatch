const mongoose = require("mongoose");

var shopify = require('../shopify');
var db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/coffeematch"
);

/**
 * handleGetCollectsErrors - Ignores "No collects found!" error, but rejects all other errors
 * @param {function} resolve - Resolve function in parent promise
 * @param {function} reject - Reject function in parent promise
 * @param {string} error - Error message received
 */
var handleGetCollectsErrors = (resolve, reject, error) => {
  if (error.includes("No collects found!")) { // ignore no collects found
    resolve(error);
  } else { 
    reject(error)
  }
};

/**
 * Iterates over supplied products and determines if any product is decaf
 * @param {array} products - array of product objects
 * @returns Boolean of whether or not there are decaf products
 */
var anyProductsDecaf = (products) => {
  return products.filter(product => (
    product.tags.toLowerCase().includes('decaf')
  )).length > 0;
};

/**
 * Iterates over collection objects, checks if they have decaf coffees, 
 * and updates the database record appropriately. This is done asyncronously,
 * so this function returns a list of promises that needs to be handled.
 * @param {array} collections - array of collection objects from database
 * @returns Array of promises
 */
var asyncUpdateCollectionDecaf = (collections) => (
  collections.map(collection => {
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
  }) // collections
)

/**
 * Get all collections from database, asyncronously update the decaf
 * flag for each collection. Wait until all tasks are complete and exit.
 */
db.Collection.find({})
  .then(collections => {
    let promises = asyncUpdateCollectionDecaf(collections);
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