const mongoose = require("mongoose");

const writingSchema = mongoose.Schema({
  originNotes: [String],
  writing: { type: String, required: true },
  topic: String,
});

module.exports = mongoose.model("Writing", writingSchema);
