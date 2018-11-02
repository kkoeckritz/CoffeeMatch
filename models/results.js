const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultsSchema = new Schema({
  userID: { type: Number },
  caffeine: { type: Boolean, required: true },
  collectionID: { type: Number },
  tagID: { type: Number },
  
});

const Results = mongoose.model("Results", resultsSchema);

module.exports = Results;