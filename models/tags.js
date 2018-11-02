const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Tags = mongoose.model("Tags", tagSchema);

module.exports = Tags;