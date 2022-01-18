const mongoose = require("mongoose");

const thoughtSchema = mongoose.Schema({
  originNote: String,
  thought: { type: String, required: true },
  index: String,
  link: {
    sequence: String,
    connect: String,
  },
  topic: String,
});

module.exports = mongoose.model("Thought", thoughtSchema);
