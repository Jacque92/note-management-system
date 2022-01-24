import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useLocation } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
import { submitNote } from "../utilise";

export function NewThought(props) {
  const { setActiveTab } = props;
  const location = useLocation();
  let prevIndex = location.pathname.split("/")[2];
  let newIndex =
    location.pathname.split("/")[4] || location.pathname.split("/")[3];

  const [isSaved, setIsSaved] = useState(false);
  const [thought, setThought] = useState("");
  const [topic, setTopic] = useState("");

  const url = `/thought/${prevIndex}/${newIndex}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { message, error } = await submitNote(
      {
        thought: thought,
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
      <h1>Note Saved !</h1>
      <Link to="/thought" style={{ color: "white", textDecoration: "none" }}>
        <Button
          size="large"
          variant="contained"
          style={{ marginTop: "2rem" }}
          onClick={() => setActiveTab("Thought")}
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
        <h1>New Thought Note</h1>
        <h2 style={{ textAlign: "right" }}>Index: {newIndex}</h2>

        <TextField
          onChange={(e) => setThought(e.target.value)}
          id="outlined-multiline-static"
          name="thought"
          label="Thought"
          multiline
          rows={12}
          style={{ width: "100%" }}
          required
        />
        <TextField
          onChange={(e) => setTopic(e.target.value)}
          style={{ width: "100%" }}
          id="outlined-basic"
          name="topic"
          label="Topic"
          variant="outlined"
          required
        />
        <p>References Note Index: {prevIndex}</p>

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
