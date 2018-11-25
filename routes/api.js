var axios = require("axios");
const router = require("express").Router();

var db = require("../models");
var shopify = require("../shopify");

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
 * Route for getting products associated with a collection and tag
 * Gets all products for given collection, then does some string
 * manipulation to check for tags... a bit expensive, but necessary
 * for getting the matches due to shopify limitations
 */
router.route("/products/:collection/:tag/:caffeinated").get((req, res) => {
  let calledRoute = `/api/products/${req.params.collection}/${req.params.tag}/${req.params.caffeinated}`;
  console.log(`${calledRoute} called`);

  shopify.getCollectionIdFromName(req.params.collection).then((id) => {
    shopify.getCollectsInCollection(id).then((collects) => {
      shopify.getProductsFromCollects(collects).then(products => {
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
 * Route for getting of the product tags associated with a given collection
 */
router.route("/tags/:collection/:caffeinated").get((req, res) => {
  shopify.getCollectionIdFromName(req.params.collection).then((id) => {
    shopify.getCollectsInCollection(id).then((collects) => {
      shopify.getProductsFromCollects(collects).then(products => {
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
