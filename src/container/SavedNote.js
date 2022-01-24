import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router";

export const SavedNote = (props) => {
  const location = useLocation();
  const [savedNote, setSavedNote] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const history = useNavigate();

  const activeTab = location.pathname.split("/")[1];

  useEffect(async () => {
    const response = await fetch(location.pathname);
    const note = await response.json();
    setSavedNote(note[0]);
  }, []);

  const handleDelete = async () => {
    const response = await fetch(location.pathname, { method: "DELETE" });
    const result = await response.json();
    if (response.ok) {
      setIsDelete(true);
    }
  };

  const {
    quote,
    index,
    writing,
    title,
    author,
    pageNumber,
    sequence,
    thought,
    topic,
    refNoteIndex,
    setActiveTab,
  } = savedNote;
  return isDelete ? (
    <Box style={{ margin: "4rem 2rem", textAlign: "center" }}>
      <h1>Note Deleted !</h1>
      <Link
        to={`/${activeTab}`}
        style={{ color: "white", textDecoration: "none" }}
      >
        <Button size="large" variant="contained" style={{ marginTop: "2rem" }}>
          Back
        </Button>
      </Link>
    </Box>
  ) : (
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
            <h3 style={{ marginBottom: 10 }}>
              {quote ? "Reference " : writing ? "Writing " : "Thought "}Note
            </h3>
            <h4>Index: {index}</h4>
          </div>
          <p style={{ marginBottom: 30 }}>{quote || thought || writing}</p>
          {quote ? (
            <>
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
            </>
          ) : (
            <>
              <p>
                <strong>Topic: </strong>
                {topic}
              </p>
              {writing ? (
                ""
              ) : (
                <p>
                  <strong>Reference Note:</strong>{" "}
                  <Link
                    to={`/reference/${refNoteIndex}/`}
                    onClick={() => setActiveTab("Reference")}
                  >
                    {refNoteIndex}
                  </Link>
                </p>
              )}
            </>
          )}

          <div style={{ textAlign: "right" }}>
            <Button>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
          </div>
        </Paper>
      </Box>
    </div>
  );
};
