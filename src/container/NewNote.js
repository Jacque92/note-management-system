import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useLocation } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";
import { submitNote } from "../utilise";

export function NewNote(props) {
  const { setActiveTab } = props;
  const location = useLocation();
  let newIndex =
    location.pathname.split("/")[4] || location.pathname.split("/")[3];
  let prevIndex = location.pathname.split("/")[4]
    ? location.pathname.split("/")[2]
    : "new";

  const [isSaved, setIsSaved] = useState(false);
  const [message, setMessage] = useState("");
  const [quote, setQuote] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pageNumber, setPageNumber] = useState("");

  React.useEffect(async () => {
    const data = await fetch(`/reference/${prevIndex}`);
    const note = await data.json();
    if (note) {
      setTitle(note[0].title);
      setAuthor(note[0].author);
    }
  }, []);

  const url =
    prevIndex === "new"
      ? `/reference/${prevIndex}/${newIndex}`
      : `/reference/${prevIndex}/sequence/${newIndex}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { message, error } = await submitNote(
      {
        title: title,
        author: author,
        quote: quote,
        pageNumber: pageNumber,
      },
      url
    );

    if (message) {
      setIsSaved(true);
    }
  };
  return (
    <div>
      {isSaved ? (
        <Box style={{ margin: "4rem 2rem", textAlign: "center" }}>
          <h1>Note Saved !</h1>
          <Link
            to="/reference"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Button
              size="large"
              variant="contained"
              style={{ marginTop: "2rem" }}
              onClick={() => setActiveTab("Reference")}
            >
              Back
            </Button>
          </Link>
        </Box>
      ) : (
        <form
          onSubmit={handleSubmit}
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
              onChange={(e) => setQuote(e.target.value)}
              id="outlined-multiline-static"
              name="quote"
              label="Quote"
              multiline
              rows={10}
              style={{ width: "100%" }}
              required
            />

            <TextField
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "100%" }}
              id="outlined-basic"
              name="title"
              label="Title"
              variant="outlined"
              value={title}
              required
            ></TextField>

            <TextField
              onChange={(e) => setAuthor(e.target.value)}
              style={{ width: "100%" }}
              id="outlined-basic"
              name="author"
              label="Author"
              variant="outlined"
              value={author}
              required
            ></TextField>

            <TextField
              onChange={(e) => setPageNumber(e.target.value)}
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
      )}
    </div>
  );
}
