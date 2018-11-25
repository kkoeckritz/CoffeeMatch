const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  name: { type: String, required: true },
  handle: { type: String, required: true },
  has_decaf: { type: Boolean, required: true },
  imgURL: { type: String, required: true },
  description: { type: String }
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
