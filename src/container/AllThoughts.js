import React from "react";
import { Link } from "react-router-dom";
import { ViewController } from "../component/ViewController";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/system";
import { PostNote } from "../component/PostNote";

export const AllThoughts = (props) => {
  const { allThoughts } = props;
  const [view, setView] = useState("gallery");
  return (
    <div>
      <h1>All Thought Notes</h1>
      <ViewController setView={setView} />
      {view === "gallery" ? (
        <Gallery allThoughts={allThoughts} />
      ) : (
        <List allThoughts={allThoughts} />
      )}
      {/* <Link
        id="addNew_btn"
        to={location.pathname + "/new/" + `${referenceIndex + 1}`}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link> */}
    </div>
  );
};

const Gallery = (props) => {
  const { allThoughts } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 3,
          width: 220,
          height: 220,
        },
      }}
    >
      {allThoughts.map((note) => {
        return <PostNote key={note.index} thoughtInfo={note} />;
      })}
    </Box>
  );
};

const List = (props) => {
  const { allThoughts } = props;
  return (
    <Box style={{ margin: "0 4rem" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Quote</TableCell>
            <TableCell align="right">Index</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allThoughts.map((note) => (
            <TableRow
              key={note.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {note.quote}
              </TableCell>
              <TableCell align="right">{note.index}</TableCell>
              <TableCell align="right">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/reference/${note.index}/sequence`}
                >
                  <Button variant="text">+sequence</Button>
                </Link>
              </TableCell>
              <TableCell align="right">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/thought/${note.index}`}
                >
                  <Button variant="text">+thought</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
