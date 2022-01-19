import * as React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { getNextIndex } from "../utilise";

export const PostNote = (props) => {
  const { noteInfo, allNotes, allThoughts } = props;

  return (
    <Paper elevation={3} style={{ padding: "1rem" }}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/${
          noteInfo.quote
            ? "reference/" + noteInfo.index
            : "thought/" + noteInfo.index
        }/`}
      >
        <div
          style={{
            height: "70%",
            width: "100%",
            textAlign: "justify",
            overflowY: "scroll",
          }}
        >
          {noteInfo.quote || noteInfo.thought}
        </div>
      </Link>
      <div style={{ textAlign: "right", marginTop: "0.5rem" }}>
        <p>Index:{noteInfo.index} </p>
      </div>
      <div style={{ textAlign: "right", marginTop: "0.1rem", display: "flex" }}>
        <Link
          style={{ textDecoration: "none" }}
          to={`/${noteInfo.quote ? "reference" : "thought"}/${
            noteInfo.index
          }/sequence/${
            noteInfo.quote
              ? getNextIndex(allNotes, noteInfo.index)
              : getNextIndex(allThoughts, noteInfo.index)
          }`}
        >
          <Button variant="text">+sequence</Button>
        </Link>
        {noteInfo ? (
          <Link
            style={{ textDecoration: "none" }}
            to={`/thought/${noteInfo.index}/${getNextIndex(allThoughts)}`}
          >
            {noteInfo.quote ? <Button variant="text">+thought</Button> : ""}
          </Link>
        ) : (
          ""
        )}
      </div>
    </Paper>
  );
};
