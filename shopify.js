var axios = require("axios");
require("dotenv").config();

/**
 * Get the collection ID field for a given collection name
 * @param {string} collectionHandle - the handle of the collection to look up
 * @returns {Promise} - Promise object with return value of ID integer
 */
function getCollectionIdFromName(collectionHandle) {
  let url = `${process.env.SHOPIFY_URL}/admin/custom_collections.json?handle=${collectionHandle}`;
  console.log(url);
  return new Promise((resolve, reject) => {
    axios.get(url).then((response) => {
      if (response.data.custom_collections.length === 1) {
        resolve(response.data.custom_collections[0].id);
      }
      else {
        response.data.custom_collections.map(collection => (
          console.log(collection.title)
        ));
        reject("Collection supplied is not specific enough, multiple found");
      }
    });
  });
}

/**
 * Get the collect objects that match a collection ID
 * @param {integer} collectionId - the ID of the collection for which to find collects
 * @returns {Promise} - Promise object with return value of an array of collect objects
 */
function getCollectsInCollection(collectionId) {
  let url = `${process.env.SHOPIFY_URL}/admin/collects.json?collection_id=${collectionId}`;
  console.log(url);
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        if (response.data.collects.length > 0) {
          resolve(response.data.collects);
        } else {
          reject("No collects found!");
        }
      })
      .catch(error => reject(error));
  });
}

/**
 * Get the product objects that match an array of collect objects
 * @param {array of collects} collects - an array of collects from which to retrieve product objects
 * @returns {Promise} - Promise object with return value of an array of product objects
 */
function getProductsFromCollects(collects) {
  return new Promise((resolve, reject) => {
    let productsCsv = collects.map(collect => collect.product_id).join(",");
    let url = `${process.env.SHOPIFY_URL}/admin/products.json?ids=${productsCsv}`;
    console.log(url);
    axios.get(url)
      .then(response => {
        if (response.data.products.length > 0) {
          resolve(response.data.products);
        } else {
          reject("No products found!");
        }
      })
      .catch(error => reject(error));
  });
}

module.exports = {
  getCollectionIdFromName: getCollectionIdFromName,
  getCollectsInCollection: getCollectsInCollection,
  getProductsFromCollects: getProductsFromCollects,
}