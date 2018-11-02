const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  shopifyID: { type: Number },
  questionnaireID: { type: Number, required: true },
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;