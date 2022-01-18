const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const bodyParser = require("body-parser");

const Note = require("../model/Note");

router.post(
  "/new/:referenceindex",
  bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    let { quote, title, author, pageNumber } = req.body;
    console.log(req.params);
    let referenceindex = req.params.referenceindex;

    let newNote = new Note({
      quote: quote,
      title: title,
      author: author,
      pageNumber: pageNumber,
      index: referenceindex,
      sequenceNote: [],
      // linkedNote: linkedNote,
    });

    newNote.save((error, savedNote) => {
      if (!error) {
        let returnObject = {};
        returnObject["quote"] = savedNote.quote;
        returnObject["title"] = savedNote.title;
        returnObject["author"] = savedNote.author;
        returnObject["page"] = savedNote.pageNumber;
        returnObject["index"] = savedNote.index;
        res.json(returnObject);
      }
    });
  }
);

router.post(
  "/:referenceindex/sequence/:sequenceindex",
  bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    let { referenceindex, sequenceindex } = req.params;
    console.log(referenceindex);
    console.log(sequenceindex);
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
  Note.find({}, (error, userArray) => {
    if (!error) {
      res.json(userArray);
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
  if (!error) {
    res.json(note);
  }
});

module.exports = router;
