const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const bodyParser = require("body-parser");

const Thought = require("../model/Thought");

router.post(
  "/:refindex/:index",
  bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    let { refindex, index } = req.params;
    let { thought, topic } = req.body;

    let newThought = new Thought({
      thought: thought,
      topic: topic,
      index: index,
      refNoteIndex: refindex,
    });

    newThought.save((error, savedNote) => {
      if (!error) {
        res.json({ success: "Note Saved" });
      } else {
        res.json(error);
      }
    });
  }
);

router.get("/all", (req, res) => {
  Thought.find({}, (error, thoughtArray) => {
    if (!error) {
      res.json(thoughtArray);
    }
  });
});

router.get("/:index", (req, res) => {
  let index = req.params.index;

  Thought.find({ index: index }, (error, note) => {
    if (!error) {
      res.json(note);
    }
  });
});

router.delete("/:index", (req, res) => {
  let index = req.params.index;
  Thought.deleteOne({ index: index }, (error, result) => {
    if (!error) {
      res.json(result);
    }
  });
});

module.exports = router;
