const router = require("express").Router();

var db = require("../models");

router.route("/")
	.get((req, res) => { // return json of all quiz stats
		db.Stats.find({})
			.then(stats => {
				res.json(stats);
			});
	})
	
	.post((req, res) => { // create new stats db entry (currently impl in api.js)
		db.Stats.create({
			caffeinated: req.body.caffeinated,
			collection_handle: req.body.collection,
			bucket: req.body.tag
		})
		.then(data => {
			console.log("logged stats: " + data);
		})
		.catch(err => {
			console.error(err);
		});
	})

module.exports = router;