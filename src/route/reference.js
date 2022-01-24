const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const bodyParser = require("body-parser");

const Note = require("../model/Note");
const { query } = require("express");

router.post(
  "/new/:referenceindex",
  // bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    let { quote, title, author, pageNumber } = req.body;
    let referenceindex = req.params.referenceindex;
    console.log(req.body);
    let newNote = new Note({
      quote: quote,
      title: title,
      author: author,
      pageNumber: pageNumber,
      index: referenceindex,
      // sequenceNote: [],
      // linkedNote: linkedNote,
    });

    newNote.save((error, savedNote) => {
      if (!error) {
        res.json({ success: "Note Saved" });
      } else {
        res.json(error);
      }
    });
  }
);

router.post(
  "/:referenceindex/sequence/:sequenceindex",
  bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    let { referenceindex, sequenceindex } = req.params;

    //***********     save the sequence note as seperate note
    let { quote, title, author, pageNumber } = req.body;

    let newNote = new Note({
      quote: quote,
      title: title,
      author: author,
      pageNumber: pageNumber,
      index: sequenceindex,
      sequence: [referenceindex],
      // linkedNote: linkedNote,
    });

    newNote.save((error, savedNote) => {
      if (!error) {
      } else {
        console.log(error);
      }
    });

    Note.findOneAndUpdate(
      { index: referenceindex },
      { sequence: [sequenceindex] },
      (error, note) => {
        if (!error) {
          res.json(note);
        }
      }
    );
  }
);

router.get("/new", (req, res) => {
  res.json({});
});

router.get("/all", (req, res) => {
  Note.find({}, (error, noteArray) => {
    if (!error) {
      res.json(noteArray);
    }
  });
});
router.get("/:index", (req, res) => {
  let index = req.params.index;

  Note.find({ index: index }, (error, note) => {
    if (!error) {
      res.json(note);
    }
  });
});

router.delete("/:index", (req, res) => {
  let index = req.params.index;
  Note.deleteOne({ index: index }, (error, note) => {
    if (!error) {
      res.json({ result: "success" });
    }
  });
});

module.exports = router;
