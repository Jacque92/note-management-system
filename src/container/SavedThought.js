import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Button } from "@mui/material";

import { useNavigate } from "react-router";

export const SavedThought = () => {
  const location = useLocation();
  const [savedThought, setSavedThought] = useState({});
  const history = useNavigate();

  useEffect(async () => {
    const response = await fetch(location.pathname);
    const note = await response.json();
    setSavedThought(note[0]);
  }, []);
  const { referenceNote, thought, topic, index } = savedThought;

  const handleDelete = async () => {
    const response = await fetch(location.pathname, { method: "DELETE" });
    const thought = await response.json();
  };
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
          <p>{thought}</p>
          <p>referenceNote:{referenceNote}</p>
          <p>Topic:{topic}</p>
          <p>Index:{index}</p>
          <div style={{ textAlign: "right" }}>
            <Button>Edit</Button>
            <Button
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </Button>
          </div>
        </Paper>
      </Box>
    </div>
  );
};
