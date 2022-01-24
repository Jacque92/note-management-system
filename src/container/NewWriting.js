import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { submitNote } from "../utilise";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

export const NewWriting = (props) => {
  const { setActiveTab } = props;

  const location = useLocation();
  let newIndex = location.pathname.split("/")[3];

  const [isSaved, setIsSaved] = useState(false);
  const [title, setTitle] = useState("");
  const [writing, setWriting] = useState("");
  const [topic, setTopic] = useState("");

  const url = `/writing/new/${newIndex}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { message, error } = await submitNote(
      {
        title: title,
        writing: writing,
        topic: topic,
      },
      url
    );

    if (message) {
      setIsSaved(true);
    }
  };

  return isSaved ? (
    <Box style={{ margin: "4rem 2rem", textAlign: "center" }}>
      <h1>Writing Saved !</h1>
      <Link to="/writing" style={{ color: "white", textDecoration: "none" }}>
        <Button
          size="large"
          variant="contained"
          style={{ marginTop: "2rem" }}
          onClick={() => setActiveTab("Writing")}
        >
          Back
        </Button>
      </Link>
    </Box>
  ) : (
    <form onSubmit={handleSubmit} style={{ width: "70%", margin: "4rem auto" }}>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        <h1>New Writing</h1>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-multiline-static"
          name="title"
          label="Title"
          style={{ width: "100%" }}
          required
        />
        <TextField
          onChange={(e) => setWriting(e.target.value)}
          id="outlined-multiline-static"
          name="writing"
          label="Writing"
          multiline
          rows={16}
          style={{ width: "100%" }}
          required
        />
        <TextField
          onChange={(e) => setTopic(e.target.value)}
          id="outlined-multiline-static"
          name="topic"
          label="Topic"
          style={{ width: "100%" }}
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
};
