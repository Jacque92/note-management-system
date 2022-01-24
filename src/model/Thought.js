const mongoose = require("mongoose");

const thoughtSchema = mongoose.Schema({
  thought: { type: String, required: true },
  index: String,
  topic: String,
  refNoteIndex: String,
});

module.exports = mongoose.model("Thought", thoughtSchema);
