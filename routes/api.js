var axios = require("axios");
const router = require("express").Router();

router.route("/collections").get((req, res) => {

});

router.route("/products/:collection").get((req, res) => {
  let url = `${process.env.SHOPIFY_URL}/admin/custom_collections.json?title=${req.params.collection}`;
  console.log(url);
  axios
    .get(url)
    .then((response) => {
      console.log(".then:");
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(".catch:");
      console.log(error);
      res.send(error);
    });
});

module.exports = router;