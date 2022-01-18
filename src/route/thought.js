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
      referenceNote: refindex,
      thought: thought,
      topic: topic,
      index: index,
    });

    newThought.save((error, savedNote) => {
      if (!error) {
        let returnObject = {};
        returnObject["referenceNote"] = savedNote.referenceNote;
        returnObject["thought"] = savedNote.thought;
        returnObject["topic"] = savedNote.topic;
        returnObject["index"] = savedNote.index;
        res.json(returnObject);
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
  let id;
  console.log("test");
  Thought.find({ index: index }, (error, note) => {
    id = note[0]._id;
    console.log(note[0]._id);

    res.json({});
  });
  // Thought.findByIdAndRemove(id, (err, removeDoc) => {
  //   if (err) return console.log(err);
  //   done(null, removeDoc);
  // });

  // Thought.deleteOne(note[0]);
});

module.exports = router;
