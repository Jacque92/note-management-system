import * as React from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const PostNote = (props) => {
  const { noteInfo } = props;
  const { thoughtInfo } = props;

  return (
    <Paper elevation={3} style={{ padding: "1rem" }}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/${
          noteInfo
            ? "reference/" + noteInfo.index
            : "thought/" + thoughtInfo.index
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
          {noteInfo ? noteInfo.quote : thoughtInfo.thought}
        </div>
      </Link>
      <div style={{ textAlign: "right", marginTop: "0.5rem" }}>
        <p>Index:{noteInfo ? noteInfo.index : thoughtInfo.index} </p>
      </div>
      <div style={{ textAlign: "right", marginTop: "0.1rem", display: "flex" }}>
        <Link
          style={{ textDecoration: "none" }}
          to={`/${noteInfo ? "reference" : "thought"}/${
            noteInfo ? noteInfo.index : thoughtInfo.index
          }/sequence`}
        >
          <Button variant="text">+sequence</Button>
        </Link>
        {noteInfo ? (
          <Link
            style={{ textDecoration: "none" }}
            to={`/thought/${noteInfo.index}`}
          >
            <Button variant="text">+thought</Button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </Paper>
  );
};
