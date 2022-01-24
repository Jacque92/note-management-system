const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const bodyParser = require("body-parser");

const Writing = require("../model/Writing");

router.post(
  "/new/:index",
  bodyParser.urlencoded({ extended: false }),
  (req, res) => {
    let { index } = req.params;
    let { title, writing, topic } = req.body;
    let NewWriting = new Writing({
      title: title,
      writing: writing,
      topic: topic,
      index: index,
    });

    NewWriting.save((error, savedWriting) => {
      if (!error) {
        res.json({ success: "Writing Saved" });
      } else {
        res.json(error);
      }
    });
  }
);

router.get("/all", (req, res) => {
  Writing.find({}, (error, writingArray) => {
    if (!error) {
      res.json(writingArray);
    }
  });
});

router.get("/:index", (req, res) => {
  let { index } = req.params;

  Writing.find({ index: index }, (error, writing) => {
    if (!error) {
      res.json(writing);
    }
  });
});

router.delete("/:index", (req, res) => {
  let index = req.params.index;
  Writing.deleteOne({ index: index }, (error, note) => {
    if (!error) {
      res.json({ result: "success" });
    }
  });
});

module.exports = router;
