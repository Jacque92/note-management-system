const mongoose = require("mongoose");

const writingSchema = mongoose.Schema({
  title: String,
  writing: { type: String, required: true },
  topic: [String],
  index: String,
});

module.exports = mongoose.model("Writing", writingSchema);
