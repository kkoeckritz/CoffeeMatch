const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  collection_name: { type: String, required: true },
  url: { type: String, required: true },
  tags: [String],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
