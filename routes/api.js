var axios = require("axios");
const router = require("express").Router();

var db = require("../models");

var FILTERED_TAGS = [
  "decaf",
  "subscription",
  "coffee"
]
var URL = "https://www.soulworkcoffee.com/products";
/**
 * Route for getting collection information from shopify.
 * To be used in the CMS for adding collections to the questionnaire
 */
router.route("/shopify-collections").get((req, res) => {
  let url = `${process.env.SHOPIFY_URL}/admin/custom_collections.json`;
  axios.get(url)
    .then(response => {
      console.log(response);
      return res.json(response.data.custom_collections.map(collection => (
        {
          title: collection.title,
          handle: collection.handle
        }
      ))
    )})
    .catch(error => res.send(error));
});

/**
 * Route for getting the collections used in the questionnaire.
 */
router.route("/collections/:caffeine").get((req, res) => {
  console.log(`/collections/${req.params.caffeine}`);
  let query = {};
  if (req.params.caffeine == "decaf") {
    console.log("decaf");
    query = { has_decaf: true };
  }
  console.log(query);
  db.Collection.find(query)
    .then(collections => {
      console.log(collections);
      res.json(collections)
    });
});

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

/**
 * Route for getting products associated with a collection and tag
 * Gets all products for given collection, then does some string
 * manipulation to check for tags... a bit expensive, but necessary
 * for getting the matches due to shopify limitations
 */
router.route("/products/:collection/:tag/:caffeinated").get((req, res) => {
  let calledRoute = `/api/products/${req.params.collection}/${req.params.tag}/${req.params.caffeinated}`;
  console.log(`${calledRoute} called`);
  getCollectionIdFromName(req.params.collection).then((id) => {
    getCollectsInCollection(id).then((collects) => {
      getProductsFromCollects(collects).then(products => {
        db.Tags.find({ bucket: req.params.tag })
          .then(buckets => {
            let tags = buckets.map(bucket => bucket.tagName);
            console.log(`${calledRoute}: bucket(${req.params.tag}) = [${tags}]`);

            let matchingProducts = products
              .filter(product => {                        // check for caffeine
                if (req.params.caffeinated === "decaf") {
                  return product.tags.toLowerCase().includes("decaf");
                } else {
                  return !product.tags.toLowerCase().includes("decaf");
                }
              })
              .filter(product => {
                console.log(`${calledRoute}: Checking ${product.title}`);
                console.log(`${calledRoute}: Has tags ${product.tags}`);
                return product.tags                       // product tags are CSV strings
                  .split(",")                             // need to split by comma
                  .map(tag => tag.trim().toLowerCase())   // and trim / make lower case
                  .filter(tag => tags.includes(tag))      // remove any tags not in search
                  .length > 0;                            // check if there were any matches
              })
              .map(product => ({
                name: product.title,
                url: `${URL}/${product.handle}`,
                image: product.image.src
              }));

            res.json(matchingProducts);
          })
      }).catch(error => res.send(error));
    }).catch(error => res.send(error));
  }).catch(error => res.send(error));
});

/**
 * Route for getting products associated with a collection and tag
 * Used for debug
 */
router.route("/debug/products/:collection/:tag/:caffeinated").get((req, res) => {
  let calledRoute = `/api/products/${req.params.collection}/${req.params.tag}/${req.params.caffeinated}`;
  console.log(`${calledRoute} called`);

  db.Tags.find({ bucket: req.params.tag })
    .then(bucketModels => {

      let tagNames = bucketModels.map(bucket => bucket.tagName);
      
      console.log(`${calledRoute}: bucket(${req.params.tag}) = [${tagNames}]`);
      let query = {
        $and: [
          { collection_handle: req.params.collection },
          { $or: [] }
        ]
      };
      tagNames.map(tag => {
        query['$and'][1]['$or'].push({tags: tag})
      });
      if (req.params.caffeinated === "decaf") {
        query['$and'].push({tags: "decaf"});
      } else {
        query["$and"].push({tags: {$ne: "decaf"} });
      }
      console.log(`${calledRoute} query: ${JSON.stringify(query)}`);

      db.Product.find(query)
        .then(productList => {
          console.log(productList);
          res.json(productList)
        });
    });


});

/*
router.route("/tags/:collection/:caffeinated").get((req, res) => {
  let query = { };
  if (req.params.caffeinated === "decaf") {
    query = { collection_handle: req.params.collection, tags: "decaf" };
  } else {
    query = { collection_handle: req.params.collection, tags: { $ne: "decaf" } };
  }
  db.Product.find(query)
  .then(productList => {
    let tagSet = new Set();
    productList.map(product => {
      product.tags
        .filter(tag => tag != "decaf")
        .map(tag => (  // split product tags string by comma
          tagSet.add(tag)            // add tag from tags string to set of tags
        ))
    })
    console.log(Array.from(tagSet));
    res.json(Array.from(tagSet));
  });
});
*/

/**
 * Route for getting of the product tags associated with a given collection
 */
router.route("/tags/:collection/:caffeinated").get((req, res) => {
  getCollectionIdFromName(req.params.collection).then((id) => {
    getCollectsInCollection(id).then((collects) => {
      getProductsFromCollects(collects).then(products => {
        let tagsSet = new Set();
        products
          .filter(product => {
            if (req.params.caffeinated == "decaf") {
              return product.tags.toLowerCase().includes("decaf");
            } else {
              return !product.tags.toLowerCase().includes("decaf");
            }
          })
          .map(product => (                  // for each product
            product.tags
              .split(",")                                    // split CSV string
              .map(tag => tag.trim().toLowerCase())          // trim excess spaces and lower case
              .filter(tag => FILTERED_TAGS.indexOf(tag) < 0) // if indexOf is -1, not a filtered tag
              .map(tag => tagsSet.add(tag))                  // add tags to tag set
          ));

        db.Tags.find({ tagName: { $in: Array.from(tagsSet) } })
          .then(bucketModels => {
            let bucketDict = {};
            bucketModels.map(bucket => bucketDict[bucket.bucket] = bucket.imgURL);
            let buckets = Object.keys(bucketDict).map(bucket => 
              ( { name: bucket, url: bucketDict[bucket] } )
            );
            res.json(Array.from(buckets));  
          });
      }).catch(error => res.send(error));
    }).catch(error => res.send(error));
  }).catch(error => res.send(error));
});

module.exports = router;
