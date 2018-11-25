const router = require("express").Router();

var db = require("../models");

router.route("/")
  .get((req, res) => {
    db.Collection.find({})
      .then(collections => {
        res.json(collections)
      });
  })
  .post((req, res) => {
    console.log(`POST /collections: ${JSON.stringify(req.body)}`);
    db.Collection.create(req.body)
      .then(response => res.json(response));
  });

router.route("/:id")
  .get((req, res) => {
    db.Collection.find({ _id: req.params.id })
      .then(collections => {
        res.json(collections)
      });
  })
  .delete((req, res) => {
    console.log(`DELETE /collections/${req.params.id}`);
    db.Collection.deleteOne( { _id: req.params.id })
      .then(response => res.json(true));
  });

module.exports = router;