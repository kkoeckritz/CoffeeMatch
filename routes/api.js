var axios = require("axios");
const router = require("express").Router();

router.route("/collections").get((req, res) => {

});

function getCollectionId(collectionName) {
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

function getCollectsInCollection(collectionId) {
  let url = `${process.env.SHOPIFY_URL}/admin/collects.json?collection_id=${collectionId}`;
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => resolve(response.data.collects))
      .catch(error => reject(error));
  });
}

function getProductsFromCollects(collects) {
  return new Promise((resolve, reject) => {
    let productsCsv = collects.map(collect => collect.product_id).join(",");
    let url = `${process.env.SHOPIFY_URL}/admin/products.json?ids=${productsCsv}`;
    console.log(productsCsv);
    console.log(url);
    axios.get(url)
      .then(response => resolve(response.data.products))
      .catch(error => reject(error));
  });
}

router.route("/products/:collection").get((req, res) => {
  getCollectionId(req.params.collection)
    .then((id) => {
      console.log(`id: ${id}`);
      getCollectsInCollection(id)
      .then((collects) => {
        console.log(`collects: `);
        collects.map(collect => {
          console.log(collect.id);
        });
        getProductsFromCollects(collects)
        .then(products => {
          console.log(`products: `);
          products.map(product => {
            console.log(product.id);
          });
          res.json(products);
        })
      });
    })
    .catch((error) => {
      console.log(".catch:");
      console.log(error);
      res.send(error);
    });
});

module.exports = router;