const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema({
    caffeinated: { type: String, required: true },
    collection_handle: { type: String, required: true },
    bucket: { type: String, required: true }
})

const Stats = mongoose.model("Stats", statsSchema);

module.export = Stats;