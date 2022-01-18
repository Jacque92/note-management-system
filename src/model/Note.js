const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  quote: { type: String, required: true },
  index: String,
  title: String,
  author: String,
  pageNumber: Number,
  sequence: [String],
  // connect: String,
});

module.exports = mongoose.model("Note", noteSchema);
