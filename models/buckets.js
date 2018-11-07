const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bucketSchema = new Schema({
  bucket: { type: String, required: true },
  tagName: { type: String, required: true }, 
});

const Buckets = mongoose.model("Buckets", bucketSchema);

module.exports = Buckets;