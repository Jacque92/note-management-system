import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Button } from "@mui/material";

import { useNavigate } from "react-router";

export const SavedNote = (props) => {
  const location = useLocation();
  const [savedNote, setSavedNote] = useState({});
  const history = useNavigate();

  useEffect(async () => {
    const response = await fetch(location.pathname);
    const note = await response.json();
    setSavedNote(note[0]);
  }, []);
  const { quote, index, title, author, pageNumber, sequence } = savedNote;
  return (
    <div style={{ margin: 40 }}>
      <Button
        onClick={() => {
          history(-1);
        }}
      >
        Back
      </Button>
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 2,
            width: "80%",
          },
        }}
      >
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h3 style={{ marginBottom: 10 }}>Reference Note</h3>
            <h4>Index: {index}</h4>
          </div>
          <p style={{ marginBottom: 30 }}>{quote}</p>
          <p>
            <strong>Title: </strong>
            {title}
          </p>
          <p>
            <strong>Author:</strong> {author}
          </p>
          <p>
            <strong>Page Number:</strong> {pageNumber}
          </p>
          <p>
            <strong>Sequence:</strong> {sequence}
          </p>
          <div style={{ textAlign: "right" }}>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </div>
        </Paper>
      </Box>
    </div>
  );
};
