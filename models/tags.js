const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tagName: { type: String, required: true }, 
  bucket: { type: String, required: true },
  imgURL: { type: String, required: true }
});

const Tags = mongoose.model("Tags", tagSchema);

module.exports = Tags;