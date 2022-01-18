import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router";

export function NewNote(props) {
  const location = useLocation();

  const { referenceIndex, allReferences } = props;

  let index;
  let prevIndex;
  let isSequence = false;

  if (location.pathname.split("/")[3] === "sequence") {
    //*********  Sequence reference note
    prevIndex = location.pathname.split("/")[2]; //index of clicked note
    // let subNote = new RegExp(`^${prevIndex}[a-z]`);
    let number = prevIndex.split("(")[0];
    let letter = prevIndex.match(/[a-z]/);

    let count = 0;
    let nextLetter = String.fromCharCode(letter[0].charCodeAt(0) + 1);
    index = prevIndex.replace(letter[0], nextLetter);

    allReferences.map((note) => {
      if (note.index.match(`^${number}[(][a-z]`)) {
        count++;
      }
    });
    nextLetter = String.fromCharCode("a".charCodeAt(0) + count);
    index = prevIndex.replace(letter[0], nextLetter);
    isSequence = true;
  } else {
    //********** New reference note
    index = referenceIndex + 1 + "(a)";
    prevIndex = location.pathname.split("/")[3];
  }

  return (
    <form
      action={
        typeof index === "string"
          ? `/reference/${prevIndex}/sequence/${index}`
          : `/reference/new/${prevIndex}`
      }
      method="POST"
      style={{ width: "70%", margin: "4rem auto" }}
    >
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <h1>New Reference Note</h1>
        <h2 style={{ textAlign: "right" }}>Index: {index}</h2>
        <TextField
          id="outlined-multiline-static"
          name="quote"
          label="Quote"
          multiline
          rows={10}
          style={{ width: "100%" }}
          required
        />

        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          name="title"
          label="Title"
          variant="outlined"
          defaultValue={
            isSequence
              ? allReferences.find((note) => note.index === prevIndex).title
              : ""
          }
          required
        />
        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          name="author"
          label="Author"
          variant="outlined"
          defaultValue={
            isSequence
              ? allReferences.find((note) => note.index === prevIndex).author
              : ""
          }
          required
        />

        <TextField
          style={{ width: "100%" }}
          id="outlined-basic"
          name="pageNumber"
          label="Page Number"
          variant="outlined"
          required
        />
        <div style={{ textAlign: "right" }}>
          <Button variant="outlined" size="large">
            Cancel
          </Button>
          <Button
            style={{ marginLeft: "1rem" }}
            variant="contained"
            size="large"
            type="submit"
          >
            Save
          </Button>
        </div>
      </Box>
    </form>
  );
}
