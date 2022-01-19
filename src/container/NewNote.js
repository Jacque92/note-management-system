import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useLocation } from "react-router";
import { useState } from "react";
import Note from "../model/Note";

export function NewNote() {
  const location = useLocation();
  let newIndex =
    location.pathname.split("/")[4] || location.pathname.split("/")[3];
  let prevIndex = location.pathname.split("/")[4]
    ? location.pathname.split("/")[2]
    : "new";

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  React.useEffect(async () => {
    const data = await fetch(`/reference/${prevIndex}`);
    const note = await data.json();

    setTitle(note[0].title);
    setAuthor(note[0].author);
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else {
      setAuthor(value);
    }
  };
  return (
    <form
      action={
        prevIndex === "new"
          ? `/reference/${prevIndex}/${newIndex}`
          : `/reference/${prevIndex}/sequence/${newIndex}`
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
        <h2 style={{ textAlign: "right" }}>Index: {newIndex}</h2>
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
          onChange={handleInput}
          style={{ width: "100%" }}
          id="outlined-basic"
          name="title"
          label="Title"
          variant="outlined"
          value={title}
        ></TextField>

        <TextField
          onChange={handleInput}
          style={{ width: "100%" }}
          id="outlined-basic"
          name="author"
          label="Author"
          variant="outlined"
          value={author}
        ></TextField>

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
