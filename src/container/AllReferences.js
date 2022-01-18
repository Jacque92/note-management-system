import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { PostNote } from "../component/PostNote";
import { ViewController } from "../component/ViewController";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import { useLocation, useRoutes } from "react-router";
import { Button } from "@mui/material";

export const AllReferences = (props) => {
  const { referenceIndex, allReferences, setReferenceIndex } = props;
  let location = useLocation();
  const [view, setView] = useState("gallery");

  //find the max index
  let regExp = new RegExp(/[a-z]/);
  let maxIndex = 0;

  allReferences.map((note) => {
    let currentIndex = parseInt(note.index.split(regExp)[0]);
    if (maxIndex < currentIndex) {
      maxIndex = currentIndex;
    }
  });

  setReferenceIndex(maxIndex);
  return (
    <div>
      <h1>All Reference Notes</h1>
      <ViewController setView={setView} />
      {view === "gallery" ? (
        <Gallery allReferences={allReferences} />
      ) : (
        <List allReferences={allReferences} />
      )}
      <Link
        id="addNew_btn"
        to={location.pathname + "/new/" + `${referenceIndex + 1}`}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
};

const Gallery = (props) => {
  const { allReferences } = props;
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
      {allReferences.map((note) => {
        return <PostNote key={note.index} noteInfo={note} />;
      })}
    </Box>
  );
};

const List = (props) => {
  const { allReferences } = props;
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
          {allReferences.map((note) => (
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
