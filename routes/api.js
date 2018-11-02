var axios = require("axios");
const router = require("express").Router();

router.route("/collections").get((req, res) => {

});

/**
 * Get the collection ID field for a given collection name
 * @param {string} collectionName - the name of the collection to look up
 * @returns {Promise} - Promise object with return value of ID integer
 */
function getCollectionIdFromName(collectionName) {
  let url = `${process.env.SHOPIFY_URL}/admin/custom_collections.json?title=${collectionName}`;
  return new Promise((resolve, reject) => {
    axios.get(url).then((response) => {
      if (response.data.custom_collections.length === 1) {
        resolve(response.data.custom_collections[0].id);
      }
      else {
        reject("Collection supplied is not specific enough");
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
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => resolve(response.data.collects))
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
    axios.get(url)
      .then(response => resolve(response.data.products))
      .catch(error => reject(error));
  });
}

/**
 * Route for getting products associated with a collection
 */
router.route("/products/:collection").get((req, res) => {
  getCollectionIdFromName(req.params.collection).then((id) => {
    getCollectsInCollection(id).then((collects) => {
      getProductsFromCollects(collects).then(products => {
        res.json(products);
      });
    });
  })
  .catch((error) => {
    console.log(".catch:");
    console.log(error);
    res.send(error);
  });
});

/**
 * Route for getting of the product tags associated with a given collection
 */
router.route("/tags/:collection").get((req, res) => {
  getCollectionIdFromName(req.params.collection).then((id) => {
    getCollectsInCollection(id).then((collects) => {
      getProductsFromCollects(collects).then(products => {
        let tagsSet = new Set();
        products.map(product => (               // for each product
          product.tags.split(",").map(tag => (  // split product tags string by comma
            tagsSet.add(tag.trim()))            // add tag from tags string to set of tags
          )
        ));
        res.json(Array.from(tagsSet));          // convert set of tags to JSON array and send
      });
    });
  })
  .catch((error) => {
    console.log("/tags/:collection error:");
    console.log(error);
    res.send(error);
  });
});

module.exports = router;